import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BookOpen, FileText, HelpCircle, ArrowRight, Lightbulb, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Merchant Resources & Knowledge Hub | EVARPEX",
  description:
    "Guides, blog articles, trade insights, academy tutorials, and FAQs for scaling modern African businesses.",
};

export default function ResourcesPage() {
  const hubs = [
    {
      title: "Trade & Commerce Blog",
      desc: "In-depth articles on inventory management, retail trends in Nigeria, and scaling omnichannel commerce.",
      href: "/resources/blog",
      icon: <FileText className="w-6 h-6 text-evarpex-orange" />,
      tag: "Weekly Articles",
    },
    {
      title: "Business Growth Guides",
      desc: "Step-by-step playbooks covering retail shrinkage prevention, POS setup, and CAC legal compliance.",
      href: "/resources/guides",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      tag: "Playbooks & PDF",
    },
    {
      title: "Help Center & FAQs",
      desc: "Searchable technical documentation, hardware setup manuals, and answers to common account questions.",
      href: "/resources/faq",
      icon: <HelpCircle className="w-6 h-6 text-emerald-600" />,
      tag: "Support Center",
    },
    {
      title: "Business Academy",
      desc: "Video masterclasses on financial bookkeeping, social media marketing, and multi-location retail scaling.",
      href: "/resources/guides",
      icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
      tag: "Video Courses",
    },
  ];

  return (
    <div>
      <PageHero
        badge="Knowledge Ecosystem"
        title="Knowledge, playbooks, and guides for African merchants."
        subtitle="Learn how the most successful retailers, brands, and distributors across Nigeria and West Africa operate, manage cash flow, and scale."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African business owners learning retail growth strategies"
        badgeOverlay="Merchant Academy & Growth"
        statOverlay={{
          value: "50+ Guides",
          label: "Free Retail Masterclasses",
        }}
        primaryCta={{
          label: "Explore Playbooks",
          href: "/resources/guides",
        }}
        secondaryCta={{
          label: "Read Commerce Blog",
          href: "/resources/blog",
        }}
        breadcrumbs={[{ label: "Resources" }]}
      />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hubs.map((h, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F7F8FC] border border-gray-200/80 hover:border-evarpex-orange/40 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center">
                      {h.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-evarpex-orange bg-orange-50 px-2.5 py-1 rounded-full">
                      {h.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {h.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {h.desc}
                  </p>
                </div>

                <Link
                  href={h.href}
                  className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-evarpex-orange hover:underline"
                >
                  <span>Explore {h.title}</span>
                  <ArrowRight className="w-4 h-4" />
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
