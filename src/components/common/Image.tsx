import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useState } from "react";

interface ImageProps extends Omit<NextImageProps, "src"> {
  src: string;
  alt: string;
  fallback?: string;
}

export default function Image({
  src,
  alt,
  fallback = "/common/logo.png",
  className = "",
  ...props
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <NextImage
      src={imgSrc}
      alt={alt}
      className={`max-w-full h-auto ${className}`}
      onError={() => setImgSrc(fallback)}
      {...props}
    />
  );
}

