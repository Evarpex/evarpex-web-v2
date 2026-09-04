import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import {
  Coins,
  ShieldCheck,
  Building,
  TrendingUp,
  CreditCard,
  ArrowRight,
  BadgePercent,
  CheckCircle2,
} from "lucide-react";

export function FinancialServicesSection() {
  const financialFeatures = [
    {
      title: "Inventory Working Capital",
      desc: "Access short-term capital to purchase stock before holiday rush seasons, backed by your historical store sales.",
      icon: <Coins className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Invoice & PO Financing",
      desc: "Unlock immediate cash flow on verified unpaid wholesale purchase orders instead of waiting 60–90 days.",
      icon: <Building className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Merchant Cash Advance",
      desc: "Flexible repayment calculated as a small percentage of your daily Evarpex card and POS transactions.",
      icon: <CreditCard className="w-5 h-5 text-evarpex-orange" />,
    },
    {
      title: "Buy Now, Pay Later (BNPL) at Checkout",
      desc: "Enable your retail customers to split purchases into 3 or 4 interest-free installments while you get paid 100% upfront.",
      icon: <BadgePercent className="w-5 h-5 text-purple-600" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <Container>
        <SectionHeader
          badge="Partner-Powered Credit"
          title="More financial power for growing businesses."
          subtitle="Fuel your inventory restocks and retail store expansion without endless bank queues or impossible collateral demands."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {financialFeatures.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#F7F8FC] border border-gray-200/80 hover:border-emerald-500/40 transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>No physical collateral required for verified merchants</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Compliance Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 max-w-4xl mx-auto flex items-start gap-3 text-xs text-emerald-900 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Regulatory Notice:</strong> EVARPEX Technologies is a software platform, not a licensed bank or microfinance lender. Financial products, merchant credit facilities, and working capital lines are underwritten and disbursed strictly through licensed financial institutions and authorized lending partners subject to credit assessment and regulatory compliance.
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            href="/financial-services"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Learn About Business Finance
          </Button>
        </div>
      </Container>
    </section>
  );
}
