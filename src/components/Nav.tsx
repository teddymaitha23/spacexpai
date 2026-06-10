import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header
      className="nav-init fixed top-0 left-0 right-0 z-50 px-4 pt-6"
    >
      <div className="glass-panel-light shadow-soft mx-auto flex max-w-7xl items-center justify-between rounded-full px-8 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-display text-xl font-bold tracking-tight text-primary">
            SPACE XP
          </span>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary font-bold" }}
              inactiveProps={{
                className: "text-muted-foreground hover:text-primary transition-colors",
              }}
              className="text-sm tracking-wide transition-all"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:bg-accent hover:text-accent-foreground"
        >
          Start a project
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </header>
  );
}
