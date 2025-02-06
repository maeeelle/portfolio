import { Separator } from '@/components/Separator'
import { ToggleThemeButton } from '@/components/ThemeToggle'
import { Link } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function Layout({ children, params }: LayoutProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className='min-h-dvh flex flex-col relative overflow-hidden'>
      <header className='max-w-screen-2xl mx-auto w-full flex justify-between items-center p-8 sm:px-20 font-normal text-[#282828] dark:text-[#D3D3D3] text-sm'>
        <div className='flex gap-2 items-stretch h-4.5'>
          <Link href='/'>MAËLLE.WORKS</Link>
          <span>•</span>
          <Link
            href='/doc/cv_maelle.pdf'
            className='no-underline text-[#4F32FF] dark:text-[#B2FF5D] transition-all duration-150 sm:underline decoration-from-font decoration-wavy underline-offset-4 decoration-[#4F32FF]/0 dark:decoration-[#B2FF5D]/0 hover:decoration-[#4F32FF]/100 dark:hover:decoration-[#B2FF5D]/100'
          >
            CV
          </Link>
        </div>

        <div className='flex gap-4 items-stretch h-4.5'>
          <Link
            href={`/${locale === 'en' ? 'fr' : 'en'}`}
            className='size-5 relative group overflow-hidden flex'
            aria-label='Toggle language'
          >
            <span className='absolute inset-0 transition-all duration-300 group-hover:translate-y-5 opacity-100 group-hover:opacity-0 leading-none self-center text-center'>
              {locale === 'en' ? 'EN' : 'FR'}
            </span>
            <span className='absolute inset-0 transition-all duration-300 -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 leading-none self-center text-center'>
              {locale === 'en' ? 'FR' : 'EN'}
            </span>
          </Link>

          <ToggleThemeButton />
        </div>
      </header>
      <Separator className='relative left-1/2 -translate-x-1/2 w-screen' />

      {children}

      <Separator className='relative left-1/2 -translate-x-1/2 w-screen' />
      <footer className='max-w-screen-2xl mx-auto w-full px-8 sm:px-20 font-normal text-[#282828] dark:text-[#D3D3D3] text-sm uppercase'>
        <div className='py-8 flex flex-col gap-4 sm:items-center'>
          <p>Travaillons ensemble!</p>

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
            Développé par{' '}
            <a
              href='https://erickgust.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='no-underline text-[#4F32FF] dark:text-[#B2FF5D] transition-all duration-150 hover:text-[#4F32FF] dark:hover:text-[#B2FF5D] sm:underline decoration-from-font decoration-wavy underline-offset-4 decoration-[#4F32FF]/0 dark:decoration-[#B2FF5D]/0 hover:decoration-[#4F32FF]/100 dark:hover:decoration-[#B2FF5D]/100'
            >
              Erick
            </a>
          </span>
          <Link
            href='/legal'
            className='no-underline text-[#4F32FF] dark:text-[#B2FF5D] transition-all duration-150 sm:underline decoration-from-font decoration-wavy underline-offset-4 decoration-[#4F32FF]/0 dark:decoration-[#B2FF5D]/0 hover:decoration-[#4F32FF]/100 dark:hover:decoration-[#B2FF5D]/100'
          >
            mentions légales
          </Link>
        </div>
      </footer>
    </div>
  )
}
