import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  ArrowRight,
  DollarSign,
  ShoppingCart,
  Users,
  Percent,
} from "lucide-react";

export function AnalyticsSection() {
  const metrics = [
    { label: "Total Revenue", val: "₦1,234,567.00", change: "+12.5%", icon: <DollarSign className="w-4 h-4 text-orange-500" /> },
    { label: "Gross Margin", val: "48.2%", change: "+3.1%", icon: <Percent className="w-4 h-4 text-emerald-600" /> },
    { label: "Total Orders", val: "325", change: "+8.1%", icon: <ShoppingCart className="w-4 h-4 text-purple-600" /> },
    { label: "Avg Order Value", val: "₦3,798.00", change: "+4.2%", icon: <TrendingUp className="w-4 h-4 text-blue-600" /> },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <Container>
        <SectionHeader
          badge="Executive Intelligence"
          title="Stop guessing. Start knowing."
          subtitle="See what is happening across your entire business in real time. Know your exact unit economics, gross margins, and customer cohort growth without touching complex spreadsheets."
        />

        {/* 4 Top KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#F7F8FC] border border-gray-200/80 shadow-xs"
            >
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>{m.label}</span>
                <div className="w-6 h-6 rounded-lg bg-white shadow-xs flex items-center justify-center">
                  {m.icon}
                </div>
              </div>
              <div className="text-lg sm:text-xl font-black text-gray-900">{m.val}</div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                {m.change} vs last cycle
              </div>
            </div>
          ))}
        </div>

        {/* Main Analytics Cockpit Preview */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Revenue Breakdown by Channel (8 cols) */}
          <div className="lg:col-span-8 p-6 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <h4 className="text-sm font-bold text-gray-900">Omnichannel Sales Trajectory</h4>
                <p className="text-xs text-gray-500">In-Store POS vs Online Store vs Instagram Direct</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700">
                Last 30 Days
              </span>
            </div>

            {/* Visual Bar Graphs with Nigeria Context */}
            <div className="my-6 space-y-4 text-xs">
              <div>
                <div className="flex justify-between mb-1 text-gray-700 font-semibold">
                  <span>Online Store Checkout (glowskincare.ng)</span>
                  <span className="font-mono text-evarpex-navy">₦645,000.00 (52%)</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-evarpex-orange rounded-full" style={{ width: "52%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-gray-700 font-semibold">
                  <span>POS In-Store Walk-ins (Lagos & Abuja)</span>
                  <span className="font-mono text-evarpex-navy">₦465,000.00 (38%)</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: "38%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-gray-700 font-semibold">
                  <span>Direct WhatsApp & Instagram Payment Links</span>
                  <span className="font-mono text-evarpex-navy">₦124,567.00 (10%)</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "10%" }} />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>Updated in real time with every transaction</span>
              <span className="font-bold text-evarpex-orange hover:underline cursor-pointer">
                Download Profit & Loss PDF →
              </span>
            </div>
          </div>

          {/* Payment Method Distribution (4 cols) */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-[#020B36] text-white border border-[#0D1B54] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#16276E] mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Settlement Mix
                </h4>
                <PieChart className="w-4 h-4 text-evarpex-orange" />
              </div>

              <div className="text-center my-4">
                <div className="text-xs text-gray-400">Total Volume Processed</div>
                <div className="text-2xl font-black text-white mt-0.5">₦1,234,567</div>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between items-center p-2 rounded-lg bg-[#07133F]">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                    Debit Cards
                  </span>
                  <span className="font-mono font-bold text-white">45%</span>
                </div>

                <div className="flex justify-between items-center p-2 rounded-lg bg-[#07133F]">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    Direct Bank Transfer
                  </span>
                  <span className="font-mono font-bold text-white">30%</span>
                </div>

                <div className="flex justify-between items-center p-2 rounded-lg bg-[#07133F]">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    QR Payments
                  </span>
                  <span className="font-mono font-bold text-white">15%</span>
                </div>

                <div className="flex justify-between items-center p-2 rounded-lg bg-[#07133F]">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    USSD & Cash
                  </span>
                  <span className="font-mono font-bold text-white">10%</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#16276E] text-center">
              <Button
                href="/product/analytics"
                variant="primary"
                size="sm"
                fullWidth
              >
                Explore Analytics Suite
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
