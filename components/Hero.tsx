"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image
import gsap from "gsap";

const Hero = () => {
  const headingRef = useRef(null);
  const rotateRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    gsap.to(rotateRef.current, {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
    });
  }, []);

  return (
    <section className="px-6 sm:px-10 lg:px-[140px] relative bg-[var(--color-brown)] text-[var(--color-off-white)] h-screen overflow-hidden">
      <div className="h-full flex flex-col md:flex-row items-center justify-end md:justify-between">
        {/* Left side */}
        <div className="relative z-10 md:w-1/2 w-full text-left mt-24 sm:mt-6 pb-[450px] md:pb-0">
          <div className="h-[2px] w-18 bg-white mb-10" />
          <h1
            ref={headingRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-10xl font-bold leading-tight mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Everyday <br /> Classics
          </h1>

          <Link
            href="/shop"
            className="inline-block bg-[var(--color-white)] text-[var(--color-black)]
                       text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 
                       rounded-md shadow hover:bg-opacity-90 transition"
            style={{ fontFamily: "var(--font-subtext)" }}
          >
            Shop Now
          </Link>
        </div>

        {/* Main image + floating elements */}
        <div className="absolute bottom-0 md:left-1/2 md:-translate-x-1/2 md:w-[40%] w-full h-auto">
          <Image
            src="/assets/hero.png"
            alt="Jewelry Model"
            width={600}
            height={600}
            className="object-contain w-full h-full mx-auto"
            priority
          />

          <Image
            ref={rotateRef}
            src="/assets/round-text.svg"
            alt="Rotated Text"
            width={160}
            height={160}
            className="absolute top-[42%] left-1/2 -translate-x-[67%]
                       sm:w-40 sm:h-40 md:w-50 md:h-50"
          />

          <Image
            src="/assets/floating.png"
            alt="Floating Ring"
            width={80}
            height={80}
            className="absolute bottom-10 right-[-16rem] animate-float hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
