import type { Metadata } from "next";
import { SiteImage } from "@/components/ui/SiteImage";
import { SubpageShell } from "@/components/shells/SubpageShell";
import { CONTACTS } from "@/lib/content/contacts";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Odpadové hospodárstvo",
};

export default function OdpadoveHospodarstvoPage() {
  return (
    <SubpageShell
      title="Odpadové hospodárstvo"
      description="Informácie o zbere odpadu, triedení, zbernom dvore a kompostárni."
    >
      <div className="space-y-8">
        <SiteImage
          src={IMAGES.odpadSecondary.src}
          alt={IMAGES.odpadSecondary.alt}
          objectPosition="center 22%"
          sizes="(max-width: 768px) 100vw, 72rem"
          frameClassName="aspect-[16/10] w-full rounded-lg border border-line sm:aspect-[21/9]"
        />

        <section
          id="kalendar"
          className="scroll-mt-28 rounded-lg border border-line bg-surface p-6"
        >
          <h2 className="text-xl font-bold text-ink">Kalendár zberu</h2>
          <p className="mt-2 text-muted">
            Kalendár zberu odpadu bude doplnený. Obsah sa pripravuje.
          </p>
        </section>

        <section
          id="zberny-dvor"
          className="scroll-mt-28 overflow-hidden rounded-lg border border-line bg-surface"
        >
          <SiteImage
            src={IMAGES.zbernyDvor.src}
            alt={IMAGES.zbernyDvor.alt}
            objectPosition="center 35%"
            sizes="(max-width: 768px) 100vw, 72rem"
            frameClassName="aspect-[16/10] w-full sm:aspect-[21/9]"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-ink">Zberný dvor</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-muted">Adresa</dt>
                <dd className="mt-1 font-medium text-ink">
                  {CONTACTS.collectionYard.address}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-muted">
                  Otváracie hodiny
                </dt>
                <dd className="mt-1 font-medium text-ink">
                  {CONTACTS.collectionYard.hoursLabel}
                  <br />
                  {CONTACTS.collectionYard.hoursValue}
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-muted">
              Podrobný zoznam materiálov, ktoré je možné odovzdať, bude doplnený.
              Obsah sa pripravuje.
            </p>
          </div>
        </section>

        <section
          id="kompostaren"
          className="scroll-mt-28 rounded-lg border border-line bg-surface p-6"
        >
          <h2 className="text-xl font-bold text-ink">Kompostáreň</h2>
          <p className="mt-2 text-muted">
            Informácie o kompostárni budú doplnené. Obsah sa pripravuje.
          </p>
        </section>

        <section
          id="triedenie"
          className="scroll-mt-28 rounded-lg border border-line bg-surface p-6"
        >
          <h2 className="text-xl font-bold text-ink">Ako triediť odpad</h2>
          <p className="mt-2 text-muted">
            Pokyny k triedeniu odpadu budú doplnené. Obsah sa pripravuje.
          </p>
        </section>
      </div>
    </SubpageShell>
  );
}
