import type { Metadata } from "next";
import { SubpageShell } from "@/components/shells/SubpageShell";
import { PHONES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Nahlásiť podnet",
};

export default function NahlasitPodnetPage() {
  return (
    <SubpageShell
      title="Nahlásiť podnet"
      description="Nahláste problém alebo podnet Technickým službám Mesta Svit."
    >
      <div className="rounded-lg border border-dashed border-line bg-surface p-6 md:p-8">
        <p className="font-semibold text-ink">Formulár sa pripravuje</p>
        <p className="mt-2 text-muted">
          Online formulár na nahlásenie podnetu bude doplnený. Zatiaľ nás
          kontaktujte telefonicky na čísle{" "}
          <a
            href={PHONES.main.href}
            className="font-semibold text-accent hover:underline"
          >
            {PHONES.main.label}
          </a>
          .
        </p>
      </div>
    </SubpageShell>
  );
}
