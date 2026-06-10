import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function Tilt3D({
  children,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };
    const animate = () => {
      currentX = lerp(currentX, targetX, 0.1);
      currentY = lerp(currentY, targetY, 0.1);
      el.style.transform = `perspective(1000px) rotateX(${currentX}deg) rotateY(${currentY}deg)`;
      rafId = requestAnimationFrame(animate);
    };
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetX = -(y / rect.height) * 15;
      targetY = x / rect.width * 15;
    };
    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(animate);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      style: {
        transformStyle: "preserve-3d",
        willChange: "transform"
      },
      className: `transition-shadow hover:shadow-elegant ${className}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: "translateZ(30px)" }, children })
    }
  );
}
function Parallax({
  children,
  speed = 0.1,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let targetY = 0;
    let currentY = 0;
    let rafId = 0;
    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };
    const animate = () => {
      currentY = lerp(currentY, targetY, 0.05);
      el.style.transform = `translateY(${currentY}px)`;
      rafId = requestAnimationFrame(animate);
    };
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      targetY = -center * speed;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    rafId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className, style: { willChange: "transform" }, children });
}
export {
  Parallax as P,
  Tilt3D as T
};
