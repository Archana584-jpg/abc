import Image from "next/image";
import React, { CSSProperties } from "react";

interface CustomImageProps {
   preview?: boolean;
   width?: number;
   height?: number;
   src: string;
   className?: string;
   style?: CSSProperties;
   alt?: string;
   uniqueKey?: any;
   sizes?: any;
   imgClassName?: any;
   fill?: boolean;
   priority?: boolean;
   imgStyle?: CSSProperties;
}

const CustomImage = ({
   uniqueKey,
   width,
   height,
   src,
   className,
   style,
   alt,
   sizes,
   fill,
   priority,
}: CustomImageProps) => {
   return (
      <Image
         key={uniqueKey}
         fill={fill}
         src={src}
         width={width}
         height={height}
         alt={alt || ""}
         className={className}
         sizes={sizes}
         priority={priority}
         style={{ verticalAlign: "bottom", ...style }}
      />
   );
};

export default CustomImage;
