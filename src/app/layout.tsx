import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget, CallFAB, CookieBanner } from "@/components/widgets/PersistentWidgets";
import { SITE_METADATA_DESCRIPTION, SITE_METADATA_TITLE } from "@/config/site";

export const metadata: Metadata = {
  title: SITE_METADATA_TITLE,
  description: SITE_METADATA_DESCRIPTION,
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
