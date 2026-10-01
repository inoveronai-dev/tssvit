import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/kontakt/ContactForm";
import { SubpageShell } from "@/components/shells/SubpageShell";
import { CONTACTS } from "@/lib/content/contacts";

export const metadata: Metadata = {
  title: "Kontakt",
};

function ContactBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-line bg-surface p-6 md:p-8">
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      <div className="mt-4 space-y-3 text-base text-ink">{children}</div>
    </section>
  );
}

export default function KontaktPage() {
  const {
    seat,
    registry,
    director,
    firstContact,
    funeralPhone,
    departments,
  } = CONTACTS;

  return (
    <SubpageShell
      title="Kontakt"
      description="Kontaktné informácie Technických služieb Mesta Svit."
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <ContactBlock title="Sídlo správy Technických služieb">
          <p className="font-medium">{seat.address}</p>
          <dl className="grid gap-3 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold text-muted">IČO</dt>
              <dd className="mt-1">{registry.ico}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted">DIČ</dt>
              <dd className="mt-1">{registry.dic}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted">IČ DPH</dt>
              <dd className="mt-1">{registry.icDph}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-semibold text-muted">Registrácia</dt>
              <dd className="mt-1">{registry.registration}</dd>
            </div>
          </dl>
          <div className="border-t border-line pt-4">
            <p className="text-sm font-semibold text-muted">{director.label}</p>
            <p className="mt-1 font-semibold">{director.name}</p>
            <p className="mt-2">
              Tel:{" "}
              <a
                href={director.phone.href}
                className="font-semibold text-accent hover:underline"
              >
                {director.phone.label}
              </a>
            </p>
            <p>
              Mail:{" "}
              <a
                href={`mailto:${director.email}`}
                className="font-semibold text-accent hover:underline"
              >
                {director.email}
              </a>
            </p>
          </div>
        </ContactBlock>

        <ContactBlock title="Prvý kontakt">
          <p>
            Mobil:{" "}
            <a
              href={firstContact.phone.href}
              className="font-semibold text-accent hover:underline"
            >
              {firstContact.phone.label}
            </a>
          </p>
          <p>
            E-mail:{" "}
            <a
              href={`mailto:${firstContact.email}`}
              className="font-semibold text-accent hover:underline"
            >
              {firstContact.email}
            </a>
          </p>
          <p>
            Nonstop linka pohrebné služby:{" "}
            <a
              href={funeralPhone.href}
              className="font-semibold text-accent hover:underline"
            >
              {funeralPhone.label}
            </a>
          </p>
        </ContactBlock>

        {departments.map((dept) => (
          <ContactBlock key={dept.title} title={dept.title}>
            {"nonstop" in dept && dept.nonstop ? (
              <p>
                Nonstop linka pohrebné služby:{" "}
                <a
                  href={dept.nonstop.href}
                  className="font-semibold text-accent hover:underline"
                >
                  {dept.nonstop.label}
                </a>
              </p>
            ) : null}
            <p>
              Sídlo: <span className="font-medium">{dept.seat}</span>
            </p>
            <p>
              {dept.role}: <span className="font-semibold">{dept.name}</span>
            </p>
            <p>
              Tel:{" "}
              <a
                href={dept.phone.href}
                className="font-semibold text-accent hover:underline"
              >
                {dept.phone.label}
              </a>
            </p>
            <p>
              Mail:{" "}
              <a
                href={`mailto:${dept.email}`}
                className="font-semibold text-accent hover:underline"
              >
                {dept.email}
              </a>
            </p>
          </ContactBlock>
        ))}

        <ContactForm />
      </div>
    </SubpageShell>
  );
}
