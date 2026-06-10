import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal } from "./Reveal-CXau_NHV.mjs";
import { P as Parallax, M as Magnetic, T as Tilt3D } from "./Tilt3D-ChWJAhTx.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
function Marquee({ items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden border-y border-border/60 bg-background/40 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap", children: [0, 1].map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "mx-8 inline-flex items-center gap-8 font-display text-4xl font-medium tracking-tight md:text-6xl",
      children: [
        item,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "✦" })
      ]
    },
    `${g}-${i}`
  )) }, g)) }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollMarquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WorkPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-screen items-center justify-center overflow-hidden pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grid-dots absolute inset-0 opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Parallax, { speed: 0.05, className: "absolute left-1/4 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px] animate-pulse-glow mix-blend-screen" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Parallax, { speed: -0.08, className: "absolute right-1/4 bottom-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-accent/20 blur-[130px] animate-pulse-glow mix-blend-screen" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 inline-flex items-center gap-3 rounded-full border border-border/80 glass-panel px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" }),
        "AI-Native Creative Studio"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-[7.5rem]", children: [
        "Design the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "impossible." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed", children: [
        "Space XP is a premium creative agency bridging the gap between",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-medium", children: "human imagination" }),
        " and",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-medium", children: "AI execution" }),
        ". We craft brands, websites, and immersive experiences that define the future."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap items-center justify-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full gradient-brand px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--color-primary)]", children: [
          "Start a project",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { strength: 0.25, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "inline-flex items-center gap-2 rounded-full border border-border glass-panel px-8 py-4 text-sm font-bold text-foreground transition-colors hover:bg-white/5", children: "View our work" }) })
      ] }) })
    ] })
  ] });
}
function ScrollMarquee() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 border-y border-border/40 bg-card/20 py-4 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { items: ["Brand Identity", "AI Creative", "Web Development", "Native Apps", "Art Direction", "3D / Motion"] }) });
}
const services = [{
  n: "01",
  title: "Brand Identity",
  desc: "Timeless visual systems, logos, and guidelines built for scale."
}, {
  n: "02",
  title: "Web Design",
  desc: "High-performance, immersive websites with flawless interactions."
}, {
  n: "03",
  title: "App Dev",
  desc: "Cross-platform mobile applications with premium UX."
}, {
  n: "04",
  title: "AI Marketing",
  desc: "Generative content pipelines that scale your brand presence."
}];
function ServicesPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto max-w-7xl px-6 py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20 flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary", children: "— Our Stack" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 max-w-3xl font-display text-4xl font-semibold md:text-6xl", children: [
        "A unified approach to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "digital excellence." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tilt3D, { max: 10, scale: 1.02, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glow-ring group relative h-full rounded-2xl p-8", "data-cursor": "hover", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs font-bold text-primary", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl font-bold", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: s.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/50 transition-all group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground", children: "→" })
    ] }) }) }, s.n)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors", children: "Explore all services →" }) })
  ] });
}
const works = [{
  name: "Top Tracker",
  tag: "Luxury Hunting",
  imgStyle: "bg-gradient-to-br from-emerald-900/40 to-cyan-900/60"
}, {
  name: "Fabriks",
  tag: "Design Studio",
  imgStyle: "bg-gradient-to-br from-purple-900/40 to-pink-900/60"
}, {
  name: "Iliad",
  tag: "Telecom Leader",
  imgStyle: "bg-gradient-to-br from-blue-900/40 to-cyan-900/60"
}];
function WorkPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto max-w-7xl px-6 py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20 flex flex-wrap items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary", children: "— Selected Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-semibold md:text-6xl", children: [
          "Showcase of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "impact." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors", children: "All work →" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-3", children: works.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 120, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tilt3D, { max: 8, className: "rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/50", "data-cursor": "hover", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 ${w.imgStyle} transition-transform duration-700 group-hover:scale-105` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grid-dots absolute inset-0 opacity-20 mix-blend-overlay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary", children: w.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-3xl font-bold", children: w.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 translate-y-full glass-panel flex flex-col justify-center p-8 transition-transform duration-500 group-hover:translate-y-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl font-bold", children: w.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: w.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-8 inline-flex items-center gap-2 text-primary font-semibold tracking-wide", children: "View Case Study →" })
      ] })
    ] }) }) }, w.name)) })
  ] });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative mx-auto my-32 max-w-5xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glow-ring relative overflow-hidden rounded-[2.5rem] p-12 text-center md:p-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grid-dots absolute inset-0 opacity-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] mix-blend-screen" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mx-auto max-w-2xl font-display text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl", children: [
        "Let's create the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "extraordinary." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-xl text-lg text-muted-foreground", children: "Ready to redefine your digital presence? We are currently taking on select new projects." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-12 inline-flex items-center gap-2 rounded-full gradient-brand px-8 py-4 font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--color-primary)]", children: "Start a project →" }) })
    ] }) })
  ] }) });
}
export {
  Index as component
};
