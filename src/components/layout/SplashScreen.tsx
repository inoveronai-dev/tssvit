"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const STORAGE_KEY = "tssvit-splash-seen";

type Phase = "idle" | "enter" | "exit" | "done";

export function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        setPhase("done");
        return;
      }
    } catch {
      setPhase("done");
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const markSeen = () => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
    };

    if (reducedMotion) {
      setPhase("enter");
      const doneTimer = window.setTimeout(() => {
        markSeen();
        document.body.style.overflow = previousOverflow;
        setPhase("done");
      }, 350);
      return () => {
        window.clearTimeout(doneTimer);
        document.body.style.overflow = previousOverflow;
      };
    }

    setPhase("enter");

    const exitTimer = window.setTimeout(() => setPhase("exit"), 950);
    const doneTimer = window.setTimeout(() => {
      markSeen();
      document.body.style.overflow = previousOverflow;
      setPhase("done");
    }, 1400);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (phase === "idle" || phase === "done") {
    return null;
  }

  return (
    <div
      className={`splash-screen ${phase === "exit" ? "splash-screen--exit" : "splash-screen--enter"}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="splash-screen__content">
        <Image
          src="/images/brand/logo-mark.png"
          alt=""
          width={65}
          height={68}
          unoptimized
          priority
          className="splash-screen__logo h-14 w-auto object-contain sm:h-16"
        />
        <p className="splash-screen__title">
          <span className="block">Technické služby</span>
          <span className="mt-1 block">Mesta Svit</span>
        </p>
        <p className="splash-screen__subtitle">
          Verejnoprospešné služby pre mesto Svit
        </p>
      </div>
    </div>
  );
}
