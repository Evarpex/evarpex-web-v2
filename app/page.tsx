import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { OnlineStoreSection } from "@/components/home/OnlineStoreSection";
import { InventorySection } from "@/components/home/InventorySection";
import { POSSection } from "@/components/home/POSSection";
import { PaymentsSection } from "@/components/home/PaymentsSection";
import { WalletSection } from "@/components/home/WalletSection";
import { AIAssistantSection } from "@/components/home/AIAssistantSection";
import { CRMSection } from "@/components/home/CRMSection";
import { AnalyticsSection } from "@/components/home/AnalyticsSection";
import { BusinessServicesSection } from "@/components/home/BusinessServicesSection";
import { FinancialServicesSection } from "@/components/home/FinancialServicesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { MultiLocationSection } from "@/components/home/MultiLocationSection";
import { IntegrationsSection } from "@/components/home/IntegrationsSection";
import { PricingSection } from "@/components/home/PricingSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { GrowthJourneySection } from "@/components/home/GrowthJourneySection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. The Problem */}
      <ProblemSection />

      {/* 4. Product Showcase Tabs (Sell, Manage, Get Paid, Understand, Automate, Grow) */}
      <ProductShowcase />

      {/* 5. Online Store Builder */}
      <OnlineStoreSection />

      {/* 6. Inventory & Operations */}
      <InventorySection />

      {/* 7. Smart Point of Sale (POS) */}
      <POSSection />

      {/* 8. Payments & Fintech */}
      <PaymentsSection />

      {/* 9. Merchant Wallet */}
      <WalletSection />

      {/* 10. AI Business Assistant */}
      <AIAssistantSection />

      {/* 11. CRM & Customers */}
      <CRMSection />

      {/* 12. Real-Time Analytics */}
      <AnalyticsSection />

      {/* 13. Business Setup Services */}
      <BusinessServicesSection />

      {/* 14. Partner Financial Services */}
      <FinancialServicesSection />

      {/* 15. Industry Solutions */}
      <IndustriesSection />

      {/* 16. Multi-Location Network */}
      <MultiLocationSection />

      {/* 17. Connected Integrations */}
      <IntegrationsSection />

      {/* 18. Pricing Plans */}
      <PricingSection />

      {/* 19. Merchant Testimonials */}
      <TestimonialsSection />

      {/* 20. Business Growth Roadmap */}
      <GrowthJourneySection />

      {/* 21. Frequently Asked Questions */}
      <FAQSection />

      {/* 22. High-Impact Final CTA */}
      <FinalCTA />
    </div>
  );
}
