import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

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
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="bg-grid-dots-light absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
              — Contact
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-primary md:text-7xl lg:text-8xl">
              Let's build <br /> <span className="text-muted-foreground italic font-light">the extraordinary.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="bg-white p-10 md:p-14 shadow-soft transition-all hover:shadow-elegant rounded-sm"
            >
              <div className="grid gap-10 md:grid-cols-2">
                <Field label="Your name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="Company" name="company" />
                <Field label="Budget" name="budget" placeholder="$10k – $50k" />
              </div>
              <div className="mt-10">
                <label
                  htmlFor="project"
                  className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Project Details
                </label>
                <textarea
                  id="project"
                  rows={5}
                  required
                  placeholder="Tell us about your project, timelines, and ambitions…"
                  className="mt-4 w-full resize-none border-b border-border bg-transparent p-4 text-primary placeholder:text-muted-foreground/40 outline-none transition-all focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="mt-12 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-accent shadow-elegant hover:shadow-none md:w-auto"
              >
                {sent ? "Message Received ✦" : "Submit Brief →"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-white p-10 md:p-14 space-y-16 shadow-soft rounded-sm h-full">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Email Us
                </p>
                <a
                  href="mailto:hello@spacexp.studio"
                  className="block font-display text-3xl text-primary transition-colors hover:text-accent font-light"
                >
                  hello@spacexp.studio
                </a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Call Us
                </p>
                <p className="font-display text-3xl text-primary font-light">+1 (212) 555‑0147</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Follow
                </p>
                <p className="font-display text-2xl text-primary font-light">@SpaceXP_Studio</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Global HQ
                </p>
                <p className="font-display text-2xl text-primary font-light leading-relaxed">
                  Nairobi, Kenya
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
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-4 w-full border-b border-border bg-transparent p-4 text-primary placeholder:text-muted-foreground/40 outline-none transition-all focus:border-accent"
      />
    </div>
  );
}
