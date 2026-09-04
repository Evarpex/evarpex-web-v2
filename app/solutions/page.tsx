import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Industry Solutions | EVARPEX",
  description:
    "Tailored commerce and operating software for Retail, Supermarkets, Restaurants, Fashion, Beauty, Wholesale, and Online Sellers.",
};

export default function SolutionsHubPage() {
  return (
    <div>
      <PageHero
        badge="Industry Architecture"
        title="Software customized for your specific business model."
        subtitle="Every industry operates differently. Evarpex provides specialized workflows for grocery supermarkets, fashion boutiques, dining establishments, and wholesale distributors."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African entrepreneurs across diverse business verticals"
        badgeOverlay="Industry-Tailored Commerce"
        statOverlay={{
          value: "6 Verticals",
          label: "Specialized Business Workflows",
        }}
        primaryCta={{
          label: "Explore Verticals",
          href: "#industries",
        }}
        secondaryCta={{
          label: "Request Custom Demo",
          href: "/company/contact",
        }}
        breadcrumbs={[{ label: "Solutions" }]}
      />

      <IndustriesSection />

      <FinalCTA />
    </div>
  );
}
