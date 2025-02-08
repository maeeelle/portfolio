import { LanguageToggleButton } from '@/components/LanguageToggle'
import { Separator } from '@/components/Separator'
import { ToggleThemeButton } from '@/components/ThemeToggle'
import { Link } from '@/i18n/routing'
import NextLink from 'next/link'
import { setRequestLocale, getTranslations } from 'next-intl/server'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function Layout({ children, params }: LayoutProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('layout')

  return (
    <div className='min-h-dvh flex flex-col relative overflow-hidden'>
      <header className='max-w-(--breakpoint-2xl) mx-auto w-full flex justify-between items-center p-8 sm:px-20 font-normal text-[#282828] dark:text-[#D3D3D3] text-sm'>
        <div className='flex gap-2 items-stretch h-4.5 uppercase'>
          <Link locale={locale} href='/'>
            MAËLLE.WORKS
          </Link>
          <span aria-hidden>•</span>
          <NextLink
            hrefLang={locale}
            href={
              locale === 'en'
                ? '/doc/cv_maelleworks_en.pdf'
                : '/doc/cv_maelleworks_fr.pdf'
            }
            className='no-underline text-[#4F32FF] dark:text-[#B2FF5D] transition-all duration-150 sm:underline decoration-from-font decoration-wavy underline-offset-4 decoration-[#4F32FF]/0 dark:decoration-[#B2FF5D]/0 hover:decoration-[#4F32FF]/100 dark:hover:decoration-[#B2FF5D]/100'
          >
            {t('header.cv')}
          </NextLink>
        </div>

        <div className='flex gap-4 items-stretch h-4.5'>
          <LanguageToggleButton defaultLocale={locale} />
          <ToggleThemeButton />
        </div>
      </header>
      <Separator className='relative left-1/2 -translate-x-1/2 w-screen' />

      {children}

      <Separator className='relative left-1/2 -translate-x-1/2 w-screen' />
      <footer className='max-w-(--breakpoint-2xl) mx-auto w-full px-8 sm:px-20 font-normal text-[#282828] dark:text-[#D3D3D3] text-sm uppercase'>
        <div className='py-8 flex flex-col gap-4 sm:items-center'>
          <p>{t('footer.text')}</p>

          <div className='flex gap-2 items-center'>
            <a
              href='https://www.linkedin.com/in/maellems'
              className='no-underline text-[#4F32FF] dark:text-[#B2FF5D] transition-all duration-150 sm:underline decoration-from-font decoration-wavy underline-offset-4 decoration-[#4F32FF]/0 dark:decoration-[#B2FF5D]/0 hover:decoration-[#4F32FF]/100 dark:hover:decoration-[#B2FF5D]/100'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href='mailto:moisismaelle@gmail.com'
              className='no-underline text-[#4F32FF] dark:text-[#B2FF5D] transition-all duration-150 sm:underline decoration-from-font decoration-wavy underline-offset-4 decoration-[#4F32FF]/0 dark:decoration-[#B2FF5D]/0 hover:decoration-[#4F32FF]/100 dark:hover:decoration-[#B2FF5D]/100'
            >
              moisismaelle@gmail.com
            </a>
          </div>
        </div>

        <Separator className='relative left-1/2 -translate-x-1/2 w-screen' />

        <div className='py-8 flex flex-col gap-4 sm:flex-row sm:gap-0 sm:justify-between sm:items-center'>
          <span>
            {t.rich('footer.credits', {
              developer: (chunks) => (
                <a
                  href='https://erickgust.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='no-underline text-[#4F32FF] dark:text-[#B2FF5D] transition-all duration-150 hover:text-[#4F32FF] dark:hover:text-[#B2FF5D] sm:underline decoration-from-font decoration-wavy underline-offset-4 decoration-[#4F32FF]/0 dark:decoration-[#B2FF5D]/0 hover:decoration-[#4F32FF]/100 dark:hover:decoration-[#B2FF5D]/100'
                >
                  {chunks}
                </a>
              ),
            })}
          </span>
          <Link
            href='/legal'
            className='no-underline text-[#4F32FF] dark:text-[#B2FF5D] transition-all duration-150 sm:underline decoration-from-font decoration-wavy underline-offset-4 decoration-[#4F32FF]/0 dark:decoration-[#B2FF5D]/0 hover:decoration-[#4F32FF]/100 dark:hover:decoration-[#B2FF5D]/100'
            locale={locale}
          >
            {t('footer.legal')}
          </Link>
        </div>
      </footer>
    </div>
  )
}
