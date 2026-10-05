import { HOME_SECTIONS } from "./routes";

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
      { label: "Verejná zeleň", href: HOME_SECTIONS.services },
      { label: "Odpadové hospodárstvo", href: HOME_SECTIONS.waste },
      {
        label: "Verejné osvetlenie a technika",
        href: HOME_SECTIONS.services,
      },
      {
        label: "Pohrebné a cintorínske služby",
        href: HOME_SECTIONS.funeral,
      },
    ],
  },
  {
    label: "Povinne zverejňované informácie",
    children: [
      { label: "Objednávky", href: HOME_SECTIONS.documents },
      { label: "Faktúry", href: HOME_SECTIONS.documents },
      { label: "Zmluvy", href: HOME_SECTIONS.documents },
      { label: "Odpadové hospodárstvo", href: HOME_SECTIONS.documents },
      { label: "Autobusová stanica", href: HOME_SECTIONS.documents },
    ],
  },
  { label: "Oznamy", href: HOME_SECTIONS.notices },
  { label: "Kontakt", href: HOME_SECTIONS.contact },
];

export const FOOTER_SERVICES: FooterLink[] = [
  { label: "Verejná zeleň", href: HOME_SECTIONS.services },
  { label: "Odpadové hospodárstvo", href: HOME_SECTIONS.waste },
  {
    label: "Verejné osvetlenie a technika",
    href: HOME_SECTIONS.services,
  },
  {
    label: "Pohrebné a cintorínske služby",
    href: HOME_SECTIONS.funeral,
  },
];

export const FOOTER_INFO: FooterLink[] = [
  { label: "Oznamy", href: HOME_SECTIONS.notices },
  {
    label: "Objednávky",
    href: HOME_SECTIONS.documents,
  },
  { label: "Faktúry", href: HOME_SECTIONS.documents },
  { label: "Zmluvy", href: HOME_SECTIONS.documents },
];
