import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DroneDontCare — X8 Cine-Lifter Custom Build | FPV Cinema Drone",
  description:
    "Hand-built X8 Cine-Lifter 8-inch FPV drone with DJI O4 Air Unit. Ready to fly. ELRS 2.4G control, 5km range, 15 min flight time. Custom built in Irvine, California. $2,599.",
  keywords: [
    "X8 cinelifter",
    "cine-lifter drone",
    "FPV cinema drone",
    "custom FPV build",
    "DJI O4 Air Unit drone",
    "8 inch FPV drone",
    "cinelifter buy",
    "ready to fly cinelifter",
    "cinematic FPV drone",
    "heavy lift FPV",
  ],
  openGraph: {
    title: "X8 Cine-Lifter 8\" with O4 Air Unit — $2,599",
    description:
      "Complete custom-built X8 Cine-Lifter FPV drone. DJI O4 Air Unit, ELRS 2.4G, 5km range. Ready to fly. Built in Irvine, CA.",
    url: "https://louis-drone.vercel.app",
    siteName: "DroneDontCare",
    images: [
      {
        url: "https://louis-drone.vercel.app/images/8egAAeSweUpp2032.jpg",
        width: 1600,
        height: 1600,
        alt: "X8 Cine-Lifter Custom Build FPV Drone",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "X8 Cine-Lifter 8\" with O4 Air Unit — $2,599",
    description:
      "Hand-built X8 Cine-Lifter FPV cinema drone. DJI O4, ELRS 2.4G, 5km range. Ready to fly.",
    images: ["https://louis-drone.vercel.app/images/8egAAeSweUpp2032.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "X8 Cine-Lifter 8\" with DJI O4 Air Unit",
  description:
    "Complete custom-built X8 Cine-Lifter 8-inch FPV drone with DJI O4 Air Unit. ELRS 2.4G control, 5km range, 15 min flight time. Hand-built and tested in Irvine, California.",
  image: [
    "https://louis-drone.vercel.app/images/8egAAeSweUpp2032.jpg",
    "https://louis-drone.vercel.app/images/8gAAAeSwJyRp2032.jpg",
    "https://louis-drone.vercel.app/images/dc4AAeSw81tp2032.jpg",
  ],
  brand: {
    "@type": "Brand",
    name: "DroneDontCare",
  },
  offers: {
    "@type": "Offer",
    url: "https://louis-drone.vercel.app",
    priceCurrency: "USD",
    price: "2599.00",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: {
      "@type": "Organization",
      name: "DroneDontCare",
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0",
        currency: "USD",
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        businessDays: {
          "@type": "QuantitativeValue",
          minValue: 1,
          maxValue: 3,
        },
      },
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "US",
      },
    },
  },
  weight: {
    "@type": "QuantitativeValue",
    value: "2",
    unitCode: "KGM",
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Max Flight Time",
      value: "15 minutes",
    },
    {
      "@type": "PropertyValue",
      name: "Max Range",
      value: "5000 meters",
    },
    {
      "@type": "PropertyValue",
      name: "Video System",
      value: "DJI O4 Air Unit",
    },
    {
      "@type": "PropertyValue",
      name: "Control Link",
      value: "ELRS 2.4G",
    },
    {
      "@type": "PropertyValue",
      name: "Frame Size",
      value: "8 inches",
    },
    {
      "@type": "PropertyValue",
      name: "Configuration",
      value: "X8 (coaxial)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight">
              DroneDontCare
            </a>
            <nav className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="/" className="hover:text-foreground transition-colors">
                Shop
              </a>
              <a href="#specs" className="hover:text-foreground transition-colors">
                Specs
              </a>
              <a href="#contact" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer id="contact" className="border-t border-border mt-auto">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <p className="text-lg font-bold">DroneDontCare</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Custom FPV builds. Irvine, California.
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Questions? Reach out:</p>
                <p className="mt-1 text-foreground">hello@dronedontcare.com</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-8">
              &copy; {new Date().getFullYear()} DroneDontCare. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
