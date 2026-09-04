import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { InventorySection } from "@/components/home/InventorySection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Boxes,
  BellRing,
  QrCode,
  ArrowLeftRight,
  History,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Inventory & Stock Management | EVARPEX",
  description:
    "Real-time multi-location inventory software for African merchants. Low-stock alerts, barcode scanning, stock transfers, and purchase orders.",
};

export default function InventoryPage() {
  return (
    <div>
      <PageHero
        badge="Accurate Real-Time Ledger"
        title="Zero stockouts. Zero inventory discrepancies."
        subtitle="Manage stock levels seamlessly across your retail shelves, warehouse, and online orders. Instant audit trails ensure every single item is accounted for."
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African store inventory manager conducting stock count audit"
        badgeOverlay="Multi-Store Stock Sync"
        statOverlay={{
          value: "100%",
          label: "Real-Time Stock Accuracy",
        }}
        primaryCta={{
          label: "Start Free Trial",
          href: "/pricing",
        }}
        secondaryCta={{
          label: "Explore POS Integration",
          href: "/product/pos",
        }}
        breadcrumbs={[
          { label: "Product", href: "/product" },
          { label: "Inventory" },
        ]}
      />

      <InventorySection />

      <FinalCTA />
    </div>
  );
}
