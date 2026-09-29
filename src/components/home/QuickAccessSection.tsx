import Link from "next/link";
import {
  CalendarDays,
  FileText,
  Flower2,
  MapPin,
  MessageSquareWarning,
  Phone,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ROUTES } from "@/lib/routes";

const ACTIONS = [
  {
    title: "Kalendár zberu odpadu",
    href: `${ROUTES.odpadoveHospodarstvo}#kalendar`,
    icon: CalendarDays,
  },
  {
    title: "Zberný dvor",
    href: `${ROUTES.odpadoveHospodarstvo}#zberny-dvor`,
    icon: MapPin,
  },
  {
    title: "Nahlásiť problém",
    href: ROUTES.nahlasitPodnet,
    icon: MessageSquareWarning,
  },
  {
    title: "Kontakty",
    href: ROUTES.kontakt,
    icon: Phone,
  },
  {
    title: "Faktúry a zmluvy",
    href: ROUTES.povinneZverejnovanie,
    icon: FileText,
  },
  {
    title: "Pohrebná služba",
    href: ROUTES.pohrebneSluzby,
    icon: Flower2,
  },
] as const;

export function QuickAccessSection() {
  return (
    <section
      className="bg-surface py-10 md:py-12"
      aria-labelledby="quick-access"
    >
      <div className="container-site">
        <SectionHeading id="quick-access" title="Čo potrebujete vybaviť?" />
        <ul className="mt-7 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <li key={action.title}>
                <Link
                  href={action.href}
                  className="group flex min-h-[5.25rem] items-center gap-4 rounded-xl border border-line-soft bg-paper-warm/70 px-5 py-5 shadow-[0_1px_0_rgba(26,31,28,0.03)] transition-all duration-200 hover:-translate-y-px hover:border-accent/30 hover:bg-accent-soft/55 hover:shadow-[0_8px_24px_-16px_rgba(47,107,79,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface text-accent shadow-[inset_0_0_0_1px_rgba(217,221,216,0.9)] transition-colors duration-200 group-hover:bg-accent group-hover:text-white group-hover:shadow-none">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="text-[1.05rem] font-semibold leading-snug text-ink">
                    {action.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
