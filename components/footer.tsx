"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/60 bg-gradient-to-b from-card/40 via-card/80 to-card/95 backdrop-blur-xl pt-10 pb-6 text-xs text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
        {/* Main Grid: 3 Columns (Brand & Overview, Headquarters & Contact, Interactive Map) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Column 1: Brand & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#0b1e47] to-[#081533] border border-blue-400/25 p-2 flex items-center justify-center shadow-md">
                <Image
                  src="/UttamLogo-transparent.png"
                  alt="Uttam Galva Logo"
                  width={48}
                  height={48}
                  className="w-8 h-8 object-contain drop-shadow"
                />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-blue-400">
                  Industry 4.0 Platform
                </div>
                <div className="text-sm sm:text-base font-extrabold text-foreground leading-tight">
                  Uttam Galva Innovative Solutions
                </div>
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-muted-foreground max-w-sm">
              Uttam Galva Innovative Solutions &mdash; Empowering steel manufacturing with real-time OT/IT synchronization, AI-driven scrap optimizers, and automated shopfloor workflows.
            </p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ISO 9001 &bull; 14001 Compliant Steel Excellence</span>
            </div>
          </div>

          {/* Column 2: Headquarters & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Headquarters &amp; Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Uttam House, 2nd Floor, 69 P D Mello Road, Carnac Bunder, Mumbai, India &ndash; 400009
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href="tel:+918411970451"
                  className="hover:text-primary font-semibold text-foreground transition-colors"
                >
                  +91 84119 70451
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a
                  href="mailto:connect@uttamgalva.in"
                  className="hover:text-primary font-semibold text-foreground transition-colors"
                >
                  connect@uttamgalva.in
                </a>
              </div>

              <div className="pt-1">
                <a
                  href="https://maps.google.com/?q=Uttam+House+69+P+D+Mello+Road+Carnac+Bunder+Mumbai+400009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary hover:underline"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Interactive Map Embed (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Location Map
              </h4>
              <span className="text-[10px] text-muted-foreground">Mumbai, India</span>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-border/80 shadow-md aspect-[16/9] w-full bg-secondary/50">
              <iframe
                src="https://maps.google.com/maps?q=Uttam+House,+69+P+D+Mello+Road,+Carnac+Bunder,+Mumbai,+Maharashtra+400009&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Uttam House Mumbai Office Map"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits (Unified Clean Line) */}
        <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted-foreground">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://uttamgalvainnovativesolutions.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Uttam Galva Innovative Solutions
            </a>{" "}
            &bull; All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[11px]">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Industry 4.0 Steel Operations</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
