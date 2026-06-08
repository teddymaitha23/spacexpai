import { Link } from "@tanstack/react-router";
import logoLight from "@/assets/logo-light.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-border/60 bg-background/60 px-4 py-2 backdrop-blur-xl md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoLight.url} alt="Space XP" className="h-9 w-auto" />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full gradient-cyan px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Start a project
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </header>
  );
}