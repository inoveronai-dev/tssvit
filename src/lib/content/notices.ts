import { ROUTES } from "../routes";

export type Notice = {
  title: string;
  href: string;
};

/** Titles from the existing site; bodies and dates pending until content is migrated. */
export const NOTICES: Notice[] = [
  {
    title: "Informácia o realizácii projektu nákup malotraktora",
    href: ROUTES.oznamy,
  },
  {
    title:
      "Informácia o realizácii projektu na základe zmluvy č. 241566 08U03",
    href: ROUTES.oznamy,
  },
  {
    title: "Upozornenie na zber biologicky rozložiteľného odpadu",
    href: ROUTES.oznamy,
  },
  {
    title: "Miera vytriedenia odpadov",
    href: ROUTES.oznamy,
  },
];
