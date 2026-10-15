"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type FadeUpProps = {
  as?: ElementType; // render as section, li, figure, etc.
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms — pass index * 80 from grids */
  delay?: number;
};

/**
 * Fade-up on first scroll into view. Users with prefers-reduced-motion
 * get the content instantly visible (no transform, no transition).
 */
export default function FadeUp({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
}: FadeUpProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Reduced motion → skip the observer entirely */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once, then stop watching
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
