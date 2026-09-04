import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MultiLocationSection } from "@/components/home/MultiLocationSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import {
  Building2,
  Users,
  ShieldCheck,
  Lock,
  GitBranch,
  FileSpreadsheet,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Management Software | EVARPEX",
  description:
    "Centralize staff permissions, multiple store locations, cashier shift reconciliations, and executive governance from one dashboard.",
};

export default function BusinessManagementPage() {
  const capabilities = [
    {
      title: "Granular Role Permissions",
      desc: "Assign distinct roles for Store Cashiers, Inventory Managers, Accountants, and General Managers with restricted views.",
      icon: <Lock className="w-5 h-5 text-evarpex-orange" />,
    },
    {
      title: "Cashier Shift Accountability",
      desc: "Track daily opening cash, register sales, split tender balances, and blind end-of-shift drop counts to stop internal shrinkage.",
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Audit Trail Logs",
      desc: "Every price change, product discount, manual stock adjustment, or refund is stamped with staff timestamp and manager approval.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Multi-Store Consolidation",
      desc: "Roll up sales from multiple retail branches, pop-ups, and regional warehouses into a single consolidated corporate view.",
      icon: <Building2 className="w-5 h-5 text-purple-600" />,
    },
  ];

  return (
    <div>
      <PageHero
        badge="Enterprise Control"
        title="Stay in total control of your business operations."
        subtitle="Eliminate operational blind spots. Evarpex gives business owners full visibility across staff shifts, multi-location stores, stock audit trails, and cashier balances."
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African business owner reviewing multi-store reports on digital tablet"
        badgeOverlay="All-in-One Operations"
        statOverlay={{
          value: "32 hrs/mo",
          label: "Manual Admin Saved",
        }}
        primaryCta={{
          label: "Start Free Trial",
          href: "/pricing",
        }}
        secondaryCta={{
          label: "Explore Solutions",
          href: "/solutions",
        }}
        breadcrumbs={[
          { label: "Product", href: "/product" },
          { label: "Business Management" },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <SectionHeader
            badge="Operational Pillars"
            title="Designed for accountability and multi-store scale."
            subtitle="Built to safeguard your revenue and inventory from employee shrinkage and communication breakdowns."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {capabilities.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F7F8FC] border border-gray-200/80 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center shrink-0">
                  {c.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {c.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <MultiLocationSection />

      <FinalCTA />
    </div>
  );
}
