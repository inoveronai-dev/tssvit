import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteImage } from "@/components/ui/SiteImage";
import { ORGANIZATION } from "@/lib/content/organization";
import { IMAGES } from "@/lib/images";
import { ROUTES } from "@/lib/routes";

/** Prefer full-viewport / retina widths up to the 4K source */
const HERO_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1280px) 100vw, (max-width: 1920px) 100vw, 3840px";

export function HeroSection() {
  return (
    <section className="border-b border-line bg-surface">
      {/* Mobile: image then text — readability first */}
      <div className="md:hidden">
        <SiteImage
          src={IMAGES.heroSvit.src}
          alt={IMAGES.heroSvit.alt}
          priority
          quality={95}
          zoom={false}
          sizes={HERO_SIZES}
          objectPosition="center 45%"
          frameClassName="relative aspect-[16/10] w-full"
        />
        <div className="container-site py-8">
          <h1 className="max-w-[18ch] text-[2rem] font-bold leading-[1.15] tracking-tight text-ink">
            {ORGANIZATION.name}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            {ORGANIZATION.missionShort}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#sluzby" className="min-h-12 px-6">
              Naše služby
            </ButtonLink>
            <ButtonLink
              href={ROUTES.kontakt}
              variant="secondary"
              className="min-h-12 px-6"
            >
              Kontakt
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Desktop: immersive civic hero */}
      <div className="relative hidden min-h-[78vh] overflow-hidden md:block lg:min-h-[82vh]">
        <SiteImage
          src={IMAGES.heroSvit.src}
          alt={IMAGES.heroSvit.alt}
          priority
          quality={95}
          zoom={false}
          sizes={HERO_SIZES}
          objectPosition="center 48%"
          frameClassName="absolute inset-0 z-0 h-full w-full"
        />
        <div
          className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(8,16,13,0.82)_0%,rgba(8,16,13,0.68)_24%,rgba(8,16,13,0.36)_42%,rgba(8,16,13,0.12)_58%,rgba(8,16,13,0)_72%)]"
          aria-hidden
        />
        <div className="relative z-20 container-site flex min-h-[78vh] items-end pb-[calc(4rem+9vh)] pt-28 lg:min-h-[82vh] lg:pb-[calc(5rem+9vh)] lg:pt-32 xl:pb-[calc(6rem+9vh)]">
          <div className="max-w-[32rem] text-white lg:max-w-[36rem]">
            <h1 className="max-w-[18ch] text-[2.65rem] font-bold leading-[1.1] tracking-tight text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)] lg:text-[3.15rem] lg:leading-[1.08] xl:text-[3.35rem]">
              {ORGANIZATION.name}
            </h1>
            <p className="mt-7 max-w-[30rem] text-[1.08rem] leading-[1.75] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)] lg:mt-8 lg:text-[1.125rem] lg:leading-[1.8]">
              {ORGANIZATION.missionShort}
            </p>
            <div className="mt-11 flex flex-wrap gap-4 lg:mt-12">
              <ButtonLink
                href="/#sluzby"
                className="min-h-[3.25rem] px-8 text-[1.0625rem] tracking-wide"
              >
                Naše služby
              </ButtonLink>
              <a
                href={ROUTES.kontakt}
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-lg border-2 border-white/90 bg-white/16 px-8 text-[1.0625rem] font-semibold tracking-wide text-white shadow-[0_1px_10px_rgba(0,0,0,0.22)] transition-colors hover:border-white hover:bg-white/28"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
