// File: app/shop/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const jewelryItems = [
  {
    id: 1,
    name: "Gold Necklace",
    price: 120,
    image: "/assets/gold111.png",
  },
  {
    id: 2,
    name: "Diamond Ring",
    price: 250,
    image: "/assets/longchain.png",
  },
  {
    id: 3,
    name: "Silver Bracelet",
    price: 90,
    image: "/assets/gold12.png",
  },
  {
    id: 4,
    name: "Silver Piece",
    price: 110,
    image: "/assets/goldpeace.png",
  },
  {
    id: 5,
    name: "Gold Necklace",
    price: 120,
    image: "/assets/gold21.png",
  },
  {
    id: 6,
    name: "Diamond Ring",
    price: 250,
    image: "/assets/gold11.png",
  },
  {
    id: 7,
    name: "Silver Bracelet",
    price: 90,
    image: "/assets/gold22.png",
  },
  {
    id: 8,
    name: "Silver Piece",
    price: 110,
    image: "/assets/goldpeace1.png",
  },
];

const ShopPage = () => {
  return (
    <main className="min-h-screen px-6 sm:px-10 lg:px-[140px] py-32 bg-[var(--color-white)] text-[var(--color-black)]">
      <h1
        className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Shop All Jewelry
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-2">
        {jewelryItems.map((item) => (
          <Link
            href={`/product/${item.id}`}
            key={item.id}
            className="group flex flex-col items-left text-left"
          >
            {/* Image */}
            <div className="w-full aspect-square bg-[var(--color-off-white)] overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* Name and Price */}
            <div className="mt-4">
                <h3
                    className="text-lg font-semibold"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    {item.name}
                </h3>
                <p
                    className="text-base text-[var(--color-brown)]"
                    style={{ fontFamily: "var(--font-subtext)" }}
                >
                    ${item.price}
                </p>
                </div>

          </Link>
        ))}
      </div>
    </main>
  );
};

export default ShopPage;
