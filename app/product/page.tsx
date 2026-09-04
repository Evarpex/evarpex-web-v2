import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/home/FinalCTA";
import {
  Building2,
  Store,
  Receipt,
  CreditCard,
  Boxes,
  Users,
  BarChart3,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product Platform Overview | EVARPEX",
  description:
    "Explore the complete Evarpex operating system: Business Management, Online Store, POS, Payments, Inventory, CRM, Analytics, and AI Assistant.",
};

export default function ProductOverviewPage() {
  const modules = [
    {
      title: "Business Management",
      desc: "Centralized multi-store, staff roles, and administrative governance.",
      href: "/product/business-management",
      icon: <Building2 className="w-6 h-6 text-evarpex-orange" />,
      features: ["Multi-branch HQ", "Role-based permissions", "Cashier shift audits"],
    },
    {
      title: "Online Store Builder",
      desc: "No-code ecommerce storefront with custom domain and instant checkout.",
      href: "/product/online-store",
      icon: <Store className="w-6 h-6 text-evarpex-orange" />,
      features: ["Custom .com/.ng domain", "Mobile-optimized checkout", "Variant pricing"],
    },
    {
      title: "Point of Sale (POS)",
      desc: "Cloud and offline-capable retail counter checkout for physical shops.",
      href: "/product/pos",
      icon: <Receipt className="w-6 h-6 text-evarpex-orange" />,
      features: ["Barcode scanning", "Split cash/transfer", "Offline resilience"],
    },
    {
      title: "Payments & Wallet",
      desc: "Unified collection gateway across cards, bank transfer, USSD, and QR.",
      href: "/product/payments",
      icon: <CreditCard className="w-6 h-6 text-evarpex-orange" />,
      features: ["Instant transfer match", "Virtual accounts", "T+0/T+1 settlements"],
    },
    {
      title: "Inventory & Stock",
      desc: "Multi-warehouse stock tracking, low-stock warnings, and barcode support.",
      href: "/product/inventory",
      icon: <Boxes className="w-6 h-6 text-evarpex-orange" />,
      features: ["Real-time synchronization", "Stock transfers", "Automated reorders"],
    },
    {
      title: "CRM & Customers",
      desc: "Customer purchase history, VIP segmentation, and WhatsApp broadcast marketing.",
      href: "/product/crm",
      icon: <Users className="w-6 h-6 text-evarpex-orange" />,
      features: ["Customer profiles", "WhatsApp re-engagement", "Store loyalty points"],
    },
    {
      title: "Analytics & Reports",
      desc: "Real-time margin analysis, unit economics, and executive financial summaries.",
      href: "/product/analytics",
      icon: <BarChart3 className="w-6 h-6 text-evarpex-orange" />,
      features: ["Sales velocity by SKU", "Gross profit tracking", "Tax-ready exports"],
    },
    {
      title: "AI Business Assistant",
      desc: "Automated product descriptions, marketing campaigns, and predictive forecasting.",
      href: "/product/ai",
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
      features: ["Natural language queries", "Social media copywriter", "Restock predictions"],
    },
  ];

  return (
    <div>
      <PageHero
        badge="The Evarpex Suite"
        title="One unified operating system for African commerce."
        subtitle="Explore how every module within Evarpex seamlessly works together so your business never suffers from disconnected data, inventory leaks, or delayed payments."
        image="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African retail store entrepreneur using Evarpex software suite"
        badgeOverlay="Full Unified Suite"
        statOverlay={{
          value: "8 Modules",
          label: "Single Connected Ecosystem",
        }}
        primaryCta={{
          label: "Start Free Trial",
          href: "/pricing",
        }}
        secondaryCta={{
          label: "Explore All Modules",
          href: "#modules",
        }}
        breadcrumbs={[{ label: "Product" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F7F8FC] border border-gray-200/80 hover:border-evarpex-orange/40 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center mb-4">
                    {m.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {m.desc}
                  </p>

                  <ul className="space-y-1.5 text-xs text-gray-700 mb-6">
                    {m.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={m.href}
                  className="pt-3 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-evarpex-orange hover:underline"
                >
                  <span>Deep dive into {m.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </div>
  );
}
