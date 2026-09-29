import { PHONES } from "../routes";

export const CONTACTS = {
  organization: "Technické služby Mesta Svit",
  mainPhone: PHONES.main,
  funeralPhone: PHONES.funeral,
  collectionYard: {
    name: "Zberný dvor Svit",
    address: "Hlavná 10, Svit",
    hoursLabel: "Pondelok – piatok",
    hoursValue: "7:30 – 14:30",
  },
} as const;
