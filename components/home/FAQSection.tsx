"use client";

import React, { useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Evarpex?",
      a: "Evarpex is the Commerce, AI & Financial Operating System for African Businesses. It brings together your online store, physical in-store POS, inventory tracking, staff management, payment collection, customer CRM, and AI business copilot into one unified platform.",
    },
    {
      q: "Is Evarpex a marketplace?",
      a: "No. Evarpex is NOT a marketplace or a directory like Jumia or Amazon. Evarpex is private business software and financial infrastructure. Your store operates on your own dedicated domain (e.g., yourbrand.ng or yourbrand.evarpex.store), where you keep 100% of your customer data, branding, and relationships.",
    },
    {
      q: "Can I create an online store with Evarpex?",
      a: "Yes! You can launch a fully functional, mobile-optimized ecommerce store in less than 5 minutes without writing a single line of code. It includes an integrated catalog, custom domain support, coupon codes, and local payment checkout.",
    },
    {
      q: "Can I use Evarpex for a physical retail store?",
      a: "Absolutely. Thousands of physical retail stores, boutiques, supermarkets, and restaurants run on Evarpex. You can use our Smart POS app on your computer, tablet, or phone to scan barcodes, print receipts, and accept cash and card payments.",
    },
    {
      q: "Does Evarpex have POS (Point of Sale)?",
      a: "Yes, Evarpex includes a built-in cloud and offline-capable Point of Sale. It supports rapid barcode scanning, split payments (cash + bank transfer), receipt printing, cashier shift tracking, and instant inventory deductions.",
    },
    {
      q: "Can I accept payments through Evarpex?",
      a: "Yes. You can accept local and international debit cards (Mastercard, Visa, Verve), instant direct bank transfers, USSD strings, QR codes, and shareable payment links. All payments settle into your integrated Evarpex Merchant Wallet.",
    },
    {
      q: "Can I manage multiple branch stores or warehouses?",
      a: "Yes. Evarpex is built for multi-location growth. You can oversee your central inventory, trigger inter-branch stock transfers, assign branch-specific staff permissions, and compare store revenue across Lagos, Abuja, Port Harcourt, and beyond from one HQ dashboard.",
    },
    {
      q: "Does Evarpex provide business financing?",
      a: "Eligible businesses that process consistent transactions on Evarpex can access inventory working capital and merchant credit lines. All credit facilities are underwritten and disbursed through licensed, regulated financial and lending partners.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes, every new Evarpex account starts with a 14-day full-access free trial. No credit card is required to sign up, configure your store, and start exploring.",
    },
    {
      q: "Can I connect my existing custom website or domain?",
      a: "Yes. You can easily link your custom domain (e.g., www.yourbusiness.com) to your Evarpex storefront. We also provide developer API access and webhooks on higher tiers.",
    },
    {
      q: "Can I use Evarpex from my phone?",
      a: "Yes. The entire Evarpex platform is responsive and mobile-friendly. You can manage products, check daily sales, review inventory, ring up orders, and run AI prompts directly from your smartphone browser.",
    },
    {
      q: "Is Evarpex available outside Nigeria?",
      a: "Evarpex is primarily engineered for Nigerian merchants with direct NGN bank transfer rails and local tax workflows, but businesses across Ghana, Kenya, and other African markets can utilize our core commerce, inventory, and card checkout tools.",
    },
    {
      q: "Do I need technical knowledge to use Evarpex?",
      a: "Not at all. Evarpex is designed with intuitive, modern interfaces for everyday business owners and retail cashiers. If you know how to use WhatsApp, you can master Evarpex in a single afternoon.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F8FC] border-b border-gray-100" id="faq">
      <Container size="narrow">
        <SectionHeader
          badge="Clear Answers"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about getting started, migrating your store, hardware compatibility, and payments."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200/80 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-evarpex-orange"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-gray-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-evarpex-orange" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100/60 animate-in fade-in-50 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
