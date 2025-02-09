import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../globals.css'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from '@/components/ThemeToggle'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { cookies } from 'next/headers'

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: 'https://www.maelle.works',
    },
  }
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

  const cookieStore = await cookies()
  const themeCookie = cookieStore.get('NEXT_THEME')

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} className={themeCookie?.value} suppressHydrationWarning>
      <body
        className={`${overusedGR.variable} ${diolce.variable} relative antialiased selection:bg-[#b2ff5d] dark:selection:bg-[#4f32ff] dark:selection:text-[#D3D3D3]`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
