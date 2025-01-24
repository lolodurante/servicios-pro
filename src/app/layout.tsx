import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { NavBar } from "@/components/navbar"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Servicios Profesionales",
  description: "Encuentra profesionales calificados para tus necesidades",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geist.variable} font-sans`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}

