"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { ORGANIZATION } from "@/lib/content/organization";

export function AboutActivities() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const items = list.querySelectorAll<HTMLElement>("[data-about-activity]");
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          items.forEach((item) => item.classList.add("is-visible"));
          observer.disconnect();
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-14 border-t border-line/80 pt-12 md:mt-16 md:pt-14">
      <p className="text-sm font-bold uppercase tracking-[0.12em] text-muted">
        Základné činnosti
      </p>

      <ul
        ref={listRef}
        className="mt-9 grid sm:grid-cols-2 sm:gap-x-12 md:mt-10 lg:gap-x-16"
      >
        {ORGANIZATION.coreActivities.map((activity, index) => {
          const number = String(index + 1).padStart(2, "0");

          return (
            <li
              key={activity.title}
              data-about-activity
              style={{ "--about-delay": `${index * 50}ms` } as CSSProperties}
              className="about-activity-item border-t border-line/80 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
            >
              <div className="group flex gap-4 rounded-lg px-2 py-5 transition-colors duration-200 hover:bg-surface/70 sm:gap-5 sm:px-3 sm:py-6">
                <span
                  className="mt-0.5 shrink-0 font-mono text-[0.78rem] font-semibold tabular-nums tracking-[0.08em] text-accent/55 transition-colors duration-200 group-hover:text-accent"
                  aria-hidden
                >
                  {number}
                </span>
                <div className="min-w-0">
                  <p className="text-lg font-semibold leading-snug tracking-tight text-ink transition-colors duration-200 group-hover:text-ink">
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
                            className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-muted/45"
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
  );
}
