import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ChevronRight, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  breadcrumbs?: BreadcrumbItem[];
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  image?: string;
  imageAlt?: string;
  badgeOverlay?: string;
  statOverlay?: {
    value: string;
    label: string;
  };
  children?: React.ReactNode;
}

export function PageHero({
  badge,
  title,
  subtitle,
  breadcrumbs,
  ctaText = "Start Free Trial",
  ctaHref = "/pricing",
  secondaryCtaText = "Book a Demo",
  secondaryCtaHref = "/company/contact",
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "African commerce in action",
  badgeOverlay,
  statOverlay,
  children,
}: PageHeroProps) {
  const finalCtaText = primaryCta?.label ?? ctaText;
  const finalCtaHref = primaryCta?.href ?? ctaHref;
  const finalSecondaryCtaText = secondaryCta?.label ?? secondaryCtaText;
  const finalSecondaryCtaHref = secondaryCta?.href ?? secondaryCtaHref;
  return (
    <section className="relative pt-8 pb-14 lg:pt-12 lg:pb-20 bg-gradient-to-b from-[#F7F8FC] via-white to-white border-b border-gray-100 overflow-hidden">
      {/* Background patterns and glowing atmospheric accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-[500px] h-[300px] bg-orange-200/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-[400px] h-[300px] bg-blue-200/15 blur-[100px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-6 font-medium">
            <Link href="/" className="hover:text-evarpex-orange transition-colors">
              Home
            </Link>
            {breadcrumbs.map((b, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                {b.href ? (
                  <Link href={b.href} className="hover:text-evarpex-orange transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-semibold">{b.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className={`grid grid-cols-1 ${image ? "lg:grid-cols-12 gap-10 lg:gap-12 items-center" : "max-w-3xl"}`}>
          {/* Left Text / Info Column */}
          <div className={image ? "lg:col-span-7 space-y-5" : "space-y-5"}>
            {badge && (
              <div>
                <Badge variant="orange" dot>
                  {badge}
                </Badge>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-evarpex-navy leading-[1.14]">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href={finalCtaHref}
                variant="primary"
                size="md"
                className="font-bold shadow-glow"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {finalCtaText}
              </Button>
              {finalSecondaryCtaText && (
                <Button
                  href={finalSecondaryCtaHref}
                  variant="secondary"
                  size="md"
                  className="font-bold"
                >
                  {finalSecondaryCtaText}
                </Button>
              )}
            </div>

            {/* Micro reassurance checklist */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-gray-500 pt-3 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                14-day free trial
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Abuja HQ Support
              </span>
            </div>
          </div>

          {/* Right Visual / Authentic African Imagery Column */}
          {image && (
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-card bg-gray-100 group">
                <div className="relative h-[280px] sm:h-[340px] w-full">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Floating Badge Overlay */}
                {badgeOverlay && (
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-100 shadow-sm text-xs font-bold text-gray-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{badgeOverlay}</span>
                  </div>
                )}

                {/* Floating Metric Card Overlay */}
                {statOverlay && (
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-gray-100 shadow-lg flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-gray-400">
                        {statOverlay.label}
                      </div>
                      <div className="text-base sm:text-lg font-black text-evarpex-navy font-mono">
                        {statOverlay.value}
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-orange-50 text-evarpex-orange flex items-center justify-center font-black text-xs">
                      ₦
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {children && <div className="mt-12">{children}</div>}
      </Container>
    </section>
  );
}
