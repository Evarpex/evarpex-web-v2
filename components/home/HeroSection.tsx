"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { HeroDashboardMockup } from "../mockups/HeroDashboardMockup";
import { ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  const rotatingWords = [
    "inventory",
    "in-store POS",
    "payment",
    "multi-store",
    "order & customer",
    "business operations",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentWord.substring(0, displayText.length - 1)
            : currentWord.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#F7F8FC] via-white to-white">
      {/* Subtle tech background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Ambient background glow accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-orange-200/20 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-blue-200/15 blur-[100px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Bumpa-style Top Report Badge / Ribbon */}
          <div className="inline-flex items-center">
            <Link
              href="/resources/guides"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-700 shadow-subtle hover:border-evarpex-orange transition-colors group"
            >
              <span className="w-5 h-5 rounded-full bg-orange-100 text-evarpex-orange flex items-center justify-center text-[10px]">
                ⚡
              </span>
              <span className="text-gray-900 font-semibold">2026 African Commerce Report</span>
              <span className="text-gray-400">•</span>
              <span className="text-evarpex-orange font-bold flex items-center gap-1">
                Read Insights <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Bumpa-style Dynamic Rotating Typewriter Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-evarpex-navy leading-[1.12]">
            Solving your{" "}
            <span className="inline-block min-w-[200px] sm:min-w-[280px] text-evarpex-orange border-b-4 border-evarpex-orange/40 pb-0.5">
              {displayText}
              <span className="animate-pulse ml-0.5 font-normal text-evarpex-orange">|</span>
            </span>{" "}
            management problems, one solution at a time.
          </h1>

          {/* Supporting Pitch */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Simplify your business operations with tools that make inventory, online & in-store sales, instant payments, and customer management effortless across Africa.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Button
              href="/pricing"
              variant="primary"
              size="lg"
              className="shadow-glow px-8 py-3.5 font-bold"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get Started Free
            </Button>
            <Button
              href="/company/contact"
              variant="secondary"
              size="lg"
              className="px-8 py-3.5 font-bold"
            >
              Book a Live Demo
            </Button>
          </div>

          {/* Trust Guarantees under CTA */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-gray-500 pt-2 font-medium">
            <span className="flex items-center gap-1.5 font-semibold text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              No credit card required
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:inline-block" />
            <span className="flex items-center gap-1.5 font-semibold text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              14-day free trial
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:inline-block" />
            <span className="flex items-center gap-1.5 font-semibold text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Setup in under 5 minutes
            </span>
          </div>
        </div>

        {/* Dashboard Visual Composition */}
        <div className="mt-12 lg:mt-16 max-w-6xl mx-auto">
          <HeroDashboardMockup />
        </div>
      </Container>
    </section>
  );
}
