import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { Tilt3D, Magnetic, Parallax } from "@/components/Tilt3D";
import logoLight from "@/assets/logo-light.png.asset.json";
import cert from "@/assets/cert-white.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Space XP — AI Creative Agency" },
      { name: "description", content: "Shaping the future of digital experiences. Branding, web, app, marketing & art direction powered by AI." },
      { property: "og:title", content: "Space XP — AI Creative Agency" },
      { property: "og:description", content: "Where creativity meets AI to build lasting brand legacies." },
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
      <Numbers />
      <PrinciplesSection />
      <WorkPreview />
      <Testimonial />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <Parallax speed={0.08} className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px] animate-pulse-glow" />
      <Parallax speed={-0.1} className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[160px] animate-pulse-glow" />

      <Parallax speed={0.18} className="absolute right-10 top-1/3 hidden opacity-30 lg:block">
        <img src={logoLight.url} alt="" className="h-[500px] w-auto animate-float-slow [transform:perspective(1200px)_rotateY(-12deg)_rotateX(6deg)]" />
      </Parallax>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-card/40 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            AI Creative Agency · Est. 2015
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-5xl font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl lg:text-[8rem]">
            Shaping the <span className="text-gradient text-glow">future</span><br />
            of digital <em className="font-normal italic text-primary">experiences.</em>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
            Space XP is an AI-augmented creative studio crafting brand identities, websites, apps & immersive experiences that outlast trends.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full gradient-cyan px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]">
                Start a project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary">
                See our work
              </Link>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-24 grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4">
            {[
              ["200+", "Projects delivered"],
              ["98%", "Client satisfaction"],
              ["10+", "Years of excellence"],
              ["15+", "Countries served"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-4xl font-medium text-gradient md:text-5xl">{n}</div>
                <div className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ScrollMarquee() {
  return (
    <div className="mt-32">
      <Marquee items={["Branding", "AI Design", "Web", "Apps", "Marketing", "Art Direction", "3D / Motion"]} />
    </div>
  );
}

const services = [
  { n: "01", title: "Brand Identity Systems", desc: "Logos, guidelines & full visual languages built to scale across 5+ years." },
  { n: "02", title: "Web Design & Development", desc: "Immersive, performant websites with AI-powered personalization." },
  { n: "03", title: "App Development", desc: "Native & cross-platform apps with refined UX and engineering rigor." },
  { n: "04", title: "AI-Powered Marketing", desc: "Content, social & product marketing supercharged by generative AI." },
  { n: "05", title: "Art Direction", desc: "Editorial-grade creative direction for campaigns and product worlds." },
  { n: "06", title: "3D & Immersive", desc: "Real-time 3D storytelling & advanced frontend for next-gen brands." },
];

function ServicesPreview() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <Reveal>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">— Services</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-6xl">
              A creative <span className="text-gradient">stack</span> for every ambition.
            </h2>
          </div>
          <Link to="/services" className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary">
            All services →
          </Link>
        </div>
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.n} delay={i * 60}>
            <Tilt3D max={8} scale={1.01} className="h-full">
              <div className="group relative h-full overflow-hidden bg-card p-8 transition-colors hover:bg-secondary" data-cursor="hover">
                <div className="font-mono text-xs text-primary">{s.n}</div>
                <h3 className="mt-6 font-display text-2xl" style={{ transform: "translateZ(30px)" }}>{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all group-hover:gradient-cyan group-hover:text-primary-foreground" style={{ transform: "translateZ(50px)" }}>→</div>
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
              </div>
            </Tilt3D>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Numbers() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/30 py-24">
      <div className="bg-noise absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="font-display text-2xl text-muted-foreground md:text-3xl">
            <span className="text-foreground">A creative agency</span> delivering brand identity, digital solutions, and immersive experiences for startups, enterprises, and non-profits — <span className="text-primary">worldwide.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const principles = [
  { n: "01", t: "People-First Approach", d: "Employees, clients, community — built around transparency at every project stage." },
  { n: "02", t: "Creative Excellence", d: "Top-quality deliverables guided by craftsmanship and research." },
  { n: "03", t: "Scalable by Design", d: "Brand systems built for long-term sustainability and longevity." },
  { n: "04", t: "Startup Agility, Enterprise Precision", d: "The speed of a studio, the rigor of an in-house team." },
];

function PrinciplesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-primary">— Principles</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">The principles that <span className="text-gradient">define us.</span></h2>
      </Reveal>
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {principles.map((p, i) => (
          <Reveal key={p.n} delay={i * 80}>
            <div className="group relative rounded-2xl border border-border bg-card/40 p-8 backdrop-blur transition-all hover:border-primary/60" data-cursor="hover">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl md:text-3xl">{p.t}</h3>
                <span className="font-mono text-xs text-primary">[{p.n}]</span>
              </div>
              <p className="mt-4 text-muted-foreground">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const works = [
  { name: "Top Tracker", tag: "Luxury Hunting Club", color: "from-emerald-500/40 to-cyan-500/30" },
  { name: "Fabriks", tag: "International Design Studio", color: "from-fuchsia-500/30 to-cyan-400/30" },
  { name: "Iliad", tag: "Telecom Industry Leader", color: "from-cyan-400/40 to-blue-600/30" },
];

function WorkPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <Reveal>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">— Trusted by</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">Industry <span className="text-gradient">leaders.</span></h2>
          </div>
          <Link to="/work" className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary">All work →</Link>
        </div>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {works.map((w, i) => (
          <Reveal key={w.name} delay={i * 100}>
            <Tilt3D max={10} className="rounded-2xl">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border glow-ring" data-cursor="hover">
              <div className={`absolute inset-0 bg-gradient-to-br ${w.color}`} />
              <div className="bg-grid absolute inset-0 opacity-40" />
              <div className="absolute inset-0 flex flex-col justify-end p-6" style={{ transform: "translateZ(40px)" }}>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{w.tag}</p>
                <h3 className="mt-2 font-display text-3xl">{w.name}</h3>
              </div>
              <div className="absolute inset-0 translate-y-full bg-background/80 backdrop-blur transition-transform duration-500 group-hover:translate-y-0" />
              <div className="absolute inset-0 flex translate-y-8 flex-col justify-center p-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-display text-4xl">{w.name}</h3>
                <p className="mt-3 text-muted-foreground">{w.tag}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-primary">View case study →</span>
              </div>
            </div>
            </Tilt3D>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <img src={cert.url} alt="" className="mx-auto h-10 w-auto opacity-70" />
          <p className="mt-10 font-display text-3xl leading-tight md:text-5xl">
            "Space XP gave us a brand system that <span className="text-gradient">felt alive</span> — every pixel placed with purpose."
          </p>
          <div className="mt-8 font-mono text-sm uppercase tracking-widest text-muted-foreground">
            Michael Brown — Founder, Fabriks
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative mx-auto my-32 max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-20">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/30 blur-[120px]" />
        <div className="relative">
          <Reveal>
            <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl lg:text-7xl">
              Ready to build something <span className="text-gradient">unforgettable?</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Let's craft an experience that captivates, converts, and creates a lasting brand legacy.
            </p>
            <Magnetic>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full gradient-cyan px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.04]">
                Start a project →
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
