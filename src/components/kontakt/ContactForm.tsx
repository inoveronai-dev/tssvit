"use client";

import { useId, useState, type FormEvent } from "react";

const inputClassName =
  "min-h-12 w-full rounded-lg border border-line bg-surface px-4 py-3 text-base text-ink transition-colors placeholder:text-muted/60 hover:border-line-soft focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

const labelClassName = "mb-2 block text-sm font-semibold text-ink";

type ContactFormProps = {
  showHeading?: boolean;
  className?: string;
};

export function ContactForm({
  showHeading = true,
  className = "",
}: ContactFormProps) {
  const formId = useId();
  const statusId = `${formId}-status`;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      id="formular"
      className={`scroll-mt-28 rounded-lg border border-line bg-surface p-6 md:p-8 lg:p-10 ${className}`.trim()}
    >
      {showHeading ? (
        <h2 className="text-2xl font-bold tracking-tight text-ink md:text-[1.65rem]">
          Kontaktný formulár
        </h2>
      ) : null}

      <form
        className={`grid gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-7 ${showHeading ? "mt-8" : ""}`}
        onSubmit={handleSubmit}
        aria-describedby={submitted ? statusId : undefined}
      >
        <div>
          <label htmlFor={`${formId}-predmet`} className={labelClassName}>
            Predmet
          </label>
          <input
            id={`${formId}-predmet`}
            name="predmet"
            type="text"
            required
            maxLength={40}
            autoComplete="off"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor={`${formId}-usek`} className={labelClassName}>
            Týka sa to úseku
          </label>
          <input
            id={`${formId}-usek`}
            name="usek"
            type="text"
            maxLength={25}
            autoComplete="off"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor={`${formId}-meno`} className={labelClassName}>
            Meno
          </label>
          <input
            id={`${formId}-meno`}
            name="meno"
            type="text"
            required
            maxLength={40}
            autoComplete="name"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className={labelClassName}>
            Email
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            maxLength={40}
            autoComplete="email"
            inputMode="email"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor={`${formId}-telefon`} className={labelClassName}>
            Telefón
          </label>
          <input
            id={`${formId}-telefon`}
            name="telefon"
            type="tel"
            required
            maxLength={15}
            autoComplete="tel"
            inputMode="tel"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor={`${formId}-adresa`} className={labelClassName}>
            Adresa
          </label>
          <input
            id={`${formId}-adresa`}
            name="adresa"
            type="text"
            maxLength={50}
            autoComplete="street-address"
            className={inputClassName}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor={`${formId}-sprava`} className={labelClassName}>
            Správa
          </label>
          <textarea
            id={`${formId}-sprava`}
            name="sprava"
            rows={7}
            className={`${inputClassName} min-h-[11rem] resize-y leading-relaxed`}
          />
        </div>

        <div className="md:col-span-2">
          <button type="submit" className="btn-primary min-h-12 px-8">
            Odoslať správu
          </button>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Odoslanie formulára cez web zatiaľ nie je pripojené na server. Po
            stlačení tlačidla sa správa neodosiela — odosielanie doplníme v
            ďalšom kroku. Medzitým nás môžete kontaktovať telefonicky.
          </p>
        </div>
      </form>

      {submitted ? (
        <p
          id={statusId}
          role="status"
          className="mt-6 rounded-lg border border-line bg-accent-soft/80 px-4 py-3 text-sm leading-relaxed text-ink"
        >
          Formulár je pripravený, ale odoslanie zatiaľ nie je aktivované.
          Skontrolujte prosím údaje a kontaktujte nás telefonicky, ak
          potrebujete odpoveď ihneď.
        </p>
      ) : null}
    </div>
  );
}
