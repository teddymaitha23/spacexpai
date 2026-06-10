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
  { name: "George Andiki", role: "Founder & Creative Director" },
  { name: "Jordan Kim", role: "Head of Strategy & Operations" },
  { name: "Maya Patel", role: "Lead Digital Developer" },
  { name: "Chris Morgan", role: "Brand Identity Lead" },
];

const milestones = [
  {
    n: "01",
    t: "Agency Founded",
    d: "Launched as a boutique studio with a focus on design excellence.",
  },
  {
    n: "02",
    t: "Global Brand Partnerships",
    d: "Scaled rapidly through client referrals and word-of-mouth.",
  },
  {
    n: "03",
    t: "Award-Winning Campaigns",
    d: "Recognized for pioneering digital design across markets.",
  },
  {
    n: "04",
    t: "Enterprise-Scale Delivery",
    d: "Trusted by enterprises for mission-critical brand systems.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 pb-12">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">— About</p>
            <h1 className="mt-4 max-w-5xl font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
              A creative studio where{" "}
              <span className="text-gradient">imagination meets execution.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Vision</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              To be the most trusted creative partner for brands seeking transformative digital and
              visual identities.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Mission</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              To harness research, craftsmanship and AI to create refined identities, websites,
              campaigns, and experiences that drive lasting growth.
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">— Journey</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">
            A journey of <span className="text-gradient">achievements.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m, i) => (
            <Reveal key={m.n} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-card/40 p-6 backdrop-blur">
                <div className="font-mono text-xs text-primary">{m.n}</div>
                <h3 className="mt-3 font-display text-xl">{m.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">— Team</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">
            Meet the <span className="text-gradient">crew.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <div
                className="group relative aspect-[3/4] overflow-hidden bg-card"
                data-cursor="hover"
              >
                <div className="bg-grid absolute inset-0 opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-display text-2xl">{m.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {m.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32 text-center">
        <Reveal>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white/5 backdrop-blur">
            <span className="font-display text-2xl font-bold text-primary">✦</span>
          </div>
          <p className="mx-auto mt-8 max-w-3xl font-display text-3xl md:text-5xl">
            Together, we grow stronger communities and build{" "}
            <span className="text-gradient">meaningful connections.</span>
          </p>
        </Reveal>
      </section>
    </>
  );
}
