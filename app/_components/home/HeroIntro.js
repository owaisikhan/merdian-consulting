"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

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
          "[data-hero-blurb]",
          { opacity: 0, y: 20, duration: 0.6 },
          "-=0.35",
        )
        .from(
          "[data-hero-cta]",
          { opacity: 0, y: 16, duration: 0.5 },
          "-=0.3",
        )
        .from(
          "[data-hero-visual]",
          { opacity: 0, y: 20, scale: 0.96, duration: 0.7 },
          "-=0.5",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="mx-auto max-w-6xl px-4 py-16 sm:py-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1
            data-hero-heading
            className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl"
          >
            {tagline}
          </h1>
          <p
            data-hero-blurb
            className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 lg:mx-0"
          >
            {blurb}
          </p>
          <div
            data-hero-cta
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link
              href="/intake"
              className="inline-block rounded-md bg-primary-600 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-primary-700"
            >
              Start Your Project
            </Link>
            <a
              href="#services"
              className="inline-block rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition hover:-translate-y-0.5 hover:border-neutral-400"
            >
              Explore Services
            </a>
          </div>
        </div>
        <div data-hero-visual className="relative mx-auto aspect-[3/2] w-full max-w-lg overflow-hidden rounded-2xl lg:mx-0">
          <Image
            src="/hero.png"
            alt="Illustration of a technology dashboard and development tools"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
