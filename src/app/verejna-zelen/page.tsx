import type { Metadata } from "next";
import { SiteImage } from "@/components/ui/SiteImage";
import { SubpageShell } from "@/components/shells/SubpageShell";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Verejná zeleň",
};

export default function VerejnaZelenPage() {
  return (
    <SubpageShell
      title="Verejná zeleň"
      description="Údržba verejnej zelene, čistenie mesta, mestský mobiliár a starostlivosť o mestské lesy."
    >
      <div className="space-y-6">
        <SiteImage
          src={IMAGES.verejnaZelen.src}
          alt={IMAGES.verejnaZelen.alt}
          objectPosition="center 28%"
          sizes="(max-width: 768px) 100vw, 72rem"
          frameClassName="aspect-[16/11] w-full rounded-lg border border-line sm:aspect-[21/10]"
        />
        <div className="rounded-lg border border-dashed border-line bg-surface p-6 md:p-8">
          <p className="font-semibold text-ink">Obsah sa pripravuje</p>
          <p className="mt-2 text-muted">
            Podrobné informácie o verejnej zeleni budú doplnené. Medzitým môžete
            použiť kontaktné telefónne čísla v hornej lište.
          </p>
        </div>
      </div>
    </SubpageShell>
  );
}
