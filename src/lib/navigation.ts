import { ROUTES } from "./routes";

export type NavChild = {
  label: string;
  /** Optional until subpages are explicitly enabled. */
  href?: string;
};

export type NavItem = {
  label: string;
  /** Used for simple top-level anchors; dropdown parents may omit routing. */
  href?: string;
  children?: NavChild[];
};

export type FooterLink = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Služby",
    children: [
      { label: "Verejná zeleň" },
      { label: "Odpadové hospodárstvo" },
      { label: "Verejné osvetlenie a technika" },
      { label: "Pohrebné a cintorínske služby" },
    ],
  },
  {
    label: "Povinne zverejňované informácie",
    children: [
      { label: "Objednávky" },
      { label: "Faktúry" },
      { label: "Zmluvy" },
      { label: "Odpadové hospodárstvo" },
      { label: "Autobusová stanica" },
    ],
  },
  { label: "Oznamy", href: "/#oznamy" },
  { label: "Kontakt", href: "/#kontakt-formular" },
];

export const FOOTER_SERVICES: FooterLink[] = [
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

export const FOOTER_INFO: FooterLink[] = [
  { label: "Oznamy", href: ROUTES.oznamy },
  {
    label: "Objednávky",
    href: `${ROUTES.povinneZverejnovanie}#objednavky`,
  },
  { label: "Faktúry", href: `${ROUTES.povinneZverejnovanie}#faktury` },
  { label: "Zmluvy", href: `${ROUTES.povinneZverejnovanie}#zmluvy` },
];
