import type { Metadata } from "next";
import { SubpageShell } from "@/components/shells/SubpageShell";

export const metadata: Metadata = {
  title: "Verejné osvetlenie a technika",
};

export default function VerejneOsvetleniePage() {
  return (
    <SubpageShell
      title="Verejné osvetlenie a technika"
      description="Správa miestnych komunikácií, verejného osvetlenia, parkovísk a verejných priestranstiev."
    />
  );
}
