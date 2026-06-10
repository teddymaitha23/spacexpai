import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Reveal } from "./Reveal-KNND-Aem.mjs";
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pt-40 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grid-dots-light absolute inset-0 opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6", children: "— Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-primary md:text-7xl lg:text-8xl", children: [
          "Let's build ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground italic font-light", children: "the extraordinary." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative mx-auto max-w-7xl px-8 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-[1.5fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "bg-white p-10 md:p-14 shadow-soft transition-all hover:shadow-elegant rounded-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your name", name: "name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Budget", name: "budget", placeholder: "$10k – $50k" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "project", className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "Project Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "project", rows: 5, required: true, placeholder: "Tell us about your project, timelines, and ambitions…", className: "mt-4 w-full resize-none border-b border-border bg-transparent p-4 text-primary placeholder:text-muted-foreground/40 outline-none transition-all focus:border-accent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-12 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-accent shadow-elegant hover:shadow-none md:w-auto", children: sent ? "Message Received ✦" : "Submit Brief →" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-10 md:p-14 space-y-16 shadow-soft rounded-sm h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4", children: "Email Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@spacexp.studio", className: "block font-display text-3xl text-primary transition-colors hover:text-accent font-light", children: "hello@spacexp.studio" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4", children: "Call Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl text-primary font-light", children: "+1 (212) 555‑0147" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4", children: "Follow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-primary font-light", children: "@SpaceXP_Studio" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4", children: "Global HQ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl text-primary font-light leading-relaxed", children: [
            "Nairobi, Kenya",
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required: true, placeholder, className: "mt-4 w-full border-b border-border bg-transparent p-4 text-primary placeholder:text-muted-foreground/40 outline-none transition-all focus:border-accent" })
  ] });
}
export {
  ContactPage as component
};
