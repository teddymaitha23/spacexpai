import { Link } from "@tanstack/react-router";
import wordmark from "@/assets/wordmark.png.asset.json";
import cert from "@/assets/cert-white.png.asset.json";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border/60 bg-background">
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-display text-3xl text-gradient">Let's build the future.</h3>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A creative agency where imagination meets AI-augmented execution.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full gradient-cyan px-5 py-2 text-sm font-semibold text-primary-foreground">
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
            <img src={cert.url} alt="Space XP Certified Member" className="h-12 w-auto opacity-80" />
            <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Space XP. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <img src={wordmark.url} alt="Space XP" className="w-full opacity-10 invert" />
        </div>
      </div>
    </footer>
  );
}