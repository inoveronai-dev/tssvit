import { ROUTES } from "./routes";

export type NavChild = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Služby",
    href: "/#sluzby",
    children: [
      { label: "Verejná zeleň", href: ROUTES.verejnaZelen },
      { label: "Odpadové hospodárstvo", href: ROUTES.odpadoveHospodarstvo },
      {
        label: "Verejné osvetlenie a technika",
        href: ROUTES.verejneOsvetlenie,
      },
      {
        label: "Pohrebné a cintorínske služby",
        href: ROUTES.pohrebneSluzby,
      },
    ],
  },
  {
    label: "Odpadové hospodárstvo",
    href: ROUTES.odpadoveHospodarstvo,
  },
  { label: "Oznamy", href: ROUTES.oznamy },
  {
    label: "Povinné zverejňovanie",
    href: ROUTES.povinneZverejnovanie,
  },
  { label: "O nás", href: ROUTES.oNas },
  { label: "Kontakt", href: ROUTES.kontakt },
];

export const FOOTER_SERVICES: NavChild[] = [
  { label: "Verejná zeleň", href: ROUTES.verejnaZelen },
  { label: "Odpadové hospodárstvo", href: ROUTES.odpadoveHospodarstvo },
  {
    label: "Verejné osvetlenie a technika",
    href: ROUTES.verejneOsvetlenie,
  },
  {
    label: "Pohrebné a cintorínske služby",
    href: ROUTES.pohrebneSluzby,
  },
];

export const FOOTER_INFO: NavChild[] = [
  { label: "Oznamy", href: ROUTES.oznamy },
  {
    label: "Objednávky",
    href: `${ROUTES.povinneZverejnovanie}#objednavky`,
  },
  { label: "Faktúry", href: `${ROUTES.povinneZverejnovanie}#faktury` },
  { label: "Zmluvy", href: `${ROUTES.povinneZverejnovanie}#zmluvy` },
];
