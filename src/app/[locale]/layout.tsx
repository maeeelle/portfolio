import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../globals.css'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from '@/components/ThemeToggle'

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
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            try {
              _updateTheme(localStorage.getItem('theme') || 'system')
            } catch {}

            function _updateTheme(theme) {
              const classList = document.documentElement.classList;

              classList.remove("light", "dark", "system");
              if (theme === 'dark') {
                classList.add('dark')
              } else if (theme === 'light') {
                classList.add('light')
              } else {
                classList.add('system')
              }
            }
          `,
          }}
        />
      </head>

      <body
        className={`${overusedGR.variable} ${diolce.variable} antialiased selection:bg-[#b2ff5d] dark:selection:bg-[#4f32ff] dark:selection:text-[#D3D3D3]`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
