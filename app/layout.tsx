import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#020B36",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Evarpex | Commerce, AI & Financial Operating System for African Businesses",
  description:
    "Evarpex helps African businesses sell, manage, get paid and grow with powerful commerce, AI and financial tools in one platform.",
  keywords: [
    "Evarpex",
    "African commerce OS",
    "business management software Nigeria",
    "POS system Lagos",
    "inventory management Africa",
    "online store builder",
    "merchant wallet",
    "business AI assistant",
  ],
  authors: [{ name: "Evarpex Technologies" }],
  creator: "Evarpex Technologies",
  publisher: "Evarpex Technologies",
  metadataBase: new URL("https://evarpex.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evarpex.com",
    title: "Evarpex | Commerce, AI & Financial Operating System for African Businesses",
    description:
      "Everything your business needs. In one place. Sell online and in-store, track inventory, accept payments, and scale with AI.",
    siteName: "Evarpex",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evarpex | Commerce, AI & Financial Operating System for African Businesses",
    description:
      "Run your business, get paid, and grow — from one powerful platform built for Africa.",
    creator: "@evarpex",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-evarpex-text font-sans antialiased selection:bg-evarpex-orange selection:text-white">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
