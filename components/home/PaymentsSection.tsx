import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import {
  CreditCard,
  Building2,
  QrCode,
  Smartphone,
  Link as LinkIcon,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Wallet,
  ArrowUpRight,
  Lock,
} from "lucide-react";

export function PaymentsSection() {
  const methods = [
    { title: "Debit & Credit Cards", desc: "Mastercard, Visa, Verve with 3D Secure OTP authentication", icon: <CreditCard className="w-5 h-5 text-evarpex-orange" /> },
    { title: "Instant Bank Transfer", desc: "Direct NIP transfer with automated order matching under 10 seconds", icon: <Building2 className="w-5 h-5 text-emerald-400" /> },
    { title: "Dynamic QR Payments", desc: "Scan to pay directly from mobile banking apps at checkout counters", icon: <QrCode className="w-5 h-5 text-blue-400" /> },
    { title: "USSD Banking Codes", desc: "Instant offline payments via GTB, Zenith, Access, and UBA USSD strings", icon: <Smartphone className="w-5 h-5 text-purple-400" /> },
    { title: "Dedicated Virtual Accounts", desc: "Unique account numbers assigned to each of your regular wholesale buyers", icon: <Wallet className="w-5 h-5 text-amber-400" /> },
    { title: "Sharable Payment Links", desc: "Send one-click payment links on WhatsApp, Instagram DMs, or SMS", icon: <LinkIcon className="w-5 h-5 text-pink-400" /> },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#020B36] text-white border-b border-[#0D1B54] relative overflow-hidden">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-orange-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        <SectionHeader
          theme="dark"
          badge="Unified Fintech Infrastructure"
          title="Get paid however your customers prefer."
          subtitle="Accept payments online and in-store while keeping your business finances directly connected to your inventory, customer records, and tax reports."
        />

        {/* Payment Rails Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {methods.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#07133F] border border-[#16276E] hover:border-evarpex-orange/60 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0D1B54] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {m.icon}
              </div>
              <h4 className="text-base font-bold text-white mb-1.5">{m.title}</h4>
              <p className="text-xs text-gray-300 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Live Transaction & Settlement Visual Card */}
        <div className="mt-14 max-w-4xl mx-auto bg-[#07133F] rounded-3xl p-6 sm:p-8 border border-[#16276E] shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Transaction Receipt Card */}
            <div className="w-full md:w-1/2 bg-[#020B36] rounded-2xl p-6 border border-[#16276E]">
              <div className="flex items-center justify-between pb-3 border-b border-[#16276E] text-xs">
                <span className="text-gray-400">TRANSACTION VOUCHER</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                  Successful
                </span>
              </div>

              <div className="my-5 text-center">
                <div className="text-xs text-gray-400">Payment Received</div>
                <div className="text-3xl sm:text-4xl font-black text-white mt-1 mb-1">
                  ₦85,000.00
                </div>
                <div className="text-xs text-gray-300 font-semibold">
                  Glow Skin Care • Ref: #TXN-90281
                </div>
              </div>

              <div className="space-y-2 text-xs pt-3 border-t border-[#16276E] text-gray-400">
                <div className="flex justify-between">
                  <span>Customer</span>
                  <span className="text-white font-medium">Sarah Williams</span>
                </div>
                <div className="flex justify-between">
                  <span>Channel</span>
                  <span className="text-white font-medium">Bank Transfer (Access Bank)</span>
                </div>
                <div className="flex justify-between">
                  <span>Settlement Route</span>
                  <span className="text-emerald-400 font-medium">Auto-Credited to Wallet</span>
                </div>
              </div>
            </div>

            {/* Supporting Pitch & Settlement Guarantee */}
            <div className="w-full md:w-1/2 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/15 text-evarpex-orange text-xs font-bold">
                <Lock className="w-3.5 h-3.5" />
                <span>Enterprise Grade Security</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                Zero manual reconciliation. Ever again.
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                When a customer pays via bank transfer, Evarpex matches the alert within seconds, marks the order as paid, deducts the stock, and issues an SMS receipt — so your sales staff never have to wait for bank screenshots.
              </p>

              <div className="p-3 rounded-xl bg-[#0D1B54] border border-[#16276E] text-xs text-gray-400">
                <strong className="text-gray-300">Regulatory Assurance:</strong> Payment services and settlement accounts are provided through licensed, regulated financial institutions and authorized payment switch partners.
              </div>

              <div className="pt-2">
                <Button
                  href="/product/payments"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Learn More About Payments
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
