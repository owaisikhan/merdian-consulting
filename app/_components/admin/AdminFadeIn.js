"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function AdminFadeIn({ children, className }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from("[data-admin-fade]", {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.08,
      }).from(
        "tbody tr",
        { opacity: 0, y: 10, duration: 0.4, stagger: 0.04 },
        "-=0.2",
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
