"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  CheckCircle2,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    city: "Lagos",
    interest: "Retail POS & Inventory",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        badge="Direct Support & Inquiries"
        title="Speak with our commerce specialists."
        subtitle="Whether you need help selecting hardware, configuring multi-location stores, or booking a live product demo at our Abuja headquarters or via video consultation."
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
        imageAlt="Evarpex merchant support specialist in Abuja headquarters"
        badgeOverlay="Abuja Corporate Headquarters"
        statOverlay={{
          value: "< 2 Hours",
          label: "Average Inquiry Response",
        }}
        primaryCta={{
          label: "Chat on WhatsApp",
          href: "https://wa.me/2348000000000",
        }}
        secondaryCta={{
          label: "Call Support Desk",
          href: "tel:+23418883827",
        }}
        breadcrumbs={[
          { label: "Company", href: "/company" },
          { label: "Contact" },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Form */}
            <div className="lg:col-span-7 bg-[#F7F8FC] p-6 sm:p-10 rounded-3xl border border-gray-200/80 shadow-xs">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Our sales and technical support teams reply within 2 business hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900">
                    Inquiry Received!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                    Thank you, {formData.fullName}. An Evarpex specialist will contact you at {formData.phone || formData.email} shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amara Okafor"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-evarpex-orange text-xs text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Glow Skin Care"
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData({ ...formData, businessName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-evarpex-orange text-xs text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-evarpex-orange text-xs text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">
                        Phone Number (WhatsApp preferred) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+234 803 000 0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-evarpex-orange text-xs text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">
                        City / Primary Location
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-evarpex-orange text-xs text-gray-900"
                      >
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Port Harcourt</option>
                        <option>Kano</option>
                        <option>Ibadan</option>
                        <option>Other African Region</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-1">
                        Primary Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) =>
                          setFormData({ ...formData, interest: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-evarpex-orange text-xs text-gray-900"
                      >
                        <option>Retail POS & Inventory</option>
                        <option>Online Storefront Builder</option>
                        <option>Multi-Location Expansion</option>
                        <option>Payment & Wallet Integration</option>
                        <option>CAC Business Setup Services</option>
                        <option>Partner Working Capital</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Message / Special Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your current store setup, number of cashier registers, or inventory volume..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-evarpex-orange text-xs text-gray-900"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      icon={<Send className="w-4 h-4" />}
                    >
                      Submit Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Operational Hubs & Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#020B36] text-white border border-[#0D1B54] shadow-card">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-evarpex-orange/20 border border-evarpex-orange/30 text-evarpex-orange text-[11px] font-bold uppercase tracking-wider mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  Corporate Headquarters
                </div>

                <h4 className="text-xl font-bold mb-2 text-white">
                  Abuja Head Office
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  All executive leadership, hardware fulfillment, onboarding, and primary customer success operations are centralized exclusively at our Abuja headquarters.
                </p>

                <div className="space-y-4 text-xs">
                  <div className="pb-4 border-b border-[#16276E]">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-evarpex-orange" />
                      Physical Address
                    </div>
                    <div className="text-gray-300 mt-1 pl-5 leading-relaxed">
                      Plot 1042, Central Business District & Wuse II Corridor,<br />
                      Abuja, Federal Capital Territory, Nigeria.
                    </div>
                  </div>

                  <div className="pb-4 border-b border-[#16276E]">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      Visiting & Consultation Hours
                    </div>
                    <div className="text-gray-300 mt-1 pl-5">
                      Monday – Friday: 8:00 AM – 6:00 PM WAT<br />
                      Saturday: 9:00 AM – 3:00 PM WAT
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-white">Serving Merchants Nationwide</div>
                    <div className="text-gray-400 mt-1 leading-relaxed">
                      While our physical office is located solely in Abuja, Evarpex powers commerce for registered merchants across all 36 states of Nigeria and West Africa with next-day hardware shipping and 24/7 digital support.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#F7F8FC] border border-gray-200 space-y-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white text-evarpex-orange shadow-xs flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Phone Support</div>
                    <div className="text-gray-500">+234 (0) 1 888 EVAR (3827)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white text-blue-600 shadow-xs flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Email Inquiries</div>
                    <div className="text-gray-500">support@evarpex.com • sales@evarpex.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white text-emerald-600 shadow-xs flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">WhatsApp Merchant Desk</div>
                    <div className="text-gray-500">Available 24/7 for active verified sellers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
