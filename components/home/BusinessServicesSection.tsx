import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import {
  FileBadge,
  Globe,
  Mail,
  Palette,
  FileSpreadsheet,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function BusinessServicesSection() {
  const services = [
    {
      title: "CAC Business Registration",
      desc: "Incorporate your Business Name or Limited Company (LTD) with the Corporate Affairs Commission in days.",
      icon: <FileBadge className="w-5 h-5 text-evarpex-orange" />,
    },
    {
      title: "Custom Domain & SSL",
      desc: "Secure your brand's `.com`, `.ng`, or `.com.ng` web address with automated SSL certificates.",
      icon: <Globe className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Professional Business Email",
      desc: "Build instant trust with branded email addresses (e.g., `orders@yourbrand.ng`) powered by Google Workspace.",
      icon: <Mail className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Full Brand Identity Setup",
      desc: "Get modern logo design, social media kits, invoice templates, and product packaging guidelines.",
      icon: <Palette className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "Statutory & Tax Documentation",
      desc: "TIN generation, SCUML compliance guidance, and clean financial bookkeeping preparation.",
      icon: <FileSpreadsheet className="w-5 h-5 text-amber-600" />,
    },
    {
      title: "Business Growth Mentorship",
      desc: "Access proven playbooks and 1-on-1 operational coaching tailored for the Nigerian retail landscape.",
      icon: <TrendingUp className="w-5 h-5 text-indigo-600" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F8FC] border-b border-gray-100">
      <Container>
        <SectionHeader
          badge="End-to-End Enablement"
          title="More than software. A platform for your business."
          subtitle="From starting your business legally to scaling into multi-location operations, Evarpex helps you build the foundational infrastructure you need to thrive."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-md hover:border-evarpex-orange/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-evarpex-orange font-bold">
                <span>Fast Track Available</span>
                <span>Learn more →</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="/business-services"
            variant="dark"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore All Business Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
