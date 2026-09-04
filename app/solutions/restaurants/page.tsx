import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Utensils, Printer, Clock, Smartphone, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurants, Cafes & Food Businesses | EVARPEX",
  description:
    "Speed up table ordering, kitchen ticket printing, takeaway bills, and split payments for African dining and food businesses.",
};

export default function RestaurantsSolutionPage() {
  const points = [
    { title: "Table & Kitchen Routing", desc: "Send order tickets directly to kitchen thermal printers the moment a waiter takes the order." },
    { title: "Split Bill Checkout", desc: "Easily divide large restaurant bills between guests paying with cards, cash, or transfer." },
    { title: "Recipe & Ingredient Deduction", desc: "Automatically deduct raw meat, rice, and cooking oil inventory when dishes are ordered." },
    { title: "QR Table Menus", desc: "Let diners view your digital menu on their phone without waiting for paper menus." },
  ];

  return (
    <div>
      <PageHero
        badge="Food & Dining"
        title="Modern POS and management for restaurants and cafes."
        subtitle="Deliver faster service, stop kitchen order mix-ups, and track meal profitability with precision."
        image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
        imageAlt="Modern African restaurant kitchen and dining staff"
        badgeOverlay="Restaurants & Lounges"
        statOverlay={{
          value: "0 Delay",
          label: "Kitchen Display Routing",
        }}
        primaryCta={{
          label: "Start Free Trial",
          href: "/pricing",
        }}
        secondaryCta={{
          label: "Book Restaurant Demo",
          href: "/company/contact",
        }}
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Restaurants & Food" },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <SectionHeader
            badge="Hospitality Features"
            title="Fast dining operations from kitchen to counter."
            subtitle="Built to handle busy lunch rushes and late-night weekend dining."
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
