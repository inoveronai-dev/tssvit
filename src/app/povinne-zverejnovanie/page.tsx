import type { Metadata } from "next";
import { SubpageShell } from "@/components/shells/SubpageShell";

export const metadata: Metadata = {
  title: "Povinné zverejňovanie",
};

const SECTIONS = [
  { id: "objednavky", title: "Objednávky" },
  { id: "faktury", title: "Faktúry" },
  { id: "zmluvy", title: "Zmluvy" },
  { id: "odpadove-hospodarstvo", title: "Odpadové hospodárstvo" },
  { id: "autobusova-stanica", title: "Autobusová stanica" },
] as const;

export default function PovinneZverejnovaniePage() {
  return (
    <SubpageShell
      title="Povinne zverejňované informácie"
      description="Objednávky, faktúry, zmluvy a ďalšie povinne zverejňované dokumenty."
    >
      <div className="space-y-6">
        {SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 rounded-lg border border-line bg-surface p-6"
          >
            <h2 className="text-xl font-bold text-ink">{section.title}</h2>
            <p className="mt-2 text-muted">
              Dokumenty v tejto kategórii budú doplnené. Obsah sa pripravuje.
            </p>
          </section>
        ))}
      </div>
    </SubpageShell>
  );
}
