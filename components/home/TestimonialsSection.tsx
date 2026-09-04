import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      owner: "Amara Nwachukwu",
      role: "Founder & Creative Director",
      business: "Glow Skin Care",
      city: "Lagos & Abuja",
      industry: "Organic Cosmetics",
      quote:
        "Before Evarpex, we were using Excel sheets for stock counts, a separate terminal for card payments, and taking orders manually in WhatsApp DMs. Now, every single order from our website and store registers updates our central stock automatically.",
    },
    {
      owner: "Tunde Bakare",
      role: "Managing Partner",
      business: "Prime Electronics",
      city: "Ikeja Computer Village",
      industry: "Consumer Tech Retail",
      quote:
        "Managing warranty tracking and serial numbers across our two retail branches used to be pure chaos. With Evarpex's POS and multi-location system, our store managers are held accountable down to every single naira.",
    },
    {
      owner: "Hauwa Mohammed",
      role: "Operations Director",
      business: "FreshMart Groceries",
      city: "Wuse II, Abuja",
      industry: "Supermarket & Produce",
      quote:
        "The automated low-stock warnings saved us from constantly running out of fast-moving products. Plus, the offline POS mode means internet downtime in our mall never stops customers from checking out smoothly.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F8FC] border-b border-gray-100">
      <Container>
        <SectionHeader
          badge="Merchant Stories"
          title="Built for business owners who want to grow."
          subtitle="Real African entrepreneurs using Evarpex daily to automate daily operations, eliminate stock loss, and get paid faster."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#020B36] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {t.owner.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{t.owner}</div>
                  <div className="text-xs text-evarpex-orange font-semibold">
                    {t.business} • {t.city}
                  </div>
                  <div className="text-[11px] text-gray-400">{t.industry}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
