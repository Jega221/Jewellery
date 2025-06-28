// File: components/CollectionImage.tsx
"use client";

import Image from "next/image";

interface CollectionImageProps {
  src: string;
  alt?: string;
  width: number;    // number instead of string
  height: number;   // number instead of string
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const CollectionImage = ({
  src,
  alt = "Collection image",
  width,
  height,
  top = "",
  left = "",
  right = "",
  bottom = "",
}: CollectionImageProps) => {
  return (
    <div
      className={`absolute ${top} ${left} ${right} ${bottom}`}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
};

export default CollectionImage;
