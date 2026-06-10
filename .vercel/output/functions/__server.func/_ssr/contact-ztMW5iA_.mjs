import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Reveal } from "./Reveal-CXau_NHV.mjs";
import { P as Parallax } from "./Tilt3D-ChWJAhTx.mjs";
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pt-32 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grid-dots absolute inset-0 opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Parallax, { speed: -0.05, className: "absolute right-0 top-20 h-[600px] w-[600px] translate-x-1/4 rounded-full bg-primary/20 blur-[150px] mix-blend-screen" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs font-bold uppercase tracking-widest text-primary", children: "— Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl", children: [
          "Let's build ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "the extraordinary." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative mx-auto max-w-7xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-[1.5fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-ring relative rounded-[2rem] p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "glass-panel relative rounded-[1.8rem] bg-card/60 p-8 md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your name", name: "name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Budget", name: "budget", placeholder: "$10k – $50k" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "project", className: "font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground", children: "Project Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "project", rows: 5, required: true, placeholder: "Tell us about your project, timelines, and ambitions…", className: "mt-3 w-full resize-none rounded-2xl border border-border/50 bg-background/50 p-5 text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary focus:bg-background" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-brand px-8 py-4 font-bold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_var(--color-primary)] md:w-auto", children: sent ? "Message Received ✦" : "Submit Brief →" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-[2rem] p-10 space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs font-bold uppercase tracking-widest text-primary", children: "Email Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@spacexp.studio", className: "mt-3 block font-display text-3xl font-bold transition-colors hover:text-primary", children: "hello@spacexp.studio" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs font-bold uppercase tracking-widest text-primary", children: "Call Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-3xl font-bold", children: "+1 (212) 555‑0147" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs font-bold uppercase tracking-widest text-primary", children: "Follow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-2xl font-bold", children: "@SpaceXP_Studio" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs font-bold uppercase tracking-widest text-primary", children: "Global HQ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 font-display text-2xl font-bold", children: [
            "New York City, NY",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Earth, Milky Way"
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required: true, placeholder, className: "mt-3 w-full rounded-2xl border border-border/50 bg-background/50 p-5 text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary focus:bg-background" })
  ] });
}
export {
  ContactPage as component
};
