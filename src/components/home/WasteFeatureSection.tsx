import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";
import { Reveal } from "@/components/ui/Reveal";
import { SEPARATED_WASTE_CALENDAR_2026 } from "@/lib/content/organization";
import { IMAGES } from "@/lib/images";
import { HOME_SECTIONS } from "@/lib/routes";

const LINKS = [
  {
    label: "Kalendár zberu",
    href: SEPARATED_WASTE_CALENDAR_2026,
    external: true,
  },
  { label: "Zberný dvor", href: HOME_SECTIONS.collectionYard },
  { label: "Kompostáreň", href: HOME_SECTIONS.waste },
  { label: "Ako triediť odpad", href: HOME_SECTIONS.waste },
] as const;

export function WasteFeatureSection() {
  return (
    <section
      id="odpadove-hospodarstvo"
      className="scroll-mt-28 bg-surface py-20 md:py-28"
      aria-labelledby="waste-heading"
    >
      <div className="container-wide">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16 xl:gap-20">
          <Reveal className="group relative min-h-[22rem]">
            <SiteImage
              src={IMAGES.odpadFeature.src}
              alt={IMAGES.odpadFeature.alt}
              objectPosition="center 32%"
              sizes="(max-width: 1024px) 100vw, 58vw"
              frameClassName="aspect-[4/5] w-full rounded-xl border border-line-soft sm:aspect-[5/4] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:min-h-[34rem]"
            />
          </Reveal>

          <div className="flex flex-col justify-center py-1 lg:py-4">
            <Reveal>
              <h2
                id="waste-heading"
                className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.65rem] md:leading-[1.12]"
              >
                Odpadové hospodárstvo
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                Zber a triedenie separovaného odpadu, zber a odvoz TKO, zber a
                spracovanie BRO a KBRO, prevádzka Zberného dvora a Kompostárne.
              </p>
            </Reveal>

            <ul className="mt-9 border-t border-line">
              {LINKS.map((link) => (
                <li key={link.label} className="border-b border-line">
                  <Link
                    href={link.href}
                    {...("external" in link && link.external
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className="group flex min-h-[3.5rem] items-center justify-between gap-4 py-4 text-[1.05rem] font-semibold text-ink transition-colors hover:text-accent"
                  >
                    {link.label}
                    <ArrowRight
                      className="link-arrow h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-8 inline-flex min-h-11 w-fit cursor-default items-center gap-2 text-base font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Všetky informácie o odpadoch
              <ArrowRight className="link-arrow h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
