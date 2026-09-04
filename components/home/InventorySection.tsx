import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import {
  Boxes,
  BellRing,
  QrCode,
  ArrowLeftRight,
  History,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export function InventorySection() {
  const items = [
    {
      product: "Glow Face Serum (50ml)",
      sku: "SKU-GLW-01",
      stock: 142,
      price: "₦12,500.00",
      status: "In Stock",
      location: "Lagos Hub",
      badge: "bg-emerald-50 text-emerald-700",
    },
    {
      product: "Brightening Soap (Pack of 3)",
      sku: "SKU-SOAP-03",
      stock: 18,
      price: "₦4,500.00",
      status: "Low Stock Alert",
      location: "Abuja Store",
      badge: "bg-amber-50 text-amber-700",
    },
    {
      product: "Moisturizing Cream 100ml",
      sku: "SKU-CRM-100",
      stock: 85,
      price: "₦9,800.00",
      status: "In Stock",
      location: "Lagos Hub",
      badge: "bg-emerald-50 text-emerald-700",
    },
    {
      product: "Rosewater Face Toner 100ml",
      sku: "SKU-TNR-02",
      stock: 6,
      price: "₦7,000.00",
      status: "Reorder Needed",
      location: "Port Harcourt",
      badge: "bg-red-50 text-red-700",
    },
    {
      product: "Nourishing Lip Balm",
      sku: "SKU-LIP-01",
      stock: 210,
      price: "₦2,500.00",
      status: "In Stock",
      location: "Abuja Store",
      badge: "bg-emerald-50 text-emerald-700",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual: Realistic Inventory Table Mockup */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-3xl border border-gray-200/90 bg-white p-5 shadow-card">
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-orange-50 text-evarpex-orange">
                    <Boxes className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      Central Stock Management
                    </h4>
                    <span className="text-xs text-gray-500">
                      Synchronized across 3 branch warehouses
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-red-50 text-red-600 font-bold flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> 2 Low Stock Alerts
                  </span>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 font-bold uppercase tracking-wider">
                      <th className="pb-2.5">Product</th>
                      <th className="pb-2.5">SKU</th>
                      <th className="pb-2.5">Stock</th>
                      <th className="pb-2.5">Unit Price</th>
                      <th className="pb-2.5">Status</th>
                      <th className="pb-2.5">Location</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-medium">
                    {items.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/70 transition-colors">
                        <td className="py-3 font-semibold text-gray-900 pr-2">
                          {row.product}
                        </td>
                        <td className="py-3 font-mono text-gray-500 pr-2">
                          {row.sku}
                        </td>
                        <td className="py-3 font-bold text-gray-900 pr-2">
                          {row.stock}
                        </td>
                        <td className="py-3 font-semibold text-gray-800 pr-2">
                          {row.price}
                        </td>
                        <td className="py-3 pr-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${row.badge}`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="py-3 text-gray-600">
                          {row.location}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Action Strip */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Showing 5 of 248 products</span>
                <span className="text-evarpex-orange font-bold cursor-pointer hover:underline">
                  Initiate Stock Transfer →
                </span>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <SectionHeader
              badge="Inventory Intelligence"
              align="left"
              title="Know what you have. Know what you sold."
              subtitle="Eliminate stockouts and over-purchasing. Evarpex tracks inventory changes in real-time across your retail stores, warehouse, and online orders simultaneously."
            />

            <div className="space-y-3.5 text-xs text-gray-700">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F8FC] border border-gray-200/60">
                <BellRing className="w-5 h-5 text-evarpex-orange shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900 text-sm">Automated Low-Stock Alerts</div>
                  <p className="text-gray-500 mt-0.5">Receive prompt WhatsApp or email warnings before your top sellers run out.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F8FC] border border-gray-200/60">
                <QrCode className="w-5 h-5 text-evarpex-orange shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900 text-sm">Barcode & SKU Management</div>
                  <p className="text-gray-500 mt-0.5">Scan standard barcodes with any handheld scanner or your phone camera for instant counts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F8FC] border border-gray-200/60">
                <ArrowLeftRight className="w-5 h-5 text-evarpex-orange shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900 text-sm">Multi-Location Stock Transfers</div>
                  <p className="text-gray-500 mt-0.5">Shift stock effortlessly between your Lagos warehouse and Abuja retail store with audit trails.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/product/inventory"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Inventory Features
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
