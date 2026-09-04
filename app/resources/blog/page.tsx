import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Trade & Commerce Blog | EVARPEX",
  description:
    "Insights on retail strategy, inventory optimization, mobile checkout, and African commerce trends.",
};

export default function BlogPage() {
  const articles = [
    {
      title: "How to Stop Cashier Shrinkage in Nigerian Supermarkets & Boutiques",
      excerpt: "Proven retail internal control procedures, daily blind drops, and role permission audits that save merchants millions of naira annually.",
      category: "Operations",
      date: "August 28, 2026",
      readTime: "6 min read",
      author: "Evarpex Retail Research",
    },
    {
      title: "Why Bank Transfer Verification in African Retail Must Be Automated",
      excerpt: "Manual WhatsApp bank screenshots waste customer time and open doors to fake credit alerts. Here is how automated virtual accounts solve it.",
      category: "Fintech & Payments",
      date: "August 20, 2026",
      readTime: "5 min read",
      author: "Fintech Desk",
    },
    {
      title: "From 1 Shop to 4 Branches: The Multi-Location Retail Playbook",
      excerpt: "How forward-thinking Nigerian entrepreneurs handle warehouse-to-store stock transfers, regional cashier shifts, and centralized profits.",
      category: "Growth & Scaling",
      date: "August 14, 2026",
      readTime: "8 min read",
      author: "Merchant Strategy Team",
    },
    {
      title: "Using AI to Write High-Converting Product Descriptions for African Shoppers",
      excerpt: "A practical guide to leveraging natural language retail assistants to draft compelling skincare, fashion, and tech copy in minutes.",
      category: "Artificial Intelligence",
      date: "August 5, 2026",
      readTime: "4 min read",
      author: "AI Product Team",
    },
  ];

  return (
    <div>
      <PageHero
        badge="Trade Insights"
        title="Commerce and technology insights for African retailers."
        subtitle="Practical, battle-tested strategies on retail operations, payment reconciliation, inventory management, and business expansion."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African commerce entrepreneur and author"
        badgeOverlay="Commerce Insights & Trends"
        statOverlay={{
          value: "Weekly",
          label: "Actionable Merchant Briefs",
        }}
        primaryCta={{
          label: "Read Featured Articles",
          href: "#featured-articles",
        }}
        secondaryCta={{
          label: "Explore Playbooks",
          href: "/resources/guides",
        }}
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Blog" },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art, idx) => (
              <article
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[#F7F8FC] border border-gray-200/80 hover:border-evarpex-orange/40 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-orange-50 text-evarpex-orange font-bold text-[10px] uppercase tracking-wider">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-medium">By {art.author}</span>
                  <span className="font-bold text-evarpex-orange flex items-center gap-1 cursor-pointer hover:underline">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </div>
  );
}
