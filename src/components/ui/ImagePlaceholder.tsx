type ImagePlaceholderProps = {
  label?: string;
  className?: string;
  aspect?: "hero" | "card" | "feature" | "wide";
};

const aspectClass = {
  hero: "aspect-[16/10] md:aspect-[5/4] lg:aspect-[4/3]",
  card: "aspect-[16/10]",
  feature: "aspect-[4/3] md:aspect-auto md:min-h-[22rem]",
  wide: "aspect-[21/9]",
} as const;

export function ImagePlaceholder({
  label = "Fotografia neskôr",
  className = "",
  aspect = "card",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-lg border border-line bg-quiet ${aspectClass[aspect]} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,var(--accent-soft)_0%,transparent_45%,var(--teal-soft)_100%)] opacity-70" />
      <div className="relative z-10 px-4 text-center">
        <p className="text-sm font-semibold text-muted">{label}</p>
        <p className="mt-1 text-xs text-muted/80">
          Priestor pre autentickú fotografiu
        </p>
      </div>
    </div>
  );
}
