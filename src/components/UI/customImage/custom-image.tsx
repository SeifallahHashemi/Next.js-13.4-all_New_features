import React from "react";
import { CustomImageProps } from "../../../../typing";
import Image from "next/image";

const CustomImage = ({
  src,
  alt,
  priority,
  isSquare,
  sizes,
}: CustomImageProps) => {
  return (
    <Image
      className="w-full h-auto mx-auto rounded-xl object-cover"
      src={src}
      alt={alt}
      priority={!!priority}
      width={isSquare ? 650 : 2560}
      height={isSquare ? 650 : 1440}
      sizes={sizes || "(min-width: 768px) 480px"}
    />
  );
};

export default CustomImage;
