"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { box: "h-8 w-8", text: "text-base", img: 32 },
  md: { box: "h-9 w-9", text: "text-lg", img: 36 },
  lg: { box: "h-12 w-12", text: "text-xl", img: 48 },
};

export function Logo({ size = "md", showText = true, className }: LogoProps) {
  const s = sizeMap[size];
  return (
    <div className={cn("flex items-center gap-2 font-bold", s.text, className)}>
      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-lg ring-1 ring-border/60",
          s.box
        )}
      >
        <Image
          src="/logo-pgsi.jpg"
          alt="CyberRoom Logo"
          width={s.img}
          height={s.img}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      {showText && (
        <span>
          Cyber<span className="text-primary">Room</span>
        </span>
      )}
    </div>
  );
}
