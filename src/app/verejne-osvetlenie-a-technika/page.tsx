import type { Metadata } from "next";
import { SiteImage } from "@/components/ui/SiteImage";
import { SubpageShell } from "@/components/shells/SubpageShell";
import {
  ORGANIZATION,
  VEREJNE_OSVETLENIE_ACTIVITIES,
} from "@/lib/content/organization";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Verejné osvetlenie a technika",
};

export default function VerejneOsvetleniePage() {
  return (
    <SubpageShell
      title="Verejné osvetlenie a technika"
      description="Základné činnosti na úseku verejného osvetlenia a techniky."
    >
      <div className="space-y-6">
        <SiteImage
          src={IMAGES.verejneOsvetlenie.src}
          alt={IMAGES.verejneOsvetlenie.alt}
          objectPosition="center 22%"
          sizes="(max-width: 768px) 100vw, 72rem"
          frameClassName="aspect-[16/11] w-full rounded-lg border border-line sm:aspect-[21/10]"
        />

        <div className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <p className="leading-relaxed text-muted">{ORGANIZATION.intro[1]}</p>
        </div>

        <div className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <h2 className="text-xl font-bold text-ink">
            Základné činnosti na úseku verejného osvetlenia a techniky
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
            {VEREJNE_OSVETLENIE_ACTIVITIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </SubpageShell>
  );
}
