import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { IntegrationsSection } from "@/components/home/IntegrationsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Code2, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations & App Directory | EVARPEX",
  description:
    "Connect Evarpex with Paystack, Flutterwave, WhatsApp, Meta, Google Analytics, logistics providers, and accounting software.",
};

export default function IntegrationsPage() {
  return (
    <div>
      <PageHero
        badge="Open Platform Ecosystem"
        title="Connect your favorite African and global tools."
        subtitle="Evarpex seamlessly integrates with local payment processors, delivery couriers, communication apps, and accounting software to keep your business operating in sync."
        image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African technical systems developer configuring commerce integrations"
        badgeOverlay="Connected African Ecosystem"
        statOverlay={{
          value: "40+ Tools",
          label: "Pre-Built Local Connectors",
        }}
        primaryCta={{
          label: "Explore Integrations",
          href: "#integrations",
        }}
        secondaryCta={{
          label: "Request Custom Integration",
          href: "/company/contact",
        }}
        breadcrumbs={[{ label: "Integrations" }]}
      />

      <IntegrationsSection />

      {/* Developer API Callout */}
      <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
        <Container size="narrow">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#020B36] text-white border border-[#0D1B54] text-center space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-evarpex-orange text-white flex items-center justify-center mx-auto mb-2">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Building custom software or an ERP?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
              Use the Evarpex REST API and webhooks to synchronize catalog items, stream real-time orders, and trigger automated courier dispatches.
            </p>
            <div className="pt-2">
              <Button
                href="/company/contact"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Developer API Keys
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </div>
  );
}
