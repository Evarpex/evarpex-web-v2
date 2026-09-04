import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FinancialServicesSection } from "@/components/home/FinancialServicesSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  Coins,
  ShieldCheck,
  Building,
  TrendingUp,
  CreditCard,
  BadgePercent,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Merchant Financial Services | EVARPEX",
  description:
    "Partner-enabled working capital, inventory financing, invoice discounting, and checkout BNPL for eligible African businesses.",
};

export default function FinancialServicesPage() {
  const steps = [
    {
      step: "1",
      title: "Process Sales Consistently",
      desc: "Operate your retail counter and online store on Evarpex for 90 days. Your transaction history acts as your verified financial track record.",
    },
    {
      step: "2",
      title: "Receive Tailored Credit Offers",
      desc: "Based on verified ledger cash flow, our licensed financial partners generate pre-approved working capital offers directly in your dashboard.",
    },
    {
      step: "3",
      title: "Instant Wallet Disbursement",
      desc: "Accept terms with no physical collateral requirements. Funds are disbursed directly to your Evarpex Merchant Wallet within 24 hours.",
    },
    {
      step: "4",
      title: "Automated Flexible Repayment",
      desc: "Repayments are deducted automatically as a modest percentage (e.g. 10%) of daily checkout transactions until cleared.",
    },
  ];

  return (
    <div>
      <PageHero
        badge="Partner Credit Infrastructure"
        title="More financial power for growing businesses."
        subtitle="Access inventory restocking capital and invoice financing through licensed lending partners, powered by your real store sales data."
        image="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African entrepreneur receiving working capital for retail restocking"
        badgeOverlay="Merchant Working Capital"
        statOverlay={{
          value: "Up to ₦20M",
          label: "Credit Restocking Limits",
        }}
        primaryCta={{
          label: "Check Eligibility",
          href: "#capital",
        }}
        secondaryCta={{
          label: "Speak to Advisors",
          href: "/company/contact",
        }}
        breadcrumbs={[{ label: "Financial Services" }]}
      />

      <FinancialServicesSection />

      {/* How It Works Progression */}
      <section className="py-16 lg:py-24 bg-[#F7F8FC] border-b border-gray-100">
        <Container>
          <SectionHeader
            badge="Simple Protocol"
            title="How eligible merchants unlock working capital."
            subtitle="Zero endless bank branch visits, zero complicated financial projections, zero pledged property collateral."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-orange-50 text-evarpex-orange font-black text-sm flex items-center justify-center mb-3">
                    {st.step}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance Banner */}
          <div className="mt-12 p-5 rounded-2xl bg-white border border-gray-200 max-w-4xl mx-auto flex items-start gap-3 text-xs text-gray-500 leading-relaxed">
            <Lock className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-gray-700">Financial Disclosures:</strong> EVARPEX Technologies is a business software and financial technology provider, not a bank, microfinance institution, or licensed money lender. Working capital facilities, loans, and BNPL credit products are provided through licensed, regulated financial and credit partners under applicable Central Bank guidelines. Eligibility is determined by partner underwriting algorithms.
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </div>
  );
}
