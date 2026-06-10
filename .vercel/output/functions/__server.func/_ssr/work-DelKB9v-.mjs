import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal } from "./Reveal-KNND-Aem.mjs";
import { T as Tilt3D } from "./Tilt3D-CXV6RNZu.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const projects = [{
  name: "Top Tracker",
  tag: "Luxury Hunting",
  year: "2024",
  services: ["Brand", "Web", "App"],
  imgStyle: "bg-gradient-to-br from-stone-200 to-stone-400"
}, {
  name: "Fabriks",
  tag: "Design Studio",
  year: "2024",
  services: ["Brand Identity", "Web"],
  imgStyle: "bg-gradient-to-br from-neutral-200 to-neutral-400"
}, {
  name: "Iliad",
  tag: "Telecom Leader",
  year: "2023",
  services: ["Campaign", "Art Direction"],
  imgStyle: "bg-gradient-to-br from-zinc-200 to-zinc-400"
}, {
  name: "Nova Health",
  tag: "AI Healthcare",
  year: "2023",
  services: ["Product Design", "Brand"],
  imgStyle: "bg-gradient-to-br from-gray-200 to-gray-400"
}, {
  name: "Atlas Labs",
  tag: "Enterprise SaaS",
  year: "2022",
  services: ["Web", "Marketing"],
  imgStyle: "bg-gradient-to-br from-slate-200 to-slate-400"
}, {
  name: "Lumière",
  tag: "Luxury Fashion",
  year: "2022",
  services: ["Brand", "Editorial"],
  imgStyle: "bg-gradient-to-br from-zinc-200 to-stone-300"
}];
function WorkPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-[70vh] items-center overflow-hidden pt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grid-dots-light absolute inset-0 opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-full max-w-7xl px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6", children: "— Selected Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "max-w-5xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-primary md:text-7xl lg:text-8xl", children: [
          "Shaping the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground italic font-light", children: "digital frontier." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground font-light", children: "A curated selection of our finest work. We partner with visionaries to build category-defining brands and products." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-8 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-12 md:grid-cols-2 lg:gap-24", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tilt3D, { max: 4, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative flex aspect-[4/5] flex-col justify-between overflow-hidden bg-white shadow-soft transition-all duration-500 group-hover:shadow-elegant ${i % 2 !== 0 ? "md:mt-24" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 ${p.imgStyle} transition-transform duration-700 group-hover:scale-105 opacity-80` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-start justify-between p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs uppercase tracking-widest text-primary bg-white/60 backdrop-blur-md px-4 py-1", children: p.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs uppercase tracking-widest text-primary bg-white/60 backdrop-blur-md px-4 py-1", children: [
              "[0",
              i + 1,
              "]"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mt-8 flex flex-col ${i % 2 !== 0 ? "md:pl-0" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl text-primary", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: p.services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border border-border px-3 py-1 text-xs font-mono uppercase tracking-widest text-muted-foreground", children: s }, s)) })
        ] })
      ] }) }) }, p.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-40 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl text-primary tracking-tight", children: "Looking for more?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 font-semibold uppercase tracking-widest text-white transition-all hover:bg-accent shadow-elegant hover:shadow-none", children: "Request full portfolio →" })
      ] }) })
    ] })
  ] });
}
export {
  WorkPage as component
};
