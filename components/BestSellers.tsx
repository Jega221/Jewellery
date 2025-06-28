// File: components/BestSellers.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bestSellers = [
  {
    src: "/assets/diamond.png",
    label: "Diamond",
  },
  {
    src: "/assets/gold.png",
    label: "Gold",
  },
  {
    src: "/assets/silver.png",
    label: "Silver",
  },
  {
    src: "/assets/goldpeace.png",
    label: "Gold Peace",
  },
];

const BestSellers = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 80%",
      },
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
        
        y: 30,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section className="bg-[var(--color-brown)] text-[var(--color-off-white)] px-6 sm:px-10 lg:px-[140px] py-28">
      {/* Section heading */}
      <div className="mb-12" ref={titleRef}>
        <h2
          className="text-4xl sm:text-5xl font-bold mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Best Sellers
        </h2>
        <p
          className="max-w-2xl text-base sm:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-subtext)" }}
        >
          Discover handcrafted jewelry that tells your story. From radiant rings
          to graceful necklaces, our pieces are designed to shine with you.
        </p>
      </div>

      {/* Sub-label */}
      <h3
        className="text-xl font-medium mb-8"
        style={{ fontFamily: "var(--font-subtext)" }}
      >
        Browse collection
      </h3>

      {/* Product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((item, index) => (
          <div
            key={index}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="bg-[var(--color-off-white)] text-[var(--color-black)] p-12 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={item.src}
              alt={item.label}
              width={180}
              height={180}
              className="object-contain mb-12"
            />
            <span
              className="text-lg font-medium"
              style={{ fontFamily: "var(--font-subtext)" }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
