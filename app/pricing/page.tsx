import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Transparent Pricing Plans | EVARPEX",
  description:
    "Predictable pricing for African merchants. Starter (₦7,500/mo), Growth (₦20,000/mo), Business (₦45,000/mo), and Enterprise. 14-day free trial.",
};

export default function PricingPage() {
  const comparison = [
    { feature: "Online Storefront", starter: true, growth: true, business: true, enterprise: true },
    { feature: "Product & Variant Limits", starter: "Up to 50", growth: "Unlimited", business: "Unlimited", enterprise: "Unlimited" },
    { feature: "Point of Sale (POS)", starter: false, growth: true, business: true, enterprise: true },
    { feature: "Card & Bank Transfer Checkout", starter: true, growth: true, business: true, enterprise: true },
    { feature: "Virtual Accounts & Settlement Wallet", starter: true, growth: true, business: true, enterprise: true },
    { feature: "Low-Stock Alerts & Barcode Scanning", starter: false, growth: true, business: true, enterprise: true },
    { feature: "Customer CRM & Segmentation", starter: false, growth: true, business: true, enterprise: true },
    { feature: "WhatsApp & SMS Broadcast Tool", starter: false, growth: true, business: true, enterprise: true },
    { feature: "AI Business Assistant Queries", starter: "5/month", growth: "100/month", business: "Unlimited", enterprise: "Unlimited" },
    { feature: "Multi-Store Location Management", starter: false, growth: false, business: "Up to 5 stores", enterprise: "Unlimited" },
    { feature: "Staff Accounts", starter: "1 staff", growth: "Up to 5 staff", business: "Up to 20 staff", enterprise: "Unlimited" },
    { feature: "Custom Domain Connection", starter: false, growth: true, business: true, enterprise: true },
    { feature: "Dedicated Account Manager", starter: false, growth: false, business: false, enterprise: true },
  ];

  return (
    <div>
      <PageHero
        badge="Pricing & Tiers"
        title="Simple, transparent plans designed for growth."
        subtitle="Choose the plan that matches your business scale today. Upgrade or downgrade anytime with zero lock-in."
        image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African business founder reviewing transparent pricing plans"
        badgeOverlay="Transparent Pricing"
        statOverlay={{
          value: "14 Days",
          label: "Risk-Free Full Trial",
        }}
        primaryCta={{
          label: "View Pricing Plans",
          href: "#pricing",
        }}
        secondaryCta={{
          label: "Contact Sales Desk",
          href: "/company/contact",
        }}
        breadcrumbs={[{ label: "Pricing" }]}
      />

      {/* Main Interactive Pricing Section */}
      <PricingSection />

      {/* Deep Feature Comparison Matrix */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <SectionHeader
            badge="Full Breakdown"
            title="Compare all features side-by-side."
            subtitle="Everything included in our tier packages so you can pick the perfect fit."
          />

          <div className="mt-12 overflow-x-auto rounded-3xl border border-gray-200 shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#020B36] text-white">
                  <th className="p-4 font-bold">Platform Feature</th>
                  <th className="p-4 font-bold text-center">Starter</th>
                  <th className="p-4 font-bold text-center text-evarpex-orange">Growth (Popular)</th>
                  <th className="p-4 font-bold text-center">Business</th>
                  <th className="p-4 font-bold text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparison.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/70"}>
                    <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-gray-700">{row.starter}</span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-orange-50/40">
                      {typeof row.growth === "boolean" ? (
                        row.growth ? (
                          <Check className="w-4 h-4 text-evarpex-orange mx-auto font-bold" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-bold text-evarpex-navy">{row.growth}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.business === "boolean" ? (
                        row.business ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-gray-700">{row.business}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-bold text-gray-900">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <FAQSection />

      <FinalCTA />
    </div>
  );
}
