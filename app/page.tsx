// File: app/page.tsx
"use client";

import BestSellers from "@/components/BestSellers";
import Collections from "@/components/Collections";
import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import SEOHead from "@/components/SEOHead";

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="B&M jewellery – Gold&Diamond"
        description="Discover handcrafted jewelry to elevate your everyday style. Shop timeless earrings, rings, and necklaces."
        url="https://B&M.com"
        image="https://B&M.com/og-cover.jpg"
      />
    <main>
      <Hero />
      <Collections />
      <BestSellers />
      <CustomerReviews />
    </main>
    </>
  );
}
