import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BookOpen, Download, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Merchant Growth Guides & Handbooks | EVARPEX",
  description:
    "Comprehensive PDF handbooks and tactical playbooks for African retail store setup, inventory auditing, and CAC registration.",
};

export default function GuidesPage() {
  const guides = [
    {
      title: "The Ultimate Guide to Modern African Retail Operations",
      desc: "A 45-page master handbook covering barcode cataloging, split payment reconciliation, and cashier shift procedures.",
      pages: "45 Pages",
      downloads: "3,240+ Downloads",
      badge: "Flagship Guide",
    },
    {
      title: "CAC Business Incorporation & Tax Compliance Handbook",
      desc: "Step-by-step walkthrough of registering a Business Name or LTD with the Corporate Affairs Commission, getting your TIN, and opening a corporate account.",
      pages: "28 Pages",
      downloads: "2,100+ Downloads",
      badge: "Legal & Compliance",
    },
    {
      title: "WhatsApp Commerce Playbook: Zero to ₦5M Monthly",
      desc: "How boutique sellers and organic skincare creators automate catalog orders, payment verification links, and customer broadcast lists.",
      pages: "32 Pages",
      downloads: "4,500+ Downloads",
      badge: "Marketing & Sales",
    },
  ];

  return (
    <div>
      <PageHero
        badge="Tactical Playbooks"
        title="Comprehensive handbooks for serious retail operators."
        subtitle="Download detailed frameworks, inventory spreadsheets, and legal blueprints to accelerate your business setup."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African business operator studying growth frameworks"
        badgeOverlay="Tactical Execution Guides"
        statOverlay={{
          value: "100% Free",
          label: "Merchant Playbooks & Templates",
        }}
        primaryCta={{
          label: "Browse Playbooks",
          href: "#all-guides",
        }}
        secondaryCta={{
          label: "Read Commerce Blog",
          href: "/resources/blog",
        }}
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Business Guides" },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <div className="space-y-6">
            {guides.map((g, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[#F7F8FC] border border-gray-200/80 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-card transition-all"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-evarpex-orange bg-orange-50 px-2.5 py-1 rounded-full">
                    {g.badge}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">
                    {g.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
                    {g.desc}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 pt-2">
                    <span>📄 {g.pages}</span>
                    <span>•</span>
                    <span>⭐ {g.downloads}</span>
                    <span>•</span>
                    <span className="text-emerald-600 font-semibold">Free Download</span>
                  </div>
                </div>

                <div className="shrink-0">
                  <Button
                    variant="primary"
                    size="md"
                    icon={<Download className="w-4 h-4" />}
                  >
                    Download Handbook
                  </Button>
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
