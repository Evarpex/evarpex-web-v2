import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Button } from "@/components/ui/Button";
import { PhoneCall, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Help Center & FAQ | EVARPEX",
  description:
    "Find direct answers to all questions about Evarpex hardware compatibility, card and bank payments, pricing, and account setup.",
};

export default function FAQPage() {
  return (
    <div>
      <PageHero
        badge="Help Center"
        title="Frequently asked questions and support."
        subtitle="Direct answers to everything you need to know about setting up your store, accepting payments, and managing your hardware."
        image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
        imageAlt="Evarpex merchant support team"
        badgeOverlay="24/7 Merchant Support"
        statOverlay={{
          value: "100%",
          label: "Verified Solutions",
        }}
        primaryCta={{
          label: "Browse Questions",
          href: "#faqs",
        }}
        secondaryCta={{
          label: "Contact Abuja Support",
          href: "/company/contact",
        }}
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "FAQs" },
        ]}
      />

      <FAQSection />

      {/* Still need help callout */}
      <section className="py-16 bg-white border-b border-gray-100 text-center">
        <Container size="narrow">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Still have questions or need custom hardware guidance?
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-6">
            Our onboarding and support team at our Abuja headquarters is available Monday through Saturday.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              href="/company/contact"
              variant="primary"
              size="md"
              icon={<PhoneCall className="w-4 h-4" />}
            >
              Talk to Our Team
            </Button>
            <Button
              href="https://whatsapp.com"
              variant="secondary"
              size="md"
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </div>
  );
}
