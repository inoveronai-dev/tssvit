import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteImage } from "@/components/ui/SiteImage";
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
          <p className="section-eyebrow">Technické služby Mesta Svit</p>
          <h1 className="mt-3 max-w-[18ch] text-[2rem] font-bold leading-[1.15] tracking-tight text-ink">
            Každodenné služby pre fungujúce mesto.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            Odpadové hospodárstvo, starostlivosť o verejnú zeleň, komunikácie,
            verejné osvetlenie a ďalšie služby pre obyvateľov mesta Svit.
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
              Kontaktovať nás
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Desktop: cinematic hero — layout unchanged */}
      <div className="relative hidden min-h-[30rem] overflow-hidden md:block lg:min-h-[34rem] xl:min-h-[36rem]">
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
          className="absolute inset-0 z-10 bg-[linear-gradient(105deg,rgba(16,22,18,0.52)_0%,rgba(16,22,18,0.28)_24%,rgba(16,22,18,0.1)_44%,transparent_62%)]"
          aria-hidden
        />
        <div className="relative z-20 container-site flex min-h-[30rem] items-center py-16 lg:min-h-[34rem] lg:py-20 xl:min-h-[36rem]">
          <div className="max-w-[30rem] text-white lg:max-w-[34rem]">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white/85">
              Technické služby Mesta Svit
            </p>
            <h1 className="mt-5 max-w-[16ch] text-[2.35rem] font-bold leading-[1.12] tracking-tight drop-shadow-[0_1px_12px_rgba(0,0,0,0.25)] lg:text-[2.85rem] lg:leading-[1.1]">
              Každodenné služby pre fungujúce mesto.
            </h1>
            <p className="mt-5 max-w-[28rem] text-[1.05rem] leading-relaxed text-white/92 drop-shadow-[0_1px_8px_rgba(0,0,0,0.2)] lg:text-[1.1rem]">
              Odpadové hospodárstvo, starostlivosť o verejnú zeleň, komunikácie,
              verejné osvetlenie a ďalšie služby pre obyvateľov mesta Svit.
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <ButtonLink
                href="/#sluzby"
                className="min-h-12 px-7 text-[1.05rem]"
              >
                Naše služby
              </ButtonLink>
              <a
                href={ROUTES.kontakt}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/55 bg-white/12 px-7 text-[1.05rem] font-semibold text-white transition-colors hover:bg-white/20"
              >
                Kontaktovať nás
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
