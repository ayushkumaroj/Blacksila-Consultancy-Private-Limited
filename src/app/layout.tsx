import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { WhatsAppWidget, CallFAB, CookieBanner } from "@/components/organisms/PersistentWidgets";

export const metadata: Metadata = {
  title: "Blacksila Consultancy - Expert Business Consulting, Tax & Compliance",
  description: "Complete solutions to start, manage, and grow your business — from registration and taxation to expert consulting backed by market research, current trends, and future opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col relative text-[var(--color-navy)] font-sans" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />

        <WhatsAppWidget />
        <CallFAB />
        <CookieBanner />
      </body>
    </html>
  );
}
