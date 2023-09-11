import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Starting Page - marketing",
  description: "Practice to become the best Next.js developer - Route Groups",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function MarketingRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <button>Button</button>
      {children}
      </body>
    </html>
  );
}
