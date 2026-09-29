export const ROUTES = {
  home: "/",
  verejnaZelen: "/verejna-zelen",
  odpadoveHospodarstvo: "/odpadove-hospodarstvo",
  verejneOsvetlenie: "/verejne-osvetlenie-a-technika",
  pohrebneSluzby: "/pohrebne-sluzby",
  oznamy: "/oznamy",
  povinneZverejnovanie: "/povinne-zverejnovanie",
  kontakt: "/kontakt",
  oNas: "/o-nas",
  nahlasitPodnet: "/nahlasit-podnet",
} as const;

export const PHONES = {
  main: {
    label: "0905 703 606",
    href: "tel:+421905703606",
  },
  funeral: {
    label: "0905 253 412",
    href: "tel:+421905253412",
  },
} as const;
