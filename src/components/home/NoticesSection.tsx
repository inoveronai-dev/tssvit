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
            className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-md px-3 py-2 text-[1.02rem] font-semibold tracking-tight text-ink transition-colors duration-200 hover:bg-accent-soft hover:text-accent focus-visible:bg-accent-soft focus-visible:text-accent sm:gap-3 sm:px-3.5 sm:py-2.5 sm:text-[1.0625rem]"
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden
            />
            <span className="font-bold">{notice.title}</span>
            <span
              className="shrink-0 text-sm text-accent transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
          </Link>
          <span
            className="mx-2.5 h-4 w-px shrink-0 bg-line sm:mx-3.5"
            aria-hidden
          />
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
      <div className="flex min-h-[3.75rem] items-stretch md:min-h-[4.25rem]">
        <div className="flex shrink-0 items-center border-r border-line bg-surface px-4 sm:px-5 md:px-6">
          <p
            id="notices-heading"
            className="whitespace-nowrap text-[0.7rem] font-bold uppercase tracking-[0.14em] text-accent sm:text-[0.75rem]"
          >
            Aktuálne oznamy
          </p>
        </div>

        <div className="notices-ticker-viewport relative min-w-0 flex-1 overflow-hidden">
          {/* Auto-scrolling marquee — desktop / motion-ok */}
          <div className="notices-ticker-animated absolute inset-0 hidden items-center md:flex">
            <ul className="notices-ticker-marquee flex w-max items-center pl-4 sm:pl-5">
              <NoticeItems />
              <NoticeItems ariaHidden />
            </ul>
          </div>

          {/* Static swipeable list — mobile + reduced motion */}
          <div className="notices-ticker-static flex h-full items-center overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
            <ul className="flex w-max items-center px-3 py-2.5 sm:px-4">
              <NoticeItems />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
