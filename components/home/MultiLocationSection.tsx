import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import {
  Building2,
  MapPin,
  TrendingUp,
  ArrowRight,
  Boxes,
  Users,
  GitBranch,
} from "lucide-react";

export function MultiLocationSection() {
  const branches = [
    { city: "Lagos Hub", area: "Victoria Island & Ikeja", revenue: "₦720,000.00", orders: 182, staff: 6, status: "Open" },
    { city: "Abuja Store", area: "Wuse II & Garki", revenue: "₦514,567.00", orders: 143, staff: 4, status: "Open" },
    { city: "Port Harcourt", area: "GRA Phase 2", revenue: "₦310,200.00", orders: 78, staff: 3, status: "Open" },
    { city: "Kano Distribution", area: "Bompai Industrial", revenue: "₦280,000.00", orders: 64, staff: 3, status: "Open" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader
              badge="Multi-Branch Scalability"
              align="left"
              title="One business. Every location."
              subtitle="Stop having blind spots in your branch stores. Manage multiple shops, warehouses, and regional managers from a single HQ dashboard."
            />

            <div className="space-y-3 text-xs text-gray-700">
              <div className="p-3 rounded-2xl bg-[#F7F8FC] border border-gray-200">
                <div className="font-bold text-gray-900 text-sm flex items-center gap-2 mb-1">
                  <Boxes className="w-4 h-4 text-evarpex-orange" />
                  Inter-Branch Stock Movement
                </div>
                <p className="text-gray-500">Transfer stock from central warehouse in Lagos to retail shelves in Abuja with instant digital waybills.</p>
              </div>

              <div className="p-3 rounded-2xl bg-[#F7F8FC] border border-gray-200">
                <div className="font-bold text-gray-900 text-sm flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  Per-Location P&L Comparison
                </div>
                <p className="text-gray-500">Compare profit margins, sales velocity, and cashier performance across branches in real time.</p>
              </div>

              <div className="p-3 rounded-2xl bg-[#F7F8FC] border border-gray-200">
                <div className="font-bold text-gray-900 text-sm flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-purple-600" />
                  Branch-Specific Staff Logins
                </div>
                <p className="text-gray-500">Restrict branch cashiers to only view their local store register while HQ sees everything.</p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/product/business-management"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Enterprise Controls
              </Button>
            </div>
          </div>

          {/* Right Visual Architecture */}
          <div className="lg:col-span-7">
            <div className="bg-[#020B36] rounded-3xl p-6 sm:p-8 text-white border border-[#0D1B54] shadow-2xl">
              {/* HQ Node */}
              <div className="p-4 rounded-2xl bg-[#07133F] border border-[#16276E] flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-evarpex-orange text-white flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-evarpex-orange font-bold uppercase tracking-wider">
                      Executive Command
                    </div>
                    <div className="text-base font-extrabold text-white">
                      Evarpex Central HQ • Consolidated
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400">Total Live Network</span>
                  <div className="text-sm sm:text-base font-black text-emerald-400 font-mono">
                    ₦1,824,767.00
                  </div>
                </div>
              </div>

              {/* Branch Network Hierarchy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {branches.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#07133F] border border-[#16276E] hover:border-evarpex-orange/40 transition-colors"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-[#16276E] mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-evarpex-orange" />
                        <span className="text-xs font-bold text-white">{b.city}</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-medium">
                        {b.status}
                      </span>
                    </div>

                    <div className="text-[11px] text-gray-400 mb-2 truncate">
                      {b.area}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-gray-400">{b.orders} Orders • {b.staff} Staff</span>
                      <strong className="font-mono text-white">{b.revenue}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
