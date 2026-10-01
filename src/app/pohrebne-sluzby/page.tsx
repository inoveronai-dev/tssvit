import type { Metadata } from "next";
import { SiteImage } from "@/components/ui/SiteImage";
import { SubpageShell } from "@/components/shells/SubpageShell";
import { CONTACTS } from "@/lib/content/contacts";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Pohrebné a cintorínske služby",
};

const CEMETERY_SERVICES = [
  "výkop hrobov a úprava okolia hrobu",
  "poskytnutie hrobového miesta pri pohrebe",
  "správa a údržba cintorína",
  "prenájom hrobového miesta",
  "vyhľadávanie v evidencii pochovaných",
  "exhumácie zosnulých",
] as const;

const FUNERAL_SERVICES = [
  "prevoz zosnulých",
  "obliekanie a úprava zosnulých",
  "zabezpečenie kompletnej pohrebnej dokumentácie a matriky",
  "chladiace zariadenie",
  "predaj rakiev, krížov",
  "výroba a predaj vencov, smútočných kytíc a pohrebných rekvizít (šerpy, kahance atď.)",
  "príprava smútočného obradu",
  "zabezpečenie dôstojnej poslednej rozlúčky",
  "hudobný sprievod a ozvučenie pri hrobe",
  "reprodukovaný hudobný sprievod na želanie",
  "odvoz kvetinových darov k miestu pochovania",
  "pri kremačnej rozlúčke prevoz zosnulých do krematória, vrátane vybavenia požadovaných náležitostí",
  "dohliadanie na kvalitu a dôstojný výkon pietneho aktu",
  "potvrdenie účasti na pohrebe pre zamestnávateľa",
] as const;

export default function PohrebneSluzbyPage() {
  const funeral = CONTACTS.funeral;

  return (
    <SubpageShell
      title="Pohrebné a cintorínske služby"
      description="Komplexná činnosť spojená s prevádzkovaním cintorína a zabezpečovaním smútočných rozlúčok."
    >
      <div className="space-y-8">
        <SiteImage
          src={IMAGES.pohrebneSluzby.src}
          alt={IMAGES.pohrebneSluzby.alt}
          objectPosition="center 45%"
          sizes="(max-width: 768px) 100vw, 72rem"
          frameClassName="aspect-[16/11] w-full rounded-lg border border-line sm:aspect-[21/10]"
        />

        <section className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <div className="space-y-4 leading-relaxed text-muted">
            <p>
              Poslaním príspevkovej organizácie Technické služby Mesta Svit je
              zabezpečovať verejnoprospešné služby. Významnou súčasťou sú
              Pohrebné a cintorínske služby, ktoré poskytujú komplexnú činnosť
              spojenú s prevádzkovaním cintorína a zabezpečovaním smútočných
              rozlúčok.
            </p>
            <p>
              Pokiaľ u vás nastala smutná udalosť a hľadáte pomoc, prijmite
              úprimnú sústrasť a navštívte našu kanceláriu. Spravíme všetko pre
              to, aby sme vám v tejto ťažkej chvíli vyšli čo najviac v ústrety a
              pomohli vám.
            </p>
          </div>

          <dl className="mt-8 grid gap-5 border-t border-line pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted">
                Nonstop služba
              </dt>
              <dd className="mt-2">
                <a
                  href={funeral.nonstop.href}
                  className="text-3xl font-bold text-ink hover:text-accent"
                >
                  {funeral.nonstop.label}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted">
                Otváracie hodiny
              </dt>
              <dd className="mt-2 font-medium text-ink">
                {funeral.hoursLabel}
                <br />
                {funeral.hoursValue}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted">
                Web
              </dt>
              <dd className="mt-2">
                <a
                  href={funeral.web}
                  className="font-semibold text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.pohrebysvit.sk
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted">
                Virtuálny cintorín
              </dt>
              <dd className="mt-2">
                <a
                  href={funeral.virtualCemetery}
                  className="font-semibold text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.virtualnycintorin.sk/obce/2526
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <h2 className="text-xl font-bold text-ink">
            Pohrebisko a cintorínske služby
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Do portfólia Pohrebných a cintorínskych služieb patrí prevádzka a
            správa Pohrebiska vo Svite. V rámci týchto služieb zabezpečujeme:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
            {CEMETERY_SERVICES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <h2 className="text-xl font-bold text-ink">Pohrebné služby</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Komplexnú činnosť spojenú so zabezpečovaním smútočných rozlúčok
            ponúkame na profesionálnej úrovni, a zároveň s citlivým,
            individuálnym prístupom ku každému. Medzi naše služby patrí:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
            {FUNERAL_SERVICES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            Ponuka našich služieb Vám umožní vybaviť všetky záležitosti spojené
            s pohrebom, prenájmom hrobového miesta a kremácie na jednom mieste v
            Dome smútku vo Svite.
          </p>
        </section>

        <section className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <h2 className="text-xl font-bold text-ink">
            Ako postupovať pri úmrtí
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            V prípade úmrtia je potrebné si pripraviť tieto doklady:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-ink">
            <li>preukaz poistenca</li>
            <li>občiansky preukaz/identifikačná karta</li>
            <li>list o prehliadke mŕtveho</li>
            <li>doklad o hrobnom mieste</li>
          </ul>
          <p className="mt-5 leading-relaxed text-muted">
            V prípade úmrtia dieťaťa do 15 rokov:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-ink">
            <li>rodný list dieťaťa</li>
            <li>list o prehliadke mŕtveho</li>
            <li>občianske preukazy / identifikačnú kartu rodičov</li>
          </ul>
        </section>

        <section className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <h2 className="text-xl font-bold text-ink">Web stránka</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Novinkou Pohrebných a cintorínskych služieb je vlastná internetová
            stránka{" "}
            <a
              href={funeral.web}
              className="font-semibold text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.pohrebysvit.sk
            </a>
            . Nájdete tu aktuality, potrebné informácie, oznamy, fotogalériu, ale
            tiež napríklad súčasné epidemiologické nariadenia.
          </p>
        </section>

        <section className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <h2 className="text-xl font-bold text-ink">Virtuálny cintorín</h2>
          <div className="mt-3 space-y-4 leading-relaxed text-muted">
            <p>
              Na portáli{" "}
              <a
                href="https://www.virtualnycintorin.sk"
                className="font-semibold text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.virtualnycintorin.sk
              </a>{" "}
              sú zverejnené hrobové miesta od viac ako 300 miest a obcí
              Slovenska. V roku 2021 sa medzi tieto mestá zaradilo aj Mesto Svit.
              Návštevník stránky tu nájde mapy cintorínov s vyznačenými hrobmi a
              údajmi o zosnulých.
            </p>
            <p>
              Pre tých, ktorí nemajú možnosť navštíviť hroby osobne, je tu
              možnosť zapáliť virtuálnu sviečku na stránke hrobového miesta.
              Odkaz nájdete aj na internetovej stránke pohrebných a
              cintorínskych služieb.
            </p>
            <a
              href={funeral.virtualCemetery}
              className="inline-flex min-h-11 items-center font-semibold text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Virtuálny cintorín – Mesto Svit
            </a>
          </div>
        </section>

        <section className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <h2 className="text-xl font-bold text-ink">Kontaktné údaje</h2>
          <div className="mt-4 space-y-1 font-medium text-ink">
            {funeral.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold text-muted">NON STOP</dt>
              <dd className="mt-1">
                <a
                  href={funeral.nonstop.href}
                  className="font-semibold text-accent hover:underline"
                >
                  {funeral.nonstop.label}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted">
                {funeral.headLabel}
              </dt>
              <dd className="mt-1">
                <a
                  href={funeral.headPhone.href}
                  className="font-semibold text-accent hover:underline"
                >
                  {funeral.headPhone.label}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted">E-mail</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${funeral.email}`}
                  className="font-semibold text-accent hover:underline"
                >
                  {funeral.email}
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </SubpageShell>
  );
}
