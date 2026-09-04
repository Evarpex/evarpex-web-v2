import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "outline" | "ghost" | "orange-outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5 font-semibold",
    md: "text-sm px-5 py-2.5 gap-2 font-semibold shadow-sm",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold shadow-md",
  };

  const variantStyles = {
    primary:
      "bg-evarpex-orange text-white hover:bg-evarpex-orange-hover focus-visible:ring-evarpex-orange active:translate-y-0.5 shadow-glow hover:shadow-lg",
    secondary:
      "bg-white text-evarpex-navy border border-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-visible:ring-evarpex-navy active:translate-y-0.5",
    dark:
      "bg-evarpex-navy text-white hover:bg-evarpex-navy-surface border border-evarpex-navy-border/50 focus-visible:ring-evarpex-navy-border active:translate-y-0.5 shadow-navy-glow",
    outline:
      "bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-100/70 focus-visible:ring-gray-400",
    "orange-outline":
      "bg-transparent text-evarpex-orange border border-evarpex-orange/40 hover:bg-evarpex-orange/10 focus-visible:ring-evarpex-orange",
    ghost:
      "bg-transparent text-gray-700 hover:text-evarpex-navy hover:bg-gray-100/70 focus-visible:ring-gray-300",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
