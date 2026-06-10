import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Tilt3D, Magnetic, Parallax } from "@/components/Tilt3D";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Space XP" },
      { name: "description", content: "Branding, web, app, AI-powered marketing, art direction, and 3D experiences." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    cat: "Brand & Identity",
    items: [
      { t: "Visual Systems", d: "Logos, guidelines, naming, voice, and comprehensive brand books." },
      { t: "Art Direction", d: "High-end editorial direction for campaigns, photoshoots, and product worlds." },
      { t: "Brand Strategy", d: "Market positioning, narrative frameworks, and core messaging." },
    ],
  },
  {
    cat: "Digital & Engineering",
    items: [
      { t: "Web Design & Dev", d: "Performant, accessible, and stunning marketing & product websites." },
      { t: "Mobile Applications", d: "Native iOS/Android and cross-platform apps built for scale." },
      { t: "3D & WebGL", d: "Real-time 3D storytelling, Three.js integrations, and advanced frontends." },
    ],
  },
  {
    cat: "AI & Growth",
    items: [
      { t: "AI Creative Pipelines", d: "Generative AI workflows for content, imagery, and video at scale." },
      { t: "Performance Marketing", d: "Data-driven creative for social, search, and paid acquisition." },
      { t: "Product Marketing", d: "GTM strategy, lifecycle marketing, and retention experiments." },
    ],
  },
];

const process = [
  { n: "01", t: "Discovery & Strategy", d: "We dive deep into your industry, audience, and goals to define the strategic foundation." },
  { n: "02", t: "Concept & Direction", d: "Exploring multiple creative vectors, mood boards, and prototypes to find the perfect approach." },
  { n: "03", t: "Design & Engineering", d: "Flawless execution combining pixel-perfect design with robust, state-of-the-art code." },
  { n: "04", t: "Launch & Iterate", d: "Seamless deployment, training, and ongoing optimization for long-term success." },
];

function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-20">
        <div className="bg-grid-dots absolute inset-0 opacity-20" />
        <Parallax speed={-0.1} className="absolute right-0 top-1/4 h-[800px] w-[800px] translate-x-1/3 rounded-full bg-primary/10 blur-[200px] mix-blend-screen" />
        
        <div className="relative mx-auto w-full max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">— Services</p>
            <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              A creative stack <br /> for <span className="text-gradient">every ambition.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We provide end-to-end capabilities across brand, digital, and AI. A unified team delivering cohesive, premium experiences.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="space-y-32">
          {groups.map((g, gi) => (
            <Reveal key={g.cat} delay={gi * 100}>
              <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    [{String(gi + 1).padStart(2, "0")}]
                  </p>
                  <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">{g.cat}</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  {g.items.map((it) => (
                    <div key={it.t} className="glass-panel group relative overflow-hidden rounded-3xl p-8" data-cursor="hover">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative z-10">
                        <h3 className="font-display text-xl font-bold">{it.t}</h3>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto mt-20 max-w-7xl px-6 py-32">
        <Reveal>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">— Process</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">
            How we <span className="text-gradient">operate.</span>
          </h2>
        </Reveal>
        
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 120}>
              <Tilt3D max={10} className="h-full">
                <div className="glow-ring relative h-full rounded-3xl p-8" data-cursor="hover">
                  <div className="font-mono text-5xl font-black text-transparent [-webkit-text-stroke:1px_var(--color-border)] opacity-50">{p.n}</div>
                  <h3 className="mt-8 font-display text-2xl font-bold">{p.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>

        <div className="mt-32 text-center">
          <Magnetic>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full gradient-brand px-8 py-4 font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--color-primary)]">
              Brief us on your project →
            </Link>
          </Magnetic>
        </div>
      </section>
    </>
  );
}