"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Boxes,
  Users,
  Megaphone,
  Layers,
  BarChart3,
  CreditCard,
  Wallet,
  ShieldCheck,
  Receipt,
  Sparkles,
  Briefcase,
  Grid,
  Settings,
  HelpCircle,
  Search,
  Bell,
  MessageSquare,
  Gift,
  ChevronDown,
  TrendingUp,
  ArrowUpRight,
  Send,
  PlusCircle,
  FileText,
  Smartphone,
  CheckCircle2,
  RefreshCw,
  Clock,
  ArrowDownLeft,
  Share2,
} from "lucide-react";

export function HeroDashboardMockup() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const samplePrompts = [
    "What were my top selling products this month?",
    "Generate product description for a face serum",
    "Create a marketing post for my new product",
  ];

  const handleRunAi = (promptText: string) => {
    setAiPrompt(promptText);
    setIsTyping(true);
    setAiResponse(null);

    setTimeout(() => {
      setIsTyping(false);
      if (promptText.includes("top selling")) {
        setAiResponse(
          "Based on your sales data: 1. Glow Face Serum generated ₦245,000 (245 units). Friday was your highest volume day. Consider restocking 100 units before Tuesday."
        );
      } else if (promptText.includes("description")) {
        setAiResponse(
          "✨ Glow Face Serum (50ml): Infused with Vitamin C and organic African botanicals. Hydrates deep, evens tone, and leaves a radiant glass-skin glow. Price: ₦12,500."
        );
      } else {
        setAiResponse(
          "📱 'Get your glow back! 🌟 Our best-selling Glow Face Serum is back in stock at Glow Skin Care Lagos & Abuja stores. Order online at glowskincare.evarpex.store for same-day delivery! 🛍️'"
        );
      }
    }, 600);
  };

  return (
    <div className="relative w-full rounded-2xl lg:rounded-3xl border border-gray-200/80 bg-white shadow-card overflow-hidden text-gray-800 text-left select-none">
      {/* Browser Bar Frame */}
      <div className="bg-[#0D1537] px-4 py-3 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-gray-400 hidden sm:inline-block">
            https://app.evarpex.com/merchant/glow-skin-care
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Sync
          </span>
          <span className="hidden md:inline font-mono text-gray-500">v2.8.4</span>
        </div>
      </div>

      {/* Main Dashboard Workspace (Flex row on desktop) */}
      <div className="flex flex-col lg:flex-row min-h-[620px] bg-[#F7F8FC]">
        {/* Left Dark Sidebar (Faithful to Evarpex screenshot) */}
        <aside className="w-full lg:w-[240px] bg-[#020B36] text-gray-300 p-3 flex flex-col justify-between shrink-0 border-r border-[#0D1B54]">
          <div>
            {/* Evarpex Brand in Sidebar */}
            <div className="px-3 py-2 mb-3 flex items-center justify-between">
              <Image
                src="/images/evarpex-logo.png"
                alt="EVARPEX"
                width={130}
                height={26}
                className="h-6 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>

            {/* Merchant Selector */}
            <div className="bg-[#07133F] rounded-xl p-2.5 mb-4 border border-[#16276E] flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-xs shrink-0">
                  GS
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate flex items-center gap-1">
                    Glow Skin Care
                    <span className="text-[10px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-medium">
                      Verified
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono">
                    ID: EVX92831
                  </div>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
            </div>

            {/* Navigation Menu */}
            <div className="space-y-0.5 text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveNav("dashboard")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                  activeNav === "dashboard"
                    ? "bg-[#FF5A00] text-white font-bold shadow-sm"
                    : "hover:bg-[#07133F] text-gray-300"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveNav("orders")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                  activeNav === "orders"
                    ? "bg-[#FF5A00] text-white font-bold"
                    : "hover:bg-[#07133F] text-gray-300"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <ShoppingCart className="w-4 h-4" />
                  Orders
                </span>
                <span className="px-1.5 py-0.5 text-[10px] rounded-full bg-[#FF5A00]/40 text-orange-200 font-bold">
                  24
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveNav("products")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                  activeNav === "products"
                    ? "bg-[#FF5A00] text-white font-bold"
                    : "hover:bg-[#07133F] text-gray-300"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Package className="w-4 h-4" />
                  Products
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveNav("inventory")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                  activeNav === "inventory"
                    ? "bg-[#FF5A00] text-white font-bold"
                    : "hover:bg-[#07133F] text-gray-300"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Boxes className="w-4 h-4" />
                  Inventory
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveNav("customers")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                  activeNav === "customers"
                    ? "bg-[#FF5A00] text-white font-bold"
                    : "hover:bg-[#07133F] text-gray-300"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Users className="w-4 h-4" />
                  Customers
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveNav("payments")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                  activeNav === "payments"
                    ? "bg-[#FF5A00] text-white font-bold"
                    : "hover:bg-[#07133F] text-gray-300"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <CreditCard className="w-4 h-4" />
                  Payments
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveNav("ai")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                  activeNav === "ai"
                    ? "bg-[#FF5A00] text-white font-bold"
                    : "hover:bg-[#07133F] text-gray-300"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  AI Assistant
                </span>
                <span className="px-1.5 py-0.2 text-[10px] rounded bg-purple-500 text-white font-bold">
                  Beta
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveNav("pos")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                  activeNav === "pos"
                    ? "bg-[#FF5A00] text-white font-bold"
                    : "hover:bg-[#07133F] text-gray-300"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Receipt className="w-4 h-4" />
                  Smart POS
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Sidebar Plan Card */}
          <div className="mt-4 pt-3 border-t border-[#0D1B54] hidden sm:block">
            <div className="bg-[#07133F] p-3 rounded-xl border border-[#16276E]">
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-1">
                <span>👑</span> Current Plan: Business
              </div>
              <div className="text-[11px] text-gray-400 mb-2">
                Renewal: June 25, 2026
              </div>
              <button
                type="button"
                className="w-full py-1.5 rounded-lg bg-[#FF5A00] text-white font-bold text-xs hover:bg-[#E04F00] transition-colors"
              >
                Manage Subscription
              </button>
            </div>
          </div>
        </aside>

        {/* Dashboard Main Workspace Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Header Bar */}
          <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 max-w-md">
              <div className="relative w-full">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for anything... (Ctrl + K)"
                  readOnly
                  className="w-full pl-9 pr-4 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-600 focus:outline-none cursor-default"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#FF5A00] text-[#FF5A00] text-xs font-semibold hover:bg-orange-50"
              >
                <Gift className="w-3.5 h-3.5" />
                Refer & Earn
              </button>

              <div className="relative p-1.5 text-gray-500 hover:text-gray-700">
                <Bell className="w-4 h-4" />
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 text-white rounded-full text-[9px] flex items-center justify-center font-bold">
                  8
                </span>
              </div>

              <div className="relative p-1.5 text-gray-500 hover:text-gray-700">
                <MessageSquare className="w-4 h-4" />
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 text-white rounded-full text-[9px] flex items-center justify-center font-bold">
                  3
                </span>
              </div>

              <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
                <div className="w-7 h-7 rounded-full bg-orange-100 text-evarpex-orange font-bold text-xs flex items-center justify-center border border-orange-200">
                  GS
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-gray-900 leading-none">
                    Glow Skin Care
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Owner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Body Dashboard View */}
          <div className="p-4 sm:p-5 space-y-5 overflow-y-auto">
            {/* Welcome Greeting Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#020B36]">
                  Welcome back, Glow Skin Care! 👋
                </h3>
                <p className="text-xs text-gray-500">
                  Here's what's happening with your business today across Lagos & Abuja stores.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 shadow-sm">
                <span>May 19 – May 25, 2026</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </div>
            </div>

            {/* Top 5 Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {/* Card 1: Revenue */}
              <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-sm">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Total Revenue</span>
                  <div className="w-6 h-6 rounded-full bg-orange-50 text-[#FF5A00] flex items-center justify-center">
                    <Wallet className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-base sm:text-lg font-black text-gray-900">
                  ₦1,234,567.00
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+12.5% vs last week</span>
                </div>
                {/* SVG sparkline */}
                <svg className="w-full h-5 mt-2 stroke-evarpex-orange fill-none stroke-2" viewBox="0 0 100 20">
                  <path d="M0 15 Q 25 5, 50 12 T 100 2" />
                </svg>
              </div>

              {/* Card 2: Orders */}
              <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-sm">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Orders</span>
                  <div className="w-6 h-6 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                    <ShoppingCart className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-base sm:text-lg font-black text-gray-900">
                  325
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+8.1% vs last week</span>
                </div>
                <svg className="w-full h-5 mt-2 stroke-purple-600 fill-none stroke-2" viewBox="0 0 100 20">
                  <path d="M0 16 Q 30 14, 55 8 T 100 4" />
                </svg>
              </div>

              {/* Card 3: Customers */}
              <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-sm">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Customers</span>
                  <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-base sm:text-lg font-black text-gray-900">
                  1,248
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+15.7% vs last week</span>
                </div>
                <svg className="w-full h-5 mt-2 stroke-amber-600 fill-none stroke-2" viewBox="0 0 100 20">
                  <path d="M0 18 Q 35 15, 60 7 T 100 3" />
                </svg>
              </div>

              {/* Card 4: Conversion Rate */}
              <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-sm">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Conversion Rate</span>
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                    <BarChart3 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-base sm:text-lg font-black text-gray-900">
                  3.65%
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+6.4% vs last week</span>
                </div>
                <svg className="w-full h-5 mt-2 stroke-blue-600 fill-none stroke-2" viewBox="0 0 100 20">
                  <path d="M0 17 Q 30 11, 65 14 T 100 5" />
                </svg>
              </div>

              {/* Card 5: Wallet Balance */}
              <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-sm col-span-2 md:col-span-1">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Wallet Balance</span>
                  <div className="w-6 h-6 rounded-full bg-[#020B36] text-white flex items-center justify-center">
                    <CreditCard className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-base sm:text-lg font-black text-gray-900">
                  ₦456,789.00
                </div>
                <div className="text-[11px] text-gray-500 font-medium mt-1">
                  Available for payout
                </div>
                <div className="text-[11px] font-bold text-[#FF5A00] flex items-center gap-1 mt-2 cursor-pointer hover:underline">
                  <span>View Wallet</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Middle Row: Sales Chart + Top Products + Recent Orders */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Sales Overview Chart */}
              <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Sales Overview
                    </h4>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                      This Week
                    </span>
                  </div>
                  <div className="text-xl font-extrabold text-gray-900">
                    ₦1,234,567.00
                  </div>
                  <div className="text-xs text-emerald-600 font-semibold">
                    ↑ 12.5% vs previous cycle
                  </div>
                </div>

                {/* Visual Chart with Mon to Sun */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-end justify-between h-28 gap-2 pt-2 px-1">
                    {[
                      { day: "Mon", val: 35, label: "₦140k" },
                      { day: "Tue", val: 50, label: "₦200k" },
                      { day: "Wed", val: 42, label: "₦170k" },
                      { day: "Thu", val: 68, label: "₦270k" },
                      { day: "Fri", val: 95, label: "₦380k" },
                      { day: "Sat", val: 78, label: "₦310k" },
                      { day: "Sun", val: 45, label: "₦180k" },
                    ].map((bar) => (
                      <div key={bar.day} className="flex flex-col items-center flex-1 group">
                        <div
                          className={`w-full rounded-t transition-all ${
                            bar.day === "Fri"
                              ? "bg-[#FF5A00]"
                              : "bg-orange-100 group-hover:bg-[#FF5A00]/70"
                          }`}
                          style={{ height: `${bar.val}%` }}
                        />
                        <span className="text-[10px] text-gray-400 mt-1 font-mono">
                          {bar.day}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Selling Products */}
              <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Top Selling Products
                  </h4>
                  <span className="text-xs text-[#FF5A00] font-semibold cursor-pointer hover:underline">
                    View all
                  </span>
                </div>
                <div className="space-y-2.5 text-xs">
                  {[
                    { rank: 1, name: "Glow Face Serum", price: "₦245,000.00", units: "245 sold" },
                    { rank: 2, name: "Brightening Soap", price: "₦120,000.00", units: "189 sold" },
                    { rank: 3, name: "Moisturizing Cream", price: "₦98,000.00", units: "156 sold" },
                    { rank: 4, name: "Face Toner 100ml", price: "₦70,000.00", units: "120 sold" },
                    { rank: 5, name: "Hydrating Lip Balm", price: "₦45,000.00", units: "98 sold" },
                  ].map((prod) => (
                    <div
                      key={prod.rank}
                      className="flex items-center justify-between p-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-gray-100 font-bold text-gray-600 text-[10px] flex items-center justify-center">
                          {prod.rank}
                        </span>
                        <span className="font-semibold text-gray-800">{prod.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{prod.price}</div>
                        <div className="text-[10px] text-gray-400">{prod.units}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Recent Orders
                  </h4>
                  <span className="text-xs text-[#FF5A00] font-semibold cursor-pointer hover:underline">
                    View all
                  </span>
                </div>
                <div className="space-y-2.5 text-xs">
                  {[
                    { id: "#EVX-00325", customer: "Faith Okafor", status: "Paid", amount: "₦25,000.00", badge: "bg-emerald-50 text-emerald-700" },
                    { id: "#EVX-00324", customer: "Emeka John", status: "Processing", amount: "₦18,500.00", badge: "bg-amber-50 text-amber-700" },
                    { id: "#EVX-00323", customer: "Sarah Williams", status: "Shipped", amount: "₦45,000.00", badge: "bg-blue-50 text-blue-700" },
                    { id: "#EVX-00322", customer: "Daniel Adeyemi", status: "Processing", amount: "₦15,000.00", badge: "bg-amber-50 text-amber-700" },
                    { id: "#EVX-00321", customer: "Blessing Udo", status: "Delivered", amount: "₦30,000.00", badge: "bg-emerald-50 text-emerald-700" },
                  ].map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <div className="font-mono text-[11px] text-gray-500">{order.id}</div>
                        <div className="font-semibold text-gray-800">{order.customer}</div>
                      </div>
                      <div className="text-right">
                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${order.badge}`}>
                          {order.status}
                        </span>
                        <div className="font-bold text-gray-900 mt-0.5">{order.amount}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row: Finance Summary + Payment Breakdown + Interactive AI Assistant */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Finance & Wallet Summary */}
              <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Finance Summary
                    </h4>
                    <span className="text-xs text-[#FF5A00] font-semibold">View all</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="text-[11px] text-gray-500">Total Balance</div>
                      <div className="text-sm font-black text-gray-900 mt-0.5">
                        ₦456,789.00
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="text-[11px] text-gray-500">Hold / Escrow</div>
                      <div className="text-sm font-black text-amber-700 mt-0.5">
                        ₦120,000.00
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 pt-2 border-t border-gray-100 text-center">
                  <div className="p-1.5 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="w-7 h-7 mx-auto rounded-full bg-orange-50 text-evarpex-orange flex items-center justify-center mb-1">
                      <PlusCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-700">Add Money</span>
                  </div>
                  <div className="p-1.5 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="w-7 h-7 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1">
                      <RefreshCw className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-700">Transfer</span>
                  </div>
                  <div className="p-1.5 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="w-7 h-7 mx-auto rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-1">
                      <ArrowDownLeft className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-700">Withdraw</span>
                  </div>
                  <div className="p-1.5 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="w-7 h-7 mx-auto rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mb-1">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-700">History</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods Breakdown */}
              <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Payment Breakdown
                  </h4>
                  <span className="text-xs font-semibold text-gray-600">This Week</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                      <span className="text-gray-700">Card Payments (45%)</span>
                    </div>
                    <span className="font-bold text-gray-900">₦555,555.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                      <span className="text-gray-700">Bank Transfer (30%)</span>
                    </div>
                    <span className="font-bold text-gray-900">₦370,370.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                      <span className="text-gray-700">QR Payments (15%)</span>
                    </div>
                    <span className="font-bold text-gray-900">₦185,185.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="text-gray-700">USSD & Others (10%)</span>
                    </div>
                    <span className="font-bold text-gray-900">₦123,456.00</span>
                  </div>
                </div>
              </div>

              {/* Interactive AI Business Assistant (Faithful to screenshot) */}
              <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                        AI Business Assistant
                      </h4>
                      <span className="text-[10px] px-1 py-0.2 rounded bg-purple-100 text-purple-700 font-bold">
                        BETA
                      </span>
                    </div>
                    <span className="text-xs text-[#FF5A00] font-semibold">Explore</span>
                  </div>

                  {/* AI input area */}
                  <div className="relative mb-2.5">
                    <input
                      type="text"
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder="Ask anything about your business..."
                      className="w-full pl-3 pr-8 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    />
                    <button
                      type="button"
                      onClick={() => handleRunAi(aiPrompt || samplePrompts[0])}
                      className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 text-[#FF5A00] hover:text-[#E04F00]"
                      aria-label="Send AI Query"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* AI Response Output or Sample Prompts */}
                  {isTyping ? (
                    <div className="p-2.5 bg-purple-50/60 rounded-lg text-xs text-purple-800 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 animate-spin" />
                      <span>Evarpex AI is analyzing sales data...</span>
                    </div>
                  ) : aiResponse ? (
                    <div className="p-2.5 bg-purple-50/70 border border-purple-100 rounded-lg text-xs text-purple-900 leading-relaxed animate-in fade-in duration-200">
                      {aiResponse}
                    </div>
                  ) : (
                    <div>
                      <div className="text-[10px] text-gray-400 font-semibold uppercase mb-1.5">
                        Try asking:
                      </div>
                      <div className="space-y-1">
                        {samplePrompts.map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => handleRunAi(p)}
                            className="w-full text-left text-[11px] p-1.5 rounded bg-gray-50 hover:bg-purple-50 text-gray-700 hover:text-purple-700 transition-colors truncate"
                          >
                            ⚡ {p}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Quick Actions
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 text-center text-xs">
                {[
                  { label: "Add Product", icon: <Package className="w-4 h-4 text-orange-600" /> },
                  { label: "Create Order", icon: <ShoppingCart className="w-4 h-4 text-purple-600" /> },
                  { label: "Request Payment", icon: <Wallet className="w-4 h-4 text-blue-600" /> },
                  { label: "Payment Link", icon: <Share2 className="w-4 h-4 text-amber-600" /> },
                  { label: "Add Customer", icon: <Users className="w-4 h-4 text-emerald-600" /> },
                  { label: "Send Campaign", icon: <Megaphone className="w-4 h-4 text-indigo-600" /> },
                  { label: "Generate Invoice", icon: <FileText className="w-4 h-4 text-gray-600" /> },
                  { label: "Smart POS", icon: <Smartphone className="w-4 h-4 text-[#FF5A00]" /> },
                ].map((act) => (
                  <div
                    key={act.label}
                    className="p-2 rounded-lg border border-gray-100 hover:border-orange-200 hover:bg-orange-50/40 cursor-pointer transition-colors"
                  >
                    <div className="w-7 h-7 mx-auto rounded-lg bg-gray-50 flex items-center justify-center mb-1">
                      {act.icon}
                    </div>
                    <span className="text-[10px] font-semibold text-gray-700 block truncate">
                      {act.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Status Badges around Dashboard for SaaS Hero Impact */}
      <div className="hidden xl:block absolute -top-3 -right-3 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 animate-bounce duration-1000">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
            ✓
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900">Payment Received</div>
            <div className="text-xs text-emerald-600 font-extrabold">₦85,000.00</div>
          </div>
        </div>
      </div>

      <div className="hidden xl:block absolute bottom-6 -left-3 bg-[#020B36] text-white p-3 rounded-2xl shadow-2xl border border-[#0D1B54]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#FF5A00] text-white flex items-center justify-center font-black text-xs">
            ₦
          </div>
          <div>
            <div className="text-[10px] text-gray-400">Total Live Volume</div>
            <div className="text-xs font-black text-white">₦1,234,567 Today</div>
          </div>
        </div>
      </div>
    </div>
  );
}
