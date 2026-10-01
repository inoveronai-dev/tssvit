import { ORGANIZATION } from "@/lib/content/organization";

export function AboutSection() {
  return (
    <section
      id="o-organizacii"
      className="scroll-mt-28 bg-surface py-16 md:py-20"
      aria-labelledby="about-heading"
    >
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          <div>
            <p className="section-eyebrow">O organizácii</p>
            <h2
              id="about-heading"
              className="mt-3 max-w-[14ch] text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.65rem] md:leading-[1.12]"
            >
              {ORGANIZATION.name}
            </h2>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {ORGANIZATION.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-10 md:mt-14 md:pt-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-muted">
            Základné činnosti
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ORGANIZATION.coreActivities.map((activity) => (
              <li
                key={activity.title}
                className="rounded-xl border border-line-soft bg-paper-warm/60 p-5"
              >
                <p className="text-base font-semibold leading-snug text-ink">
                  {activity.title}
                </p>
                {"detail" in activity && activity.detail ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {activity.detail}
                  </p>
                ) : null}
                {"items" in activity && activity.items ? (
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                    {activity.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
