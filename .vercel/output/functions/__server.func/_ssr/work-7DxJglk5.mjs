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
const projects = [{
  name: "Top Tracker",
  tag: "Luxury Hunting",
  year: "2024",
  services: ["Brand", "Web", "App"],
  imgStyle: "bg-gradient-to-br from-emerald-800/40 to-cyan-800/60"
}, {
  name: "Fabriks",
  tag: "Design Studio",
  year: "2024",
  services: ["Brand Identity", "Web"],
  imgStyle: "bg-gradient-to-br from-purple-800/40 to-pink-800/60"
}, {
  name: "Iliad",
  tag: "Telecom Leader",
  year: "2023",
  services: ["Campaign", "Art Direction"],
  imgStyle: "bg-gradient-to-br from-blue-800/40 to-cyan-800/60"
}, {
  name: "Nova Health",
  tag: "AI Healthcare",
  year: "2023",
  services: ["Product Design", "Brand"],
  imgStyle: "bg-gradient-to-br from-teal-800/40 to-emerald-800/60"
}, {
  name: "Atlas Labs",
  tag: "Enterprise SaaS",
  year: "2022",
  services: ["Web", "Marketing"],
  imgStyle: "bg-gradient-to-br from-indigo-800/40 to-fuchsia-800/60"
}, {
  name: "Lumière",
  tag: "Luxury Fashion",
  year: "2022",
  services: ["Brand", "Editorial"],
  imgStyle: "bg-gradient-to-br from-amber-800/40 to-orange-800/60"
}];
function WorkPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-[70vh] items-center overflow-hidden pt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grid-dots absolute inset-0 opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Parallax, { speed: 0.15, className: "absolute -left-32 top-1/3 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[150px] mix-blend-screen" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-full max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs font-bold uppercase tracking-widest text-primary", children: "— Selected Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl", children: [
          "Shaping the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "digital frontier." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground", children: "A curated selection of our finest work. We partner with visionaries to build category-defining brands and products." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-2", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tilt3D, { max: 6, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-[2rem] border border-border/50 ${i % 2 !== 0 ? "md:mt-16" : ""}`, "data-cursor": "hover", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 ${p.imgStyle} transition-transform duration-700 group-hover:scale-105` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grid-dots absolute inset-0 opacity-20 mix-blend-overlay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-start justify-between p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs font-bold uppercase tracking-widest text-primary/80 glass-panel rounded-full px-3 py-1", children: p.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs font-bold uppercase tracking-widest text-primary/80 glass-panel rounded-full px-3 py-1", children: [
            "[0",
            i + 1,
            "]"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 p-8 transition-transform duration-500 group-hover:-translate-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl font-bold", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100", children: p.services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border/50 bg-background/50 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest backdrop-blur-md", children: s }, s)) })
        ] })
      ] }) }) }, p.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-32 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-bold text-muted-foreground", children: "Looking for more?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-full gradient-brand px-8 py-4 font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--color-primary)]", children: "Request full portfolio →" }) })
      ] }) })
    ] })
  ] });
}
export {
  WorkPage as component
};
