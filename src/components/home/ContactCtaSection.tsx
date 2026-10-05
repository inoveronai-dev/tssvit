import { ContactForm } from "@/components/kontakt/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACTS } from "@/lib/content/contacts";

export function ContactCtaSection() {
  const { firstContact } = CONTACTS;

  return (
    <section
      id="kontakt-formular"
      className="scroll-mt-28 border-t border-line bg-paper-warm py-20 md:py-24"
      aria-labelledby="contact-cta-heading"
    >
      <div className="container-wide">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14 xl:gap-16">
          <div className="lg:pt-2">
            <Reveal>
              <h2
                id="contact-cta-heading"
                className="text-3xl font-bold tracking-tight text-ink sm:text-[2.15rem] md:leading-tight"
              >
                Kontaktujte nás
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6 border-t border-line pt-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  Prvý kontakt
                </p>
                <a
                  href={firstContact.phone.href}
                  className="mt-2 block text-4xl font-bold tracking-tight text-ink transition-colors hover:text-accent sm:text-5xl sm:leading-none"
                >
                  {firstContact.phone.label}
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  E-mail
                </p>
                <a
                  href={`mailto:${firstContact.email}`}
                  className="mt-2 inline-block text-lg font-semibold text-ink transition-colors hover:text-accent"
                >
                  {firstContact.email}
                </a>
              </div>
            </div>

            <button
              type="button"
              className="mt-10 inline-flex min-h-11 cursor-default items-center text-base font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Všetky kontakty
            </button>
          </div>

          <ContactForm showHeading={false} />
        </div>
      </div>
    </section>
  );
}
