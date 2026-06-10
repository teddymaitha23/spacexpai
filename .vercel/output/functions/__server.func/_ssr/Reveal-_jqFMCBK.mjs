import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as useInView, m as motion } from "../_libs/framer-motion.mjs";
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 30, filter: "blur(10px)" },
      animate: isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(10px)" },
      transition: {
        duration: 0.8,
        delay: delay / 1e3,
        ease: [0.22, 1, 0.36, 1]
        // Smooth elegant ease
      },
      className,
      children
    }
  );
}
export {
  Reveal as R
};
