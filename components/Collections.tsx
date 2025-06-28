"use client";

import Image from "next/image";
import CollectionImage from "./CollectionImage";

const collectionImages = [
  "/assets/collection1.png",
  "/assets/collection2.png",
  "/assets/collection3.png",
  "/assets/collection4.png",
  "/assets/collection5.png",
  "/assets/collection6.png",
];

const Collections = () => {
  return (
    <section className="relative px-6 sm:px-10 lg:px-[140px] bg-[var(--color-off-white)] py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Transparent vector background */}
      <img
        src={"/assets/collectionbg.png"}
        alt="Vector background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      {/* Title centered */}
      <div className="relative z-10 text-center mb-12 lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-black)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our signature <br /> Collections
        </h2>
      </div>

      {/* Grid for small/medium screens */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6">
        {collectionImages.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden transform-gpu z-10 hover:scale-105 transition-transform duration-500"
          >
            <Image
        src={src}
        alt={`Collection ${index + 1}`}
        width={400}
        height={400}
        className="w-full h-[400px] object-cover rounded-xl"
      />
          </div>
        ))}
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:block relative z-10 w-full h-[710px]">
        <CollectionImage src="/assets/collection1.png" width={325} height={446} top="top-[-70px]" left="left-[0px]" />
        <CollectionImage src="/assets/collection2.png" width={229} height={230} top="top-[-130px]" left="left-[470px]" />
        <CollectionImage src="/assets/collection3.png" width={246} height={331} top="top-[-40px]" right="right-[0px]" />
        <div className="absolute bottom-[1px] left-[20px] w-[174px] h-[301px] overflow-hidden transform-gpu z-10 hover:scale-105 transition-transform duration-500 origin-bottom">
          <CollectionImage src="/assets/collection4.png" width={174} height={301} />
        </div>
        <div className="absolute bottom-[30px] left-[470px] w-[229px] h-[231px] overflow-hidden transform-gpu z-10 hover:scale-105 transition-transform duration-500 origin-bottom">
          <CollectionImage src="/assets/collection5.png" width={229} height={231} />
        </div>
        <div className="absolute bottom-[100px] right-[0px] w-[246px] h-[192px] overflow-hidden transform-gpu z-10 hover:scale-105 transition-transform duration-500 origin-bottom">
          <CollectionImage src="/assets/collection6.png" width={246} height={192} />
        </div>
      </div>
    </section>
  );
};

export default Collections;
