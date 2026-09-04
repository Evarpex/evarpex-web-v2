import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { AnalyticsSection } from "@/components/home/AnalyticsSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Analytics & Executive Reports | EVARPEX",
  description:
    "Real-time visibility into sales margins, cost of goods sold, channel breakdown, and profit calculations across all African store branches.",
};

export default function AnalyticsPage() {
  return (
    <div>
      <PageHero
        badge="Financial Intelligence"
        title="Stop guessing your numbers. Start knowing."
        subtitle="Track daily revenue velocity, gross margins, best-performing staff, and customer acquisition costs across physical and digital storefronts."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
        imageAlt="Modern commerce analytics dashboards and financial metrics reporting"
        badgeOverlay="Real-Time Profit Intelligence"
        statOverlay={{
          value: "100%",
          label: "Automated P&L Calculation",
        }}
        primaryCta={{
          label: "Start Free Trial",
          href: "/pricing",
        }}
        secondaryCta={{
          label: "Explore Business Suite",
          href: "/product/business-management",
        }}
        breadcrumbs={[
          { label: "Product", href: "/product" },
          { label: "Analytics" },
        ]}
      />

      <AnalyticsSection />

      <FinalCTA />
    </div>
  );
}
