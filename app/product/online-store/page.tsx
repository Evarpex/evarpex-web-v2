import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { OnlineStoreSection } from "@/components/home/OnlineStoreSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Globe,
  Smartphone,
  CreditCard,
  Search,
  Tag,
  Share2,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Online Store Builder | EVARPEX",
  description:
    "Launch your custom ecommerce storefront with zero code. Mobile-first, integrated card and bank transfer checkout, and custom domain.",
};

export default function OnlineStorePage() {
  const storeFeatures = [
    {
      title: "No-Code Customizer",
      desc: "Upload your logo, select brand colors, arrange banners, and feature best-sellers in minutes without developers.",
      icon: <Zap className="w-5 h-5 text-evarpex-orange" />,
    },
    {
      title: "Custom Domain Connection",
      desc: "Connect your own domain like `glowskincare.ng` or use a free `yourname.evarpex.store` address.",
      icon: <Globe className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Integrated African Checkout",
      desc: "Collect payments via Verve, Mastercard, Visa, Direct Bank Transfer, and USSD with zero checkout friction.",
      icon: <CreditCard className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Coupon & Discount Engine",
      desc: "Create percentage discounts, free shipping thresholds, and seasonal promo codes (e.g. BLACKFRIDAY).",
      icon: <Tag className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "SEO & Social Sharing",
      desc: "Automatic OpenGraph tags ensure your products look stunning when shared on WhatsApp, Twitter, and Facebook.",
      icon: <Share2 className="w-5 h-5 text-pink-600" />,
    },
    {
      title: "Direct Catalog Search",
      desc: "Fast autocomplete search allows customers to find products, sizes, and colors in less than a second.",
      icon: <Search className="w-5 h-5 text-amber-600" />,
    },
  ];

  return (
    <div>
      <PageHero
        badge="Omnichannel Ecommerce"
        title="Launch your custom online store in minutes."
        subtitle="A high-performance ecommerce storefront built specifically for African shoppers: ultra-fast on mobile, low data usage, and frictionless local checkout."
        image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop"
        imageAlt="African business owner managing branded online storefront on smartphone"
        badgeOverlay="0% Commission Storefront"
        statOverlay={{
          value: "3 mins",
          label: "Instant Storefront Setup",
        }}
        primaryCta={{
          label: "Start Free Trial",
          href: "/pricing",
        }}
        secondaryCta={{
          label: "Explore Payment Gateway",
          href: "/product/payments",
        }}
        breadcrumbs={[
          { label: "Product", href: "/product" },
          { label: "Online Store" },
        ]}
      />

      <OnlineStoreSection />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <SectionHeader
            badge="Store Capabilities"
            title="Everything required to convert visitors into paying buyers."
            subtitle="Built from the ground up for maximum conversion rates in African ecommerce."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {storeFeatures.map((f, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F7F8FC] border border-gray-200/80 hover:border-evarpex-orange/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center mb-3">
                  {f.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">
                  {f.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {f.desc}
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
