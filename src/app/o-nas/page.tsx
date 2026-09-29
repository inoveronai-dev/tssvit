import type { Metadata } from "next";
import { SubpageShell } from "@/components/shells/SubpageShell";
import { JOBS } from "@/lib/content/jobs";

export const metadata: Metadata = {
  title: "O nás",
};

export default function ONasPage() {
  return (
    <SubpageShell
      title="O nás"
      description="Informácie o Technických službách Mesta Svit."
    >
      <div className="space-y-8">
        <div className="rounded-lg border border-dashed border-line bg-surface p-6">
          <p className="font-semibold text-ink">Obsah sa pripravuje</p>
          <p className="mt-2 text-muted">
            Podrobné informácie o organizácii budú doplnené po schválení úvodnej
            stránky.
          </p>
        </div>

        <section
          id="pracovne-miesta"
          className="scroll-mt-28 rounded-lg border border-line bg-surface p-6"
        >
          <h2 className="text-xl font-bold text-ink">Voľné pracovné miesta</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
            {JOBS.map((job) => (
              <li key={job}>{job}</li>
            ))}
          </ul>
          <p className="mt-4 text-muted">
            Podrobnosti k pracovným ponukám budú doplnené. Obsah sa pripravuje.
          </p>
        </section>
      </div>
    </SubpageShell>
  );
}
