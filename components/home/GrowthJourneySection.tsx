import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import {
  FileCheck,
  Store,
  Boxes,
  Sparkles,
  Rocket,
  ArrowRight,
} from "lucide-react";

export function GrowthJourneySection() {
  const stages = [
    {
      step: "01",
      title: "START",
      subtitle: "Formalize & Launch",
      desc: "Register your business with CAC, configure a custom `.com.ng` domain, and set up your brand identity.",
      feature: "Evarpex Business Services",
      icon: <FileCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "02",
      title: "SELL",
      subtitle: "Omnichannel Checkout",
      desc: "Open your online store and deploy smart POS terminals to start ringing orders online and offline.",
      feature: "Online Store & Smart POS",
      icon: <Store className="w-5 h-5 text-evarpex-orange" />,
    },
    {
      step: "03",
      title: "MANAGE",
      subtitle: "Operations & Control",
      desc: "Keep stock accurate in real time, prevent cashier shrinkage, and track cash & transfer settlements.",
      feature: "Central Inventory & Wallet",
      icon: <Boxes className="w-5 h-5 text-amber-600" />,
    },
    {
      step: "04",
      title: "GROW",
      subtitle: "Retention & Intelligence",
      desc: "Turn one-time shoppers into repeat VIPs via automated WhatsApp campaigns and AI product descriptions.",
      feature: "CRM & AI Business Assistant",
      icon: <Sparkles className="w-5 h-5 text-purple-600" />,
    },
    {
      step: "05",
      title: "SCALE",
      subtitle: "Multi-Store Expansion",
      desc: "Open branches across Lagos, Abuja, and Port Harcourt with inter-store transfers and partner credit lines.",
      feature: "Multi-Location & Partner Financing",
      icon: <Rocket className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <Container>
        <SectionHeader
          badge="End-to-End Roadmap"
          title="Your business journey starts here."
          subtitle="Whether you are registering your first shop today or managing a high-volume chain of retail branches, Evarpex is built to grow with every phase of your business."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-14">
          {stages.map((st, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-[#F7F8FC] border border-gray-200/80 hover:border-evarpex-orange/40 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-gray-400 font-mono">
                    STAGE {st.step}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white shadow-xs flex items-center justify-center">
                    {st.icon}
                  </div>
                </div>

                <div className="text-lg font-black text-evarpex-navy mb-0.5">
                  {st.title}
                </div>
                <div className="text-xs font-bold text-evarpex-orange mb-3">
                  {st.subtitle}
                </div>

                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  {st.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200/60 text-[11px] font-bold text-gray-700 flex items-center gap-1">
                <span>{st.feature}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
