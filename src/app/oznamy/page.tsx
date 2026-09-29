import type { Metadata } from "next";
import { SubpageShell } from "@/components/shells/SubpageShell";
import { NOTICES } from "@/lib/content/notices";

export const metadata: Metadata = {
  title: "Oznamy",
};

export default function OznamyPage() {
  return (
    <SubpageShell
      title="Oznamy"
      description="Aktuálne oznamy Technických služieb Mesta Svit."
    >
      <ul className="divide-y divide-line rounded-lg border border-line bg-surface">
        {NOTICES.map((notice) => (
          <li key={notice.title} className="px-5 py-4">
            <p className="font-semibold text-ink">{notice.title}</p>
            <p className="mt-1 text-sm text-muted">
              Úplný text oznamu bude doplnený. Obsah sa pripravuje.
            </p>
          </li>
        ))}
      </ul>
    </SubpageShell>
  );
}
