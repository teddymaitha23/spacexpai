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
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      style: { transitionDelay: `${delay}ms` },
      className: `transition-all duration-1000 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} ${className}`,
      children
    }
  );
}
export {
  Reveal as R
};
