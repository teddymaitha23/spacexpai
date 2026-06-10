import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => {
      const io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        },
        { threshold: 0.15, rootMargin: "-10% 0px" }
      );
      io.observe(el);
      return () => io.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      style: { transitionDelay: `${delay}ms` },
      className: `reveal-init ${shown ? "reveal-active" : ""} ${className}`,
      children
    }
  );
}
export {
  Reveal as R
};
