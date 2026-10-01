import { ORGANIZATION } from "@/lib/content/organization";

export function AboutSection() {
  return (
    <section
      id="o-organizacii"
      className="scroll-mt-28 bg-surface py-20 md:py-24"
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

        <div className="mt-14 border-t border-line pt-12 md:mt-16 md:pt-14">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-muted">
            Základné činnosti
          </p>

          <ul className="mt-9 grid sm:grid-cols-2 sm:gap-x-14 md:mt-10">
            {ORGANIZATION.coreActivities.map((activity, index) => {
              const number = String(index + 1).padStart(2, "0");

              return (
                <li
                  key={activity.title}
                  className="border-t border-line py-6 first:border-t-0 first:pt-0 sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(2)]:pt-0"
                >
                  <div className="flex gap-4 sm:gap-5">
                    <span
                      className="mt-0.5 shrink-0 font-mono text-[0.8rem] font-semibold tabular-nums tracking-wide text-accent/80"
                      aria-hidden
                    >
                      {number}
                    </span>
                    <div className="min-w-0">
                      <p className="text-lg font-semibold leading-snug tracking-tight text-ink">
                        {activity.title}
                      </p>
                      {"detail" in activity && activity.detail ? (
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                          {activity.detail}
                        </p>
                      ) : null}
                      {"items" in activity && activity.items ? (
                        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                          {activity.items.map((item) => (
                            <li key={item} className="flex gap-2.5">
                              <span
                                className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-muted/50"
                                aria-hidden
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
