"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { NAV_ITEMS, type NavItem } from "@/lib/navigation";

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const panelId = useId();

  const clearClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearClose();
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearClose(), []);

  if (!item.children?.length) {
    return (
      <a
        href={item.href ?? "#"}
        className="inline-flex min-h-11 items-center px-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        clearClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocus={() => {
        clearClose();
        setOpen(true);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        className="inline-flex min-h-11 items-center gap-1 px-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open ? (
        <div
          id={panelId}
          role="menu"
          className="absolute left-0 top-full z-40 min-w-[17rem] rounded-lg border border-line bg-surface p-2 shadow-sm"
        >
          {item.children.map((child) => (
            <button
              key={child.label}
              type="button"
              role="menuitem"
              className="block w-full rounded-md px-3 py-2.5 text-left text-sm font-medium text-ink transition-colors hover:bg-accent-soft hover:text-accent focus-visible:bg-accent-soft focus-visible:text-accent"
              onClick={() => setOpen(false)}
            >
              {child.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur-sm">
      <div className="container-site flex items-center justify-between gap-4 py-2.5 sm:py-3">
        <BrandLogo variant="header" />

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Hlavná navigácia"
        >
          {NAV_ITEMS.map((item) => (
            <DesktopDropdown key={item.label} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#kontakt-formular"
            className="btn-primary hidden sm:inline-flex"
          >
            Nahlásiť podnet
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={panelId}
            aria-label={mobileOpen ? "Zavrieť menu" : "Otvoriť menu"}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id={panelId}
          className="border-t border-line bg-surface lg:hidden"
        >
          <nav
            className="container-site flex max-h-[calc(100vh-8rem)] flex-col gap-1 overflow-y-auto py-4"
            aria-label="Mobilná navigácia"
          >
            {NAV_ITEMS.map((item) => {
              if (!item.children?.length) {
                return (
                  <a
                    key={item.label}
                    href={item.href ?? "#"}
                    className="rounded-lg px-3 py-3 text-base font-semibold text-ink hover:bg-accent-soft"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              }

              const isOpen = openMobileGroup === item.label;

              return (
                <div key={item.label} className="rounded-lg">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-semibold text-ink hover:bg-accent-soft"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenMobileGroup((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  {isOpen ? (
                    <div className="ml-2 flex flex-col border-l border-line pl-2">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          type="button"
                          className="rounded-lg px-3 py-3 text-left text-base font-medium text-muted hover:bg-accent-soft hover:text-ink"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <a
              href="/#kontakt-formular"
              className="btn-primary mt-2 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Nahlásiť podnet
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
