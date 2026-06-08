import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Space XP" },
      { name: "description", content: "Tell us about your project. We respond within one business day." },
      { property: "og:title", content: "Contact — Space XP" },
      { property: "og:description", content: "Start a project with Space XP." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative overflow-hidden pt-40">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-12">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">— Contact</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
              Let's make <span className="text-gradient">something legendary.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur md:p-12"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Your name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="Company" name="company" />
                <Field label="Budget" name="budget" placeholder="$10k – $50k" />
              </div>
              <div className="mt-6">
                <label htmlFor="project" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Project</label>
                <textarea
                  id="project"
                  rows={5}
                  required
                  placeholder="Tell us about your project, timelines, and ambitions…"
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background/60 p-4 text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="mt-8 inline-flex items-center gap-2 rounded-full gradient-cyan px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                {sent ? "Sent — talk soon ✦" : "Send brief →"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">Email</p>
                <a href="mailto:hello@spacexp.studio" className="mt-2 block font-display text-2xl hover:text-primary">hello@spacexp.studio</a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">Phone</p>
                <p className="mt-2 font-display text-2xl">+1 (212) 555‑0147</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">Social</p>
                <p className="mt-2 font-display text-2xl">@SpaceXP_Studio</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">Website</p>
                <p className="mt-2 font-display text-2xl">www.spacexp.studio</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background/60 p-4 text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}