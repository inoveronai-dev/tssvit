import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES } from "@/lib/images";
import { ROUTES } from "@/lib/routes";

const SERVICES = [
  {
    title: "Verejná zeleň",
    description:
      "Údržba verejnej zelene, čistenie mesta, mestský mobiliár a starostlivosť o mestské lesy.",
    href: ROUTES.verejnaZelen,
    image: IMAGES.verejnaZelen,
    objectPosition: "center 22%",
  },
  {
    title: "Odpadové hospodárstvo",
    description:
      "Zber komunálneho a separovaného odpadu, zberný dvor, biologický odpad a kompostáreň.",
    href: ROUTES.odpadoveHospodarstvo,
    image: IMAGES.odpadPrimary,
    objectPosition: "center 38%",
  },
  {
    title: "Verejné osvetlenie a technika",
    description:
      "Správa miestnych komunikácií, verejného osvetlenia, parkovísk a verejných priestranstiev.",
    href: ROUTES.verejneOsvetlenie,
    image: IMAGES.verejneOsvetlenie,
    objectPosition: "center 22%",
  },
  {
    title: "Pohrebné a cintorínske služby",
    description:
      "Pohrebné služby a komplexná starostlivosť spojená so správou mestského pohrebiska.",
    href: ROUTES.pohrebneSluzby,
    image: IMAGES.pohrebneSluzby,
    objectPosition: "center 45%",
  },
] as const;

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

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {SERVICES.map((service) => (
            <li key={service.title}>
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
