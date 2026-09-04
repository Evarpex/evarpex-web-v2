import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Globe, MessageSquare, Instagram, Zap, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Sellers & Creators Solution | EVARPEX",
  description:
    "Turn Instagram followers, TikTok traffic, and WhatsApp contacts into automated checkouts with zero manual DMs.",
};

export default function OnlineBusinessesSolutionPage() {
  const points = [
    { title: "Bio Link Storefront", desc: "One lightning-fast link in your Instagram bio showcases your entire catalog with direct mobile checkout." },
    { title: "Automated Payment Links", desc: "Stop typing out bank account numbers in WhatsApp DMs. Send one tap links that verify payments in 5 seconds." },
    { title: "Automated Delivery Waybills", desc: "Integrate with top Nigerian delivery couriers so customer addresses generate waybills automatically." },
    { title: "Zero Coding Required", desc: "Launch your storefront in under 5 minutes right from your phone browser." },
  ];

  return (
    <div>
      <PageHero
        badge="Social & Digital Commerce"
        title="Turn followers into paying customers on autopilot."
        subtitle="Stop losing sales to slow WhatsApp responses. Evarpex gives creators and online sellers a streamlined storefront that sells 24/7."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African social commerce merchant packing orders for fast delivery"
        badgeOverlay="Instagram & WhatsApp Sellers"
        statOverlay={{
          value: "2x Conversion",
          label: "Instant Digital Checkout Links",
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
          { label: "Online Sellers" },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <SectionHeader
            badge="Social Commerce Automation"
            title="Designed for modern digital entrepreneurs."
            subtitle="Capture impulsive social shoppers before they leave your page."
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
