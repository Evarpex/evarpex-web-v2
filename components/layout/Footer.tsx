import React from "react";
import Link from "next/link";
import { EvarpexLogo } from "../brand/EvarpexLogo";
import {
  Globe,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-evarpex-navy text-gray-300 border-t border-evarpex-navy-border/40 selection:bg-evarpex-orange selection:text-white">
      {/* Top Banner / Trust Guarantee Bar */}
      <div className="border-b border-evarpex-navy-border/40 py-8 bg-evarpex-navy-surface/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-evarpex-orange shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white">Bank-Grade Security</div>
                <div className="text-gray-400 text-xs">256-bit encryption & fraud detection</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white">99.9% Uptime Guarantee</div>
                <div className="text-gray-400 text-xs">High-availability cloud operations</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white">Built for Africa</div>
                <div className="text-gray-400 text-xs">Offline-ready POS & local rails</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white">Licensed Partners</div>
                <div className="text-gray-400 text-xs">Regulated payment settlement</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Column 1: Brand & Mission */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-5">
            <EvarpexLogo variant="dark" size="lg" />
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              The Commerce, AI & Financial Operating System for African Businesses.
              Sell anywhere, manage inventory, accept payments, and scale operations from one unified platform.
            </p>

            <div className="pt-2">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Corporate Headquarters
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Central Business District & Wuse II, Abuja, Federal Capital Territory, Nigeria.
              </p>
              <p className="text-[11px] text-gray-500 mt-1">
                Powering retail stores, supermarkets & distributors across Nigeria and West Africa.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Evarpex on X"
                className="w-8 h-8 rounded-lg bg-evarpex-navy-surface hover:bg-evarpex-orange transition-colors flex items-center justify-center text-gray-300 hover:text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with Evarpex on LinkedIn"
                className="w-8 h-8 rounded-lg bg-evarpex-navy-surface hover:bg-evarpex-orange transition-colors flex items-center justify-center text-gray-300 hover:text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.66-.74 1.66-1.66 0-.91-.74-1.66-1.66-1.66-.92 0-1.66.75-1.66 1.66 0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Evarpex on Instagram"
                className="w-8 h-8 rounded-lg bg-evarpex-navy-surface hover:bg-evarpex-orange transition-colors flex items-center justify-center text-gray-300 hover:text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with Evarpex on Facebook"
                className="w-8 h-8 rounded-lg bg-evarpex-navy-surface hover:bg-evarpex-orange transition-colors flex items-center justify-center text-gray-300 hover:text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide uppercase mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/product/business-management" className="text-gray-400 hover:text-white transition-colors">
                  Business Operations
                </Link>
              </li>
              <li>
                <Link href="/product/online-store" className="text-gray-400 hover:text-white transition-colors">
                  Online Store Builder
                </Link>
              </li>
              <li>
                <Link href="/product/pos" className="text-gray-400 hover:text-white transition-colors">
                  Point of Sale (POS)
                </Link>
              </li>
              <li>
                <Link href="/product/payments" className="text-gray-400 hover:text-white transition-colors">
                  Payments & Checkout
                </Link>
              </li>
              <li>
                <Link href="/product/inventory" className="text-gray-400 hover:text-white transition-colors">
                  Inventory & Stock
                </Link>
              </li>
              <li>
                <Link href="/product/crm" className="text-gray-400 hover:text-white transition-colors">
                  CRM & Customers
                </Link>
              </li>
              <li>
                <Link href="/product/analytics" className="text-gray-400 hover:text-white transition-colors">
                  Analytics & Reports
                </Link>
              </li>
              <li>
                <Link href="/product/ai" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span>AI Assistant</span>
                  <span className="text-[10px] px-1 py-0.2 rounded bg-purple-600 text-white font-bold">BETA</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide uppercase mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions/retail" className="text-gray-400 hover:text-white transition-colors">
                  Retail & Supermarkets
                </Link>
              </li>
              <li>
                <Link href="/solutions/fashion" className="text-gray-400 hover:text-white transition-colors">
                  Fashion & Boutiques
                </Link>
              </li>
              <li>
                <Link href="/solutions/beauty" className="text-gray-400 hover:text-white transition-colors">
                  Beauty & Cosmetics
                </Link>
              </li>
              <li>
                <Link href="/solutions/restaurants" className="text-gray-400 hover:text-white transition-colors">
                  Restaurants & Cafes
                </Link>
              </li>
              <li>
                <Link href="/solutions/wholesale" className="text-gray-400 hover:text-white transition-colors">
                  Wholesale & Distributors
                </Link>
              </li>
              <li>
                <Link href="/solutions/online-businesses" className="text-gray-400 hover:text-white transition-colors">
                  Online Sellers & Creators
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Platform */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide uppercase mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/resources/blog" className="text-gray-400 hover:text-white transition-colors">
                  Trade Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/resources/guides" className="text-gray-400 hover:text-white transition-colors">
                  Merchant Growth Guides
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="text-gray-400 hover:text-white transition-colors">
                  Help Center & FAQs
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-gray-400 hover:text-white transition-colors">
                  App Integrations
                </Link>
              </li>
              <li>
                <Link href="/business-services" className="text-gray-400 hover:text-white transition-colors">
                  CAC Business Services
                </Link>
              </li>
              <li>
                <Link href="/financial-services" className="text-gray-400 hover:text-white transition-colors">
                  Business Financing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Company & Legal */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide uppercase mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/company/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers <span className="text-[10px] text-evarpex-orange ml-1">We're hiring</span>
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Sales & Support
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="text-gray-400 hover:text-white transition-colors">
                  Security Standards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Compliance & Disclaimer Notice */}
        <div className="mt-14 pt-8 border-t border-evarpex-navy-border/40 text-xs text-gray-400 leading-relaxed space-y-3">
          <p>
            <strong className="text-gray-300">Regulatory Disclaimer:</strong> EVARPEX Technologies is a software, business infrastructure, and commerce technology provider. EVARPEX is not a bank, deposit-taking institution, or licensed lender. Payment processing, collections, card issuance, virtual accounts, and financial facilities are provided through licensed, regulated financial institutions and payment partner gateways in compliance with Central Bank regulations.
          </p>
          <p>
            Access to credit lines, working capital, and merchant loan facilities is subject to financial eligibility criteria, underwriting assessments, and availability by authorized third-party credit partners.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-evarpex-navy-border/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 EVARPEX Technologies Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with precision for African commerce.</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
