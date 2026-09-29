import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";
import { IMAGES } from "@/lib/images";
import { ROUTES } from "@/lib/routes";

const LINKS = [
  { label: "Kalendár zberu", href: `${ROUTES.odpadoveHospodarstvo}#kalendar` },
  { label: "Zberný dvor", href: `${ROUTES.odpadoveHospodarstvo}#zberny-dvor` },
  {
    label: "Kompostáreň",
    href: `${ROUTES.odpadoveHospodarstvo}#kompostaren`,
  },
  {
    label: "Ako triediť odpad",
    href: `${ROUTES.odpadoveHospodarstvo}#triedenie`,
  },
] as const;

export function WasteFeatureSection() {
  return (
    <section
      className="bg-surface py-16 md:py-24"
      aria-labelledby="waste-heading"
    >
      <div className="container-wide">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16 xl:gap-20">
          <div className="group relative min-h-[22rem]">
            <SiteImage
              src={IMAGES.odpadPrimary.src}
              alt={IMAGES.odpadPrimary.alt}
              objectPosition="center 32%"
              sizes="(max-width: 1024px) 100vw, 58vw"
              frameClassName="aspect-[4/5] w-full rounded-xl border border-line-soft sm:aspect-[5/4] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:min-h-[34rem]"
            />
            <div className="absolute bottom-4 right-4 hidden w-[36%] overflow-hidden rounded-lg border border-white/80 shadow-[0_12px_32px_-18px_rgba(26,31,28,0.45)] sm:block lg:bottom-6 lg:right-6">
              <SiteImage
                src={IMAGES.odpadSecondary.src}
                alt={IMAGES.odpadSecondary.alt}
                objectPosition="center 18%"
                sizes="240px"
                zoom={false}
                frameClassName="aspect-[4/3] w-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center py-1 lg:py-4">
            <p className="section-eyebrow">Hlavná služba</p>
            <h2
              id="waste-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.65rem] md:leading-[1.12]"
            >
              Odpadové hospodárstvo
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Informácie o zbere odpadu, triedení, zbernom dvore a kompostárni.
            </p>

            <ul className="mt-9 border-t border-line">
              {LINKS.map((link) => (
                <li key={link.href} className="border-b border-line">
                  <Link
                    href={link.href}
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

            <Link
              href={ROUTES.odpadoveHospodarstvo}
              className="mt-8 inline-flex min-h-11 w-fit items-center gap-2 text-base font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Všetky informácie o odpadoch
              <ArrowRight className="link-arrow h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
