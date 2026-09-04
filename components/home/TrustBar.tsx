import React from "react";
import { Container } from "../ui/Container";
import { ShieldCheck, Activity, Globe2, Building2, Store } from "lucide-react";

export function TrustBar() {
  const merchantBrands = [
    { name: "Glow Skin Care", category: "Beauty & Organics", initials: "GS", color: "bg-orange-100 text-evarpex-orange" },
    { name: "FreshMart Groceries", category: "Supermarket & Produce", initials: "FM", color: "bg-emerald-100 text-emerald-700" },
    { name: "Ameno Fashion", category: "Apparel & Boutiques", initials: "AF", color: "bg-purple-100 text-purple-700" },
    { name: "Prime Electronics", category: "Tech & Accessories", initials: "PE", color: "bg-blue-100 text-blue-700" },
    { name: "Urban Kitchen", category: "Dining & Quick Service", initials: "UK", color: "bg-amber-100 text-amber-700" },
    { name: "Apex Pharmacy", category: "Healthcare & Care", initials: "AP", color: "bg-teal-100 text-teal-700" },
  ];

  const stats = [
    {
      value: "₦50 Billion+",
      label: "Gross Merchandise Value",
      note: "Processed across physical & digital stores",
    },
    {
      value: "10,000+",
      label: "Active African Businesses",
      note: "Lagos, Abuja, Port Harcourt & beyond",
    },
    {
      value: "99.9%",
      label: "Platform Availability",
      note: "High reliability cloud cluster",
    },
    {
      value: "100%",
      label: "Regulated Settlement",
      note: "Through Central Bank licensed partners",
    },
  ];

  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <Container>
        {/* Merchant Logos Strip (Bumpa style) */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Trusted by 10,000+ ambitious businesses across Africa
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {merchantBrands.map((b, idx) => (
            <div
              key={idx}
              className="p-3 rounded-2xl bg-gray-50/80 border border-gray-200/60 hover:border-evarpex-orange/40 transition-all flex items-center gap-2.5"
            >
              <div className={`w-8 h-8 rounded-xl ${b.color} font-black text-xs flex items-center justify-center shrink-0`}>
                {b.initials}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-gray-900 truncate">
                  {b.name}
                </div>
                <div className="text-[10px] text-gray-400 truncate">
                  {b.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 pt-8 border-t border-gray-100">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#F7F8FC] border border-gray-200/60 flex flex-col items-center text-center transition-all hover:bg-white hover:shadow-card"
            >
              <div className="text-2xl sm:text-3xl font-black text-evarpex-navy tracking-tight">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-900 mt-1">
                {item.label}
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">
                {item.note}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
