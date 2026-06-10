import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function Tilt3D({ children, className = "", max = 12, glare = true, scale = 1.02 }) {
  const ref = reactExports.useRef(null);
  const glareRef = reactExports.useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * max * 2;
    const ry = (px - 0.5) * max * 2;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, oklch(0.95 0.15 200 / 0.25), transparent 55%)`;
      glareRef.current.style.opacity = "1";
    }
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    if (glareRef.current) glareRef.current.style.opacity = "0";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      onMouseMove: onMove,
      onMouseLeave: onLeave,
      style: {
        transformStyle: "preserve-3d",
        transition: "transform 300ms cubic-bezier(0.22, 1, 0.36, 1)"
      },
      className: `relative will-change-transform ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: "translateZ(40px)", transformStyle: "preserve-3d" }, children }),
        glare && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: glareRef,
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 mix-blend-screen"
          }
        )
      ]
    }
  );
}
function Magnetic({
  children,
  className = "",
  strength = 0.35
}) {
  const ref = reactExports.useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      onMouseMove: onMove,
      onMouseLeave: onLeave,
      style: { transition: "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)" },
      className: `inline-block will-change-transform ${className}`,
      children
    }
  );
}
function Parallax({
  children,
  speed = 0.15,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  useScrollParallax(ref, speed);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className, style: { willChange: "transform" }, children });
}
function useScrollParallax(ref, speed) {
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${-center * speed}px, 0)`;
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, speed]);
}
export {
  Magnetic as M,
  Parallax as P,
  Tilt3D as T
};
