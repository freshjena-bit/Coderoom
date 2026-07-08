"use client";

import Image from "next/image";

/**
 * Global background image.
 * Renders the anime character as a fixed decorative background on the
 * right side, with a gradient overlay fading to the left so left-side
 * content stays readable.
 */
export function LogoBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Anime character positioned on the right side */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-2/3 md:w-1/2 lg:w-[45%]">
        <Image
          src="/bg-cyberlab.jpg"
          alt=""
          fill
          priority
          className="h-full w-full object-cover object-center sm:object-right"
          sizes="100vw"
        />
      </div>
      {/* Gradient overlay — fades from solid background (left) to transparent (right)
          so the character is clearly visible on the right while content on the left is readable. */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent dark:from-background dark:via-background/75 dark:to-background/20" />
      {/* Bottom fade for footer readability */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  );
}
