import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import {
  Globe,
  Boxes,
  Receipt,
  CreditCard,
  Calculator,
  Users,
  Megaphone,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export function ProblemSection() {
  const tools = [
    { title: "Website Builder", note: "Disconnected store" },
    { title: "Separate POS App", note: "Hardware lock-in" },
    { title: "Inventory Sheets", note: "Manual stockouts" },
    { title: "Payment Gateways", note: "Delayed reconciliation" },
    { title: "Accounting Software", note: "Spreadsheet chaos" },
    { title: "Customer Chat", note: "Scattered WhatsApp msgs" },
    { title: "Marketing Tools", note: "Unsynced customer lists" },
    { title: "Analytics Reports", note: "Guessing profit margins" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F8FC] border-b border-gray-200/80 relative">
      <Container>
        <SectionHeader
          badge="The Fragmentation Problem"
          title="Running a business shouldn't mean juggling 10 different tools."
          subtitle="Most African merchants spend more time copying data between different apps, spreadsheets, and POS machines than serving customers and growing revenue."
        />

        {/* Visual Transformation: Disconnected Chaos -> Evarpex Harmony */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Disconnected Chaos */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-2 text-red-600 font-bold text-sm mb-4">
              <XCircle className="w-5 h-5" />
              <span>Without Evarpex: Fragmented Stack</span>
            </div>

            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Multiple subscriptions, broken synchronizations, manual stock counts, and reconciliation headaches every evening.
            </p>

            <div className="grid grid-cols-2 gap-2.5">
              {tools.map((t, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl border border-dashed border-gray-300 bg-gray-50/70"
                >
                  <div className="text-xs font-bold text-gray-700 truncate">
                    {t.title}
                  </div>
                  <div className="text-[10px] text-red-500 font-mono mt-0.5">
                    ✕ {t.note}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-center text-xs font-bold text-red-600 bg-red-50/60 p-2.5 rounded-xl">
              High costs • Lost inventory • Slow checkout
            </div>
          </div>

          {/* Center Connector Indicator */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-evarpex-orange text-white flex items-center justify-center shadow-glow mb-2 font-black">
              <ArrowRight className="w-6 h-6 rotate-90 lg:rotate-0" />
            </div>
            <span className="text-xs font-bold text-evarpex-navy uppercase tracking-wider">
              The Evolution
            </span>
          </div>

          {/* Right Column: With Evarpex Connected System */}
          <div className="lg:col-span-5 bg-[#020B36] text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-[#0D1B54] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-evarpex-orange/15 rounded-bl-full blur-xl pointer-events-none" />

            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-3">
              <CheckCircle2 className="w-5 h-5" />
              <span>With EVARPEX: One Connected OS</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
              One platform. One business view. Less complexity.
            </h3>

            <p className="text-xs text-gray-300 mt-2 leading-relaxed">
              Every sale in-store instantly syncs with your online catalog, adjusts your central inventory, records customer history, credits your wallet, and updates your financial analytics.
            </p>

            <div className="mt-6 space-y-3 text-xs">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#07133F] border border-[#16276E]">
                <div className="w-2 h-2 rounded-full bg-evarpex-orange" />
                <span className="font-semibold text-white">Unified In-Store & Online Inventory</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#07133F] border border-[#16276E]">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-semibold text-white">Instant Payment Settlement & Unified Wallet</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#07133F] border border-[#16276E]">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="font-semibold text-white">Built-in AI Assistant & Automated Marketing</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#16276E] flex items-center justify-between text-xs">
              <span className="text-gray-400">Save 15+ hours weekly</span>
              <span className="font-bold text-evarpex-orange">100% in sync</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
