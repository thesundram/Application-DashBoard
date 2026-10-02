export function Footer() {
  return (
    <footer className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/50">
      <p className="text-[11px] sm:text-xs text-center text-muted-foreground leading-relaxed px-2">
        © {new Date().getFullYear()} Designed & Developed by{" "}
        <a
          href="https://uttaminnovativesolutions.in"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors underline-offset-4 hover:underline"
        >
          Uttam Galva Innovative Solutions Pvt. Ltd.
        </a>
      </p>
    </footer>
  )
}