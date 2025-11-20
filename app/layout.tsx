import type React from "react"
import type { Metadata } from "next"
import { cookies } from "next/headers"
import { Playfair_Display, Inter } from "next/font/google"
import { LanguageProvider, type Language } from "@/components/language-provider"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Alessandra Santos - Fotografia de Moda e Editorial",
  description: "Portfolio de fotografia de moda, beleza e editorial por Alessandra Santos",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = cookies()
  // Some runtimes may not expose .get; guard to avoid server crashes.
  const cookieLang =
    typeof (cookieStore as any)?.get === "function"
      ? (cookieStore as any).get("language")?.value
      : undefined
  const initialLanguage: Language = cookieLang === "en" ? "en" : "pt"
  const htmlLang = initialLanguage === "pt" ? "pt-BR" : "en"

  return (
    <html lang={htmlLang} className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/20">
        <LanguageProvider initialLanguage={initialLanguage}>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
