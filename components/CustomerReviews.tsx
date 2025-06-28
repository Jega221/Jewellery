// File: components/CustomerReviews.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    text: "Absolutely in love with my necklace! The quality is amazing and it came beautifully packaged. I ordered via WhatsApp and it was so easy. Highly recommend!",
    name: "Sarah",
    location: "Famagusta",
    avatar: "/assets/Frame1.png",
  },
  {
    text: "Absolutely in love with my necklace! The quality is amazing and it came beautifully packaged. I ordered via WhatsApp and it was so easy. Highly recommend!",
    name: "Jane",
    location: "kyrenia",
    avatar: "/assets/Frame2.png",
  },
  {
    text: "Absolutely in love with my necklace! The quality is amazing and it came beautifully packaged. I ordered via WhatsApp and it was so easy. Highly recommend!",
    name: "chloe",
    location: "Magusa",
    avatar: "/assets/Frame3.png",
  },
];

const CustomerReviews = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 85%",
      },
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="bg-[var(--color-off-white)] px-6 sm:px-10 lg:px-[140px] py-28 text-[var(--color-black)]">
      {/* Section title */}
      <div className="mb-14">
        <h2
          className="text-4xl sm:text-5xl font-bold mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Customer reviews
        </h2>
        <p
          className="text-lg font-medium py-4"
          style={{ fontFamily: "var(--font-subtext)" }}
        >
          What Our Customers Are Saying
        </p>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            ref={el => { cardsRef.current[index] = el; }}
            className="bg-[var(--color-soft-green)] p-12 flex flex-col gap-6"
          >
            <p
              className="text-base leading-relaxed relative"
              style={{ fontFamily: "var(--font-subtext)" }}
            >
              <span className="text-3xl font-serif">“</span>
              {review.text}
              <span className="text-3xl font-serif">”</span>
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={review.avatar}
                alt={review.name}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <p
                  className="text-base font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  –{review.name}
                </p>
                <p className="text-sm text-[var(--color-black)]">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
