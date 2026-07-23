"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { createClient } from "@/app/_lib/supabase-auth";

export default function AdminNavbar() {
  const navRef = useRef(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      );
    });

    return () => ctx.revert();
  }, []);

  async function handleLogout() {
    setIsLoggingOut(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  }

  return (
    <nav
      ref={navRef}
      data-admin-animate
      className="border-b border-neutral-200 bg-white px-4 py-4"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/admin" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 text-sm font-bold text-white shadow-sm">
            M
          </span>
          <span className="text-lg font-semibold text-neutral-900">
            Meridian <span className="font-normal text-neutral-500">Admin</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/admin/settings"
            className="text-sm font-medium text-neutral-600 hover:text-primary-600"
          >
            Settings
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="cursor-pointer rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoggingOut ? "Logging out…" : "Log Out"}
          </button>
        </div>
      </div>
    </nav>
  );
}
