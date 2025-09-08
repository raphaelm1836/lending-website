import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileStickyCTA } from "@/components/mobile-cta";
import { SEOJsonLd } from "@/components/seo-jsonld";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sunanchorcapital.com"),
  title: {
    default: "SunAnchor Capital — Small Business Financing",
    template: "%s — SunAnchor Capital"
  },
  description:
    "Flexible working capital for small businesses: short-term loans, merchant cash advances, and asset-backed lending. Fast decisions, transparent terms, dedicated support.",
  openGraph: {
    title: "SunAnchor Capital — Small Business Financing",
    description:
      "Flexible working capital for small businesses: short-term loans, MCAs, and asset-backed solutions.",
    url: "https://www.sunanchorcapital.com",
    siteName: "SunAnchor Capital",
    type: "website"
  },
  alternates: { canonical: "https://www.sunanchorcapital.com" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <SEOJsonLd />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main id="content" className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
