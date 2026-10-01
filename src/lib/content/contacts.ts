import { PHONES } from "../routes";

export const CONTACTS = {
  organization: "Technické služby Mesta Svit",
  mainPhone: PHONES.main,
  funeralPhone: PHONES.funeral,
  seat: {
    label: "Sídlo správy Technických služieb",
    address: "Hviezdoslavova 268/32, 059 21 Svit",
  },
  registry: {
    ico: "00186864",
    dic: "2021212545",
    icDph: "SK2021212545",
    registration:
      "Okresný úrad, odbor živnostenský, reg. číslo: 706-16507",
  },
  director: {
    label: "Riaditeľ a štatutárny zástupca",
    name: "Ing. Igor Hus, MBA",
    phone: { label: "0908 429 138", href: "tel:+421908429138" },
    email: "riaditel.ts@tssvit.sk",
  },
  firstContact: {
    label: "Prvý kontakt",
    phone: PHONES.main,
    email: "sekretariat.ts@tssvit.sk",
  },
  collectionYard: {
    name: "Zberný dvor Svit",
    address: "Hlavná 10, 059 21 Svit",
    hoursLabel: "Pracovné dni",
    hoursValue: "7:30 – 14:30",
  },
  compostPlant: {
    name: "CZ BRO kompostáreň Svit",
    location:
      "Lokalita priľahlá k záhradkárskej osade Breziny pri hlavnej ceste v smere do Batizoviec",
    hoursLabel: "Pracovné dni",
    hoursValue: "7:30 – 14:30",
  },
  funeral: {
    nonstop: PHONES.funeral,
    hoursLabel: "Pondelok – piatok",
    hoursValue: "7:30 – 14:30",
    addressLines: [
      "Technické služby Mesta Svit",
      "Pohrebné a cintorínske služby",
      "Nábrežie Jána Pavla II. 936/1",
      "059 21 Svit",
    ],
    headLabel: "Vedúca PaCs",
    headPhone: { label: "0908 026 566", href: "tel:+421908026566" },
    email: "pohrebnesluzby@tssvit.sk",
    web: "https://www.pohrebysvit.sk",
    virtualCemetery: "https://www.virtualnycintorin.sk/obce/2526",
  },
  departments: [
    {
      title: "Prevádzkovo-technický úsek",
      seat: "Hviezdoslavova 268/32, 059 21 Svit",
      role: "Riaditeľ prevádzkovo-technického úseku",
      name: "Juraj Kostroš",
      phone: { label: "0903 117 673", href: "tel:+421903117673" },
      email: "juraj.kostros@tssvit.sk",
    },
    {
      title: "Odd. zberu, spracovania a zušľachťovania odpadov",
      seat: "Hlavná 10, 059 21 Svit",
      role: "Vedúci",
      name: "Ing. Andrej Paulini",
      phone: { label: "0908 428 997", href: "tel:+421908428997" },
      email: "odpady@tssvit.sk",
    },
    {
      title: "Technický úsek",
      seat: "Hviezdoslavova 268/32, 059 21 Svit",
      role: "Vedúci",
      name: "Michal Uhrin",
      phone: { label: "0918 686 631", href: "tel:+421918686631" },
      email: "michal.uhrin@tssvit.sk",
    },
    {
      title: "Úsek pohrebných a cintorínskych služieb",
      seat: "Jána Pavla II 936/1, 059 21 Svit",
      role: "Vedúca",
      name: "Bc. Richard Holzbár",
      phone: { label: "0908 026 566", href: "tel:+421908026566" },
      email: "pohrebnesluzby@tssvit.sk",
      nonstop: PHONES.funeral,
    },
    {
      title: "Úsek verejnej zelene",
      seat: "Hlavná 10, 059 21 Svit",
      role: "Vedúci",
      name: "Mgr. Marcela Sedlák",
      phone: { label: "0908 429 312", href: "tel:+421908429312" },
      email: "zelen@tssvit.sk",
    },
  ],
} as const;
