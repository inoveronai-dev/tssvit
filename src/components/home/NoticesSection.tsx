import Link from "next/link";
import { NOTICES } from "@/lib/content/notices";

function NoticeItems({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <>
      {NOTICES.map((notice) => (
        <li
          key={`${ariaHidden ? "dup-" : ""}${notice.title}`}
          className="flex shrink-0 items-center"
          aria-hidden={ariaHidden || undefined}
        >
          <Link
            href={notice.href}
            tabIndex={ariaHidden ? -1 : undefined}
            className="group inline-flex items-center gap-2 whitespace-nowrap px-1 py-1 text-[0.95rem] font-semibold text-ink transition-colors hover:text-accent focus-visible:text-accent sm:text-base"
          >
            <span>{notice.title}</span>
            <span
              className="shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
          </Link>
          <span
            className="mx-4 shrink-0 text-[0.65rem] text-muted/55 sm:mx-5"
            aria-hidden
          >
            •
          </span>
        </li>
      ))}
    </>
  );
}

export function NoticesSection() {
  return (
    <section
      className="border-y border-line bg-surface"
      aria-labelledby="notices-heading"
    >
      <div className="flex min-h-[3.25rem] items-stretch md:min-h-[3.75rem]">
        <div className="flex shrink-0 items-center border-r border-line bg-surface px-4 sm:px-5 md:px-6">
          <p
            id="notices-heading"
            className="whitespace-nowrap text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent sm:text-[0.72rem]"
          >
            Aktuálne oznamy
          </p>
        </div>

        <div className="notices-ticker-viewport relative min-w-0 flex-1 overflow-hidden">
          {/* Auto-scrolling marquee — desktop / motion-ok */}
          <div className="notices-ticker-animated absolute inset-0 hidden items-center md:flex">
            <ul className="notices-ticker-marquee flex w-max items-center pl-5">
              <NoticeItems />
              <NoticeItems ariaHidden />
            </ul>
          </div>

          {/* Static swipeable list — mobile + reduced motion */}
          <div className="notices-ticker-static flex h-full items-center overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
            <ul className="flex w-max items-center px-4 py-3 sm:px-5">
              <NoticeItems />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
