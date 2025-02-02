import { Project } from '@/components/Project'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import { projects } from './_projects'
import { Separator } from '@/components/Separator'
import { ToggleButton } from '@/components/ThemeToggle'

type HomeProps = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className='min-h-dvh flex flex-col relative overflow-hidden'>
      <header className='max-w-screen-2xl mx-auto w-full flex flex-wrap justify-between items-center px-8 sm:px-20 pb-5 pt-5 font-normal text-[#282828] text-base'>
        <Link href='/doc/cv_maelle.pdf' className='max-sm:text-[#4F32FF]'>
          CV
        </Link>

        <h1 className='max-sm:-order-1 w-full sm:w-auto mb-1.5 sm:mb-0'>
          Maëlle - Digital Product Designer
        </h1>

        <div className='flex gap-5 items-center'>
          <Link
            // href={`/${locale === 'en' ? 'fr' : 'en'}`}
            href='/fr'
            className='w-6 h-5 relative group overflow-hidden flex'
            aria-label='Toggle language'
          >
            <span className='absolute inset-0 transition-all duration-300 group-hover:translate-y-5 opacity-100 group-hover:opacity-0 leading-tight'>
              {/* {locale === 'en' ? 'EN' : 'FR'} */}
              FR
            </span>
            <span className='absolute inset-0 transition-all duration-300 -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 leading-tight'>
              {/* {locale === 'en' ? 'FR' : 'EN'} */}
              EN
            </span>
          </Link>

          <ToggleButton />
        </div>
      </header>
      <Separator className='relative left-1/2 -translate-x-1/2 w-screen' />

      <main className='relative flex flex-col gap-y-20 px-8 sm:px-20 py-10 max-w-screen-2xl mx-auto flex-1 w-full'>
        {projects.map((project, index) => (
          <div key={project.id}>
            <Project {...project} />
            {index < projects.length - 1 && (
              <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
            )}
          </div>
        ))}
      </main>

      <Separator className='relative left-1/2 -translate-x-1/2 w-screen' />
      <footer className='max-w-screen-2xl mx-auto w-full flex flex-col gap-4 sm:flex-row sm:gap-0 sm:justify-between sm:items-center px-8 sm:px-20 pb-12 sm:pb-6 pt-8 sm:pt-5 font-normal text-[#282828] text-base'>
        <span>
          Développé par{' '}
          <a
            href='https://erickgust.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='no-underline text-[#4F32FF] sm:text-inherit transition-all duration-150 hover:text-[#4F32FF] sm:underline decoration-from-font decoration-wavy underline-offset-4 decoration-[#4F32FF]/0 hover:decoration-[#4F32FF]/100'
          >
            Erick
          </a>
        </span>
        <a
          href='#'
          className='no-underline text-[#4F32FF] sm:text-inherit transition-all duration-150 hover:text-[#4F32FF] sm:underline decoration-from-font decoration-wavy underline-offset-4 decoration-[#4F32FF]/0 hover:decoration-[#4F32FF]/100'
        >
          Crédits
        </a>
        <span>Mis à jour : Février 2025</span>
      </footer>
    </div>
  )
}
