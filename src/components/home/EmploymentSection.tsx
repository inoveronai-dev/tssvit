import { ArrowRight } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";
import { Reveal } from "@/components/ui/Reveal";
import { JOBS } from "@/lib/content/jobs";
import { IMAGES } from "@/lib/images";

export function EmploymentSection() {
  return (
    <section
      id="pracovne-miesta"
      className="scroll-mt-28 bg-surface py-20 md:py-24"
      aria-labelledby="jobs-heading"
    >
      <div className="container-wide">
        <Reveal>
          <div className="overflow-hidden rounded-xl border border-line-soft bg-paper-warm lg:grid lg:grid-cols-[0.95fr_1.15fr]">
            <div className="relative flex flex-col justify-between gap-10 p-7 sm:p-9 lg:p-11 xl:p-12">
              <div className="relative z-10 max-w-md">
                <h2
                  id="jobs-heading"
                  className="text-3xl font-bold tracking-tight text-ink sm:text-[2.15rem] md:leading-tight"
                >
                  Voľné pracovné miesta
                </h2>
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
              <ul>
                {JOBS.map((job) => (
                  <li
                    key={job.title}
                    className="border-b border-line-soft last:border-b-0"
                  >
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-h-[3.75rem] items-center justify-between gap-4 py-4 text-[1.05rem] font-semibold text-ink transition-colors hover:text-accent"
                    >
                      {job.title}
                      <ArrowRight
                        className="link-arrow h-4 w-4 shrink-0 text-muted group-hover:text-accent"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
