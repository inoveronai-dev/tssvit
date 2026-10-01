import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";
import { JOBS } from "@/lib/content/jobs";
import { IMAGES } from "@/lib/images";
import { ROUTES } from "@/lib/routes";

export function EmploymentSection() {
  return (
    <section
      className="bg-surface py-16 md:py-20"
      aria-labelledby="jobs-heading"
    >
      <div className="container-wide">
        <div className="overflow-hidden rounded-xl border border-line-soft bg-paper-warm lg:grid lg:grid-cols-[0.95fr_1.15fr]">
          <div className="relative flex flex-col justify-between gap-10 p-7 sm:p-9 lg:p-11 xl:p-12">
            <div className="relative z-10 max-w-md">
              <h2
                id="jobs-heading"
                className="text-3xl font-bold tracking-tight text-ink sm:text-[2.15rem] md:leading-tight"
              >
                Voľné pracovné miesta
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Informácie o voľných pracovných miestach budú doplnené.
              </p>
              <Link
                href={`${ROUTES.oNas}#pracovne-miesta`}
                className="btn-primary mt-8 min-h-12 px-6"
              >
                Zobraziť pracovné ponuky
              </Link>
            </div>

            <div
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] opacity-35 lg:block"
              aria-hidden
            >
              <SiteImage
                src={IMAGES.verejnaZelen.src}
                alt=""
                objectPosition="center 18%"
                sizes="28vw"
                zoom={false}
                frameClassName="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--paper-warm)_0%,rgba(244,243,239,0.55)_45%,transparent_100%)]" />
            </div>
          </div>

          <div className="border-t border-line-soft bg-surface px-6 py-6 sm:px-8 sm:py-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-10">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
              Aktuálne ponuky
            </p>
            {JOBS.length > 0 ? (
              <ul className="mt-4">
                {JOBS.map((job) => (
                  <li
                    key={job}
                    className="border-b border-line-soft last:border-b-0"
                  >
                    <Link
                      href={`${ROUTES.oNas}#pracovne-miesta`}
                      className="group flex min-h-[3.75rem] items-center justify-between gap-4 py-4 text-[1.05rem] font-semibold text-ink transition-colors hover:text-accent"
                    >
                      {job}
                      <ArrowRight
                        className="link-arrow h-4 w-4 shrink-0 text-muted group-hover:text-accent"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-base leading-relaxed text-muted">
                Obsah sa pripravuje.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
