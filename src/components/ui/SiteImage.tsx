import type { StaticImageData } from "next/image";
import Image from "next/image";

type SiteImageProps = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  frameClassName?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
  zoom?: boolean;
  quality?: number;
};

export function SiteImage({
  src,
  alt,
  className = "",
  frameClassName = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  objectPosition = "center",
  zoom = true,
  quality = 85,
}: SiteImageProps) {
  const hasPosition = /\b(absolute|relative|fixed|sticky)\b/.test(frameClassName);
  const frame = hasPosition
    ? frameClassName
    : `relative ${frameClassName}`.trim();

  return (
    <div className={`overflow-hidden ${frame}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={quality}
        sizes={sizes}
        className={`${zoom ? "img-zoom " : ""}object-cover ${className}`}
        style={{ objectPosition }}
      />
    </div>
  );
}
