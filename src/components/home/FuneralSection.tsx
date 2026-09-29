import Link from "next/link";
import { PHONES, ROUTES } from "@/lib/routes";

export function FuneralSection() {
  return (
    <section
      className="bg-funeral text-[#f3f4f2]"
      aria-labelledby="funeral-heading"
    >
      <div className="container-wide">
        <div className="grid gap-10 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-14 md:py-20 lg:gap-20 lg:py-24">
          <div className="max-w-xl">
            <h2
              id="funeral-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:leading-[1.15]"
            >
              Pohrebné a cintorínske služby
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/72 sm:text-lg">
              Pomoc a služby spojené so zabezpečením pohrebu a správou mestského
              pohrebiska.
            </p>
            <div className="mt-9">
              <Link
                href={ROUTES.pohrebneSluzby}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 bg-white/5 px-6 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10"
              >
                Informácie o pohrebných službách
              </Link>
            </div>
          </div>

          <div className="border-t border-white/15 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0 lg:pl-16">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white/55">
              NONSTOP služba
            </p>
            <a
              href={PHONES.funeral.href}
              className="mt-4 block text-4xl font-bold tracking-tight text-white transition-opacity hover:opacity-90 sm:text-5xl lg:text-[3.35rem] lg:leading-none"
            >
              {PHONES.funeral.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
