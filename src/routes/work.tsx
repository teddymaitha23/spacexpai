import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Tilt3D, Magnetic, Parallax } from "@/components/Tilt3D";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Space XP" },
      {
        name: "description",
        content: "Selected work from Space XP, trusted by industry leaders worldwide.",
      },
    ],
  }),
  component: WorkPage,
});

const projects = [
  {
    name: "Top Tracker",
    tag: "Luxury Hunting",
    year: "2024",
    services: ["Brand", "Web", "App"],
    imgStyle: "bg-gradient-to-br from-emerald-800/40 to-cyan-800/60",
  },
  {
    name: "Fabriks",
    tag: "Design Studio",
    year: "2024",
    services: ["Brand Identity", "Web"],
    imgStyle: "bg-gradient-to-br from-purple-800/40 to-pink-800/60",
  },
  {
    name: "Iliad",
    tag: "Telecom Leader",
    year: "2023",
    services: ["Campaign", "Art Direction"],
    imgStyle: "bg-gradient-to-br from-blue-800/40 to-cyan-800/60",
  },
  {
    name: "Nova Health",
    tag: "AI Healthcare",
    year: "2023",
    services: ["Product Design", "Brand"],
    imgStyle: "bg-gradient-to-br from-teal-800/40 to-emerald-800/60",
  },
  {
    name: "Atlas Labs",
    tag: "Enterprise SaaS",
    year: "2022",
    services: ["Web", "Marketing"],
    imgStyle: "bg-gradient-to-br from-indigo-800/40 to-fuchsia-800/60",
  },
  {
    name: "Lumière",
    tag: "Luxury Fashion",
    year: "2022",
    services: ["Brand", "Editorial"],
    imgStyle: "bg-gradient-to-br from-amber-800/40 to-orange-800/60",
  },
];

function WorkPage() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-20">
        <div className="bg-grid-dots absolute inset-0 opacity-20" />
        <Parallax
          speed={0.15}
          className="absolute -left-32 top-1/3 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[150px] mix-blend-screen"
        />

        <div className="relative mx-auto w-full max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              — Selected Work
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Shaping the <br /> <span className="text-gradient">digital frontier.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A curated selection of our finest work. We partner with visionaries to build
              category-defining brands and products.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <Tilt3D max={6} className="h-full">
                <div
                  className={`group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-[2rem] border border-border/50 ${i % 2 !== 0 ? "md:mt-16" : ""}`}
                  data-cursor="hover"
                >
                  <div
                    className={`absolute inset-0 ${p.imgStyle} transition-transform duration-700 group-hover:scale-105`}
                  />
                  <div className="bg-grid-dots absolute inset-0 opacity-20 mix-blend-overlay" />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  <div className="relative z-10 flex items-start justify-between p-8">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary/80 glass-panel rounded-full px-3 py-1">
                      {p.year}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary/80 glass-panel rounded-full px-3 py-1">
                      [0{i + 1}]
                    </span>
                  </div>

                  <div className="relative z-10 p-8 transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="font-display text-4xl font-bold">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.tag}</p>

                    <div className="mt-6 flex flex-wrap gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {p.services.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border/50 bg-background/50 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest backdrop-blur-md"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>

        <div className="mt-32 text-center">
          <Reveal>
            <p className="font-display text-3xl font-bold text-muted-foreground">
              Looking for more?
            </p>
            <Magnetic>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full gradient-brand px-8 py-4 font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--color-primary)]"
              >
                Request full portfolio →
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}
