import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  RefreshCw,
  Clock,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
} from "lucide-react";

export function WalletSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F8FC] border-b border-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader
              badge="Merchant Wallet"
              align="left"
              title="Keep your business money organized."
              subtitle="Separate your personal finances from your store revenue. The Evarpex Merchant Wallet aggregates all payments, holds escrow securely, and gives you instant payouts to any commercial bank in Nigeria."
            />

            <div className="space-y-3 text-xs text-gray-700">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                  <ArrowDownLeft className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Automated Settlements</div>
                  <p className="text-gray-500">Scheduled payouts to Zenith, GTB, Access, or Moniepoint accounts on your terms.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Escrow Buyer Protection</div>
                  <p className="text-gray-500">Build trust with hesitant first-time buyers with verifiable milestone release.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold shrink-0">
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Tax & Accounting Ready</div>
                  <p className="text-gray-500">Download clean monthly bank statement reconciliations ready for your accountant.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/pricing"
                variant="primary"
                size="md"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Open Merchant Account
              </Button>
            </div>
          </div>

          {/* Right Wallet Interface Visual */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-card">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#020B36] text-white flex items-center justify-center">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Evarpex Merchant Wallet</h4>
                    <span className="text-xs text-gray-400">Merchant: Glow Skin Care (EVX92831)</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                  Verified Tier 3
                </span>
              </div>

              {/* Balances Display */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
                <div className="p-4 rounded-2xl bg-[#020B36] text-white">
                  <div className="text-xs text-gray-300">Available Balance</div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-1">
                    ₦456,789.00
                  </div>
                  <div className="text-[10px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Ready for payout
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100">
                  <div className="text-xs text-gray-600">Today's Collections</div>
                  <div className="text-xl sm:text-2xl font-black text-evarpex-navy mt-1">
                    ₦128,500.00
                  </div>
                  <div className="text-[10px] text-gray-500 mt-1">
                    18 transactions today
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="text-xs text-gray-600">Pending Settlement</div>
                  <div className="text-xl sm:text-2xl font-black text-amber-700 mt-1">
                    ₦45,000.00
                  </div>
                  <div className="text-[10px] text-gray-500 mt-1">
                    Settles tomorrow at 9 AM
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100 text-center">
                <button className="py-2.5 rounded-xl bg-evarpex-orange text-white text-xs font-bold hover:bg-evarpex-orange-hover transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                  <ArrowDownLeft className="w-4 h-4" /> Withdraw Funds
                </button>
                <button className="py-2.5 rounded-xl bg-gray-100 text-gray-800 text-xs font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-1.5">
                  <RefreshCw className="w-4 h-4" /> Transfer
                </button>
                <button className="py-2.5 rounded-xl bg-gray-100 text-gray-800 text-xs font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-1.5">
                  <Clock className="w-4 h-4" /> Audit History
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
