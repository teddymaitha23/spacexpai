import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border bg-background">
      <div className="bg-grid-dots-light absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-8 py-24">
        <div className="grid gap-16 md:grid-cols-3">
          <div>
            <h3 className="font-display text-4xl text-primary tracking-tight">Let's build the future.</h3>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              A minimalist creative agency where imagination meets AI-augmented execution.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-accent hover:text-accent-foreground"
            >
              Start a project →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Explore
              </p>
              <ul className="space-y-4">
                <li>
                  <Link to="/services" className="hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-primary transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Contact
              </p>
              <ul className="space-y-4 text-primary">
                <li className="hover:text-accent transition-colors cursor-pointer">hello@spacexp.studio</li>
                <li className="hover:text-accent transition-colors cursor-pointer">+1 (212) 555‑0147</li>
                <li className="hover:text-accent transition-colors cursor-pointer">@SpaceXP_Studio</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 md:items-end">
            <div className="rounded-full border border-border bg-white px-6 py-2 shadow-soft">
              <span className="font-display text-lg font-bold tracking-widest text-primary">
                SPACE XP
              </span>
            </div>
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} Space XP. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
