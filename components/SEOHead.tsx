// File: components/SEOHead.tsx
"use client";

import Head from "next/head";

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

const SEOHead = ({
  title = "Lux Jewel – Handcrafted Elegance",
  description = "Discover timeless, handcrafted jewelry designed to elevate your everyday style. Shop exclusive rings, necklaces, and earrings.",
  url = "https://luxjewel.com",
  image = "https://luxjewel.com/og-image.png",
}: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEOHead;
