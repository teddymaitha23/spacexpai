import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Tilt3D, Parallax } from "@/components/Tilt3D";
import heroImg from "@/assets/images/hero.png";
import work1Img from "@/assets/images/work1.png";
import work2Img from "@/assets/images/work2.png";
import work3Img from "@/assets/images/work3.png";
import toptrackerImg from "@/assets/images/toptracker.png";

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
    imgUrl: toptrackerImg,
  },
  {
    name: "Fabriks",
    tag: "Design Studio",
    year: "2024",
    services: ["Brand Identity", "Web"],
    imgUrl: work2Img,
  },
  {
    name: "Iliad",
    tag: "Telecom Leader",
    year: "2023",
    services: ["Campaign", "Art Direction"],
    imgUrl: heroImg,
  },
  {
    name: "Nova Health",
    tag: "AI Healthcare",
    year: "2023",
    services: ["Product Design", "Brand"],
    imgUrl: work3Img,
  },
  {
    name: "Atlas Labs",
    tag: "Enterprise SaaS",
    year: "2022",
    services: ["Web", "Marketing"],
    imgUrl: work1Img,
  },
  {
    name: "Lumière",
    tag: "Luxury Fashion",
    year: "2022",
    services: ["Brand", "Editorial"],
    imgUrl: work2Img,
  },
];

function WorkPage() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-20">
        <div className="bg-grid-dots-light absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute inset-0 z-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] opacity-[0.03] mix-blend-overlay" />

        <div className="relative mx-auto w-full max-w-7xl px-8">
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
              — Selected Work
            </p>
            <h1 className="max-w-5xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-primary md:text-7xl lg:text-8xl">
              Shaping the <br /> <span className="text-muted-foreground italic font-light">digital frontier.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground font-light">
              A curated selection of our finest work. We partner with visionaries to build
              category-defining brands and products.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-24">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <Tilt3D max={4} className="h-full">
                <Link to="/contact" className="group block">
                  <div
                    className={`relative flex aspect-[4/5] flex-col justify-between overflow-hidden bg-white shadow-soft transition-all duration-500 group-hover:shadow-elegant ${i % 2 !== 0 ? "md:mt-24" : ""}`}
                  >
                    <img
                      src={p.imgUrl}
                      alt={p.name}
                      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105`}
                    />

                    <div className="relative z-10 flex items-start justify-between p-8">
                      <span className="font-mono text-xs uppercase tracking-widest text-primary bg-white/60 backdrop-blur-md px-4 py-1">
                        {p.year}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-primary bg-white/60 backdrop-blur-md px-4 py-1">
                        [0{i + 1}]
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <div className={`mt-8 flex flex-col ${i % 2 !== 0 ? "md:pl-0" : ""}`}>
                     <h3 className="font-display text-3xl text-primary">{p.name}</h3>
                     <p className="mt-2 text-sm text-muted-foreground">{p.tag}</p>
                     <div className="mt-4 flex flex-wrap gap-2">
                        {p.services.map((s) => (
                          <span
                            key={s}
                            className="border border-border px-3 py-1 text-xs font-mono uppercase tracking-widest text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                  </div>
                </Link>
              </Tilt3D>
            </Reveal>
          ))}
        </div>

        <div className="mt-40 text-center">
          <Reveal>
            <p className="font-display text-4xl text-primary tracking-tight">
              Looking for more?
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 font-semibold uppercase tracking-widest text-white transition-all hover:bg-accent shadow-elegant hover:shadow-none"
            >
              Request full portfolio →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
