"use client";

import Image from "next/image";

/**
 * Global logo background.
 * Renders the logo as a fixed full-viewport background image
 * with a gradient overlay so all page content stays readable.
 */
export function LogoBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <Image
        src="/logo-pgsi.jpg"
        alt=""
        fill
        priority
        className="h-full w-full object-cover"
        sizes="100vw"
      />
      {/* Gradient overlay — tuned so the dark logo shows through as an ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/68 to-background/80 dark:from-background/70 dark:via-background/78 dark:to-background/85" />
    </div>
  );
}
