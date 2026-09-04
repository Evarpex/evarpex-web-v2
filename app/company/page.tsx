import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Building2, Briefcase, PhoneCall, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Company | EVARPEX",
  description:
    "Learn about Evarpex Technologies, our mission to power African commerce, our careers, and how to contact our team.",
};

export default function CompanyHubPage() {
  const links = [
    { title: "About Evarpex", desc: "Our founding story, mission, and Pan-African commerce vision.", href: "/company/about", icon: <Building2 className="w-6 h-6 text-evarpex-orange" /> },
    { title: "Careers", desc: "Join our engineering, product, and operations teams at our Abuja headquarters and remote.", href: "/company/careers", icon: <Briefcase className="w-6 h-6 text-blue-600" /> },
    { title: "Contact Us", desc: "Reach our sales, onboarding, and merchant technical support teams in Abuja.", href: "/company/contact", icon: <PhoneCall className="w-6 h-6 text-emerald-600" /> },
    { title: "Business Setup Services", desc: "CAC registration, business email, and legal formalization packages.", href: "/business-services", icon: <ShieldCheck className="w-6 h-6 text-purple-600" /> },
  ];

  return (
    <div>
      <PageHero
        badge="About The Company"
        title="Building the software operating system for African commerce."
        subtitle="Evarpex empowers merchants, brands, and distributors with the tools they need to sell, manage, get paid, and scale from one unified platform."
        image="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1200&auto=format&fit=crop"
        imageAlt="Evarpex leadership and operations in Abuja"
        badgeOverlay="Abuja HQ • West Africa"
        statOverlay={{
          value: "99.98%",
          label: "Platform Reliability SLA",
        }}
        primaryCta={{
          label: "Explore Solutions",
          href: "/solutions",
        }}
        secondaryCta={{
          label: "Contact Abuja Office",
          href: "/company/contact",
        }}
        breadcrumbs={[{ label: "Company" }]}
      />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {links.map((l, idx) => (
              <Link
                key={idx}
                href={l.href}
                className="p-8 rounded-3xl bg-[#F7F8FC] border border-gray-200/80 hover:border-evarpex-orange/50 hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {l.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-evarpex-orange transition-colors mb-2">
                    {l.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {l.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-evarpex-orange">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </div>
  );
}
