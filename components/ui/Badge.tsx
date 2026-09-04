import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "navy" | "green" | "gray" | "blue" | "purple";
  size?: "sm" | "md";
  className?: string;
  dot?: boolean;
}

export function Badge({
  children,
  variant = "orange",
  size = "md",
  className = "",
  dot = false,
}: BadgeProps) {
  const variantStyles = {
    orange: "bg-orange-50 text-evarpex-orange border-orange-200/60",
    navy: "bg-evarpex-navy/10 text-evarpex-navy border-evarpex-navy/20",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    gray: "bg-gray-100 text-gray-700 border-gray-200",
    blue: "bg-blue-50 text-blue-700 border-blue-200/60",
    purple: "bg-purple-50 text-purple-700 border-purple-200/60",
  };

  const dotColors = {
    orange: "bg-evarpex-orange",
    navy: "bg-evarpex-navy",
    green: "bg-emerald-500",
    gray: "bg-gray-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-xs font-semibold px-3 py-1",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium uppercase tracking-wider select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[variant]}`} />
      )}
      {children}
    </span>
  );
}
