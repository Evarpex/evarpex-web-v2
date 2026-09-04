"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface EvarpexLogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  withLink?: boolean;
  className?: string;
}

export function EvarpexLogo({
  variant = "light",
  size = "md",
  withLink = true,
  className = "",
}: EvarpexLogoProps) {
  const heights = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto",
    lg: "h-10 w-auto",
    xl: "h-12 w-auto",
  };

  const imageSizes = {
    sm: { width: 120, height: 24 },
    md: { width: 160, height: 32 },
    lg: { width: 200, height: 40 },
    xl: { width: 240, height: 48 },
  };

  const isDark = variant === "dark";

  const content = (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* 
        Official EVARPEX Logo:
        Isometric interlocking cube emblem (Burnt Orange top, Deep Navy bottom) +
        Distinctive serif "EVARPEX" wordmark.
      */}
      {isDark ? (
        // On dark navy backgrounds: render official logo with crisp contrast
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/evarpex-logo.png"
            alt="EVARPEX Logo"
            width={imageSizes[size].width}
            height={imageSizes[size].height}
            className={`${heights[size]} object-contain brightness-0 invert opacity-95 transition-transform duration-200 group-hover:scale-105`}
            priority
          />
        </div>
      ) : (
        // On light backgrounds: render official full-color logo
        <Image
          src="/images/evarpex-logo.png"
          alt="EVARPEX Logo"
          width={imageSizes[size].width}
          height={imageSizes[size].height}
          className={`${heights[size]} object-contain transition-transform duration-200 group-hover:scale-105`}
          priority
        />
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link
        href="/"
        className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-evarpex-orange rounded-lg"
        aria-label="EVARPEX Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
