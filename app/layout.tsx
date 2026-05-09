// app/layout.tsx

import type { Metadata } from "next";

import "./globals.css";

import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "となりのきょうしつ",
  description: "となりのきょうしつ公式サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">

      <body>

        {/* =========================
            Header
        ========================= */}

        <Header />

        {/* =========================
            Main
        ========================= */}

        <main>
          {children}
        </main>

        {/* =========================
            Footer
        ========================= */}

        <Footer />

      </body>

    </html>
  );
}