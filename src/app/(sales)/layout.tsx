import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Starting Page - marketing",
  description: "Practice to become the best Next.js developer - Route Groups",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function ShoppingRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <button>Shopping Root Layout</button>
      {children}
    </>
  );
}
