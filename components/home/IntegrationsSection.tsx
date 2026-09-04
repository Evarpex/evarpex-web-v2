"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { ArrowRight, Sparkles, Truck } from "lucide-react";

interface IntegrationItem {
  name: string;
  cat: string;
  desc: string;
  status: string;
  badge: string;
  featured?: boolean;
  logo: React.ReactNode;
}

export function IntegrationsSection() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Shipping & Logistics",
    "Payments",
    "Social & Messaging",
    "Accounting",
    "Marketing",
  ];

  const integrations: IntegrationItem[] = [
    {
      name: "Evarpex Delivery",
      cat: "Shipping & Logistics",
      desc: "Direct 1-click parcel dispatch, intracity same-day couriers & automated door-to-door delivery with real-time GPS tracking.",
      status: "Native • Live",
      badge: "bg-orange-50 text-evarpex-orange border border-orange-200 font-bold",
      featured: true,
      logo: (
        <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center p-1.5 shadow-xs">
          <Image
            src="/images/evarpex-logo.png"
            alt="Evarpex Delivery"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
      ),
    },
    {
      name: "Paystack",
      cat: "Payments",
      desc: "Automated card payments, dedicated merchant virtual accounts, USSD, and instant webhook reconciliation.",
      status: "Live",
      badge: "bg-emerald-50 text-emerald-700",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#001428] flex items-center justify-center p-2 shadow-xs">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
            <rect x="3" y="4" width="18" height="3" rx="1.5" fill="#00C3F7" />
            <rect x="3" y="10.5" width="12" height="3" rx="1.5" fill="#00C3F7" />
            <rect x="3" y="17" width="18" height="3" rx="1.5" fill="#00C3F7" />
          </svg>
        </div>
      ),
    },
    {
      name: "Flutterwave",
      cat: "Payments",
      desc: "Pan-African collections across 30+ countries, mobile money, international cards, and bank transfers.",
      status: "Live",
      badge: "bg-emerald-50 text-emerald-700",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#0A0E27] flex items-center justify-center p-2 shadow-xs">
          {/* Official Flutterwave 3-ribbon butterfly crest */}
          <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
            <path
              d="M6 16C6 10.477 10.477 6 16 6C18.21 6 20.25 6.717 21.91 7.93L18.42 11.42C17.7 11.15 16.88 11 16 11C13.239 11 11 13.239 11 16C11 16.88 11.15 17.7 11.42 18.42L7.93 21.91C6.717 20.25 6 18.21 6 16Z"
              fill="#F5A623"
            />
            <path
              d="M26 16C26 21.523 21.523 26 16 26C13.79 26 11.75 25.283 10.09 24.07L13.58 20.58C14.3 20.85 15.12 21 16 21C18.761 21 21 18.761 21 16C21 15.12 20.85 14.3 20.58 13.58L24.07 10.09C25.283 11.75 26 13.79 26 16Z"
              fill="#FB4E4E"
            />
            <path
              d="M16 11C18.761 11 21 13.239 21 16C21 16.88 20.85 17.7 20.58 18.42L24.07 21.91C25.283 20.25 26 18.21 26 16C26 10.477 21.523 6 16 6V11Z"
              fill="#25C9A1"
            />
          </svg>
        </div>
      ),
    },
    {
      name: "Moniepoint",
      cat: "Payments",
      desc: "In-store smart POS terminals, merchant business accounts, and rapid retail counter settlement.",
      status: "Coming soon",
      badge: "bg-amber-50 text-amber-700 border border-amber-200/60 font-medium",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#03297B] flex items-center justify-center p-2 shadow-xs">
          {/* Official Moniepoint rounded geometric M mark */}
          <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
            <rect width="32" height="32" rx="7" fill="#03297B" />
            <path
              d="M7 23V11.5C7 9.015 9.015 7 11.5 7C13.985 7 16 9.015 16 11.5V23"
              stroke="#00D2FF"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <path
              d="M16 23V11.5C16 9.015 18.015 7 20.5 7C22.985 7 25 9.015 25 11.5V23"
              stroke="#FFFFFF"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ),
    },
    {
      name: "WhatsApp Business",
      cat: "Social & Messaging",
      desc: "Automated digital receipts, live stock notifications, and customer broadcast campaign lists.",
      status: "Live",
      badge: "bg-emerald-50 text-emerald-700",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center p-2 shadow-xs text-white">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zm0 18.16c-1.48 0-2.93-.39-4.2-1.14l-.3-.18-3.12.82.83-3.05-.2-.32c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42 1.56 1.56 2.42 3.63 2.42 5.83-.01 4.54-3.71 8.24-8.25 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.24-.63.79-.77.96-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.36-1.7-.15-.25-.02-.38.11-.5.11-.11.25-.28.37-.42.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.49-.4-.42-.55-.43H8.6c-.16 0-.42.06-.65.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.58.12.17 1.76 2.69 4.26 3.77.6.26 1.06.41 1.42.53.6.19 1.14.16 1.58.1.48-.07 1.48-.61 1.69-1.2.2-.59.2-1.09.14-1.19-.06-.1-.21-.16-.46-.28z" />
          </svg>
        </div>
      ),
    },
    {
      name: "Instagram Shopping",
      cat: "Social & Messaging",
      desc: "Synchronize catalog items to enable direct bio storefront links, product stickers, and tagged shopping posts.",
      status: "Coming soon",
      badge: "bg-amber-50 text-amber-700 border border-amber-200/60 font-medium",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FEC564] via-[#E1306C] to-[#833AB4] flex items-center justify-center p-2 shadow-xs text-white">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          </svg>
        </div>
      ),
    },
    {
      name: "GIG Logistics",
      cat: "Shipping & Logistics",
      desc: "Electronic waybill generation, door-to-door courier dispatches, and scheduled pickups across Nigerian states.",
      status: "Coming soon",
      badge: "bg-amber-50 text-amber-700 border border-amber-200/60 font-medium",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#E31837] flex items-center justify-center p-1 shadow-xs text-white font-black text-[11px] tracking-tight">
          GIGL
        </div>
      ),
    },
    {
      name: "Terminal Africa",
      cat: "Shipping & Logistics",
      desc: "Multi-courier rate aggregator: compare shipping quotes across Kwik, Fez, DHL, and Sendbox in real time.",
      status: "Coming soon",
      badge: "bg-amber-50 text-amber-700 border border-amber-200/60 font-medium",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#6E27E8] flex items-center justify-center p-2 shadow-xs text-white">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
            <path d="M5 17H3v-4l2-5h9v9" />
            <path d="M14 8h5l3 5v4h-2" />
          </svg>
        </div>
      ),
    },
    {
      name: "DHL Express",
      cat: "Shipping & Logistics",
      desc: "International air freight, global parcel shipping, and customs clearance for African brands selling abroad.",
      status: "Coming soon",
      badge: "bg-amber-50 text-amber-700 border border-amber-200/60 font-medium",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#FFCC00] flex items-center justify-center p-1.5 shadow-xs text-[#D40511] font-black text-xs italic tracking-tighter">
          DHL
        </div>
      ),
    },
    {
      name: "QuickBooks",
      cat: "Accounting",
      desc: "Automated two-way ledger synchronization for cost of goods sold, profit-and-loss, and tax preparation.",
      status: "Coming soon",
      badge: "bg-amber-50 text-amber-700 border border-amber-200/60 font-medium",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#2CA01C] flex items-center justify-center p-2 shadow-xs text-white">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="12" cy="12" r="9" />
            <path d="M10 8v8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3zm4 8V8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3z" />
          </svg>
        </div>
      ),
    },
    {
      name: "Google Analytics 4",
      cat: "Marketing",
      desc: "Understand shopper discovery funnels, conversion rates, traffic sources, and store bounce analytics.",
      status: "Live",
      badge: "bg-emerald-50 text-emerald-700",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#FFF3E0] border border-amber-200 flex items-center justify-center p-2 shadow-xs">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
            <rect x="5" y="14" width="3.5" height="6" rx="1.75" fill="#F9AB00" />
            <rect x="10.25" y="9" width="3.5" height="11" rx="1.75" fill="#E37400" />
            <rect x="15.5" y="4" width="3.5" height="16" rx="1.75" fill="#D56B00" />
          </svg>
        </div>
      ),
    },
    {
      name: "Meta Catalog",
      cat: "Social & Messaging",
      desc: "Connect store inventories with Meta Ads Manager for dynamic retargeting on Facebook and Instagram feeds.",
      status: "Coming soon",
      badge: "bg-amber-50 text-amber-700 border border-amber-200/60 font-medium",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#0081FB] flex items-center justify-center p-2 shadow-xs text-white">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path d="M16.9 7.7c-1.8 0-3.3 1-4.9 2.9-1.6-1.9-3.1-2.9-4.9-2.9-3 0-5.1 2.3-5.1 5.3 0 3.7 3.3 6.3 7 6.3 1.9 0 3.3-.8 4.5-2.1 1.2 1.3 2.6 2.1 4.5 2.1 3.7 0 7-2.6 7-6.3 0-3-2.1-5.3-5.1-5.3zm-8.4 8.7c-2.4 0-4.3-1.8-4.3-4.1 0-2 1.6-3.6 3.6-3.6 1.3 0 2.4.7 3.6 2.2-1.3 2.9-2.4 5.5-2.9 5.5zm8.4 0c-.5 0-1.6-2.6-2.9-5.5 1.2-1.5 2.3-2.2 3.6-2.2 2 0 3.6 1.6 3.6 3.6 0 2.3-1.9 4.1-4.3 4.1z" />
          </svg>
        </div>
      ),
    },
  ];

  const filtered = filter === "All" ? integrations : integrations.filter((i) => i.cat === filter);

  return (
    <section id="integrations" className="py-20 lg:py-28 bg-[#F7F8FC] border-b border-gray-100">
      <Container>
        <SectionHeader
          badge="Connected Ecosystem"
          title="Works with the tools you already use."
          subtitle="Connect your business to local African payment gateways, social commerce channels, delivery logistics providers, and accounting tools with 1 click."
        />

        {/* Evarpex Delivery Spotlight Ribbon */}
        <div className="mt-8 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-orange-50 via-white to-orange-50/50 border border-orange-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-orange-200 p-1.5 shadow-xs flex items-center justify-center shrink-0">
              <Image
                src="/images/evarpex-logo.png"
                alt="Evarpex Delivery Logistics"
                width={26}
                height={26}
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-gray-900">
                  Featured Native Integration: Evarpex Delivery
                </h4>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-evarpex-orange text-white">
                  Built-In
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-0.5">
                Dispatch orders directly from checkout with automated waybills, real-time rider tracking, and verified delivery PINs.
              </p>
            </div>
          </div>
          <Button
            href="/product/business-management"
            variant="primary"
            size="sm"
            className="shrink-0 font-bold"
            icon={<Truck className="w-3.5 h-3.5" />}
          >
            Learn About Delivery
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === c
                  ? "bg-evarpex-navy text-white shadow-sm"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-white border transition-all flex flex-col justify-between group ${
                item.featured
                  ? "border-evarpex-orange/60 shadow-md ring-2 ring-orange-500/10 hover:border-evarpex-orange"
                  : "border-gray-200/80 shadow-xs hover:border-evarpex-orange/40 hover:shadow-card"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="group-hover:scale-105 transition-transform">
                    {item.logo}
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.badge}`}>
                    {item.status}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-evarpex-orange transition-colors">
                    {item.name}
                  </h4>
                  {item.featured && (
                    <Sparkles className="w-3.5 h-3.5 text-evarpex-orange shrink-0" />
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                <span>Category: <strong className="text-gray-700 font-semibold">{item.cat}</strong></span>
                {item.featured && (
                  <span className="text-evarpex-orange font-bold text-[10px] uppercase tracking-wider">
                    First-Party
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="/integrations"
            variant="secondary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore All 50+ Integrations
          </Button>
        </div>
      </Container>
    </section>
  );
}
