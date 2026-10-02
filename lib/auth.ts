// Server-side authentication utilities
// NOTICE: Never import this file into client components ('use client')

export const AUTH_COOKIE_NAME = "uttam_auth_session";

interface AuthUser {
  username: string;
  role: "admin" | "user";
}

export interface SessionPayload {
  username: string;
  role: "admin" | "user";
  exp: number; // Unix timestamp in seconds
}

function getAuthSecret(): string {
  return (
    process.env.AUTH_SECRET ||
    "uttam_galva_innovative_solutions_session_secret_key_2026_xyz"
  );
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64UrlToBytes(base64url: string): Uint8Array {
  let base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function getHmacKey(): Promise<CryptoKey> {
  const secret = getAuthSecret();
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    enc.encode(secret) as unknown as BufferSource,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

/**
 * Validate credentials strictly on the server side.
 * Never exposed to client-side bundles.
 */
export function validateCredentials(
  usernameInput?: string,
  passwordInput?: string
): { ok: true; user: AuthUser } | { ok: false; error: string } {
  if (!usernameInput || !passwordInput) {
    return { ok: false, error: "Please enter both User ID and Password" };
  }

  const trimmedUser = usernameInput.trim();
  const trimmedPass = passwordInput.trim();

  const adminUser = (process.env.AUTH_ADMIN_USERNAME || "Admin").trim();
  const adminPass = (process.env.AUTH_ADMIN_PASSWORD || "Admin@123").trim();

  const standardUser = (process.env.AUTH_USERS_USERNAME || "Users").trim();
  const standardPass = (process.env.AUTH_USERS_PASSWORD || "Users@123").trim();

  // Check Admin (case-insensitive username, exact password)
  if (
    trimmedUser.toLowerCase() === adminUser.toLowerCase() &&
    trimmedPass === adminPass
  ) {
    return {
      ok: true,
      user: { username: "Admin", role: "admin" },
    };
  }

  // Check Users (case-insensitive username, exact password)
  if (
    trimmedUser.toLowerCase() === standardUser.toLowerCase() &&
    trimmedPass === standardPass
  ) {
    return {
      ok: true,
      user: { username: "Users", role: "user" },
    };
  }

  return { ok: false, error: "Invalid User ID or Password" };
}

/**
 * Create a tamper-proof signed session token using Web Crypto HMAC-SHA256
 */
export async function createSessionToken(
  user: AuthUser,
  expiresInSeconds = 60 * 60 * 8 // 8 hours (standard shift)
): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + expiresInSeconds;
  const payload: SessionPayload = {
    username: user.username,
    role: user.role,
    exp,
  };

  const enc = new TextEncoder();
  const payloadJson = JSON.stringify(payload);
  const payloadB64 = bytesToBase64Url(enc.encode(payloadJson));

  const key = await getHmacKey();
  const signatureBytes = await crypto.subtle.sign(
    "HMAC",
    key,
    enc.encode(payloadB64) as unknown as BufferSource
  );
  const signatureB64 = bytesToBase64Url(new Uint8Array(signatureBytes));

  return `${payloadB64}.${signatureB64}`;
}

/**
 * Verify session token and return user payload if valid and not expired
 */
export async function verifySessionToken(
  token?: string | null
): Promise<SessionPayload | null> {
  if (!token || typeof token !== "string") {
    return null;
  }

  const parts = token.split(".");
  if (parts.length !== 2) {
    return null;
  }

  const [payloadB64, signatureB64] = parts;

  try {
    const key = await getHmacKey();
    const enc = new TextEncoder();
    const sigBytes = base64UrlToBytes(signatureB64);

    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      sigBytes as unknown as BufferSource,
      enc.encode(payloadB64) as unknown as BufferSource
    );

    if (!isValid) {
      return null;
    }

    const payloadJson = new TextDecoder().decode(base64UrlToBytes(payloadB64));
    const payload: SessionPayload = JSON.parse(payloadJson);

    // Check expiration
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp < now) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}
