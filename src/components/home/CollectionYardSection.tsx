import Link from "next/link";
import { Clock3, MapPin } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";
import { CONTACTS } from "@/lib/content/contacts";
import { IMAGES } from "@/lib/images";
import { ROUTES } from "@/lib/routes";

export function CollectionYardSection() {
  const yard = CONTACTS.collectionYard;

  return (
    <section
      className="bg-paper-warm py-20 md:py-24"
      aria-labelledby="yard-heading"
    >
      <div className="container-wide">
        <div className="overflow-hidden rounded-xl border border-line-soft bg-surface shadow-[0_1px_0_rgba(26,31,28,0.03)] lg:grid lg:grid-cols-[1.15fr_0.95fr]">
          <div className="group">
            <SiteImage
              src={IMAGES.zbernyDvor.src}
              alt={IMAGES.zbernyDvor.alt}
              objectPosition="center 32%"
              sizes="(max-width: 1024px) 100vw, 55vw"
              frameClassName="aspect-[16/11] w-full lg:aspect-auto lg:min-h-[26rem] xl:min-h-[28rem]"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-9 md:px-10 md:py-11 lg:px-12 lg:py-12">
            <p className="section-eyebrow">Praktické informácie</p>
            <h2
              id="yard-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-[2.15rem] md:leading-tight"
            >
              {yard.name}
            </h2>

            <div className="mt-8 space-y-6 border-t border-line pt-7">
              <div className="flex gap-3.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                  <MapPin className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                    Adresa
                  </p>
                  <p className="mt-1.5 text-lg font-semibold leading-snug text-ink">
                    {yard.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                  <Clock3 className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                    Otváracie hodiny
                  </p>
                  <p className="mt-1.5 text-lg font-semibold text-ink">
                    {yard.hoursLabel}
                  </p>
                  <p className="text-lg font-semibold tabular-nums text-ink">
                    {yard.hoursValue}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Link
                href={`${ROUTES.odpadoveHospodarstvo}#zberny-dvor`}
                className="btn-primary min-h-12 px-6"
              >
                Čo môžem odovzdať
              </Link>
              <Link
                href={`${ROUTES.odpadoveHospodarstvo}#zberny-dvor`}
                className="inline-flex min-h-11 items-center justify-center px-1 text-base font-semibold text-muted transition-colors hover:text-accent"
              >
                Viac informácií
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
