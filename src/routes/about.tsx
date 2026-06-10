import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Space XP" },
      {
        name: "description",
        content:
          "A privately owned creative studio specializing in design, branding, and AI-driven digital innovation.",
      },
      { property: "og:title", content: "About — Space XP" },
      {
        property: "og:description",
        content: "Who we are, our story, and the values driving Space XP forward.",
      },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "George Andiki", role: "Founder & Creative Director", img: "bg-stone-200" },
  { name: "Jordan Kim", role: "Head of Strategy & Operations", img: "bg-neutral-200" },
  { name: "Maya Patel", role: "Lead Digital Developer", img: "bg-zinc-200" },
  { name: "Chris Morgan", role: "Brand Identity Lead", img: "bg-gray-200" },
];

const milestones = [
  {
    n: "01",
    t: "Agency Founded",
    d: "Launched as a boutique studio with a focus on pristine design excellence.",
  },
  {
    n: "02",
    t: "Global Partnerships",
    d: "Scaled rapidly through client referrals and a reputation for minimalism.",
  },
  {
    n: "03",
    t: "Award-Winning",
    d: "Recognized for pioneering clean, AI-augmented digital design across markets.",
  },
  {
    n: "04",
    t: "Enterprise Delivery",
    d: "Trusted by visionaries for mission-critical brand architecture.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="bg-grid-light absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-8 pb-12">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">— About</p>
            <h1 className="max-w-5xl font-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl text-primary font-medium tracking-tight">
              A studio where <br /> <span className="text-muted-foreground italic font-light">imagination meets execution.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Vision</p>
            <h2 className="font-display text-3xl md:text-4xl text-primary font-light leading-snug">
              To be the most trusted creative partner for brands seeking pristine, transformative digital and visual identities.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Mission</p>
            <h2 className="font-display text-3xl md:text-4xl text-primary font-light leading-snug">
              To harness restraint, craftsmanship, and technology to create refined experiences that drive lasting impact.
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-32 bg-secondary/30 relative">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">— Journey</p>
          <h2 className="font-display text-4xl md:text-6xl text-primary tracking-tight">
            A journey of <span className="text-muted-foreground italic font-light">refinement.</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m, i) => (
            <Reveal key={m.n} delay={i * 100}>
              <div className="h-full rounded-sm bg-white p-8 shadow-soft transition-all hover:shadow-elegant">
                <div className="font-mono text-xs font-bold text-primary mb-6">{m.n}</div>
                <h3 className="font-display text-2xl text-primary mb-3">{m.t}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{m.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">— Team</p>
          <h2 className="font-display text-4xl md:text-6xl text-primary tracking-tight">
            Meet the <span className="text-muted-foreground italic font-light">crew.</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <div className="group overflow-hidden bg-white shadow-soft transition-all duration-500 hover:shadow-elegant">
                <div className={`aspect-[4/5] w-full ${m.img} opacity-80 transition-transform duration-700 group-hover:scale-105`} />
                <div className="p-6 bg-white relative z-10">
                  <h3 className="font-display text-xl text-primary">{m.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">
                    {m.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-40 text-center">
        <Reveal>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary shadow-soft">
            <span className="font-display text-2xl font-light text-primary">✦</span>
          </div>
          <p className="mx-auto mt-12 max-w-3xl font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight tracking-tight">
            Together, we build <br />
            <span className="text-muted-foreground italic font-light">meaningful connections.</span>
          </p>
        </Reveal>
      </section>
    </>
  );
}
