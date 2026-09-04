import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { CRMSection } from "@/components/home/CRMSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "CRM & Customer Retention | EVARPEX",
  description:
    "Turn one-time store visitors into repeat buyers with automated WhatsApp marketing, SMS broadcasts, customer segmentation, and loyalty points.",
};

export default function CRMPage() {
  return (
    <div>
      <PageHero
        badge="Customer Retention Engine"
        title="Know your customers. Maximize repeat lifetime value."
        subtitle="Every checkout in-store and online automatically enriches customer profiles, tracking purchase frequency, spend habits, and product preferences."
        image="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African retail brand owner connecting with customers in store"
        badgeOverlay="Customer Retention Hub"
        statOverlay={{
          value: "3.4x",
          label: "Repeat Purchase Rate",
        }}
        primaryCta={{
          label: "Start Free Trial",
          href: "/pricing",
        }}
        secondaryCta={{
          label: "Explore Online Store",
          href: "/product/online-store",
        }}
        breadcrumbs={[
          { label: "Product", href: "/product" },
          { label: "CRM & Customers" },
        ]}
      />

      <CRMSection />

      <FinalCTA />
    </div>
  );
}
