import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@/lib/routes";

type SubpageShellProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function SubpageShell({
  title,
  description,
  children,
}: SubpageShellProps) {
  return (
    <main id="main-content" className="flex-1 bg-paper">
      <div className="border-b border-line bg-surface">
        <div className="container-site py-10 md:py-14">
          <Link
            href={ROUTES.home}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Späť na úvod
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        </div>
      </div>
      <div className="container-site py-10 md:py-12">
        {children ?? (
          <div className="rounded-lg border border-dashed border-line bg-surface p-6 md:p-8">
            <p className="font-semibold text-ink">Obsah sa pripravuje</p>
            <p className="mt-2 text-muted">
              Táto stránka bude doplnená po schválení úvodnej stránky. Medzitým
              môžete použiť kontaktné telefónne čísla v hornej lište.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
