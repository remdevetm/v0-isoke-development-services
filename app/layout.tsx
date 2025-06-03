import type React from "react"
import type { Metadata } from "next"
import { Inter, Open_Sans, Roboto } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Isoke Development Services - Investment & Development Company",
  description:
    "The most prestigious investment and development company worldwide. Offering consulting, investment planning, and business strategy services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${openSans.variable} ${roboto.variable}`}>{children}</body>
    </html>
  )
}
