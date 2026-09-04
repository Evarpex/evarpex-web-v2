import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { BusinessServicesSection } from "@/components/home/BusinessServicesSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  FileBadge,
  Globe,
  Mail,
  Palette,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Setup & Formalization Services | EVARPEX",
  description:
    "CAC Business Registration, custom domain setup, professional corporate email, branding kits, and tax compliance assistance.",
};

export default function BusinessServicesPage() {
  const packages = [
    {
      name: "Starter Business Registration",
      badge: "CAC Formalization",
      price: "₦35,000",
      desc: "Fast-track Business Name registration with the Corporate Affairs Commission (CAC).",
      includes: [
        "Name availability search & reservation",
        "Official CAC Business Name Certificate",
        "Tax Identification Number (TIN)",
        "Certified status report documents",
      ],
    },
    {
      name: "Corporate Brand & Web Identity",
      badge: "Digital Presence",
      price: "₦50,000",
      desc: "Everything required to project professional corporate credibility from day one.",
      includes: [
        "1-Year Custom .com or .ng domain registration",
        "3x Google Workspace professional business emails",
        "Vector logo files & brand color typography guide",
        "Social media branding templates & invoice format",
      ],
    },
    {
      name: "Full Limited Liability (LTD) Package",
      badge: "Enterprise Foundation",
      price: "₦85,000",
      desc: "Complete corporate incorporation with 1,000,000 share capital structure.",
      includes: [
        "Full Private Limited Company (LTD) Registration",
        "CAC Status Report & Memorandum of Association",
        "Federal Tax Identification Number (TIN)",
        "Priority commercial bank account opening support",
      ],
    },
  ];

  return (
    <div>
      <PageHero
        badge="Platform Enablement"
        title="Everything your business needs to launch and scale legally."
        subtitle="From formal CAC incorporation to custom corporate emails and tax documentation, Evarpex takes care of the regulatory paperwork so you can focus on building your brand."
        image="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop"
        imageAlt="Corporate legal documentation and business formalization in Nigeria"
        badgeOverlay="Accredited Legal & CAC Setup"
        statOverlay={{
          value: "5-7 Days",
          label: "Average Formalization Speed",
        }}
        primaryCta={{
          label: "View Setup Packages",
          href: "#packages",
        }}
        secondaryCta={{
          label: "Consult Abuja Office",
          href: "/company/contact",
        }}
        breadcrumbs={[{ label: "Business Services" }]}
      />

      <BusinessServicesSection />

      {/* Package Pricing Matrix */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <SectionHeader
            badge="Managed Packages"
            title="Transparent, fixed-price business setup services."
            subtitle="Handled by accredited corporate attorneys and chartered business consultants."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {packages.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F7F8FC] border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-evarpex-orange bg-orange-50 px-2.5 py-1 rounded-full">
                    {p.badge}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3 mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">{p.desc}</p>
                  <div className="text-2xl font-black text-gray-900 mb-5">
                    {p.price}
                  </div>

                  <ul className="space-y-2 text-xs text-gray-700 mb-6">
                    {p.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  href="/company/contact"
                  variant="primary"
                  size="md"
                  fullWidth
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </div>
  );
}
