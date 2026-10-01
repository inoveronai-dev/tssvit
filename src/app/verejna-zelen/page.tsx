import type { Metadata } from "next";
import { SiteImage } from "@/components/ui/SiteImage";
import { SubpageShell } from "@/components/shells/SubpageShell";
import {
  ORGANIZATION,
  VEREJNA_ZELEN_ACTIVITIES,
} from "@/lib/content/organization";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Verejná zeleň",
};

export default function VerejnaZelenPage() {
  return (
    <SubpageShell
      title="Verejná zeleň"
      description="Základné činnosti na úseku verejnej zelene."
    >
      <div className="space-y-6">
        <SiteImage
          src={IMAGES.verejnaZelen.src}
          alt={IMAGES.verejnaZelen.alt}
          objectPosition="center 28%"
          sizes="(max-width: 768px) 100vw, 72rem"
          frameClassName="aspect-[16/11] w-full rounded-lg border border-line sm:aspect-[21/10]"
        />

        <div className="space-y-4 rounded-lg border border-line bg-surface p-6 md:p-8">
          {ORGANIZATION.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <h2 className="text-xl font-bold text-ink">
            Základné činnosti na úseku verejnej zelene
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
            {VEREJNA_ZELEN_ACTIVITIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </SubpageShell>
  );
}
