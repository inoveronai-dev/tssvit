import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ROUTES } from "@/lib/routes";

const DOCS = [
  { label: "Objednávky", href: `${ROUTES.povinneZverejnovanie}#objednavky` },
  { label: "Faktúry", href: `${ROUTES.povinneZverejnovanie}#faktury` },
  { label: "Zmluvy", href: `${ROUTES.povinneZverejnovanie}#zmluvy` },
  {
    label: "Odpadové hospodárstvo",
    href: `${ROUTES.povinneZverejnovanie}#odpadove-hospodarstvo`,
  },
  {
    label: "Autobusová stanica",
    href: `${ROUTES.povinneZverejnovanie}#autobusova-stanica`,
  },
] as const;

export function PublicDocumentsSection() {
  return (
    <section
      className="bg-quiet py-16 md:py-20"
      aria-labelledby="docs-heading"
    >
      <div className="container-site">
        <SectionHeading
          id="docs-heading"
          title="Povinne zverejňované informácie"
          description="Objednávky, faktúry, zmluvy a povinné zverejňovanie."
        />
        <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DOCS.map((doc) => (
            <li key={doc.href}>
              <Link
                href={doc.href}
                className="group flex min-h-[3.5rem] items-center gap-3 rounded-lg border border-line-soft bg-surface px-4 py-3.5 transition-all duration-200 hover:border-teal/35 hover:bg-teal-soft/50"
              >
                <FileText
                  className="h-4 w-4 shrink-0 text-teal/80 transition-colors group-hover:text-teal"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span className="flex-1 text-[0.95rem] font-semibold text-ink">
                  {doc.label}
                </span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 shrink-0 text-muted/50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal group-hover:opacity-100"
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
