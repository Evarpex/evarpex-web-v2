import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShieldCheck, Globe, Zap, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | EVARPEX",
  description:
    "Evarpex is the Commerce, AI & Financial Operating System for African Businesses. Learn about our mission and foundational principles.",
};

export default function AboutPage() {
  const values = [
    {
      title: "African Context First",
      desc: "We build for the realities of African business: offline resilience, instant direct bank transfer confirmation, split tenders, and low-data mobile usage.",
      icon: <Globe className="w-5 h-5 text-evarpex-orange" />,
    },
    {
      title: "Connected Commerce, Not Disconnected Tools",
      desc: "We believe merchants should spend their time growing revenue and delighting shoppers, not copying numbers across spreadsheets and incompatible software.",
      icon: <Zap className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Integrity & Data Ownership",
      desc: "Evarpex is software and infrastructure for your brand. You own 100% of your customer records, transaction data, and store branding.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Pragmatic Artificial Intelligence",
      desc: "We don't build AI gimmicks. We deploy AI that directly automates tedious tasks: drafting product copy, analyzing profit margins, and predicting inventory.",
      icon: <Users className="w-5 h-5 text-purple-600" />,
    },
  ];

  return (
    <div>
      <PageHero
        badge="Our Mission"
        title="We build the infrastructure that powers African trade."
        subtitle="Evarpex is the Commerce, AI & Financial Operating System for African Businesses — headquartered in Abuja and helping merchants across the continent sell, manage, get paid, and scale."
        image="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African founders and product builders at Evarpex"
        badgeOverlay="Headquartered in Abuja"
        statOverlay={{
          value: "10,000+",
          label: "African Merchants Empowered",
        }}
        primaryCta={{
          label: "Explore Solutions",
          href: "/solutions",
        }}
        secondaryCta={{
          label: "Contact Abuja Office",
          href: "/company/contact",
        }}
        breadcrumbs={[
          { label: "Company", href: "/company" },
          { label: "About Us" },
        ]}
      />

      {/* Positioning Distinction Callout */}
      <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
        <Container size="narrow">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#020B36] text-white border border-[#0D1B54] shadow-xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-evarpex-orange bg-orange-500/20 px-3 py-1 rounded-full">
              Foundational Clarity
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Evarpex is not an online marketplace.
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              We do not compete with our merchants for customer attention. We do not sell consumer products. EVARPEX is the private software and financial infrastructure that businesses use to run their stores, ring up orders at their retail counters, manage multi-location stock, and accept payments.
            </p>
            <p className="text-xs text-gray-400 italic pt-2">
              "Everything your business needs. All in one place."
            </p>
          </div>
        </Container>
      </section>

      {/* Guiding Values */}
      <section className="py-16 lg:py-24 bg-[#F7F8FC] border-b border-gray-100">
        <Container>
          <SectionHeader
            badge="Operating Principles"
            title="What drives our engineering and design decisions."
            subtitle="Built by African technologists who understand the daily operational challenges of African commerce."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-gray-200/80 flex items-start gap-4 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {v.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {v.desc}
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
