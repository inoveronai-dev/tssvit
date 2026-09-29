import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NOTICES } from "@/lib/content/notices";
import { ROUTES } from "@/lib/routes";

export function NoticesSection() {
  return (
    <section
      className="bg-surface py-16 md:py-20"
      aria-labelledby="notices-heading"
    >
      <div className="container-site">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading id="notices-heading" title="Aktuálne oznamy" />
          <Link
            href={ROUTES.oznamy}
            className="group inline-flex min-h-11 items-center gap-2 text-base font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            Všetky oznamy
            <ArrowRight className="link-arrow h-4 w-4" aria-hidden />
          </Link>
        </div>

        <ul className="mt-9 border-t border-line">
          {NOTICES.map((notice) => (
            <li key={notice.title} className="border-b border-line-soft">
              <Link
                href={notice.href}
                className="group flex items-center justify-between gap-5 py-6 transition-colors hover:bg-paper-warm/80 sm:py-7"
              >
                <span className="min-w-0">
                  <span className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted/80">
                    Oznam
                  </span>
                  <span className="mt-1.5 block text-base font-semibold leading-snug text-ink sm:text-lg">
                    {notice.title}
                  </span>
                </span>
                <ArrowRight
                  className="link-arrow h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
