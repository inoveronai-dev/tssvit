import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";

export function SeparovanieBannerSection() {
  return (
    <section className="relative" aria-label="Separovanie odpadu">
      {/* Mobile / reduced-motion: static optimized image */}
      <div className="absolute inset-0 md:hidden" aria-hidden>
        <Image
          src={IMAGES.separovanieBanner.src}
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
        />
      </div>

      {/* Desktop: fixed-background parallax */}
      <div
        className="separovanie-banner-bg absolute inset-0 hidden md:block"
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,18,14,0.52)_0%,rgba(12,18,14,0.58)_50%,rgba(12,18,14,0.62)_100%)]"
        aria-hidden
      />

      <div className="relative flex min-h-[18rem] items-center justify-center px-6 py-16 sm:min-h-[20rem] sm:py-20 md:min-h-[22rem] md:py-24 lg:min-h-[24rem]">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-balance text-[1.45rem] font-bold leading-[1.25] tracking-tight text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)] sm:text-3xl sm:leading-[1.22] md:text-[2.15rem] md:leading-[1.2] lg:text-[2.35rem]">
            <span className="block">Separovať sa oplatí,</span>
            <span className="mt-1.5 block sm:mt-2">
              separovanie nás nič nestojí
            </span>
            <span className="mt-1.5 block sm:mt-2">
              a chránime naše životné prostredie
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
