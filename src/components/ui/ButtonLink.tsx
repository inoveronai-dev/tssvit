import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base = variant === "primary" ? "btn-primary" : "btn-secondary";
  return (
    <Link href={href} className={`${base} ${className}`.trim()}>
      {children}
    </Link>
  );
}
