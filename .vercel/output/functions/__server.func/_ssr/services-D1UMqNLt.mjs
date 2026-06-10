import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal } from "./Reveal-_jqFMCBK.mjs";
import { T as Tilt3D } from "./Tilt3D-C8zXE9RS.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grid-light absolute inset-0 opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-full max-w-7xl px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6", children: "— Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "max-w-5xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-primary md:text-7xl lg:text-8xl", children: [
          "A creative stack ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground italic font-light", children: "every ambition." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground font-light", children: "We provide end-to-end capabilities across brand, digital, and AI. A unified team delivering cohesive, pristine experiences." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-8 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-32", children: groups.map((g, gi) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: gi * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[1fr_2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4", children: [
          "[",
          String(gi + 1).padStart(2, "0"),
          "]"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl text-primary md:text-5xl", children: g.cat })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-3", children: g.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden bg-white shadow-soft transition-all duration-500 hover:shadow-elegant p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-primary", children: it.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground font-light", children: it.d })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 border-b-4 border-transparent transition-colors duration-500 group-hover:border-accent" })
      ] }, it.t)) })
    ] }) }, g.cat)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto mt-20 max-w-7xl px-8 py-32 bg-secondary/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4", children: "— Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl text-primary md:text-6xl tracking-tight", children: [
          "How we ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground italic font-light", children: "operate." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: process.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tilt3D, { max: 4, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full bg-white shadow-soft p-10 transition-all hover:shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-4xl text-muted-foreground/30 font-light mb-8", children: p.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-primary", children: p.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground font-light", children: p.d })
      ] }) }) }, p.n)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-40 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 uppercase tracking-widest text-xs font-semibold text-white shadow-elegant transition-all hover:bg-accent hover:shadow-none", children: "Brief us on your project →" }) })
    ] })
  ] });
}
export {
  ServicesPage as component
};
