import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border bg-background">
      <div className="bg-grid-dots absolute inset-0 opacity-20" />
      <div className="absolute -bottom-64 -right-64 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px] mix-blend-screen" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-display text-4xl text-gradient">Let's build the future.</h3>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              A creative agency where imagination meets AI-augmented execution.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_20px_var(--color-primary)]">
              Start a project →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Explore</p>
              <ul className="mt-4 space-y-2">
                <li><Link to="/services" className="hover:text-primary">Services</Link></li>
                <li><Link to="/work" className="hover:text-primary">Work</Link></li>
                <li><Link to="/about" className="hover:text-primary">About</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Contact</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>hello@spacexp.studio</li>
                <li>+1 (212) 555‑0147</li>
                <li>@SpaceXP_Studio</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 md:items-end">
            <div className="rounded-full border border-border bg-white/5 px-6 py-2 backdrop-blur">
              <span className="font-display text-lg font-bold tracking-widest text-primary">SPACE XP</span>
            </div>
            <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Space XP. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}