import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Space XP" },
      { name: "description", content: "Selected work from Space XP, trusted by industry leaders worldwide." },
      { property: "og:title", content: "Work — Space XP" },
      { property: "og:description", content: "Selected work, trusted by industry leaders." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  { name: "Top Tracker", tag: "Luxury Hunting Club", year: "2024", color: "from-emerald-500/40 to-cyan-500/30", services: ["Brand", "Web", "App"] },
  { name: "Fabriks", tag: "International Design Studio", year: "2024", color: "from-fuchsia-500/30 to-cyan-400/30", services: ["Brand Identity", "Web"] },
  { name: "Iliad", tag: "Telecom Industry Leader", year: "2023", color: "from-cyan-400/40 to-blue-600/30", services: ["Campaign", "Art Direction"] },
  { name: "Nova Health", tag: "AI Healthcare", year: "2023", color: "from-cyan-300/40 to-emerald-400/30", services: ["Product Design", "Brand"] },
  { name: "Atlas Labs", tag: "Enterprise SaaS", year: "2022", color: "from-blue-500/40 to-fuchsia-400/30", services: ["Web", "Marketing"] },
  { name: "Lumière", tag: "Luxury Fashion", year: "2022", color: "from-amber-400/30 to-cyan-400/30", services: ["Brand", "Editorial"] },
];

function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 pb-12">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">— Selected work</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
              Trusted by <span className="text-gradient">industry leaders.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <div className="group relative aspect-[5/4] overflow-hidden rounded-2xl border border-border" data-cursor="hover">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
                <div className="bg-grid absolute inset-0 opacity-40" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-foreground/70">{p.year}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-foreground/70">[0{i + 1}]</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-3xl md:text-5xl">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.tag}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.services.map((s) => (
                      <span key={s} className="rounded-full border border-border bg-background/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 translate-y-full bg-background/70 backdrop-blur transition-transform duration-500 group-hover:translate-y-0" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full gradient-cyan text-primary-foreground">View →</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="font-display text-2xl text-muted-foreground">More case studies on request.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full gradient-cyan px-7 py-3.5 font-semibold text-primary-foreground">
            Request portfolio →
          </Link>
        </div>
      </section>
    </>
  );
}