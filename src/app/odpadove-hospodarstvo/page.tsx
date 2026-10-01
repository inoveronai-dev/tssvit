import type { Metadata } from "next";
import { SiteImage } from "@/components/ui/SiteImage";
import { SubpageShell } from "@/components/shells/SubpageShell";
import { CONTACTS } from "@/lib/content/contacts";
import {
  ODPAD_ACTIVITIES,
  SEPARATED_WASTE_CALENDAR_2026,
} from "@/lib/content/organization";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Odpadové hospodárstvo",
};

export default function OdpadoveHospodarstvoPage() {
  const yard = CONTACTS.collectionYard;
  const compost = CONTACTS.compostPlant;

  return (
    <SubpageShell
      title="Odpadové hospodárstvo"
      description="V oblasti zberu, spracovania a zušľachťovania odpadov vykonávame nasledovné činnosti."
    >
      <div className="space-y-8">
        <SiteImage
          src={IMAGES.odpadSecondary.src}
          alt={IMAGES.odpadSecondary.alt}
          objectPosition="center 22%"
          sizes="(max-width: 768px) 100vw, 72rem"
          frameClassName="aspect-[16/10] w-full rounded-lg border border-line sm:aspect-[21/9]"
        />

        <section className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <h2 className="text-xl font-bold text-ink">
            V oblasti zberu, spracovania a zušľachťovania odpadov vykonávame
            nasledovné činnosti
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
            {ODPAD_ACTIVITIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section
          id="triedenie"
          className="scroll-mt-28 space-y-6 rounded-lg border border-line bg-surface p-6 md:p-8"
        >
          <div>
            <h2 className="text-xl font-bold text-ink">
              Zber separovaného odpadu
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                Zber separovaného odpadu sa v meste Svit a mestskej časti
                Podskalka realizuje prostredníctvom kontajnerov žltej, zelenej a
                modrej farby, ktoré sú rozmiestnené na stojiskách. Zberové
                kontajnery žltej farby sú určené na separovaný zber plastov,
                kovových obalov a VKM obalov (viacvrstvové kombinované obaly z
                mlieka, džúsov a pod.), zelenej farby na separovaný zber skla a
                modrej farby na separovaný zber papiera.
              </p>
              <p>
                Zber separovaného odpadu pri rodinných domoch sa v meste Svit a
                mestskej časti Podskalka realizuje prostredníctvom vriec žltej,
                zelenej a modrej farby. Zberové vrecia žltej farby sú určené na
                separovaný zber plastov, kovových obalov a VKM obalov
                (viacvrstvové kombinované obaly z mlieka, džúsov a pod.), zelenej
                farby na separovaný zber skla a modrej farby na separovaný zber
                papiera. Zber prebieha podľa platného harmonogramu.
              </p>
              <p>
                Zber separovaného odpadu od podnikateľských subjektov je možný
                len na základe platnej zmluvy a dohodnutého harmonogramu.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-ink">
              Zber TKO (tuhý komunálny odpad)
            </h3>
            <div className="mt-3 space-y-4 leading-relaxed text-muted">
              <p>
                Zber komunálneho odpadu je realizovaný prostredníctvom nádob a
                kontajnerov od bytových a rodinných domov. Zber prebieha počas
                týždňa podľa zberového harmonogramu. Poplatky za TKO pre občanov
                mesta sú vyrubované každoročne Mestským úradom Svit, podľa počtu
                obyvateľov v domácnosti na základe platobného výmeru.
              </p>
              <p>
                Podnikateľom a živnostníkom sa zabezpečuje vývoz podľa
                uzatvorených zmlúv o odpadoch s Mestským úradom Svit. V zmluve sa
                stanovia podmienky, ceny a cykly vývozu. Poplatky sú každoročne
                vyrubované Mestským úradom Svit v zmluvne stanovenej výške.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-ink">
              Zber BRO (biologicky rozložiteľný odpad)
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              Zber biologicky rozložiteľného odpadu v meste Svit a mestskej
              časti Podskalka prebieha podľa zberového harmonogramu. BRO je
              potrebné vyložiť pred dom na dostupné miesto v deň zberu. Patrí tu
              čerstvo pokosená tráva, lístie, konáre, zvyšky rastlín.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-ink">
              Zber KBRO (kuchynský biologicky rozložiteľný odpad)
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              Zber kuchynského biologicky rozložiteľného odpadu sa v meste Svit
              a mestskej časti Podskalka realizuje prostredníctvom 240 l
              kontajnerov hnedej farby. Zber prebieha podľa platného
              harmonogramu.
            </p>
          </div>
        </section>

        <section
          id="kalendar"
          className="scroll-mt-28 rounded-lg border border-line bg-surface p-6 md:p-8"
        >
          <h2 className="text-xl font-bold text-ink">
            Kalendár zberu separovaného odpadu 2026
          </h2>
          <p className="mt-3 text-muted">
            Kalendár zberu separovaného odpadu v roku 2026.
          </p>
          <a
            href={SEPARATED_WASTE_CALENDAR_2026}
            className="mt-4 inline-flex min-h-11 items-center font-semibold text-accent hover:text-accent-hover hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kalendár zberu separovaného odpadu (PDF)
          </a>
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
          <div className="space-y-6 p-6 md:p-8">
            <div>
              <h2 className="text-xl font-bold text-ink">Zberný dvor</h2>
              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-semibold text-muted">Adresa</dt>
                  <dd className="mt-1 font-medium text-ink">{yard.address}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-muted">
                    Otváracie hodiny
                  </dt>
                  <dd className="mt-1 font-medium text-ink">
                    {yard.hoursLabel}
                    <br />
                    {yard.hoursValue}
                  </dd>
                </div>
              </dl>
              <div className="mt-4 space-y-4 leading-relaxed text-muted">
                <p>
                  V zbernom dvore na ulici Hlavnej 10, v pracovných dňoch od 7:30
                  do 14:30 hod. môžu občania s trvalým pobytom v meste Svit
                  celoročne odovzdať veľkoobjemový odpad (skrine, okná a pod.). V
                  zbernom dvore môžu občania bezplatne odovzdať aj elektroodpad,
                  akumulátory a chemikálie v originálnych obaloch. Za poplatok je
                  možné odovzdať stavebnú suť bez nebezpečných odpadov.
                </p>
                <p>
                  Veľkoobjemový odpad je možné odovzdať v čase jarného a jesenného
                  upratovania prostredníctvom veľkoobjemových kontajnerov
                  pristavovaných na obvyklých miestach v meste a mestskej časti
                  Podskalka.
                </p>
                <p>
                  O termínoch a lokalitách pristavovania veľkoobjemových
                  kontajnerov v čase jarného a jesenného upratovania sú občania
                  v časovom predstihu informovaní prostredníctvom miestnych
                  médií. Zberný dvor, jarné a jesenné upratovanie nie sú určené
                  pre podnikateľské subjekty.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink">
                Odoberané druhy odpadov na zbernom dvore
              </h3>
              <div className="mt-4 space-y-4 text-muted">
                <div>
                  <p className="font-semibold text-ink">Objemný odpad</p>
                  <p className="mt-1 leading-relaxed">
                    starý nábytok, koberce, okná, dvere, zárubne, vane, umývadlá,
                    WC sanita
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-ink">Drobný stavebný odpad</p>
                  <p className="mt-1 leading-relaxed">
                    z prestavby bytov a rodinných domov, kde sa nevyžaduje
                    stavebné povolenie – tehly, kvádre, omietka, obkladačky,
                    dlažba, zvyšky muriva a pod.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-ink">Separovaný odpad</p>
                  <p className="mt-1 leading-relaxed">
                    papier a lepenka, sklo, plasty, šatstvo a textílie, kovy,
                    jedlé oleje a tuky
                  </p>
                </div>
                <p className="leading-relaxed">
                  V Zbernom dvore prebieha dotrieďovanie dovezeného odpadu
                  separovaného zberu (plasty, papier, sklo) na triediacej linke.
                  Tieto sú lisované do kociek, alebo umiestňované do VOK-ov kvôli
                  lepšiemu skladovaniu a následne odovzdávané spracovateľom na
                  recykláciu.
                </p>
                <div>
                  <p className="font-semibold text-ink">Nebezpečný odpad</p>
                  <p className="mt-1 leading-relaxed">
                    autobatérie, použité motorové oleje, obaly od použitých
                    motorových olejov a farieb, žiarivky
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-ink">Elektroodpad</p>
                  <p className="mt-1 leading-relaxed">
                    televízory, rádia, monitory, počítače, chladničky, mrazničky,
                    práčky, elektrické sporáky, motorové brúsky, píly, vŕtačky,
                    spotrebná elektronika a pod.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink">
                V Zbernom dvore nie je možné odovzdať
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                <li>komunálny odpad</li>
                <li>odpad z rozobratých dopravných prostriedkov</li>
                <li>
                  nebezpečný stavebný odpad (azbestovú strešnú krytinu, tzv.
                  eternit), azbestové rúry
                </li>
                <li>výkopovú zeminu</li>
                <li>pneumatiky</li>
              </ul>
              <p className="mt-4 leading-relaxed text-muted">
                Všetky informácie sú dostupné v aktuálnom VZN týkajúceho sa
                odpadového hospodárstva.
              </p>
            </div>
          </div>
        </section>

        <section
          id="kompostaren"
          className="scroll-mt-28 rounded-lg border border-line bg-surface p-6 md:p-8"
        >
          <h2 className="text-xl font-bold text-ink">
            CZ BRO kompostáreň Svit
          </h2>
          <p className="mt-1 text-sm font-medium text-muted">
            Centrum zhodnocovania biologicky rozložiteľného odpadu
          </p>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold text-muted">Lokalita</dt>
              <dd className="mt-1 font-medium text-ink">{compost.location}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted">
                Otváracie hodiny
              </dt>
              <dd className="mt-1 font-medium text-ink">
                {compost.hoursLabel}
                <br />
                {compost.hoursValue}
              </dd>
            </div>
          </dl>
          <div className="mt-4 space-y-4 leading-relaxed text-muted">
            <p>
              V kompostárni, v lokalite priľahlej k záhradkárskej osade Breziny
              pri hlavnej ceste v smere do Batizoviec je možné v pracovných dňoch
              od 7:30 do 14:30 hod. odovzdať BRO (biologicky rozložiteľný odpad)
              zo záhrad a dvorov, vhodných na biologické spracovanie. Čerstvo
              pokosenú trávu, lístie, konáre, zvyšky rastlín, kôru, piliny,
              hobliny je možné občanom s trvalým pobytom v meste Svit po
              odvážení odovzdať bezplatne.
            </p>
            <p>
              Kompostáreň je vybavená kompletnou technológiou na ekologické
              spracovanie odpadov organického pôvodu a výrobu kompostu. Z
              prakticky nepoužiteľného odpadu sa vytvára produkt vhodný na
              ďalšie využitie, ako napríklad skultivovanie pôd, parkové výsadby,
              záhradnícke a rekultivačné práce a pod.
            </p>
          </div>
        </section>
      </div>
    </SubpageShell>
  );
}
