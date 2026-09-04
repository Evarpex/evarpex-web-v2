import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import {
  Users,
  MessageCircle,
  Mail,
  Award,
  ArrowRight,
  TrendingUp,
  Tag,
  Clock,
  Phone,
} from "lucide-react";

export function CRMSection() {
  const customers = [
    {
      name: "Faith Okafor",
      phone: "+234 803 ••• 8821",
      city: "Lagos (Lekki)",
      orders: 8,
      totalSpent: "₦142,500.00",
      segment: "VIP Loyal",
      badge: "bg-purple-50 text-purple-700",
      lastOrder: "2 days ago",
    },
    {
      name: "Sarah Williams",
      phone: "+234 812 ••• 4190",
      city: "Abuja (Wuse II)",
      orders: 5,
      totalSpent: "₦98,000.00",
      segment: "Repeat Buyer",
      badge: "bg-emerald-50 text-emerald-700",
      lastOrder: "May 22, 2026",
    },
    {
      name: "Emeka John",
      phone: "+234 809 ••• 1102",
      city: "Port Harcourt",
      orders: 2,
      totalSpent: "₦37,000.00",
      segment: "New Customer",
      badge: "bg-blue-50 text-blue-700",
      lastOrder: "Yesterday",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F8FC] border-b border-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual: Realistic CRM Profile Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-3xl border border-gray-200 bg-white p-5 sm:p-6 shadow-card">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-orange-50 text-evarpex-orange">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      Customer Profiles & Retention
                    </h4>
                    <span className="text-xs text-gray-400">1,248 Active Customer Accounts</span>
                  </div>
                </div>
                <button className="text-xs font-bold text-evarpex-orange hover:underline">
                  + Create Segment
                </button>
              </div>

              {/* Customer List */}
              <div className="space-y-3 mt-4">
                {customers.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl border border-gray-100 hover:border-gray-200 bg-gray-50/50 hover:bg-white transition-all text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-evarpex-navy text-white font-bold flex items-center justify-center text-xs">
                          {c.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm">{c.name}</div>
                          <div className="text-gray-400 text-[11px]">{c.city} • {c.phone}</div>
                        </div>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${c.badge}`}>
                        {c.segment}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-3 pt-2.5 border-t border-gray-100 text-[11px] text-gray-600">
                      <div>
                        <span className="text-gray-400 block text-[10px]">Total Orders:</span>
                        <strong className="text-gray-800">{c.orders} Orders</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px]">Lifetime Spend:</span>
                        <strong className="text-emerald-700 font-mono">{c.totalSpent}</strong>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-400 block text-[10px]">Last Purchased:</span>
                        <span className="text-gray-700">{c.lastOrder}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick WhatsApp/SMS broadcast trigger */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-500">Auto-synced from online & POS checkout</span>
                <span className="font-bold text-evarpex-orange cursor-pointer hover:underline flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5" /> Broadcast WhatsApp Offer
                </span>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader
              badge="Customer Retention"
              align="left"
              title="Turn one-time buyers into lifelong repeat customers."
              subtitle="Stop letting high-value customers slip away. Evarpex automatically captures phone numbers and emails at checkout, records their purchase preferences, and lets you re-engage them via WhatsApp and SMS."
            />

            <div className="space-y-3.5 text-xs text-gray-700">
              <div className="p-3 rounded-2xl bg-white border border-gray-200">
                <div className="font-bold text-sm text-gray-900 flex items-center gap-2 mb-1">
                  <Tag className="w-4 h-4 text-evarpex-orange" />
                  Intelligent Segmentation
                </div>
                <p className="text-gray-500">Filter VIP spenders, inactive customers who haven't bought in 45 days, and new first-time buyers with 1 click.</p>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-gray-200">
                <div className="font-bold text-sm text-gray-900 flex items-center gap-2 mb-1">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  WhatsApp & SMS Marketing
                </div>
                <p className="text-gray-500">Send personalized promotions, new arrival announcements, and birthday vouchers directly to Nigerian phone numbers.</p>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-gray-200">
                <div className="font-bold text-sm text-gray-900 flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-purple-600" />
                  Store Credit & Loyalty Points
                </div>
                <p className="text-gray-500">Reward repeat shoppers automatically with points redeemable in-store or online.</p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/product/crm"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore CRM Tools
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
