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
  title: "DroneDontCare — X8 Cine-Lifter Custom Build",
  description:
    "Complete custom-built X8 Cine-Lifter 8-inch FPV drone with DJI O4 Air Unit. Ready to fly. Built in the USA.",
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
