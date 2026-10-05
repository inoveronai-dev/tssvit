import { HOME_SECTIONS } from "../routes";

export type Notice = {
  title: string;
  href: string;
};

/** Titles from the existing site; bodies pending until content is migrated. */
export const NOTICES: Notice[] = [
  {
    title: "Informácia o realizácii projektu nákup malotraktora",
    href: HOME_SECTIONS.notices,
  },
  {
    title:
      "Informácia o realizácii projektu na základe zmluvy č. 241566 08U03",
    href: HOME_SECTIONS.notices,
  },
  {
    title: "Upozornenie na zber biologicky rozložiteľného odpadu",
    href: HOME_SECTIONS.notices,
  },
  {
    title: "Miera vytriedenia odpadov",
    href: HOME_SECTIONS.notices,
  },
];
