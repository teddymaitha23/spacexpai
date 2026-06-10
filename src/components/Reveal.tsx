import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use a small timeout to ensure hydration completes before observer starts
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

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-init ${shown ? "reveal-active" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
