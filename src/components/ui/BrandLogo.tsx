import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

type BrandLogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

/**
 * Official mark is a small raster (~65×68). Display near native size;
 * pair with text for a crisp, readable lockup.
 */
export function BrandLogo({
  variant = "header",
  className = "",
}: BrandLogoProps) {
  const isFooter = variant === "footer";

  const mark = (
    <Image
      src="/images/brand/logo-mark.png"
      alt=""
      width={65}
      height={68}
      unoptimized
      priority={variant === "header"}
      className={
        isFooter
          ? "h-9 w-auto shrink-0 object-contain"
          : "h-10 w-auto shrink-0 object-contain sm:h-[2.625rem]"
      }
    />
  );

  const wordmark = (
    <span className="min-w-0">
      <span
        className={
          isFooter
            ? "block text-[0.95rem] font-bold leading-tight tracking-tight text-white"
            : "block text-sm font-bold leading-tight tracking-tight text-ink sm:text-[0.98rem]"
        }
      >
        Technické služby
      </span>
      <span
        className={
          isFooter
            ? "mt-0.5 block text-xs font-medium leading-tight text-white/65"
            : "mt-0.5 block text-xs font-medium leading-tight text-muted sm:text-[0.8125rem]"
        }
      >
        Mesta Svit
      </span>
    </span>
  );

  return (
    <Link
      href={ROUTES.home}
      aria-label="Technické služby Mesta Svit — úvodná stránka"
      className={
        isFooter
          ? `inline-flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`.trim()
          : `inline-flex min-h-11 items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:gap-3 ${className}`.trim()
      }
    >
      {mark}
      {wordmark}
    </Link>
  );
}
