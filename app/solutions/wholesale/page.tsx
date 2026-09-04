import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Layers, FileText, Building2, CreditCard, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Wholesale & Distribution Solution | EVARPEX",
  description:
    "Bulk quantity pricing tiers, customer credit ledgers, formal B2B invoice generation, and warehouse distribution management.",
};

export default function WholesaleSolutionPage() {
  const points = [
    { title: "Tiered Bulk Pricing", desc: "Set automatic price discounts by volume (e.g. 1–10 units: ₦12,500; 11–50 units: ₦10,000; 50+ units: ₦8,500)." },
    { title: "Customer Credit Ledgers", desc: "Grant verified B2B distributors credit limits and track outstanding invoice balances with aging reports." },
    { title: "Professional Tax Invoices", desc: "Generate compliant PDF invoices and waybills with TIN numbers and bank transfer details." },
    { title: "Dedicated Virtual Accounts", desc: "Assign unique bank account numbers to wholesale buyers for automated reconciliation of large wire transfers." },
  ];

  return (
    <div>
      <PageHero
        badge="Wholesale & B2B"
        title="Scale your wholesale and distribution operations."
        subtitle="Manage bulk orders, enforce distributor credit limits, and process massive transaction volumes without paper ledger chaos."
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African wholesale warehouse distributor checking pallet inventory"
        badgeOverlay="Wholesalers & Distributors"
        statOverlay={{
          value: "Tiered Pricing",
          label: "Automated Distributor Discounts",
        }}
        primaryCta={{
          label: "Start Free Trial",
          href: "/pricing",
        }}
        secondaryCta={{
          label: "Explore Inventory Suite",
          href: "/product/inventory",
        }}
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Wholesale & Distribution" },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <SectionHeader
            badge="B2B Infrastructure"
            title="Engineered for trade volume and distributor networks."
            subtitle="Everything required to service major accounts across African commercial corridors."
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
