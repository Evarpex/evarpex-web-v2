import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at EVARPEX | Join Us",
  description:
    "Build the commerce, AI, and financial operating system for African businesses. Explore engineering, product, and sales roles.",
};

export default function CareersPage() {
  const roles = [
    {
      title: "Senior Full-Stack Engineer (Next.js & Node.js)",
      team: "Core Platform",
      loc: "Abuja HQ (Hybrid)",
      type: "Full-time",
    },
    {
      title: "Fintech Systems Architect",
      team: "Payments & Ledger",
      loc: "Abuja HQ (Hybrid)",
      type: "Full-time",
    },
    {
      title: "Product Designer (SaaS UI/UX)",
      team: "Design Systems",
      loc: "Remote (Pan-Africa)",
      type: "Full-time",
    },
    {
      title: "Enterprise Retail Sales Lead",
      team: "Commercial Growth",
      loc: "Abuja HQ",
      type: "Full-time",
    },
  ];

  return (
    <div>
      <PageHero
        badge="Join The Team"
        title="Build the future of African commerce with us."
        subtitle="We are looking for ambitious engineers, product builders, designers, and commercial operators passionate about solving trade infrastructure in Africa. Headquartered in Abuja."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
        imageAlt="Evarpex engineering and product team"
        badgeOverlay="Abuja HQ & Remote"
        statOverlay={{
          value: "Top 1%",
          label: "Engineering & Product Culture",
        }}
        primaryCta={{
          label: "View Open Roles",
          href: "#open-roles",
        }}
        secondaryCta={{
          label: "Contact Hiring Team",
          href: "/company/contact",
        }}
        breadcrumbs={[
          { label: "Company", href: "/company" },
          { label: "Careers" },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <SectionHeader
            badge="Open Opportunities"
            title="Current Open Positions"
            subtitle="Competitive compensation, health insurance, performance equity, and modern flexible work."
          />

          <div className="space-y-4 mt-12 max-w-4xl mx-auto">
            {roles.map((r, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F7F8FC] border border-gray-200/80 hover:border-evarpex-orange/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-evarpex-orange bg-orange-50 px-2.5 py-0.5 rounded-full">
                    {r.team}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-2">
                    {r.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {r.loc}
                    </span>
                    <span>•</span>
                    <span>{r.type}</span>
                  </div>
                </div>

                <div>
                  <Button
                    href="/company/contact"
                    variant="secondary"
                    size="sm"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Apply Now
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
