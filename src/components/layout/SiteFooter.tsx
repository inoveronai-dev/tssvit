import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { FOOTER_INFO, FOOTER_SERVICES } from "@/lib/navigation";
import { HOME_SECTIONS, PHONES } from "@/lib/routes";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/20 bg-ink text-white">
      <div className="container-site grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-14">
        <div className="lg:pr-6">
          <BrandLogo variant="footer" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Poslaním TS Mesta Svit je zabezpečovať verejnoprospešné služby v
            súlade so záujmami a potrebami mesta.
          </p>
        </div>

        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white/40">
            Služby
          </p>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_SERVICES.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white/40">
            Informácie
          </p>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_INFO.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white/40">
            Kontakt
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <span className="block text-white/45">Prvý kontakt</span>
              <a
                href={PHONES.main.href}
                className="mt-0.5 inline-block font-semibold text-white hover:underline"
              >
                {PHONES.main.label}
              </a>
            </li>
            <li>
              <span className="block text-white/45">
                Pohrebná služba NONSTOP
              </span>
              <a
                href={PHONES.funeral.href}
                className="mt-0.5 inline-block font-semibold text-white hover:underline"
              >
                {PHONES.funeral.label}
              </a>
            </li>
            <li className="pt-1">
              <Link
                href={HOME_SECTIONS.contact}
                className="text-white/75 transition-colors hover:text-white"
              >
                Kontaktná stránka
              </Link>
            </li>
            <li>
              <Link
                href={HOME_SECTIONS.contact}
                className="text-white/75 transition-colors hover:text-white"
              >
                Nahlásiť podnet
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-1 py-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Technické služby Mesta Svit</p>
          <p>Ochrana osobných údajov — obsah sa pripravuje</p>
        </div>
      </div>
    </footer>
  );
}
