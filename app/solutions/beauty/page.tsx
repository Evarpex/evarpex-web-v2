import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Sparkles, Heart, BellRing, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Beauty & Cosmetics Solution | EVARPEX",
  description:
    "Skincare batch tracking, expiry date management, customer regimen notes, and automated repeat reorder prompts for African beauty brands.",
};

export default function BeautySolutionPage() {
  const points = [
    { title: "Batch & Expiry Date Management", desc: "Track organic formulation batches and receive proactive notifications before stock reaches shelf-life." },
    { title: "Customer Skin Profile Notes", desc: "Record customer skin types (oily, dry, sensitive) and allergy notes right inside their CRM profile." },
    { title: "Automated Reorder Sequences", desc: "Prompt customers 30 days after buying a 50ml serum to replenish before they run out." },
    { title: "Custom Bundling & Kits", desc: "Package cleanser + toner + moisturizer bundles with automated component inventory deduction." },
  ];

  return (
    <div>
      <PageHero
        badge="Beauty & Cosmetics"
        title="Software built for the modern African beauty industry."
        subtitle="Empower your skincare or cosmetics brand with batch tracking, automated refill reminders, and personalized customer consultations."
        image="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African beauty and wellness specialist serving client"
        badgeOverlay="Beauty Salons & Spas"
        statOverlay={{
          value: "+42%",
          label: "Appointment Rebooking Rate",
        }}
        primaryCta={{
          label: "Start Free Trial",
          href: "/pricing",
        }}
        secondaryCta={{
          label: "Explore CRM Tools",
          href: "/product/crm",
        }}
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Beauty & Cosmetics" },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <SectionHeader
            badge="Cosmetics Workflows"
            title="Drive maximum retention for your beauty catalog."
            subtitle="Built to turn one-time skincare purchasers into lifelong monthly subscribers."
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
