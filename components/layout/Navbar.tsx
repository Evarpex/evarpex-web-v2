"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EvarpexLogo } from "../brand/EvarpexLogo";
import { Button } from "../ui/Button";
import {
  ChevronDown,
  Menu,
  X,
  Store,
  CreditCard,
  Boxes,
  Users,
  BarChart3,
  Sparkles,
  Building2,
  Receipt,
  ShoppingBag,
  Utensils,
  Scissors,
  Layers,
  Globe,
  BookOpen,
  HelpCircle,
  FileText,
  Briefcase,
  PhoneCall,
  ShieldCheck,
  TrendingUp,
  Coins,
  ArrowRight,
  ChevronRight,
  Home,
  Tag,
  Truck,
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const productLinks = [
    {
      title: "Business Management",
      desc: "Centralized multi-store, staff roles & shift governance",
      href: "/product/business-management",
      icon: <Building2 className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Online Store Builder",
      desc: "No-code ecommerce storefront with custom domain",
      href: "/product/online-store",
      icon: <Store className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Point of Sale (POS)",
      desc: "Fast in-store checkout, barcode scan & offline sync",
      href: "/product/pos",
      icon: <Receipt className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Payments & Wallet",
      desc: "Instant cards, bank transfers, USSD & virtual accounts",
      href: "/product/payments",
      icon: <CreditCard className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Inventory & Stock",
      desc: "Multi-location tracking, low-stock alerts & audits",
      href: "/product/inventory",
      icon: <Boxes className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Customer CRM",
      desc: "Purchase history, VIP segmentation & WhatsApp marketing",
      href: "/product/crm",
      icon: <Users className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Analytics & Reports",
      desc: "Real-time sales, gross profit margins & tax reports",
      href: "/product/analytics",
      icon: <BarChart3 className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "AI Business Assistant",
      desc: "Product copy, marketing drafts & predictive insights",
      href: "/product/ai",
      badge: "Beta",
      icon: <Sparkles className="w-4 h-4 text-purple-600" />,
    },
  ];

  const solutionLinks = [
    {
      title: "Retail & Supermarkets",
      desc: "High volume checkout & cash drawer control",
      href: "/solutions/retail",
      icon: <ShoppingBag className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Fashion & Boutiques",
      desc: "Sizes, colors, lookbooks & Instagram shops",
      href: "/solutions/fashion",
      icon: <Scissors className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Beauty & Cosmetics",
      desc: "Batch tracking, skin profiles & repeat reorders",
      href: "/solutions/beauty",
      icon: <Sparkles className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Restaurants & Dining",
      desc: "Kitchen tickets, table bills & split payments",
      href: "/solutions/restaurants",
      icon: <Utensils className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Wholesale & Distribution",
      desc: "Tiered pricing, credit ledgers & B2B invoices",
      href: "/solutions/wholesale",
      icon: <Layers className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Online Sellers & Creators",
      desc: "Automated WhatsApp & Instagram checkout",
      href: "/solutions/online-businesses",
      icon: <Globe className="w-4 h-4 text-evarpex-orange" />,
    },
  ];

  const resourceLinks = [
    {
      title: "Trade Blog",
      desc: "Strategies on African retail, inventory & trade",
      href: "/resources/blog",
      icon: <FileText className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Business Growth Guides",
      desc: "Downloadable handbooks on store operations & CAC",
      href: "/resources/guides",
      icon: <BookOpen className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Help Center & FAQs",
      desc: "Direct answers to hardware, payments & setup",
      href: "/resources/faq",
      icon: <HelpCircle className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Integrations Directory",
      desc: "Connect Paystack, WhatsApp, Meta & QuickBooks",
      href: "/integrations",
      icon: <Layers className="w-4 h-4 text-evarpex-orange" />,
    },
  ];

  const companyLinks = [
    {
      title: "About EVARPEX",
      desc: "Our mission to empower African commerce & technology",
      href: "/company/about",
      icon: <Building2 className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Careers",
      desc: "Join our engineering, product, and sales teams",
      href: "/company/careers",
      icon: <Briefcase className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Contact & Support",
      desc: "Abuja headquarters, onboarding & technical support",
      href: "/company/contact",
      icon: <PhoneCall className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Business Setup Services",
      desc: "CAC registration, domain & corporate email",
      href: "/business-services",
      icon: <ShieldCheck className="w-4 h-4 text-evarpex-orange" />,
    },
    {
      title: "Partner Financial Services",
      desc: "Working capital & BNPL through licensed partners",
      href: "/financial-services",
      icon: <Coins className="w-4 h-4 text-emerald-600" />,
    },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
          isScrolled
            ? "bg-white shadow-subtle border-b border-gray-200/80 py-2.5"
            : "bg-white border-b border-gray-100 py-3.5"
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Logo */}
          <div className="flex items-center gap-8">
            <EvarpexLogo size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 font-sans">
              {/* Solutions / Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("product")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    activeDropdown === "product"
                      ? "text-evarpex-orange bg-evarpex-orange-light"
                      : "text-gray-700 hover:text-evarpex-navy hover:bg-gray-50"
                  }`}
                  aria-expanded={activeDropdown === "product"}
                >
                  <span>Business Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "product" ? "rotate-180 text-evarpex-orange" : "text-gray-500"
                    }`}
                  />
                </button>

                {activeDropdown === "product" && (
                  <div className="absolute left-0 top-full mt-2 w-[620px] bg-white rounded-2xl shadow-xl border border-gray-100 p-4 grid grid-cols-2 gap-2 animate-in fade-in-50 slide-in-from-top-2 duration-150 z-50">
                    <div className="col-span-2 px-3 py-1.5 mb-1 border-b border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        Evarpex Operating System
                      </span>
                      <Link
                        href="/product"
                        className="text-xs font-bold text-evarpex-orange hover:underline flex items-center gap-1"
                      >
                        All Capabilities <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {productLinks.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-white group-hover:shadow-xs transition-all shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-gray-900 group-hover:text-evarpex-orange transition-colors">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="px-1.5 py-0.2 text-[9px] font-extrabold rounded bg-purple-100 text-purple-700">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Business Types / Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    activeDropdown === "solutions"
                      ? "text-evarpex-orange bg-evarpex-orange-light"
                      : "text-gray-700 hover:text-evarpex-navy hover:bg-gray-50"
                  }`}
                  aria-expanded={activeDropdown === "solutions"}
                >
                  <span>Business Types</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "solutions" ? "rotate-180 text-evarpex-orange" : "text-gray-500"
                    }`}
                  />
                </button>

                {activeDropdown === "solutions" && (
                  <div className="absolute left-0 top-full mt-2 w-[540px] bg-white rounded-2xl shadow-xl border border-gray-100 p-4 grid grid-cols-2 gap-2 animate-in fade-in-50 slide-in-from-top-2 duration-150 z-50">
                    <div className="col-span-2 px-3 py-1.5 mb-1 border-b border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        Tailored for your sector
                      </span>
                      <Link
                        href="/solutions"
                        className="text-xs font-bold text-evarpex-orange hover:underline flex items-center gap-1"
                      >
                        All Sectors <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {solutionLinks.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-white group-hover:shadow-xs transition-all shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-gray-900 group-hover:text-evarpex-orange transition-colors">
                            {item.title}
                          </span>
                          <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Pricing Direct Link */}
              <Link
                href="/pricing"
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  pathname === "/pricing"
                    ? "text-evarpex-orange bg-evarpex-orange-light"
                    : "text-gray-700 hover:text-evarpex-navy hover:bg-gray-50"
                }`}
              >
                Pricing
              </Link>

              {/* Learn & Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    activeDropdown === "resources"
                      ? "text-evarpex-orange bg-evarpex-orange-light"
                      : "text-gray-700 hover:text-evarpex-navy hover:bg-gray-50"
                  }`}
                  aria-expanded={activeDropdown === "resources"}
                >
                  <span>Learn</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "resources" ? "rotate-180 text-evarpex-orange" : "text-gray-500"
                    }`}
                  />
                </button>

                {activeDropdown === "resources" && (
                  <div className="absolute left-0 top-full mt-2 w-[460px] bg-white rounded-2xl shadow-xl border border-gray-100 p-3.5 grid grid-cols-1 gap-1.5 animate-in fade-in-50 slide-in-from-top-2 duration-150 z-50">
                    {resourceLinks.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-white group-hover:shadow-xs transition-all shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-gray-900 group-hover:text-evarpex-orange transition-colors">
                            {item.title}
                          </span>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("company")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    activeDropdown === "company"
                      ? "text-evarpex-orange bg-evarpex-orange-light"
                      : "text-gray-700 hover:text-evarpex-navy hover:bg-gray-50"
                  }`}
                  aria-expanded={activeDropdown === "company"}
                >
                  <span>Company</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "company" ? "rotate-180 text-evarpex-orange" : "text-gray-500"
                    }`}
                  />
                </button>

                {activeDropdown === "company" && (
                  <div className="absolute right-0 top-full mt-2 w-[460px] bg-white rounded-2xl shadow-xl border border-gray-100 p-3.5 grid grid-cols-1 gap-1.5 animate-in fade-in-50 slide-in-from-top-2 duration-150 z-50">
                    {companyLinks.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-white group-hover:shadow-xs transition-all shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-gray-900 group-hover:text-evarpex-orange transition-colors">
                            {item.title}
                          </span>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">

            <Button
              href="/pricing"
              variant="outline"
              size="sm"
              className="text-xs font-bold"
            >
              Log In
            </Button>
            <Button
              href="/pricing"
              variant="primary"
              size="sm"
              className="text-xs font-bold shadow-glow"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Sign Up Free
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              href="/pricing"
              variant="primary"
              size="sm"
              className="text-xs font-bold px-3 py-1.5 shadow-glow"
            >
              Sign Up
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-evarpex-navy border border-gray-200/80 focus:outline-none transition-all shadow-xs flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-evarpex-navy" />
              ) : (
                <Menu className="w-5 h-5 text-evarpex-navy" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Full-Screen Mobile Drawer Navigation (Rendered outside header to avoid stacking/clipping issues) */}
    {mobileMenuOpen && (
      <div className="lg:hidden fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden animate-in fade-in-50 duration-200">
        {/* Drawer Header with Logo & Close Button */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white shrink-0">
          <EvarpexLogo size="sm" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-xl bg-gray-100 text-evarpex-navy hover:bg-gray-200 border border-gray-200 focus:outline-none transition-all shadow-xs"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5 text-evarpex-navy" />
          </button>
        </div>

        {/* Scrollable Drawer Content */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
          {/* Business Solutions Suite */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
              Business Solutions
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {productLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-orange-50/50 active:bg-orange-50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-orange-50 text-evarpex-orange shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-gray-900">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="px-1.5 py-0.2 text-[9px] font-extrabold rounded bg-purple-100 text-purple-700">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-gray-500 truncate mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Logistics & Delivery Highlight */}
          <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/80">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-evarpex-orange">
                Native Logistics
              </span>
              <span className="px-1.5 py-0.2 text-[9px] font-extrabold rounded bg-emerald-100 text-emerald-800">
                Live
              </span>
            </div>
            <h4 className="text-xs font-bold text-gray-900">Evarpex Delivery</h4>
            <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
              Automated door-to-door dispatch and real-time rider tracking from checkout.
            </p>
            <Link
              href="/integrations#integrations"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-evarpex-orange hover:underline mt-2"
            >
              Explore Integrations <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Industry Types */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
              Business Types
            </div>
            <div className="grid grid-cols-2 gap-2">
              {solutionLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl border border-gray-100 hover:border-evarpex-orange/40 active:bg-orange-50 text-xs font-semibold text-gray-800 flex items-center justify-between"
                >
                  <span>{item.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Platform Links */}
          <div className="pt-3 border-t border-gray-100 space-y-1 text-xs font-bold text-gray-800">
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-gray-50"
            >
              <span>Pricing Plans</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </Link>
            <Link
              href="/integrations"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-gray-50"
            >
              <span>Integrations & Couriers</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </Link>
            <Link
              href="/resources/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-gray-50"
            >
              <span>Trade Blog & Guides</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </Link>
            <Link
              href="/company/about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-gray-50"
            >
              <span>About Evarpex</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </Link>
            <Link
              href="/company/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-gray-50 text-evarpex-orange"
            >
              <span>Contact Abuja Headquarters</span>
              <ChevronRight className="w-3.5 h-3.5 text-evarpex-orange" />
            </Link>
          </div>
        </div>

        {/* Bottom Actions inside Drawer */}
        <div className="p-5 border-t border-gray-200 bg-gray-50/80 shrink-0 space-y-2.5">
          <Button
            href="/pricing"
            variant="primary"
            size="lg"
            fullWidth
            className="font-bold shadow-glow"
          >
            Sign Up Free — 14-Day Trial
          </Button>
          <Button
            href="/pricing"
            variant="secondary"
            size="md"
            fullWidth
            className="font-bold"
          >
            Log In to Portal
          </Button>
          <p className="text-center text-[11px] text-gray-400">
            No credit card required • Headquarters in Abuja, Nigeria
          </p>
        </div>
      </div>
    )}
  </>
);
}
