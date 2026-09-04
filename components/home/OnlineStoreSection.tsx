import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import {
  Smartphone,
  Globe,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Zap,
  CreditCard,
  Heart,
  Check,
} from "lucide-react";

export function OnlineStoreSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F8FC] border-b border-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Value Prop */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              badge="No-Code Storefront"
              align="left"
              title="Launch your online store in minutes."
              subtitle="Build a high-converting storefront with zero coding. Designed to load fast even on 3G connections, collect payments with cards or bank transfer, and sync orders directly with your inventory."
            />

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-gray-200/80">
                <div className="font-bold text-sm text-gray-900 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-evarpex-orange" />
                  Custom Domain
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Connect your own `.com` or `.ng` domain or use free `brand.evarpex.store`.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-gray-200/80">
                <div className="font-bold text-sm text-gray-900 flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-evarpex-orange" />
                  Mobile-First Design
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Optimized for 90%+ of African customers shopping directly via mobile.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-gray-200/80">
                <div className="font-bold text-sm text-gray-900 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-evarpex-orange" />
                  Fast Checkout
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  1-click payment with debit cards, Paystack, bank transfer, and USSD.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-gray-200/80">
                <div className="font-bold text-sm text-gray-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-evarpex-orange" />
                  Variants & Discounts
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Easily manage sizes, colors, coupon codes, and bundle promotions.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/product/online-store"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Create Your Store
              </Button>
            </div>
          </div>

          {/* Right Visual: Desktop Browser Mockup + Mobile Phone Mockup Overlay */}
          <div className="lg:col-span-6 relative">
            {/* Desktop Storefront Frame */}
            <div className="rounded-3xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              <div className="bg-gray-100 px-4 py-2.5 flex items-center justify-between border-b border-gray-200">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-mono text-gray-600">
                    https://glowskincare.ng
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 font-medium">SSL Encrypted</span>
              </div>

              {/* Storefront Hero View */}
              <div className="p-5 bg-gradient-to-b from-orange-50/50 to-white">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="font-black text-base text-gray-900 tracking-tight">
                    GLOW SKIN CARE
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <span>Shop All</span>
                    <span>Best Sellers</span>
                    <div className="w-7 h-7 rounded-full bg-orange-100 text-evarpex-orange flex items-center justify-center font-bold">
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-orange-100/50 border border-orange-200/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-evarpex-orange uppercase tracking-wider">
                      Organic Beauty Essentials
                    </span>
                    <h4 className="text-base font-extrabold text-gray-900 mt-0.5">
                      Radiant Glow Serum & Botanicals
                    </h4>
                    <span className="text-xs text-gray-600">Nationwide delivery from Lagos</span>
                  </div>
                  <button className="px-3 py-1.5 rounded-xl bg-evarpex-orange text-white text-xs font-bold shadow-sm">
                    Shop Now
                  </button>
                </div>

                {/* Product Grid Mock */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="p-2.5 rounded-xl bg-white border border-gray-100 shadow-xs">
                    <div className="h-20 bg-orange-50 rounded-lg flex items-center justify-center text-xs font-bold text-orange-400">
                      Glow Face Serum (50ml)
                    </div>
                    <div className="mt-2 text-xs font-bold text-gray-900">
                      ₦12,500.00
                    </div>
                    <button className="w-full mt-1.5 py-1 text-[11px] rounded bg-gray-900 text-white font-semibold">
                      Add to Cart
                    </button>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-gray-100 shadow-xs">
                    <div className="h-20 bg-amber-50 rounded-lg flex items-center justify-center text-xs font-bold text-amber-500">
                      Brightening Herbal Bar
                    </div>
                    <div className="mt-2 text-xs font-bold text-gray-900">
                      ₦4,500.00
                    </div>
                    <button className="w-full mt-1.5 py-1 text-[11px] rounded bg-gray-900 text-white font-semibold">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Device Mockup Floating Overlay */}
            <div className="hidden sm:block absolute -bottom-8 -right-4 w-[210px] bg-gray-900 p-2.5 rounded-[28px] shadow-2xl border-4 border-gray-800">
              <div className="w-16 h-3.5 bg-gray-800 rounded-full mx-auto mb-2" />
              <div className="bg-white rounded-[20px] p-2.5 text-xs text-left">
                <div className="text-[10px] font-bold text-gray-400">Instant Checkout</div>
                <div className="text-xs font-black text-gray-900 mt-0.5">₦17,000 Total</div>
                <div className="mt-2 p-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-[10px] font-semibold flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  Bank Transfer Auto-Verified
                </div>
                <div className="mt-2 text-center text-[10px] font-bold py-1 bg-evarpex-orange text-white rounded-lg">
                  Order #EVX-0325 Placed
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
