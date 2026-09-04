"use client";

import React, { useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import {
  ShoppingBag,
  SlidersHorizontal,
  CreditCard,
  BarChart4,
  Sparkles,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Store,
  Receipt,
  Boxes,
  Users,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<
    "sell" | "manage" | "get-paid" | "understand" | "automate" | "grow"
  >("sell");

  const tabs = [
    { id: "sell", label: "Sell", icon: <ShoppingBag className="w-4 h-4" /> },
    { id: "manage", label: "Manage", icon: <SlidersHorizontal className="w-4 h-4" /> },
    { id: "get-paid", label: "Get Paid", icon: <CreditCard className="w-4 h-4" /> },
    { id: "understand", label: "Understand", icon: <BarChart4 className="w-4 h-4" /> },
    { id: "automate", label: "Automate", icon: <Sparkles className="w-4 h-4" /> },
    { id: "grow", label: "Grow", icon: <Rocket className="w-4 h-4" /> },
  ] as const;

  const content = {
    sell: {
      headline: "Sell everywhere your customers are.",
      description:
        "Whether a customer walks into your Abuja shop, discovers you on Instagram, or places an order on your custom website, Evarpex processes every sale in one unified checkout.",
      features: [
        "Online Store Builder (no coding required)",
        "Point of Sale (POS) with offline sync",
        "Unified Order Management across channels",
        "Instant Payment Links for WhatsApp & Instagram",
        "Professional digital receipts & invoices",
        "Multi-channel inventory deduction",
      ],
      previewTitle: "Omnichannel Commerce Hub",
      link: "/product/online-store",
      cta: "Explore Selling Tools",
      stats: [
        { label: "Online Conversion", value: "3.65%" },
        { label: "Daily Transactions", value: "₦1.23M" },
        { label: "Fast In-Store POS", value: "< 5s checkout" },
      ],
      previewSnippet: (
        <div className="bg-[#07133F] rounded-2xl p-5 border border-[#16276E] text-white">
          <div className="flex items-center justify-between pb-3 border-b border-[#16276E] mb-4">
            <div className="flex items-center gap-2">
              <Store className="w-5 h-5 text-evarpex-orange" />
              <span className="text-sm font-bold">glowskincare.evarpex.store</span>
            </div>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium">
              Live Store
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-[#0D1B54] p-3 rounded-xl border border-[#16276E]">
              <div className="text-[11px] text-gray-400">Online Store Orders</div>
              <div className="text-lg font-black text-white mt-0.5">184 Orders</div>
              <div className="text-[10px] text-emerald-400 font-semibold mt-1">
                ₦645,000 this week
              </div>
            </div>
            <div className="bg-[#0D1B54] p-3 rounded-xl border border-[#16276E]">
              <div className="text-[11px] text-gray-400">POS In-Store Sales</div>
              <div className="text-lg font-black text-white mt-0.5">141 Orders</div>
              <div className="text-[10px] text-emerald-400 font-semibold mt-1">
                ₦589,567 this week
              </div>
            </div>
          </div>

          <div className="bg-[#020B36] p-3 rounded-xl border border-[#16276E] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Receipt className="w-4 h-4 text-evarpex-orange" />
              <span>Auto-synced across Lagos & Abuja stores</span>
            </div>
            <span className="text-emerald-400 font-bold">100% Real-time</span>
          </div>
        </div>
      ),
    },

    manage: {
      headline: "Stay in control of your operations.",
      description:
        "Manage products, stock levels across multiple branch locations, staff permissions, and customer data from one centralized cockpit.",
      features: [
        "Real-time inventory tracking across all warehouses",
        "Automated low-stock SMS & email alerts",
        "Staff accounts with granular role permissions",
        "Multi-location transfers & audits",
        "Supplier purchase orders & receipts",
        "Barcode generator and batch imports",
      ],
      previewTitle: "Operations & Central Inventory",
      link: "/product/inventory",
      cta: "Explore Inventory & Ops",
      stats: [
        { label: "Zero Stockouts", value: "Smart Alerts" },
        { label: "Multi-Store Sync", value: "Real-time" },
        { label: "Staff Access Roles", value: "Granular" },
      ],
      previewSnippet: (
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm text-gray-800">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Live Stock Levels (Abuja & Lagos)
            </span>
            <span className="text-xs font-bold text-evarpex-orange">HQ Central</span>
          </div>

          <div className="space-y-2.5 text-xs">
            {[
              { name: "Glow Face Serum 50ml", stock: "142 units", status: "Healthy", badge: "bg-emerald-50 text-emerald-700" },
              { name: "Brightening Soap Bar", stock: "18 units", status: "Low Stock Alert", badge: "bg-amber-50 text-amber-700" },
              { name: "Moisturizing Cream 100ml", stock: "85 units", status: "Healthy", badge: "bg-emerald-50 text-emerald-700" },
              { name: "Organic Face Toner", stock: "6 units", status: "Reorder Triggered", badge: "bg-red-50 text-red-700" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                <span className="font-semibold text-gray-800">{item.name}</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-gray-600">{item.stock}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.badge}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    "get-paid": {
      headline: "Get paid faster and more securely.",
      description:
        "Accept payments however your African customers prefer: Debit cards, instant direct bank transfer, USSD, dynamic QR, or virtual accounts with instant webhook notifications.",
      features: [
        "Card payments (Verve, Mastercard, Visa)",
        "Instant Nigerian Bank Transfer with instant match",
        "Dedicated Virtual Accounts for business customers",
        "USSD codes for fast feature-phone checkout",
        "Dynamic QR codes at checkout counter",
        "Automated wallet settlement & reconciliation",
      ],
      previewTitle: "Payments & Settlement Gateway",
      link: "/product/payments",
      cta: "Explore Payment Rails",
      stats: [
        { label: "Available Methods", value: "7+ Rails" },
        { label: "Settlement Speed", value: "T+0 / T+1" },
        { label: "Success Rate", value: "99.4%" },
      ],
      previewSnippet: (
        <div className="bg-[#020B36] rounded-2xl p-5 border border-[#0D1B54] text-white">
          <div className="flex items-center justify-between pb-3 border-b border-[#0D1B54] mb-4">
            <span className="text-xs font-bold text-gray-400">EVARPEX PAYMENTS</span>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
              Instant Confirm
            </span>
          </div>

          <div className="bg-[#07133F] p-4 rounded-xl border border-[#16276E] mb-3 text-center">
            <div className="text-xs text-gray-400">Payment Received</div>
            <div className="text-3xl font-black text-white my-1">₦85,000.00</div>
            <div className="text-xs text-emerald-400 font-medium">
              Verified from Sarah Williams (Bank Transfer)
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
            <div className="p-2 rounded-lg bg-[#0D1B54]">
              <div className="text-gray-400">Method</div>
              <div className="font-bold text-white mt-0.5">Bank Transfer</div>
            </div>
            <div className="p-2 rounded-lg bg-[#0D1B54]">
              <div className="text-gray-400">Fee</div>
              <div className="font-bold text-white mt-0.5">₦0 (Direct)</div>
            </div>
            <div className="p-2 rounded-lg bg-[#0D1B54]">
              <div className="text-gray-400">Wallet</div>
              <div className="font-bold text-emerald-400 mt-0.5">Credited</div>
            </div>
          </div>
        </div>
      ),
    },

    understand: {
      headline: "Know exactly how your business is performing.",
      description:
        "Stop running your business on guesswork. Evarpex gives you real-time visibility into sales margins, cost of goods, best-selling SKUs, and customer lifetime value.",
      features: [
        "Executive Revenue & Profit Margin dashboards",
        "Sales breakdown by store location & staff member",
        "Best-selling products & slow-moving dead stock",
        "Customer retention & repeat purchase cohort rates",
        "Automated end-of-day reconciliation summaries",
        "One-click tax & accounting export (CSV/Excel)",
      ],
      previewTitle: "Analytics & Financial Intelligence",
      link: "/product/analytics",
      cta: "Explore Analytics Engine",
      stats: [
        { label: "Weekly Revenue", value: "₦1,234,567" },
        { label: "Gross Margin", value: "48.2%" },
        { label: "Repeat Buyers", value: "42.8%" },
      ],
      previewSnippet: (
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm text-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs text-gray-400 font-bold uppercase">Executive Sales</div>
              <div className="text-xl font-black text-gray-900">₦1,234,567.00</div>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              ↑ 12.5% Growth
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between text-gray-600 pb-1 border-b border-gray-100">
              <span>Top Channel: Online Store</span>
              <span className="font-bold text-gray-900">52% (₦645k)</span>
            </div>
            <div className="flex justify-between text-gray-600 pb-1 border-b border-gray-100">
              <span>POS In-Store Checkout</span>
              <span className="font-bold text-gray-900">48% (₦589k)</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Net Estimated Profit Margin</span>
              <span className="font-bold text-emerald-600">₦595,060 (48.2%)</span>
            </div>
          </div>
        </div>
      ),
    },

    automate: {
      headline: "Let AI handle the busywork.",
      description:
        "Generate high-converting product descriptions, create marketing posts for Instagram, forecast inventory restocking, and ask natural language questions about your business numbers.",
      features: [
        "AI Business Assistant trained on African retail data",
        "One-click ecommerce product copy generator",
        "Social media captions & WhatsApp broadcast drafts",
        "Predictive stock depletion & reorder forecasts",
        "Sales anomaly detection (why did revenue dip?)",
        "Automated invoice reminder sequences",
      ],
      previewTitle: "Evarpex AI Business Copilot",
      link: "/product/ai",
      cta: "Explore AI Capabilities",
      stats: [
        { label: "Time Saved", value: "15 hrs/wk" },
        { label: "Copy Generation", value: "Instant" },
        { label: "Accuracy", value: "High Precision" },
      ],
      previewSnippet: (
        <div className="bg-[#020B36] rounded-2xl p-5 border border-[#0D1B54] text-white">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#0D1B54]">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-white">AI Copilot Analysis</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-500 text-white font-bold ml-auto">
              BETA
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="p-2 rounded-lg bg-[#07133F] text-gray-300">
              <span className="text-gray-400">Prompt: </span>
              "What were my best-selling products this month?"
            </div>
            <div className="p-2.5 rounded-lg bg-[#0D1B54] border border-[#16276E] text-purple-200 leading-relaxed">
              💡 <strong>Insight:</strong> Glow Face Serum generated ₦245,000 (245 units). Friday was your highest volume day. Consider restocking 100 units before Tuesday to prevent stockouts.
            </div>
          </div>
        </div>
      ),
    },

    grow: {
      headline: "Tools that help your business scale.",
      description:
        "From launching multi-store franchises across Lagos and Abuja to accessing working capital lines through licensed partners, Evarpex scales with your ambitions.",
      features: [
        "Multi-branch expansion with unified HQ dashboard",
        "Integrated Customer Relationship Management (CRM)",
        "Automated WhatsApp & SMS customer retention",
        "Integrations with Paystack, Meta, and Google",
        "CAC business formalization & company services",
        "Partner-enabled merchant financing & working capital",
      ],
      previewTitle: "Scale & Expansion Framework",
      link: "/business-services",
      cta: "Explore Growth Services",
      stats: [
        { label: "Multi-Location", value: "Unlimited" },
        { label: "Working Capital", value: "Partner Credit" },
        { label: "CRM Profiles", value: "1,248+" },
      ],
      previewSnippet: (
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm text-gray-800">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Multi-Location Performance
            </span>
            <span className="text-xs font-bold text-emerald-600">All Locations Active</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-gray-50 flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-900">Lagos Store (Victoria Island)</div>
                <div className="text-[11px] text-gray-500">182 orders • 6 staff</div>
              </div>
              <div className="text-right font-black text-gray-900">₦720,000</div>
            </div>
            <div className="p-2.5 rounded-xl bg-gray-50 flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-900">Abuja Store (Wuse II)</div>
                <div className="text-[11px] text-gray-500">143 orders • 4 staff</div>
              </div>
              <div className="text-right font-black text-gray-900">₦514,567</div>
            </div>
          </div>
        </div>
      ),
    },
  };

  const current = content[activeTab];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <Container>
        <SectionHeader
          badge="Unified Platform Capabilities"
          title="Your entire business, connected."
          subtitle="One login gives you every tool required to build, manage, finance, and expand a successful African commerce enterprise."
        />

        {/* Tab Navigation Pill Bar */}
        <div className="mt-12 flex justify-start sm:justify-center overflow-x-auto pb-4 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[#FF5A00] text-white shadow-sm"
                    : "text-gray-600 hover:text-evarpex-navy hover:bg-gray-200/60"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Tab Showcase Content Panel */}
        <div className="mt-10 bg-[#F7F8FC] rounded-3xl border border-gray-200/80 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Side */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 text-xs font-bold text-evarpex-orange">
                <span className="w-2 h-2 rounded-full bg-evarpex-orange" />
                <span>{activeTab.toUpperCase()} WITH EVARPEX</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-evarpex-navy leading-tight">
                {current.headline}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {current.description}
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
                {current.stats.map((s, idx) => (
                  <div key={idx}>
                    <div className="text-xs text-gray-500">{s.label}</div>
                    <div className="text-sm sm:text-base font-extrabold text-evarpex-navy mt-0.5">
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Button
                  href={current.link}
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {current.cta}
                </Button>
              </div>
            </div>

            {/* Right Interactive Preview Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl p-1.5 bg-gradient-to-tr from-gray-200 via-gray-100 to-orange-100 shadow-xl">
                {current.previewSnippet}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
