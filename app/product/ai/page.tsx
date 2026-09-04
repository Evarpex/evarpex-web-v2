import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { AIAssistantSection } from "@/components/home/AIAssistantSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Sparkles,
  Bot,
  FileText,
  Megaphone,
  TrendingUp,
  Boxes,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Business Assistant | EVARPEX",
  description:
    "Ask questions about your business, generate high-converting product descriptions, create marketing campaigns, and forecast inventory with AI.",
};

export default function AIPage() {
  const aiTools = [
    {
      title: "Natural Language SQL Queries",
      desc: "Ask questions like 'What were my best sellers last week?' and receive instant statistical answers without writing reports.",
      icon: <Bot className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "Ecommerce Copy Generator",
      desc: "Produce compelling product descriptions tailored for African shoppers highlighting benefits, ingredients, and specs.",
      icon: <FileText className="w-5 h-5 text-evarpex-orange" />,
    },
    {
      title: "Social Media & WhatsApp Drafter",
      desc: "Generate broadcast campaigns and Instagram captions with emojis and discount offers calibrated for local engagement.",
      icon: <Megaphone className="w-5 h-5 text-pink-600" />,
    },
    {
      title: "Predictive Restock Forecaster",
      desc: "Identify fast-moving inventory trends before holiday spikes and get exact recommended reorder quantities.",
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <div>
      <PageHero
        badge="Artificial Intelligence"
        title="Your 24/7 AI retail copilot."
        subtitle="Automate tedious tasks, draft marketing copy in seconds, and make data-backed commercial decisions with AI trained on African commerce."
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African business operator working with Evarpex AI assistant"
        badgeOverlay="Pragmatic Commerce AI"
        statOverlay={{
          value: "10x Faster",
          label: "Catalog & Copy Productivity",
        }}
        primaryCta={{
          label: "Try AI Assistant",
          href: "#ai-features",
        }}
        secondaryCta={{
          label: "Start Free Trial",
          href: "/pricing",
        }}
        breadcrumbs={[
          { label: "Product", href: "/product" },
          { label: "AI Business Assistant" },
        ]}
      />

      <AIAssistantSection />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <SectionHeader
            badge="AI Capabilities"
            title="How Evarpex AI frees up 15+ hours of your week."
            subtitle="Built directly into your product forms, marketing tabs, and financial ledger."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {aiTools.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F7F8FC] border border-gray-200/80 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center shrink-0">
                  {t.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {t.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t.desc}
                  </p>
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
