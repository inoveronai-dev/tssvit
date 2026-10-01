import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteUtilityBar } from "@/components/layout/SiteUtilityBar";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Technické služby Mesta Svit",
    template: "%s | Technické služby Mesta Svit",
  },
  description:
    "Poslaním TS Mesta Svit je zabezpečovať verejnoprospešné služby v súlade so záujmami a potrebami mesta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:font-semibold focus:text-ink focus:shadow"
        >
          Preskočiť na obsah
        </a>
        <SiteUtilityBar />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
