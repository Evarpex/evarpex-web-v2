import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Scissors, Sparkles, Instagram, Share2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Fashion & Boutiques Solution | EVARPEX",
  description:
    "Manage apparel sizes, color variants, curated lookbooks, Instagram checkout, and boutique showroom sales from one platform.",
};

export default function FashionSolutionPage() {
  const points = [
    { title: "Size & Color Matrix", desc: "Easily manage multi-dimensional variants (e.g. Small / Medium / Large in Gold, Navy, Red)." },
    { title: "Instagram & WhatsApp Commerce", desc: "Sync your catalog with Instagram Shop tags and send one-click checkout links in DMs." },
    { title: "Curated Lookbook Storefront", desc: "Showcase fashion collections with editorial imagery, fabric details, and sizing guides." },
    { title: "Pre-order & Layaway Tracking", desc: "Accept deposits on bespoke tailoring or upcoming designer collections with automated reminders." },
  ];

  return (
    <div>
      <PageHero
        badge="Fashion & Apparel"
        title="The operating system for African fashion brands."
        subtitle="From premier boutique showrooms to worldwide deliveries: manage size and color variants, automate social checkout, and eliminate stockouts."
        image="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African fashion designer styling apparel in modern studio"
        badgeOverlay="Fashion Boutiques & Designers"
        statOverlay={{
          value: "Color & Size",
          label: "Variant Inventory Tracking",
        }}
        primaryCta={{
          label: "Start Free Trial",
          href: "/pricing",
        }}
        secondaryCta={{
          label: "Explore Online Store",
          href: "/product/online-store",
        }}
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Fashion & Apparel" },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <SectionHeader
            badge="Fashion Workflows"
            title="Designed for high-style apparel and accessory brands."
            subtitle="Never oversell a popular size or struggle with customer sizing exchanges."
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
