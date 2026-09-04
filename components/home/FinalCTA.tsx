import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#020B36] text-white relative overflow-hidden">
      {/* Background glow and subtle mesh */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/15 blur-[120px] pointer-events-none rounded-full" />

      <Container size="narrow" className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-evarpex-orange animate-spin" />
          <span>Launch Your 14-Day Free Trial Today</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Ready to run your business better?
        </h2>

        <p className="mt-6 text-base sm:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
          Join thousands of ambitious African merchants using Evarpex to sell everywhere, automate operations, and get paid with zero complexity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button
            href="/pricing"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start Free Trial
          </Button>
          <Button
            href="/company/contact"
            variant="secondary"
            size="lg"
          >
            Book a Demo
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            No credit card required
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-500" />
          <span>Free phone setup onboarding</span>
        </div>
      </Container>
    </section>
  );
}
