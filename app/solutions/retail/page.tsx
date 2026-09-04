import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ShoppingBag,
  Scan,
  Boxes,
  Users,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Retail & Supermarkets Solution | EVARPEX",
  description:
    "High-speed POS, barcode scanning, stockout prevention, and cashier shift reconciliation for African supermarkets and retail stores.",
};

export default function RetailSolutionsPage() {
  const points = [
    { title: "Rapid Barcode Checkout", desc: "Ring up 50+ items in seconds using standard USB or Bluetooth laser scanners." },
    { title: "Cash Drawer Controls", desc: "Track opening balance, mid-shift drops, and end-of-day blind counts down to the last ₦50 note." },
    { title: "Automated Expiry Alerts", desc: "Track batch dates and receive notifications 30 days before items expire to discount them in time." },
    { title: "Split Tender Support", desc: "Accept cash, card, and instant bank transfer on a single checkout ticket effortlessly." },
  ];

  return (
    <div>
      <PageHero
        badge="Retail & Supermarkets"
        title="Modern operating software for African retail stores."
        subtitle="Keep checkout lines moving fast, eliminate inventory theft, and manage hundreds of SKUs with effortless accuracy."
        image="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African cashier ringing up retail items on modern POS system"
        badgeOverlay="Supermarkets & Retail Stores"
        statOverlay={{
          value: "50,000+",
          label: "SKUs Scanned Instantly",
        }}
        primaryCta={{
          label: "Start Free Trial",
          href: "/pricing",
        }}
        secondaryCta={{
          label: "Book Counter Demo",
          href: "/company/contact",
        }}
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Retail & Supermarkets" },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <SectionHeader
            badge="Supermarket Workflows"
            title="Engineered for high footfall and heavy checkout volume."
            subtitle="Built to withstand peak shopping hours without slowing down or crashing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {points.map((p, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#F7F8FC] border border-gray-200/80">
                <div className="flex items-center gap-2 text-evarpex-navy font-bold text-base mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>{p.title}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </div>
  );
}
