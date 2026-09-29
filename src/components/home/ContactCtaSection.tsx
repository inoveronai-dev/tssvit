import Link from "next/link";
import { PHONES, ROUTES } from "@/lib/routes";

export function ContactCtaSection() {
  return (
    <section
      className="bg-accent text-white"
      aria-labelledby="contact-cta-heading"
    >
      <div className="container-site py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white/70">
            Prvý kontakt
          </p>
          <h2
            id="contact-cta-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-white/95 sm:text-3xl"
          >
            Potrebujete niečo vybaviť?
          </h2>
          <a
            href={PHONES.main.href}
            className="mt-7 inline-block text-5xl font-bold tracking-tight text-white transition-opacity hover:opacity-90 sm:text-6xl sm:leading-none"
          >
            {PHONES.main.label}
          </a>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href={`${ROUTES.kontakt}#formular`}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-7 text-base font-semibold text-accent transition-colors hover:bg-accent-soft"
            >
              Kontaktný formulár
            </Link>
            <Link
              href={ROUTES.kontakt}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/35 px-6 text-base font-semibold text-white/95 transition-colors hover:border-white/60 hover:bg-white/10"
            >
              Kontakty
            </Link>
            <Link
              href={ROUTES.nahlasitPodnet}
              className="inline-flex min-h-12 items-center justify-center px-2 text-base font-semibold text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Nahlásiť podnet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
