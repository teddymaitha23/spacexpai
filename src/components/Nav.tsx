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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
      <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-display text-lg font-bold tracking-wide text-foreground">
            SPACE XP
          </span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary bg-primary/10" }}
              inactiveProps={{
                className: "text-muted-foreground hover:text-foreground hover:bg-white/5",
              }}
              className="rounded-full px-5 py-2 text-sm font-medium transition-all"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full gradient-brand px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_20px_var(--color-primary)]"
        >
          Start a project
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </header>
  );
}
