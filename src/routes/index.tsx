import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Tilt3D, Parallax } from "@/components/Tilt3D";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-white overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="bg-grid-light absolute inset-0 opacity-50" />
      
      {/* Soft Gradient Orbs */}
      <div className="absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-secondary/50 blur-[120px] mix-blend-multiply" />
      <div className="absolute top-40 -left-40 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px] mix-blend-multiply" />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <Reveal delay={100}>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-white px-5 py-2 shadow-soft">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
            </span>
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
              Tokyo × New York
            </span>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <h1 className="font-display text-6xl font-medium tracking-tight text-primary sm:text-8xl lg:text-[10rem] leading-[0.9]">
            Design.<br />
            <span className="text-muted-foreground italic font-light">Refined.</span>
          </h1>
        </Reveal>

        <Reveal delay={500}>
          <p className="mx-auto mt-10 max-w-2xl text-lg text-muted-foreground sm:text-xl font-light tracking-wide">
            A minimalist creative agency where timeless aesthetics meet AI-augmented precision. We craft digital experiences that breathe.
          </p>
        </Reveal>

        <Reveal delay={700}>
          <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              to="/work"
              className="group relative flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-10 text-sm font-medium text-white shadow-elegant transition-all hover:bg-accent"
            >
              <span className="relative z-10 tracking-widest uppercase">Explore Work</span>
            </Link>
            <Link
              to="/contact"
              className="group flex h-14 items-center justify-center gap-3 rounded-full border border-border bg-white px-10 text-sm font-medium text-primary transition-all hover:bg-secondary"
            >
              <span className="tracking-widest uppercase">Let's Talk</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <ScrollMarquee />

      {/* Philosophy Section */}
      <section className="relative px-6 py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">
            <Reveal>
              <h2 className="font-display text-4xl leading-tight text-primary sm:text-6xl tracking-tight">
                Simplicity is the ultimate sophistication.
              </h2>
            </Reveal>
            <div className="flex flex-col justify-center space-y-10">
              <Reveal delay={200}>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  We strip away the unnecessary so the essential may speak. By blending Japanese minimalist principles with cutting-edge technology, we create interfaces that feel natural, intuitive, and deeply human.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <Link to="/about" className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-primary hover:text-accent transition-colors">
                  Our Philosophy <span className="text-accent">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="relative px-6 py-40 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-20 flex items-end justify-between">
              <h2 className="font-display text-4xl text-primary sm:text-5xl tracking-tight">Selected Works</h2>
              <Link to="/work" className="hidden text-sm uppercase tracking-widest text-muted-foreground hover:text-primary sm:block transition-colors">
                View Archive
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-16 md:grid-cols-2">
            {works.map((work, i) => (
              <Parallax key={work.name} speed={i % 2 === 0 ? 0.05 : 0.15}>
                <Reveal delay={i * 200}>
                  <Link to="/work" className="group block">
                    <Tilt3D max={3} scale={1.02}>
                      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-white shadow-soft transition-all group-hover:shadow-elegant">
                        <div className={`absolute inset-4 ${work.imgStyle} opacity-90 transition-transform duration-700 group-hover:scale-105`} />
                        <div className="absolute inset-0 flex items-center justify-center p-8 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-white/40 backdrop-blur-sm">
                          <span className="font-display text-3xl font-bold text-primary">{work.name}</span>
                        </div>
                      </div>
                    </Tilt3D>
                    <div className="mt-8 flex items-center justify-between">
                      <h3 className="font-display text-xl text-primary">{work.name}</h3>
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{work.tag}</p>
                    </div>
                  </Link>
                </Reveal>
              </Parallax>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative px-6 py-40 text-center">
        <Reveal>
          <h2 className="font-display text-5xl text-primary sm:text-7xl tracking-tight">
            Ready to refine?
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground font-light">
            Whether you need a full brand overhaul or a subtle digital refinement, we are ready to bring your vision to life.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <Link
            to="/contact"
            className="mt-14 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 text-sm font-medium uppercase tracking-widest text-white shadow-elegant transition-all hover:bg-accent"
          >
            Start the dialogue
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

function ScrollMarquee() {
  return (
    <div className="mt-10 border-y border-border bg-white/50 py-6 backdrop-blur-md">
      <Marquee items={["Brand Identity", "AI Creative", "Web Development", "Native Apps", "Art Direction", "Minimalism"]} />
    </div>
  );
}

function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex w-full overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 font-mono text-sm uppercase tracking-widest text-muted-foreground">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

const works = [
  {
    name: "Kanso",
    tag: "Brand Identity",
    imgStyle: "bg-gradient-to-br from-gray-100 to-gray-300",
  },
  {
    name: "Aura",
    tag: "Web Experience",
    imgStyle: "bg-gradient-to-br from-stone-100 to-stone-300",
  },
  {
    name: "Zenith",
    tag: "Native App",
    imgStyle: "bg-gradient-to-br from-zinc-100 to-zinc-300",
  },
  {
    name: "Enso",
    tag: "Art Direction",
    imgStyle: "bg-gradient-to-br from-slate-100 to-slate-300",
  },
];
