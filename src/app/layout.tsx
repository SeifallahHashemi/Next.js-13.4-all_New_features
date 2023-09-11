import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import QueryProvider from "@/app/query-provider";
import Providers from "@/app/providers";
import Navigation from "@/components/Kinde_com-authentication/navigation";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Starting Page',
  description: 'Practice to become the best Next.js developer',
  icons: {
    icon: "./favicon.ico",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <Providers>
            <Navigation />
            {children}
          </Providers>
        </QueryProvider>
      </body>
    </html>
  )
}
