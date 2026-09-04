"use client";

import React, { useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      badge: "Solo Merchants",
      priceMonthly: "₦7,500",
      priceYearly: "₦6,000",
      desc: "Ideal for new boutique sellers and small retail shops starting out.",
      features: [
        "Online Store Builder",
        "Product & Variant Management",
        "Basic Inventory Tracking",
        "Online & Offline Payments",
        "Order Management",
        "Basic Sales Analytics",
        "1 Staff Account",
      ],
      popular: false,
      cta: "Start Free",
      ctaVariant: "outline" as const,
      href: "/pricing",
    },
    {
      name: "Growth",
      badge: "Most Popular",
      priceMonthly: "₦20,000",
      priceYearly: "₦16,000",
      desc: "For growing retail businesses scaling online orders and in-store footfall.",
      features: [
        "Everything in Starter",
        "Smart Point of Sale (POS)",
        "Customer CRM & Segments",
        "Advanced Inventory & Low-Stock Alerts",
        "AI Business Assistant (Product Copy & Insights)",
        "Marketing Tools & WhatsApp Broadcasts",
        "Up to 5 Staff Accounts",
      ],
      popular: true,
      cta: "Start 14-Day Free Trial",
      ctaVariant: "primary" as const,
      href: "/pricing",
    },
    {
      name: "Business",
      badge: "High Growth",
      priceMonthly: "₦45,000",
      priceYearly: "₦36,000",
      desc: "For established businesses operating multiple physical branch stores.",
      features: [
        "Everything in Growth",
        "Multi-Location Management (Up to 5 branches)",
        "Inter-Branch Stock Transfers & Audits",
        "Role-Based Staff Access & Cashier Shifts",
        "Advanced Profit Margin & Tax Reporting",
        "Custom Domain Connection",
        "Priority 24/7 Phone & WhatsApp Support",
        "API & Webhook Access",
      ],
      popular: false,
      cta: "Start Free Trial",
      ctaVariant: "dark" as const,
      href: "/pricing",
    },
    {
      name: "Enterprise",
      badge: "Custom Scale",
      priceMonthly: "Custom",
      priceYearly: "Custom",
      desc: "For large retail chains, franchises, and regional distributors.",
      features: [
        "Unlimited Branch Locations & Warehouses",
        "Dedicated Account Manager in Lagos or Abuja",
        "Custom ERP & Warehouse Integrations",
        "Tailored 99.99% SLA & Disaster Recovery",
        "On-site Staff Hardware Training",
        "Bespoke Financial Partner Credit Facilities",
      ],
      popular: false,
      cta: "Book a Demo",
      ctaVariant: "secondary" as const,
      href: "/company/contact",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100" id="pricing">
      <Container>
        <SectionHeader
          badge="Transparent Pricing"
          title="Simple, predictable plans for every stage."
          subtitle="No hidden transaction surprises. Every plan includes our core commerce tools and a 14-day risk-free trial."
        />

        {/* Monthly / Yearly Billing Toggle */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <span
            className={`text-xs sm:text-sm font-bold ${
              billingCycle === "monthly" ? "text-evarpex-navy" : "text-gray-400"
            }`}
          >
            Monthly Billing
          </span>
          <button
            type="button"
            onClick={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
            className="relative w-14 h-8 bg-[#020B36] rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-evarpex-orange"
            aria-label="Toggle billing cycle"
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ${
                billingCycle === "yearly" ? "translate-x-6 bg-[#FF5A00]" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-xs sm:text-sm font-bold flex items-center gap-1.5 ${
              billingCycle === "yearly" ? "text-evarpex-navy" : "text-gray-400"
            }`}
          >
            <span>Yearly Billing</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all relative ${
                p.popular
                  ? "bg-[#020B36] text-white shadow-2xl border-2 border-evarpex-orange lg:-translate-y-2"
                  : "bg-[#F7F8FC] text-gray-900 border border-gray-200/80 shadow-xs hover:border-gray-300"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-evarpex-orange text-white text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Recommended
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-black tracking-tight">
                    {p.name}
                  </h4>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      p.popular
                        ? "bg-[#07133F] text-orange-300 border border-[#16276E]"
                        : "bg-white text-gray-600 border border-gray-200"
                    }`}
                  >
                    {p.badge}
                  </span>
                </div>

                <p
                  className={`text-xs leading-relaxed mb-5 ${
                    p.popular ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {p.desc}
                </p>

                <div className="mb-6 pb-5 border-b border-gray-200/60 dark:border-gray-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black font-sans">
                      {billingCycle === "yearly" ? p.priceYearly : p.priceMonthly}
                    </span>
                    {p.priceMonthly !== "Custom" && (
                      <span
                        className={`text-xs ${
                          p.popular ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        /month
                      </span>
                    )}
                  </div>
                  {p.priceMonthly !== "Custom" && billingCycle === "yearly" && (
                    <div className="text-[11px] text-emerald-500 font-semibold mt-1">
                      Billed annually (save 2 months free)
                    </div>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 text-xs mb-8">
                  {p.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          p.popular ? "text-evarpex-orange" : "text-emerald-600"
                        }`}
                      />
                      <span className={p.popular ? "text-gray-200" : "text-gray-700"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Button
                  href={p.href}
                  variant={p.ctaVariant}
                  size="md"
                  fullWidth
                >
                  {p.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-4 rounded-2xl bg-gray-50 border border-gray-200/70 max-w-2xl mx-auto text-center flex flex-wrap items-center justify-center gap-4 text-xs text-gray-600">
          <span className="flex items-center gap-1.5 font-semibold text-gray-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            14-Day Free Trial
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>No credit card required to begin</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>Upgrade, downgrade, or cancel anytime</span>
        </div>
      </Container>
    </section>
  );
}
