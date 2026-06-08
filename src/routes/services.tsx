import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Tilt3D, Magnetic } from "@/components/Tilt3D";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Space XP" },
      { name: "description", content: "Branding, web, app, AI-powered marketing, art direction, and 3D experiences." },
      { property: "og:title", content: "Services — Space XP" },
      { property: "og:description", content: "A creative stack for every ambition." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    cat: "Brand",
    items: [
      { t: "Brand Identity Systems", d: "Logos, guidelines, naming, voice, and full visual languages." },
      { t: "Art Direction", d: "Editorial-grade direction across campaigns and product worlds." },
      { t: "Brand Strategy", d: "Positioning, narrative, and messaging frameworks." },
    ],
  },
  {
    cat: "Digital",
    items: [
      { t: "Web Design & Development", d: "Immersive, performant marketing & product sites." },
      { t: "App Development", d: "Native & cross-platform apps with refined UX." },
      { t: "3D & Immersive", d: "Real-time 3D storytelling and advanced frontend." },
    ],
  },
  {
    cat: "AI · Growth",
    items: [
      { t: "AI Creative Production", d: "Generative pipelines for content, imagery and video at scale." },
      { t: "Social & Performance Marketing", d: "Reaching audiences with measurable performance creative." },
      { t: "Product Marketing", d: "Launch strategy, content systems, and growth experiments." },
    ],
  },
];

const process = [
  { n: "01", t: "Discovery & Research", d: "Onboarding, goal-setting, and deep-dive research into brand & audience." },
  { n: "02", t: "Strategy & Concepting", d: "Mood boards, wireframes, and creative direction aligned with your vision." },
  { n: "03", t: "Design & Prototyping", d: "High-fidelity design, AI-augmented production, and validation." },
  { n: "04", t: "Delivery & Support", d: "Handoff, team training, post-launch support, and brand stewardship." },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">— Services</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
              End-to-end <span className="text-gradient">creative solutions</span>, all under one roof.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              Branding, web, app, marketing, art direction & AI production — tailored to your unique business goals.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-24 px-6 py-20">
        {groups.map((g, gi) => (
          <Reveal key={g.cat} delay={gi * 80}>
            <div className="grid gap-10 border-t border-border pt-10 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">[{String(gi + 1).padStart(2, "0")}] Category</p>
                <h2 className="mt-2 font-display text-4xl text-gradient">{g.cat}</h2>
              </div>
              <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
                {g.items.map((it) => (
                  <div key={it.t} className="group bg-card p-6 transition-colors hover:bg-secondary" data-cursor="hover">
                    <h3 className="font-display text-lg">{it.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">— Process</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">How we <span className="text-gradient">work.</span></h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 100}>
              <Tilt3D max={10} className="h-full rounded-2xl">
                <div className="relative h-full rounded-2xl border border-border bg-card/40 p-6 backdrop-blur glow-ring" data-cursor="hover">
                  <div className="font-mono text-xs text-primary" style={{ transform: "translateZ(30px)" }}>{p.n}</div>
                  <h3 className="mt-4 font-display text-xl" style={{ transform: "translateZ(40px)" }}>{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Magnetic>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full gradient-cyan px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.04]">
              Brief us on your project →
            </Link>
          </Magnetic>
        </div>
      </section>
    </>
  );
}