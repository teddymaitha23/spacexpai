import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { Parallax } from "@/components/Tilt3D";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Space XP" },
      {
        name: "description",
        content: "Tell us about your project. We respond within one business day.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="bg-grid-dots absolute inset-0 opacity-20" />
        <Parallax
          speed={-0.05}
          className="absolute right-0 top-20 h-[600px] w-[600px] translate-x-1/4 rounded-full bg-primary/20 blur-[150px] mix-blend-screen"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              — Contact
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Let's build <br /> <span className="text-gradient">the extraordinary.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="glow-ring relative rounded-[2rem] p-1">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="glass-panel relative rounded-[1.8rem] bg-card/60 p-8 md:p-12"
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Your name" name="name" />
                  <Field label="Email" name="email" type="email" />
                  <Field label="Company" name="company" />
                  <Field label="Budget" name="budget" placeholder="$10k – $50k" />
                </div>
                <div className="mt-8">
                  <label
                    htmlFor="project"
                    className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="project"
                    rows={5}
                    required
                    placeholder="Tell us about your project, timelines, and ambitions…"
                    className="mt-3 w-full resize-none rounded-2xl border border-border/50 bg-background/50 p-5 text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary focus:bg-background"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-brand px-8 py-4 font-bold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_var(--color-primary)] md:w-auto"
                >
                  {sent ? "Message Received ✦" : "Submit Brief →"}
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-panel rounded-[2rem] p-10 space-y-12">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                  Email Us
                </p>
                <a
                  href="mailto:hello@spacexp.studio"
                  className="mt-3 block font-display text-3xl font-bold transition-colors hover:text-primary"
                >
                  hello@spacexp.studio
                </a>
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                  Call Us
                </p>
                <p className="mt-3 font-display text-3xl font-bold">+1 (212) 555‑0147</p>
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                  Follow
                </p>
                <p className="mt-3 font-display text-2xl font-bold">@SpaceXP_Studio</p>
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                  Global HQ
                </p>
                <p className="mt-3 font-display text-2xl font-bold">
                  New York City, NY
                  <br />
                  Earth, Milky Way
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-3 w-full rounded-2xl border border-border/50 bg-background/50 p-5 text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary focus:bg-background"
      />
    </div>
  );
}
