import type { Metadata } from "next";
import { ContactForm } from "@/components/kontakt/ContactForm";
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
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <h2 className="text-xl font-bold text-ink">Telefónne kontakty</h2>
          <ul className="mt-4 space-y-3 text-base">
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

        <ContactForm />
      </div>
    </SubpageShell>
  );
}
