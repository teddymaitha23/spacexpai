import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Tilt3D, Parallax } from "@/components/Tilt3D";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Space XP" },
      {
        name: "description",
        content: "Branding, web, app, AI-powered marketing, art direction, and 3D experiences.",
      },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    cat: "Brand & Identity",
    items: [
      {
        t: "Visual Systems",
        d: "Logos, guidelines, naming, voice, and comprehensive brand books.",
      },
      {
        t: "Art Direction",
        d: "High-end editorial direction for campaigns, photoshoots, and product worlds.",
      },
      { t: "Brand Strategy", d: "Market positioning, narrative frameworks, and core messaging." },
    ],
  },
  {
    cat: "Digital & Engineering",
    items: [
      {
        t: "Web Design & Dev",
        d: "Performant, accessible, and stunning marketing & product websites.",
      },
      {
        t: "Mobile Applications",
        d: "Native iOS/Android and cross-platform apps built for scale.",
      },
      {
        t: "3D & WebGL",
        d: "Real-time 3D storytelling, Three.js integrations, and advanced frontends.",
      },
    ],
  },
  {
    cat: "AI & Growth",
    items: [
      {
        t: "AI Creative Pipelines",
        d: "Generative AI workflows for content, imagery, and video at scale.",
      },
      {
        t: "Performance Marketing",
        d: "Data-driven creative for social, search, and paid acquisition.",
      },
      {
        t: "Product Marketing",
        d: "GTM strategy, lifecycle marketing, and retention experiments.",
      },
    ],
  },
];

const process = [
  {
    n: "01",
    t: "Discovery & Strategy",
    d: "We dive deep into your industry, audience, and goals to define the strategic foundation.",
  },
  {
    n: "02",
    t: "Concept & Direction",
    d: "Exploring multiple creative vectors, mood boards, and prototypes to find the perfect approach.",
  },
  {
    n: "03",
    t: "Design & Engineering",
    d: "Flawless execution combining pixel-perfect design with robust, state-of-the-art code.",
  },
  {
    n: "04",
    t: "Launch & Iterate",
    d: "Seamless deployment, training, and ongoing optimization for long-term success.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-20">
        <div className="bg-grid-light absolute inset-0 opacity-40" />

        <div className="relative mx-auto w-full max-w-7xl px-8">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">
              — Services
            </p>
            <h1 className="max-w-5xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-primary md:text-7xl lg:text-8xl">
              A creative stack <br /> for <span className="text-muted-foreground italic font-light">every ambition.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground font-light">
              We provide end-to-end capabilities across brand, digital, and AI. A unified team
              delivering cohesive, pristine experiences.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="space-y-32">
          {groups.map((g, gi) => (
            <Reveal key={g.cat} delay={gi * 100}>
              <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                    [{String(gi + 1).padStart(2, "0")}]
                  </p>
                  <h2 className="font-display text-4xl text-primary md:text-5xl">{g.cat}</h2>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                  {g.items.map((it) => (
                    <div
                      key={it.t}
                      className="group relative overflow-hidden bg-white shadow-soft transition-all duration-500 hover:shadow-elegant p-8"
                    >
                      <div className="relative z-10">
                        <h3 className="font-display text-2xl text-primary">{it.t}</h3>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground font-light">{it.d}</p>
                      </div>
                      <div className="absolute inset-0 border-b-4 border-transparent transition-colors duration-500 group-hover:border-accent" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto mt-20 max-w-7xl px-8 py-32 bg-secondary/30">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            — Process
          </p>
          <h2 className="font-display text-4xl text-primary md:text-6xl tracking-tight">
            How we <span className="text-muted-foreground italic font-light">operate.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 100}>
              <Tilt3D max={4} className="h-full">
                <div className="relative h-full bg-white shadow-soft p-10 transition-all hover:shadow-elegant">
                  <div className="font-mono text-4xl text-muted-foreground/30 font-light mb-8">
                    {p.n}
                  </div>
                  <h3 className="font-display text-2xl text-primary">{p.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground font-light">{p.d}</p>
                </div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>

        <div className="mt-40 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 uppercase tracking-widest text-xs font-semibold text-white shadow-elegant transition-all hover:bg-accent hover:shadow-none"
            >
              Brief us on your project →
            </Link>
        </div>
      </section>
    </>
  );
}
