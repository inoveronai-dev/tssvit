import type { Metadata } from "next";
import { SubpageShell } from "@/components/shells/SubpageShell";
import { ORGANIZATION } from "@/lib/content/organization";
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
        <div className="space-y-4 rounded-lg border border-line bg-surface p-6 md:p-8">
          {ORGANIZATION.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <h2 className="text-xl font-bold text-ink">Základné činnosti</h2>
          <ul className="mt-4 space-y-4">
            {ORGANIZATION.coreActivities.map((activity) => (
              <li key={activity.title}>
                <p className="font-semibold text-ink">{activity.title}</p>
                {"detail" in activity && activity.detail ? (
                  <p className="mt-1 text-muted">{activity.detail}</p>
                ) : null}
                {"items" in activity && activity.items ? (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                    {activity.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <section
          id="pracovne-miesta"
          className="scroll-mt-28 rounded-lg border border-line bg-surface p-6 md:p-8"
        >
          <h2 className="text-xl font-bold text-ink">Voľné pracovné miesta</h2>
          <ul className="mt-4">
            {JOBS.map((job) => (
              <li key={job.title} className="border-b border-line-soft last:border-b-0">
                <a
                  href={job.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center justify-between gap-4 py-3 font-semibold text-ink hover:text-accent"
                >
                  {job.title}
                  <span aria-hidden>→</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </SubpageShell>
  );
}
