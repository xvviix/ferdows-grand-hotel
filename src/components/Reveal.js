"use client";

import { useEffect, useRef } from "react";

/**
 * Reveal — a tiny scroll-into-view animation wrapper.
 * Adds `.inview` to the element once it enters the viewport, which the CSS
 * `.reveal` rule turns into a fade/slide-up. A `delay` prop maps to a CSS
 * custom property so siblings can stagger.
 */
export default function Reveal({ children, as: Tag = "div", delay = 0, className = "", ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("inview");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ "--d": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
