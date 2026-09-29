import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES } from "@/lib/images";
import { ROUTES } from "@/lib/routes";

export function ServicesSection() {
  return (
    <section
      id="sluzby"
      className="scroll-mt-28 bg-paper-warm py-16 md:py-20"
      aria-labelledby="services-heading"
    >
      <div className="container-wide">
        <SectionHeading
          id="services-heading"
          title="Naše služby"
          description="Služby, ktoré Technické služby Mesta Svit zabezpečujú pre mesto a jeho obyvateľov."
        />

        {/* Editorial mosaic — intentionally uneven proportions */}
        <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:gap-6 xl:gap-7">
          {/* Verejná zeleň — tall image-led */}
          <article className="group flex flex-col overflow-hidden rounded-xl border border-line-soft bg-surface shadow-[0_1px_0_rgba(26,31,28,0.03)] lg:col-span-5">
            <SiteImage
              src={IMAGES.verejnaZelen.src}
              alt={IMAGES.verejnaZelen.alt}
              objectPosition="center 22%"
              sizes="(max-width: 1024px) 100vw, 40vw"
              frameClassName="aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[3/4] lg:min-h-[22rem]"
            />
            <div className="flex flex-col justify-end p-6 md:p-8">
              <h3 className="text-[1.35rem] font-bold tracking-tight text-ink md:text-2xl">
                Verejná zeleň
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                Údržba verejnej zelene, čistenie mesta, mestský mobiliár a
                starostlivosť o mestské lesy.
              </p>
              <Link
                href={ROUTES.verejnaZelen}
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-base font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                Viac informácií
                <ArrowRight className="link-arrow h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>

          {/* Odpadové hospodárstvo — larger / wider image-led */}
          <article className="group overflow-hidden rounded-xl border border-line-soft bg-surface shadow-[0_1px_0_rgba(26,31,28,0.03)] lg:col-span-7">
            <SiteImage
              src={IMAGES.odpadPrimary.src}
              alt={IMAGES.odpadPrimary.alt}
              objectPosition="center 38%"
              sizes="(max-width: 1024px) 100vw, 55vw"
              frameClassName="aspect-[16/10] w-full lg:aspect-[16/9]"
            />
            <div className="p-6 md:p-8">
              <h3 className="text-[1.35rem] font-bold tracking-tight text-ink md:text-2xl">
                Odpadové hospodárstvo
              </h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                Zber komunálneho a separovaného odpadu, zberný dvor, biologický
                odpad a kompostáreň.
              </p>
              <Link
                href={ROUTES.odpadoveHospodarstvo}
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-base font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                Odpadové hospodárstvo
                <ArrowRight className="link-arrow h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>

          {/* Verejné osvetlenie — horizontal editorial band
              (lighting photo not yet on disk; restrained tonal panel) */}
          <article className="group overflow-hidden rounded-xl border border-line-soft bg-surface shadow-[0_1px_0_rgba(26,31,28,0.03)] lg:col-span-8">
            <div className="grid h-full sm:grid-cols-[minmax(9rem,0.38fr)_1fr]">
              <div
                className="relative flex min-h-[9rem] items-end bg-[linear-gradient(160deg,#2a5f6a_0%,#3d6a58_55%,#2f6b4f_100%)] p-5 sm:min-h-full"
                aria-hidden
              >
                <Lightbulb
                  className="h-10 w-10 text-white/35 transition-transform duration-500 group-hover:scale-105 sm:h-12 sm:w-12"
                  strokeWidth={1.25}
                />
              </div>
              <div className="flex flex-col justify-center gap-5 p-6 md:p-8 lg:px-9">
                <div>
                  <p className="section-eyebrow">Technika a komunikácie</p>
                  <h3 className="mt-2.5 text-[1.25rem] font-bold tracking-tight text-ink md:text-[1.45rem]">
                    Verejné osvetlenie a technika
                  </h3>
                  <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
                    Správa miestnych komunikácií, verejného osvetlenia, parkovísk
                    a verejných priestranstiev.
                  </p>
                </div>
                <Link
                  href={ROUTES.verejneOsvetlenie}
                  className="inline-flex min-h-11 w-fit items-center gap-2 text-base font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  Viac informácií
                  <ArrowRight className="link-arrow h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </article>

          {/* Pohrebné — calm typographic card */}
          <article className="flex flex-col justify-between rounded-xl border border-line-soft bg-moss px-6 py-8 lg:col-span-4 md:px-8 md:py-9">
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted">
                Dôstojná starostlivosť
              </p>
              <h3 className="mt-4 text-[1.35rem] font-bold leading-snug tracking-tight text-ink md:text-2xl">
                Pohrebné a cintorínske služby
              </h3>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">
                Pohrebné služby a komplexná starostlivosť spojená so správou
                mestského pohrebiska.
              </p>
            </div>
            <Link
              href={ROUTES.pohrebneSluzby}
              className="mt-8 inline-flex min-h-11 w-fit items-center gap-2 border-b border-ink/20 pb-1 text-base font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Viac informácií
              <ArrowRight className="link-arrow h-4 w-4" aria-hidden />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
