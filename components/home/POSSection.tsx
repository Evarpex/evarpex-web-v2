import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import {
  Smartphone,
  Receipt,
  Search,
  Scan,
  CreditCard,
  Banknote,
  Users,
  WifiOff,
  ArrowRight,
  Printer,
} from "lucide-react";

export function POSSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F8FC] border-b border-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader
              badge="Next-Gen In-Store Retail"
              align="left"
              title="Turn any store into a smart store."
              subtitle="Modernize your retail counters with a blazing-fast Point of Sale designed for African retail reality: works offline, handles cash & bank transfer splits, and issues digital receipts."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-white border border-gray-200">
                <div className="font-bold text-gray-900 flex items-center gap-1.5 mb-1">
                  <WifiOff className="w-4 h-4 text-evarpex-orange" />
                  Offline-Ready Mode
                </div>
                <p className="text-gray-500">Keep ringing sales even when internet fluctuates; auto-syncs when online.</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-gray-200">
                <div className="font-bold text-gray-900 flex items-center gap-1.5 mb-1">
                  <Banknote className="w-4 h-4 text-emerald-600" />
                  Split Payment Support
                </div>
                <p className="text-gray-500">Accept 50% Cash + 50% Bank Transfer on a single ticket easily.</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-gray-200">
                <div className="font-bold text-gray-900 flex items-center gap-1.5 mb-1">
                  <Printer className="w-4 h-4 text-blue-600" />
                  Digital & Paper Receipts
                </div>
                <p className="text-gray-500">Print thermal receipts or send SMS/WhatsApp e-receipts instantly.</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-gray-200">
                <div className="font-bold text-gray-900 flex items-center gap-1.5 mb-1">
                  <Users className="w-4 h-4 text-purple-600" />
                  Cashier Accountability
                </div>
                <p className="text-gray-500">Individual staff logins track cash drawers, discounts, and shifts.</p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/product/pos"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore POS Hardware & App
              </Button>
            </div>
          </div>

          {/* Right POS Tablet Interface Visual */}
          <div className="lg:col-span-7">
            <div className="bg-[#020B36] rounded-3xl p-4 sm:p-6 shadow-2xl border border-[#0D1B54] text-white">
              {/* POS Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#16276E] mb-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold">EVARPEX POS • Register #1 (Abuja Mall)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 font-mono">
                  <span>Cashier: Amaka O.</span>
                  <span className="px-2 py-0.5 rounded bg-[#07133F] text-gray-300 font-semibold">
                    Shift Active
                  </span>
                </div>
              </div>

              {/* POS Split View: Product Grid + Active Ticket */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Product Quick-Select (8 cols) */}
                <div className="md:col-span-7 space-y-3">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Scan barcode or search product..."
                      readOnly
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#07133F] border border-[#16276E] text-xs text-gray-300 placeholder-gray-400 cursor-default"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { name: "Glow Face Serum", price: "₦12,500", stock: "142 left" },
                      { name: "Brightening Soap Bar", price: "₦4,500", stock: "18 left" },
                      { name: "Moisturizing Cream", price: "₦9,800", stock: "85 left" },
                      { name: "Face Toner 100ml", price: "₦7,000", stock: "6 left" },
                      { name: "Hydrating Lip Balm", price: "₦2,500", stock: "210 left" },
                      { name: "Exfoliating Scrub", price: "₦8,200", stock: "34 left" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-[#07133F] border border-[#16276E] hover:border-evarpex-orange transition-colors cursor-pointer"
                      >
                        <div className="font-bold text-white truncate">{item.name}</div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-evarpex-orange font-bold">{item.price}</span>
                          <span className="text-[10px] text-gray-400">{item.stock}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Checkout Ticket (5 cols) */}
                <div className="md:col-span-5 bg-[#07133F] rounded-2xl p-4 border border-[#16276E] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-[#16276E] text-xs font-bold text-gray-300">
                      <span>Order Ticket #325</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/20 text-evarpex-orange">
                        In-Store Walk-in
                      </span>
                    </div>

                    <div className="space-y-2 my-3 text-xs">
                      <div className="flex justify-between">
                        <span>1x Glow Face Serum</span>
                        <span className="font-mono text-white">₦12,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1x Brightening Soap</span>
                        <span className="font-mono text-white">₦4,500</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#16276E] space-y-2 text-xs">
                    <div className="flex justify-between text-gray-400">
                      <span>Subtotal</span>
                      <span className="font-mono text-white">₦17,000.00</span>
                    </div>
                    <div className="flex justify-between font-black text-sm text-white">
                      <span>Total Due</span>
                      <span className="text-emerald-400 font-mono text-base">₦17,000.00</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button className="py-2 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700">
                        Cash
                      </button>
                      <button className="py-2 rounded-lg bg-evarpex-orange text-white font-bold text-xs hover:bg-evarpex-orange-hover">
                        Card / Transfer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
