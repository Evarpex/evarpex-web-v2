import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { POSSection } from "@/components/home/POSSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Receipt,
  Scan,
  Printer,
  WifiOff,
  Banknote,
  Users,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud & Offline Point of Sale (POS) | EVARPEX",
  description:
    "Next-gen smart POS software for retail stores, supermarkets, and restaurants. Fast checkout, barcode scanning, split payments, and offline resilience.",
};

export default function POSPage() {
  const posHardwareFeatures = [
    {
      title: "Universal Hardware Support",
      desc: "Run Evarpex POS on any Android tablet, iPad, Windows desktop, or Android smart POS handheld.",
      icon: <Smartphone className="w-5 h-5 text-evarpex-orange" />,
    },
    {
      title: "Offline Sales Engine",
      desc: "Network fluctuations won't halt queues. Ring transactions offline; receipts and inventory auto-sync once connected.",
      icon: <WifiOff className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Split Tender Checkout",
      desc: "Accept cash + transfer or cash + card on a single checkout ticket with automated reconciliation.",
      icon: <Banknote className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Thermal Printer & Cash Drawer",
      desc: "Connect seamlessly to standard 58mm or 80mm ESC/POS receipt printers and electronic cash drawers.",
      icon: <Printer className="w-5 h-5 text-purple-600" />,
    },
  ];

  return (
    <div>
      <PageHero
        badge="Modern Retail Counter"
        title="Turn any device into a lightning-fast smart POS."
        subtitle="Designed for the realities of African retail: long cashier queues, fluctuating internet, cash-to-transfer splits, and thermal printing."
        image="https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African store cashier ringing up a sale on a modern Evarpex smart POS terminal"
        badgeOverlay="Fast Counter Checkout"
        statOverlay={{
          value: "0.8s",
          label: "Average Checkout Speed",
        }}
        primaryCta={{
          label: "Start Free Trial",
          href: "/pricing",
        }}
        secondaryCta={{
          label: "Request Hardware Demo",
          href: "/company/contact",
        }}
        breadcrumbs={[
          { label: "Product", href: "/product" },
          { label: "Point of Sale (POS)" },
        ]}
      />

      <POSSection />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <SectionHeader
            badge="Built for High Volume"
            title="Reliability when your physical counters are busiest."
            subtitle="Every component engineered to prevent checkout delays and cashier discrepancies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {posHardwareFeatures.map((f, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F7F8FC] border border-gray-200/80 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {f.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </div>
  );
}
