import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal } from "./Reveal-CXau_NHV.mjs";
import { P as Parallax, T as Tilt3D, M as Magnetic } from "./Tilt3D-ChWJAhTx.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const groups = [{
  cat: "Brand & Identity",
  items: [{
    t: "Visual Systems",
    d: "Logos, guidelines, naming, voice, and comprehensive brand books."
  }, {
    t: "Art Direction",
    d: "High-end editorial direction for campaigns, photoshoots, and product worlds."
  }, {
    t: "Brand Strategy",
    d: "Market positioning, narrative frameworks, and core messaging."
  }]
}, {
  cat: "Digital & Engineering",
  items: [{
    t: "Web Design & Dev",
    d: "Performant, accessible, and stunning marketing & product websites."
  }, {
    t: "Mobile Applications",
    d: "Native iOS/Android and cross-platform apps built for scale."
  }, {
    t: "3D & WebGL",
    d: "Real-time 3D storytelling, Three.js integrations, and advanced frontends."
  }]
}, {
  cat: "AI & Growth",
  items: [{
    t: "AI Creative Pipelines",
    d: "Generative AI workflows for content, imagery, and video at scale."
  }, {
    t: "Performance Marketing",
    d: "Data-driven creative for social, search, and paid acquisition."
  }, {
    t: "Product Marketing",
    d: "GTM strategy, lifecycle marketing, and retention experiments."
  }]
}];
const process = [{
  n: "01",
  t: "Discovery & Strategy",
  d: "We dive deep into your industry, audience, and goals to define the strategic foundation."
}, {
  n: "02",
  t: "Concept & Direction",
  d: "Exploring multiple creative vectors, mood boards, and prototypes to find the perfect approach."
}, {
  n: "03",
  t: "Design & Engineering",
  d: "Flawless execution combining pixel-perfect design with robust, state-of-the-art code."
}, {
  n: "04",
  t: "Launch & Iterate",
  d: "Seamless deployment, training, and ongoing optimization for long-term success."
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-[70vh] items-center overflow-hidden pt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grid-dots absolute inset-0 opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Parallax, { speed: -0.1, className: "absolute right-0 top-1/4 h-[800px] w-[800px] translate-x-1/3 rounded-full bg-primary/10 blur-[200px] mix-blend-screen" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-full max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs font-bold uppercase tracking-widest text-primary", children: "— Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl", children: [
          "A creative stack ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "every ambition." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground", children: "We provide end-to-end capabilities across brand, digital, and AI. A unified team delivering cohesive, premium experiences." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-32", children: groups.map((g, gi) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: gi * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[1fr_2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground", children: [
          "[",
          String(gi + 1).padStart(2, "0"),
          "]"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-bold md:text-5xl", children: g.cat })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: g.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel group relative overflow-hidden rounded-3xl p-8", "data-cursor": "hover", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: it.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: it.d })
        ] })
      ] }, it.t)) })
    ] }) }, g.cat)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto mt-20 max-w-7xl px-6 py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs font-bold uppercase tracking-widest text-primary", children: "— Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-bold md:text-6xl", children: [
          "How we ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "operate." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: process.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 120, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tilt3D, { max: 10, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glow-ring relative h-full rounded-3xl p-8", "data-cursor": "hover", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-5xl font-black text-transparent [-webkit-text-stroke:1px_var(--color-border)] opacity-50", children: p.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 font-display text-2xl font-bold", children: p.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: p.d })
      ] }) }) }, p.n)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-32 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full gradient-brand px-8 py-4 font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--color-primary)]", children: "Brief us on your project →" }) }) })
    ] })
  ] });
}
export {
  ServicesPage as component
};
