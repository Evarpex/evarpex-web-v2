import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import {
  ShoppingBag,
  Scissors,
  Sparkles,
  Utensils,
  Tv,
  Pill,
  Layers,
  Store,
  Briefcase,
  Globe,
  Factory,
  Truck,
  ArrowRight,
} from "lucide-react";

export function IndustriesSection() {
  const industries = [
    { title: "Retail & Supermarkets", desc: "High-volume barcode scanning, fast checkout, cash drawer controls, and expiry alerts.", href: "/solutions/retail", icon: <Store className="w-5 h-5 text-evarpex-orange" /> },
    { title: "Fashion & Boutiques", desc: "Manage clothing sizes, color variations, curated collections, and Instagram shop links.", href: "/solutions/fashion", icon: <Scissors className="w-5 h-5 text-purple-600" /> },
    { title: "Beauty & Cosmetics", desc: "Batch tracking, organic skincare formulas, customer skin profiles, and repeat auto-reorders.", href: "/solutions/beauty", icon: <Sparkles className="w-5 h-5 text-pink-600" /> },
    { title: "Restaurants & Cafes", desc: "Table ordering, quick takeaway billing, kitchen tickets, and split bill payments.", href: "/solutions/restaurants", icon: <Utensils className="w-5 h-5 text-amber-600" /> },
    { title: "Electronics & Gadgets", desc: "Serial number and IMEI tracking, manufacturer warranty periods, and deposit layaways.", href: "/solutions/retail", icon: <Tv className="w-5 h-5 text-blue-600" /> },
    { title: "Pharmacies & Health", desc: "NAFDAC batch tracking, prescription notes, dosage alerts, and restricted stock access.", href: "/solutions/retail", icon: <Pill className="w-5 h-5 text-emerald-600" /> },
    { title: "Wholesale & Distributors", desc: "Bulk quantity tier pricing, customer credit ledgers, and formal B2B invoice generation.", href: "/solutions/wholesale", icon: <Layers className="w-5 h-5 text-indigo-600" /> },
    { title: "Online Sellers & Creators", desc: "Turn WhatsApp contacts and Instagram DMs into automated checkouts with zero manual DMs.", href: "/solutions/online-businesses", icon: <Globe className="w-5 h-5 text-cyan-600" /> },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F8FC] border-b border-gray-100">
      <Container>
        <SectionHeader
          badge="Specialized Workflows"
          title="Built for every kind of business."
          subtitle="Whether you run a fast-paced supermarket in Ikeja, a boutique salon in Abuja, or an online fashion brand shipping across West Africa."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {industries.map((ind, idx) => (
            <Link
              key={idx}
              href={ind.href}
              className="p-5 rounded-2xl bg-white border border-gray-200/80 hover:border-evarpex-orange hover:shadow-card transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {ind.icon}
                </div>
                <h4 className="text-sm font-bold text-gray-900 group-hover:text-evarpex-orange transition-colors mb-1.5">
                  {ind.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {ind.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1 text-xs font-bold text-evarpex-orange">
                <span>Explore solution</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-bold text-evarpex-navy hover:text-evarpex-orange transition-colors"
          >
            <span>View all industry architectures</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
