import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../globals.css'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

const overusedGR = localFont({
  src: '../fonts/OverusedGroteskRoman-VF.ttf',
  display: 'swap',
  variable: '--font-overused-gr',
})

const diolce = localFont({
  src: '../fonts/Diolce-Regular.otf',
  display: 'swap',
  variable: '--font-diolce',
})

export const metadata: Metadata = {
  title: 'maëlle ・ digital product designer',
  alternates: {
    canonical: 'https://maelle.works/',
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!routing.locales.includes(locale as never)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`${overusedGR.variable} ${diolce.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
