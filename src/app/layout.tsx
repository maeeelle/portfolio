import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const overusedGR = localFont({
  src: './fonts/OverusedGroteskRoman-VF.ttf',
  display: 'swap',
  variable: '--font-overused-gr',
})

const diolce = localFont({
  src: './fonts/Diolce-Regular.otf',
  display: 'swap',
  variable: '--font-diolce',
})

export const metadata: Metadata = {
  title: 'maëlle ・ digital product designer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${overusedGR.variable} ${diolce.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
