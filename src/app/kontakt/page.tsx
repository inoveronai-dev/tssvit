import type { Metadata } from "next";
import { SubpageShell } from "@/components/shells/SubpageShell";
import { PHONES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function KontaktPage() {
  return (
    <SubpageShell
      title="Kontakt"
      description="Kontaktné informácie Technických služieb Mesta Svit."
    >
      <div className="space-y-6">
        <div className="rounded-lg border border-line bg-surface p-6">
          <h2 className="text-xl font-bold text-ink">Telefónne kontakty</h2>
          <ul className="mt-4 space-y-3">
            <li>
              Prvý kontakt:{" "}
              <a
                href={PHONES.main.href}
                className="font-semibold text-accent hover:underline"
              >
                {PHONES.main.label}
              </a>
            </li>
            <li>
              Pohrebná služba NONSTOP:{" "}
              <a
                href={PHONES.funeral.href}
                className="font-semibold text-accent hover:underline"
              >
                {PHONES.funeral.label}
              </a>
            </li>
          </ul>
        </div>

        <div
          id="formular"
          className="scroll-mt-28 rounded-lg border border-dashed border-line bg-surface p-6"
        >
          <h2 className="text-xl font-bold text-ink">Kontaktný formulár</h2>
          <p className="mt-2 text-muted">
            Online formulár bude doplnený. Zatiaľ nás kontaktujte telefonicky.
            Obsah sa pripravuje.
          </p>
        </div>
      </div>
    </SubpageShell>
  );
}
