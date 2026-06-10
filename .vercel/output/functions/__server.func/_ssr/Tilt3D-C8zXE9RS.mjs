import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useMotionValue, a as useSpring, b as useTransform, m as motion } from "../_libs/framer-motion.mjs";
function Tilt3D({ children, className = "", max = 5, scale = 1.01 }) {
  const ref = reactExports.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 40, stiffness: 200, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const rotateX = useTransform(springY, [-0.5, 0.5], [max, -max]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-max, max]);
  const scaleSpring = useSpring(1, springConfig);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    x.set(px);
    y.set(py);
    scaleSpring.set(scale);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
    scaleSpring.set(1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      onMouseMove: onMove,
      onMouseLeave: onLeave,
      style: {
        rotateX,
        rotateY,
        scale: scaleSpring,
        transformStyle: "preserve-3d"
      },
      className: `relative will-change-transform ${className}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: "translateZ(20px)", transformStyle: "preserve-3d" }, children })
    }
  );
}
function Parallax({
  children,
  speed = 0.1,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const y = useMotionValue(0);
  const springY = useSpring(y, { damping: 30, stiffness: 100, mass: 0.8 });
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      y.set(-center * speed);
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
  }, [speed, y]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ref, className, style: { y: springY, willChange: "transform" }, children });
}
export {
  Parallax as P,
  Tilt3D as T
};
