// File: components/CollectionImage.tsx
"use client";

interface CollectionImageProps {
  src: string;
  alt?: string;
  width: string;
  height: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const CollectionImage = ({ src, alt, width, height, top, left, right, bottom }: CollectionImageProps) => {
  return (
    <img
      src={src}
      alt={alt || "Collection image"}
      className={`absolute ${top || ""} ${left || ""} ${right || ""} ${bottom || ""}`}
      style={{
        width,
        height,
        objectFit: "cover"
      }}
    />
  );
};

export default CollectionImage;
