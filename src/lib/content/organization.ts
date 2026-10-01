/** Official organization copy — factual source of truth only. */

export const ORGANIZATION = {
  name: "Technické služby Mesta Svit",
  intro: [
    "Technické služby Mesta Svit sú mestskou príspevkovou organizáciou, ktorá má svoju právnu subjektivitu. Zriaďovateľom TS Mesta Svit je Mestské zastupiteľstvo mesta Svit v súlade so zákonom č. 369/1990 Zb. § 4 a § 11 o obecnom zriadení v znení platných právnych predpisov. Vedením TS Mesta Svit je Mestským zastupiteľstvom vymenovaný riaditeľ, ktorý navonok zastupuje organizáciu.",
    "Poslaním TS Mesta Svit je v súlade so záujmami a potrebami mesta a v rozsahu ustanovenom príslušnými všeobecne záväznými nariadeniami mesta Svit zabezpečovať verejnoprospešné služby.",
  ],
  missionShort:
    "Poslaním TS Mesta Svit je zabezpečovať verejnoprospešné služby v súlade so záujmami a potrebami mesta.",
  coreActivities: [
    {
      title: "Nakladanie s odpadom",
      detail:
        "Spôsob zberu (triedenie), preprava, zhodnocovanie a zneškodňovanie odpadu v meste Svit",
    },
    { title: "Údržba miestnych komunikácií" },
    { title: "Čistenie mesta" },
    { title: "Údržba a tvorba verejnej zelene" },
    { title: "Údržba verejného osvetlenia" },
    { title: "Pohrebné a cintorínske služby" },
    { title: "Služby kompostárne" },
    {
      title: "Ostatné služby",
      items: [
        "doprava",
        "propagácia vylepovaním plagátov, údržba plagátovacích zariadení",
        "údržba parkovísk",
        "výzdoba mesta pri rôznych kultúrno-spoločenských podujatiach",
      ],
    },
  ],
} as const;

export const SERVICE_SUMMARIES = {
  verejnaZelen:
    "Čistenie mesta, údržba a tvorba verejnej zelene, správa a údržba mobiliáru a lesné hospodárstvo mestských lesov.",
  odpadoveHospodarstvo:
    "Zber a triedenie separovaného odpadu, zber a odvoz TKO, zber a spracovanie BRO a KBRO, prevádzka Zberného dvora a Kompostárne.",
  verejneOsvetlenie:
    "Správa a údržba miestnych komunikácií, verejného osvetlenia, verejných priestranstiev a parkovísk a výzdoba mesta pri kultúrno-spoločenských podujatiach.",
  pohrebneSluzby:
    "Komplexná činnosť spojená s prevádzkovaním cintorína a zabezpečovaním smútočných rozlúčok.",
} as const;

export const VEREJNA_ZELEN_ACTIVITIES = [
  "čistenie mesta",
  "údržba a tvorba verejnej zelene",
  "správa a údržba mobiliáru",
  "lesné hospodárstvo mestských lesov",
] as const;

export const VEREJNE_OSVETLENIE_ACTIVITIES = [
  "správa a údržba miestnych komunikácií",
  "správa a údržba verejného osvetlenia",
  "správa a údržba verejných priestranstiev a parkovísk",
  "výzdoba mesta pri rôznych kultúrno-spoločenských podujatiach",
] as const;

export const ODPAD_ACTIVITIES = [
  "Zber a triedenie separovaného odpadu",
  "Zber a odvoz tuhého komunálneho odpadu (TKO)",
  "Zber a spracovanie biologicky rozložiteľného odpadu (BRO)",
  "Zber a spracovanie kuchynského biologicky rozložiteľného odpadu (KBRO)",
  "Prevádzka Zberného dvora",
  "Prevádzka Kompostárne",
] as const;

export const SEPARATED_WASTE_CALENDAR_2026 =
  "http://ts.svit.sk/separovanyzber/separovanyzber_20260212_141624.pdf";
