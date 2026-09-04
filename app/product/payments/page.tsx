import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { PaymentsSection } from "@/components/home/PaymentsSection";
import { WalletSection } from "@/components/home/WalletSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  CreditCard,
  Building2,
  QrCode,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Payments & Merchant Wallet | EVARPEX",
  description:
    "Accept cards, bank transfer, USSD, and QR code payments online and in-store. Dedicated virtual accounts and automated settlement wallet.",
};

export default function PaymentsPage() {
  return (
    <div>
      <PageHero
        badge="Fintech Rails"
        title="Get paid however your African customers prefer."
        subtitle="Connect payments directly to your inventory and order fulfillment. Stop waiting for bank screenshots and reconcile every naira automatically."
        image="https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1200&auto=format&fit=crop"
        imageAlt="Customer making fast contactless digital payment in store"
        badgeOverlay="Instant Transfer Verification"
        statOverlay={{
          value: "₦0",
          label: "Unverified Transfer Losses",
        }}
        primaryCta={{
          label: "Start Free Trial",
          href: "/pricing",
        }}
        secondaryCta={{
          label: "Explore POS Counter",
          href: "/product/pos",
        }}
        breadcrumbs={[
          { label: "Product", href: "/product" },
          { label: "Payments" },
        ]}
      />

      <PaymentsSection />

      <WalletSection />

      <FinalCTA />
    </div>
  );
}
