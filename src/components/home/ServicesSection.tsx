import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICE_SUMMARIES } from "@/lib/content/organization";
import { IMAGES } from "@/lib/images";
import { HOME_SECTIONS } from "@/lib/routes";

const SERVICES = [
  {
    title: "Verejná zeleň",
    description: SERVICE_SUMMARIES.verejnaZelen,
    href: HOME_SECTIONS.services,
    image: IMAGES.verejnaZelen,
    objectPosition: "center 22%",
  },
  {
    title: "Odpadové hospodárstvo",
    description: SERVICE_SUMMARIES.odpadoveHospodarstvo,
    href: HOME_SECTIONS.waste,
    image: IMAGES.odpadPrimary,
    objectPosition: "center 38%",
  },
  {
    title: "Verejné osvetlenie a technika",
    description: SERVICE_SUMMARIES.verejneOsvetlenie,
    href: HOME_SECTIONS.services,
    image: IMAGES.verejneOsvetlenie,
    objectPosition: "center 22%",
  },
  {
    title: "Pohrebné a cintorínske služby",
    description: SERVICE_SUMMARIES.pohrebneSluzby,
    href: HOME_SECTIONS.funeral,
    image: IMAGES.pohrebneSluzby,
    objectPosition: "center 45%",
  },
] as const;

export function ServicesSection() {
  return (
    <section
      id="sluzby"
      className="scroll-mt-28 bg-paper-warm py-20 md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="container-wide">
        <Reveal>
          <h2
            id="services-heading"
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-[3.15rem] md:leading-[1.08]"
          >
            <span className="text-ink">Naše</span>{" "}
            <span className="text-accent">služby</span>
          </h2>
        </Reveal>

        <ul className="mt-11 grid gap-5 sm:grid-cols-2 md:mt-12 lg:gap-6">
          {SERVICES.map((service, index) => (
            <li key={service.title}>
              <Reveal delayMs={index * 60} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line-soft bg-surface">
                  <SiteImage
                    src={service.image.src}
                    alt={service.image.alt}
                    objectPosition={service.objectPosition}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    frameClassName="aspect-[16/10] w-full"
                  />

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="text-xl font-bold tracking-tight text-ink md:text-[1.35rem]">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-base leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 text-base font-semibold text-accent transition-colors hover:text-accent-hover"
                    >
                      Viac informácií
                      <ArrowRight className="link-arrow h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
