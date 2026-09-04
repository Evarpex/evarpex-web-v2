"use client";

import React, { useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import {
  Sparkles,
  Send,
  Bot,
  User,
  ArrowRight,
  TrendingUp,
  FileText,
  Megaphone,
  Boxes,
  HelpCircle,
} from "lucide-react";

export function AIAssistantSection() {
  const [activeQuery, setActiveQuery] = useState(
    "What were my best-selling products this month?"
  );
  const [isAnswering, setIsAnswering] = useState(false);
  const [answer, setAnswer] = useState(
    "Based on verified checkout data for this cycle: 1. Glow Face Serum generated ₦245,000 (245 units sold). 2. Brightening Soap generated ₦120,000 (189 units). Sales in Abuja grew 24% following your weekend Instagram promotion."
  );

  const queries = [
    {
      q: "What were my best-selling products this month?",
      resp: "Based on verified checkout data for this cycle: 1. Glow Face Serum generated ₦245,000 (245 units sold). 2. Brightening Soap generated ₦120,000 (189 units). Sales in Abuja grew 24% following your weekend Instagram promotion.",
    },
    {
      q: "Which products are running low in stock?",
      resp: "Warning: Rosewater Face Toner (6 units left in Port Harcourt) and Brightening Soap (18 units left in Abuja) are below safe thresholds. Would you like to create a purchase transfer from your Lagos warehouse?",
    },
    {
      q: "Write a high-converting product description for a face serum.",
      resp: "✨ Glow Face Serum (50ml): Formulated for rich African melanin skin. Contains 15% Vitamin C and hyaluronic hydration. Non-greasy, fast-absorbing, and restores an effortless glass-skin glow. Retail Price: ₦12,500.",
    },
    {
      q: "Create a marketing campaign for my repeat customers.",
      resp: "Campaign Draft (SMS & WhatsApp): 'Hey [First_Name]! We noticed you love our skincare line. Here is an exclusive 10% loyalty discount code: VIPGLOW on your next order at glowskincare.ng today! ✨'",
    },
    {
      q: "Show me my most profitable products.",
      resp: "Net Profit Margin analysis: Hydrating Lip Balm has the highest margin at 68% (Unit cost: ₦800, Selling price: ₦2,500), followed by Glow Face Serum at 54% (Unit cost: ₦5,750, Selling price: ₦12,500).",
    },
  ];

  const handleSelectQuery = (item: (typeof queries)[0]) => {
    setActiveQuery(item.q);
    setIsAnswering(true);
    setTimeout(() => {
      setAnswer(item.resp);
      setIsAnswering(false);
    }, 400);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#020B36] text-white border-b border-[#0D1B54] relative overflow-hidden">
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-orange-600/10 blur-[130px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        <SectionHeader
          theme="dark"
          badge="Artificial Intelligence for Retail"
          title="Your AI business assistant."
          subtitle="Ask questions about your revenue numbers, draft product copy in seconds, predict stock demand, and make smarter decisions with AI trained on real commerce operations."
        />

        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Queries Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Select a real business prompt:
            </div>
            {queries.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectQuery(item)}
                className={`w-full text-left p-3 rounded-2xl border text-xs transition-all flex items-center justify-between ${
                  activeQuery === item.q
                    ? "bg-purple-950/60 border-purple-500 text-white font-bold shadow-lg"
                    : "bg-[#07133F] border-[#16276E] text-gray-300 hover:border-purple-400/50 hover:text-white"
                }`}
              >
                <span className="truncate pr-2">💬 "{item.q}"</span>
                <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              </button>
            ))}

            <div className="pt-4">
              <Button
                href="/product/ai"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Full AI Suite
              </Button>
            </div>
          </div>

          {/* Right Live AI Assistant Terminal Mockup */}
          <div className="lg:col-span-7 bg-[#07133F] rounded-3xl p-6 border border-[#16276E] shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#16276E] mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-600/30 text-purple-300 flex items-center justify-center font-bold">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    Evarpex AI Business Copilot
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-500 text-white font-bold">
                      PRO
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-400">Context: Glow Skin Care (All Locations)</div>
                </div>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Chat Thread */}
            <div className="space-y-4 min-h-[220px]">
              {/* User message */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-[#FF5A00] text-white p-3 rounded-2xl rounded-tr-xs text-xs font-semibold max-w-[80%] shadow-sm">
                  {activeQuery}
                </div>
                <div className="w-7 h-7 rounded-full bg-orange-100 text-evarpex-navy flex items-center justify-center font-bold text-xs shrink-0">
                  GS
                </div>
              </div>

              {/* Bot response */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="bg-[#020B36] border border-[#16276E] text-purple-100 p-4 rounded-2xl rounded-tl-xs text-xs leading-relaxed max-w-[90%] shadow-sm">
                  {isAnswering ? (
                    <div className="flex items-center gap-2 text-purple-300">
                      <Sparkles className="w-4 h-4 animate-spin text-purple-400" />
                      <span>Analyzing sales transactions and store margins...</span>
                    </div>
                  ) : (
                    <div>
                      <p>{answer}</p>
                      <div className="mt-3 pt-2 border-t border-[#16276E] flex items-center gap-2 text-[10px] text-gray-400">
                        <span>⚡ Generated from live SQL ledger in 0.4s</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Prompt input field */}
            <div className="mt-5 pt-3 border-t border-[#16276E] flex items-center gap-2">
              <input
                type="text"
                value={activeQuery}
                readOnly
                className="flex-1 bg-[#020B36] border border-[#16276E] rounded-xl px-3 py-2 text-xs text-gray-300 focus:outline-none cursor-default"
              />
              <button
                type="button"
                className="p-2.5 rounded-xl bg-evarpex-orange text-white hover:bg-evarpex-orange-hover transition-colors"
                aria-label="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
