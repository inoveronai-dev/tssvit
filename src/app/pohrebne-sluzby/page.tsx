import type { Metadata } from "next";
import { SubpageShell } from "@/components/shells/SubpageShell";
import { PHONES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Pohrebné a cintorínske služby",
};

export default function PohrebneSluzbyPage() {
  return (
    <SubpageShell
      title="Pohrebné a cintorínske služby"
      description="Pomoc a služby spojené so zabezpečením pohrebu a správou mestského pohrebiska."
    >
      <div className="rounded-lg border border-line bg-surface p-6 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">
          NONSTOP služba
        </p>
        <a
          href={PHONES.funeral.href}
          className="mt-2 inline-block text-3xl font-bold text-ink hover:text-accent"
        >
          {PHONES.funeral.label}
        </a>
        <p className="mt-6 text-muted">
          Podrobné informácie o pohrebných a cintorínskych službách budú
          doplnené. Obsah sa pripravuje.
        </p>
      </div>
    </SubpageShell>
  );
}
