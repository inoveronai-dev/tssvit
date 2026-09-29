import { PHONES } from "@/lib/routes";

export function SiteUtilityBar() {
  return (
    <div className="border-b border-line-soft bg-quiet/80 text-[0.8125rem] leading-none text-muted">
      <div className="container-site flex flex-col gap-1.5 py-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-[0.45rem]">
        <p className="tracking-wide">
          Prvý kontakt{" "}
          <a
            href={PHONES.main.href}
            className="ml-1 font-semibold text-ink/90 underline-offset-2 transition-colors hover:text-accent hover:underline"
          >
            {PHONES.main.label}
          </a>
        </p>
        <p className="tracking-wide">
          Pohrebná služba NONSTOP{" "}
          <a
            href={PHONES.funeral.href}
            className="ml-1 font-semibold text-ink/90 underline-offset-2 transition-colors hover:text-accent hover:underline"
          >
            {PHONES.funeral.label}
          </a>
        </p>
      </div>
    </div>
  );
}
