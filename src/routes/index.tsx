import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { Tilt3D, Magnetic, Parallax } from "@/components/Tilt3D";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Space XP — AI Creative Agency" },
      {
        name: "description",
        content:
          "Shaping the future of digital experiences. Branding, web, app, marketing & art direction powered by AI.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ScrollMarquee />
      <ServicesPreview />
      <WorkPreview />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="bg-grid-dots absolute inset-0 opacity-40" />

      {/* Background Orbs */}
      <Parallax
        speed={0.05}
        className="absolute left-1/4 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px] animate-pulse-glow mix-blend-screen"
      />
      <Parallax
        speed={-0.08}
        className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-accent/20 blur-[130px] animate-pulse-glow mix-blend-screen"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border/80 glass-panel px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground shadow-lg">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
            AI-Native Creative Studio
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-[7.5rem]">
            Design the <span className="text-gradient">impossible.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            Space XP is a premium creative agency bridging the gap between{" "}
            <strong className="text-foreground font-medium">human imagination</strong> and{" "}
            <strong className="text-foreground font-medium">AI execution</strong>. We craft brands,
            websites, and immersive experiences that define the future.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Magnetic>
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full gradient-brand px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--color-primary)]"
              >
                Start a project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-full border border-border glass-panel px-8 py-4 text-sm font-bold text-foreground transition-colors hover:bg-white/5"
              >
                View our work
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ScrollMarquee() {
  return (
    <div className="mt-10 border-y border-border/40 bg-card/20 py-4 backdrop-blur-sm">
      <Marquee
        items={[
          "Brand Identity",
          "AI Creative",
          "Web Development",
          "Native Apps",
          "Art Direction",
          "3D / Motion",
        ]}
      />
    </div>
  );
}

const services = [
  {
    n: "01",
    title: "Brand Identity",
    desc: "Timeless visual systems, logos, and guidelines built for scale.",
  },
  {
    n: "02",
    title: "Web Design",
    desc: "High-performance, immersive websites with flawless interactions.",
  },
  { n: "03", title: "App Dev", desc: "Cross-platform mobile applications with premium UX." },
  {
    n: "04",
    title: "AI Marketing",
    desc: "Generative content pipelines that scale your brand presence.",
  },
];

function ServicesPreview() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <Reveal>
        <div className="mb-20 flex flex-col items-center text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">— Our Stack</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold md:text-6xl">
            A unified approach to <br /> <span className="text-gradient">digital excellence.</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.n} delay={i * 100}>
            <Tilt3D max={10} scale={1.02} className="h-full">
              <div className="glow-ring group relative h-full rounded-2xl p-8" data-cursor="hover">
                <div className="font-mono text-xs font-bold text-primary">{s.n}</div>
                <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/50 transition-all group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground">
                  →
                </div>
              </div>
            </Tilt3D>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          to="/services"
          className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
        >
          Explore all services →
        </Link>
      </div>
    </section>
  );
}

const works = [
  {
    name: "Top Tracker",
    tag: "Luxury Hunting",
    imgStyle: "bg-gradient-to-br from-emerald-900/40 to-cyan-900/60",
  },
  {
    name: "Fabriks",
    tag: "Design Studio",
    imgStyle: "bg-gradient-to-br from-purple-900/40 to-pink-900/60",
  },
  {
    name: "Iliad",
    tag: "Telecom Leader",
    imgStyle: "bg-gradient-to-br from-blue-900/40 to-cyan-900/60",
  },
];

function WorkPreview() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <Reveal>
        <div className="mb-20 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              — Selected Work
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">
              Showcase of <span className="text-gradient">impact.</span>
            </h2>
          </div>
          <Link
            to="/work"
            className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            All work →
          </Link>
        </div>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-3">
        {works.map((w, i) => (
          <Reveal key={w.name} delay={i * 120}>
            <Tilt3D max={8} className="rounded-2xl">
              <div
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/50"
                data-cursor="hover"
              >
                <div
                  className={`absolute inset-0 ${w.imgStyle} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="bg-grid-dots absolute inset-0 opacity-20 mix-blend-overlay" />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">
                    {w.tag}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold">{w.name}</h3>
                </div>

                {/* Hover reveal */}
                <div className="absolute inset-0 translate-y-full glass-panel flex flex-col justify-center p-8 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="font-display text-4xl font-bold">{w.name}</h3>
                  <p className="mt-3 text-muted-foreground">{w.tag}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-primary font-semibold tracking-wide">
                    View Case Study →
                  </span>
                </div>
              </div>
            </Tilt3D>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative mx-auto my-32 max-w-5xl px-6">
      <div className="glow-ring relative overflow-hidden rounded-[2.5rem] p-12 text-center md:p-24">
        <div className="bg-grid-dots absolute inset-0 opacity-10" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] mix-blend-screen" />

        <div className="relative z-10">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
              Let's create the <br /> <span className="text-gradient">extraordinary.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
              Ready to redefine your digital presence? We are currently taking on select new
              projects.
            </p>
            <Magnetic>
              <Link
                to="/contact"
                className="mt-12 inline-flex items-center gap-2 rounded-full gradient-brand px-8 py-4 font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--color-primary)]"
              >
                Start a project →
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
