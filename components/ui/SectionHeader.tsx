import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "orange" | "navy" | "green" | "gray" | "blue";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  badge,
  badgeVariant = "orange",
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div className={`mb-3.5 ${isCenter ? "flex justify-center" : ""}`}>
          <Badge variant={isDark ? "orange" : badgeVariant} dot>
            {badge}
          </Badge>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-evarpex-navy"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
