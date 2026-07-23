"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

function HeroCtas({ variant = "default" }) {
  const isOverlay = variant === "overlay";

  return (
    <>
      <Link
        href="/intake"
        className={
          isOverlay
            ? "inline-flex shrink-0 items-center justify-center rounded-full border border-white/40 bg-primary-500/30 px-4 py-2 text-xs font-medium text-white shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-primary-500/40"
            : "inline-block rounded-md bg-primary-600 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-primary-700"
        }
      >
        Start Your Project
      </Link>
      <a
        href="#services"
        className={
          isOverlay
            ? "inline-flex shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/15 px-4 py-2 text-xs font-medium text-white shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/25"
            : "inline-block rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition hover:-translate-y-0.5 hover:border-neutral-400"
        }
      >
        Explore Services
      </a>
    </>
  );
}

export default function HeroIntro({ tagline, blurb }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-heading]", {
        opacity: 0,
        y: 28,
        duration: 0.7,
      })
        .from(
          "[data-hero-visual]",
          { opacity: 0, y: 20, scale: 0.96, duration: 0.7 },
          "-=0.4",
        )
        .from(
          "[data-hero-blurb]",
          { opacity: 0, y: 20, duration: 0.6 },
          "-=0.4",
        )
        .from(
          "[data-hero-cta]",
          { opacity: 0, y: 16, duration: 0.5 },
          "-=0.3",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="mx-auto max-w-6xl px-4 py-16 sm:py-24"
    >
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
        <h1
          data-hero-heading
          className="order-1 text-center text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:order-none lg:col-start-1 lg:row-start-1 lg:text-left"
        >
          {tagline}
        </h1>

        <div
          data-hero-visual
          className="relative order-2 aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-sm lg:order-none lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:max-w-lg"
        >
          <div className="absolute inset-0 origin-center scale-[1.15] -translate-x-[7%] lg:scale-100 lg:translate-x-0">
            <Image
              src="/hero.png"
              alt="Illustration of a technology dashboard and development tools"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 bg-neutral-900/30 p-4 lg:hidden">
            <HeroCtas variant="overlay" />
          </div>
        </div>

        <p
          data-hero-blurb
          className="order-3 mx-auto max-w-2xl text-center text-lg text-neutral-600 lg:order-none lg:col-start-1 lg:row-start-2 lg:mx-0 lg:text-left"
        >
          {blurb}
        </p>

        <div
          data-hero-cta
          className="order-4 hidden flex-col justify-center gap-4 sm:flex-row lg:order-none lg:col-start-1 lg:row-start-3 lg:flex lg:justify-start"
        >
          <HeroCtas />
        </div>
      </div>
    </section>
  );
}
