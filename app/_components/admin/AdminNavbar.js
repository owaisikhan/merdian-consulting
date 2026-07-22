"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function AdminNavbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        opacity: 0,
        y: -16,
        duration: 0.4,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="border-b border-neutral-200 bg-white px-4 py-4"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="text-lg font-semibold text-neutral-900">
          Meridian Admin
        </span>
        <Link
          href="/admin/settings"
          className="text-sm font-medium text-neutral-600 hover:text-primary-600"
        >
          Settings
        </Link>
      </div>
    </nav>
  );
}
