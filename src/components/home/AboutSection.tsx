import Image from "next/image";
import { AboutActivities } from "@/components/home/AboutActivities";
import { Reveal } from "@/components/ui/Reveal";
import { ORGANIZATION } from "@/lib/content/organization";
import { IMAGES } from "@/lib/images";

export function AboutSection() {
  return (
    <section
      id="o-organizacii"
      className="scroll-mt-28 bg-surface py-20 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-2xl border border-line-soft bg-[linear-gradient(165deg,rgba(244,243,239,0.92)_0%,rgba(232,236,231,0.72)_48%,rgba(247,248,246,0.95)_100%)] px-6 py-10 shadow-[0_1px_0_rgba(26,31,28,0.03)] sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16">
          <div
            className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center select-none"
            aria-hidden
          >
            <Image
              src={IMAGES.svitCoatOfArms.src}
              alt=""
              width={250}
              height={287}
              className="h-auto w-[72%] max-w-[17rem] opacity-[0.04] grayscale sm:w-[58%] sm:max-w-[22rem] md:w-[52%] md:max-w-[26rem] lg:w-[48%] lg:max-w-[30rem]"
            />
          </div>

          <Reveal className="relative z-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-16 xl:gap-20">
              <div className="max-w-md">
                <p className="section-eyebrow">O organizácii</p>
                <h2
                  id="about-heading"
                  className="mt-4 max-w-[14ch] text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.65rem] md:leading-[1.12]"
                >
                  {ORGANIZATION.name}
                </h2>
                <div className="mt-6 h-px w-14 bg-accent/35" aria-hidden />
              </div>

              <div className="space-y-5 border-t border-line/70 pt-8 text-base leading-relaxed text-muted sm:text-lg lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12 xl:pl-14">
                {ORGANIZATION.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="relative z-10">
            <AboutActivities />
          </div>
        </div>
      </div>
    </section>
  );
}
