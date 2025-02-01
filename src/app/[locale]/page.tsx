import { Project } from '@/components/Project'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import { projects } from './_projects'
import { Separator } from '@/components/Separator'

type HomeProps = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className='min-h-dvh flex flex-col relative overflow-hidden'>
      <header className='flex justify-between items-center px-20 py-5 font-normal text-[#282828] text-base'>
        <nav className='space-x-4'>
          <Link href='/' className='font-medium'>
            Projets
          </Link>
          <Link href='/doc/book.pdf'>CV</Link>
        </nav>

        <h1>Maëlle - Digital Product Designer</h1>

        <div className='flex gap-5 items-center'>
          <button>EN</button>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                fill='#000'
                d='M10 17.5c-2.083 0-3.854-.73-5.313-2.188C3.23 13.854 2.5 12.084 2.5 10s.73-3.854 2.188-5.313C6.146 3.23 7.917 2.5 10 2.5a7.77 7.77 0 0 1 1.125.083A4.414 4.414 0 0 0 9.76 4.157a4.415 4.415 0 0 0-.51 2.093c0 1.25.438 2.313 1.313 3.188.874.874 1.937 1.312 3.187 1.312.764 0 1.465-.17 2.104-.51a4.443 4.443 0 0 0 1.563-1.365A7.106 7.106 0 0 1 17.5 10c0 2.083-.73 3.854-2.188 5.313C13.854 16.77 12.084 17.5 10 17.5Zm0-1.667c1.222 0 2.32-.337 3.292-1.01a5.848 5.848 0 0 0 2.125-2.636 8.87 8.87 0 0 1-.834.167 5.618 5.618 0 0 1-.833.063c-1.708 0-3.163-.601-4.365-1.803C8.183 9.412 7.583 7.958 7.583 6.25c0-.278.021-.556.063-.833.042-.278.097-.556.167-.834a5.847 5.847 0 0 0-2.636 2.125c-.674.973-1.01 2.07-1.01 3.292 0 1.611.57 2.986 1.708 4.125 1.139 1.139 2.514 1.708 4.125 1.708Z'
              />
            </svg>
          </button>
        </div>
      </header>
      <Separator className='relative left-1/2 -translate-x-1/2 w-screen' />

      <main className='flex flex-col gap-y-10 px-20 py-10 max-w-screen-2xl mx-auto flex-1'>
        {projects.map((project, index) => (
          <div key={project.id}>
            <Project {...project} />
            {index < projects.length - 1 && (
              <Separator className='mt-10 relative left-1/2 -translate-x-1/2 w-screen' />
            )}
          </div>
        ))}
      </main>

      <Separator className='relative left-1/2 -translate-x-1/2 w-screen' />
      <footer className='flex justify-between items-center px-20 pb-6 pt-5 font-normal text-[#282828] text-base'>
        <span>
          Développé par{' '}
          <a
            href='https://erickgust.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-all duration-150 hover:text-[#0400FF] underline decoration-from-font decoration-wavy underline-offset-4 decoration-[#0400FF]/0 hover:decoration-[#0400FF]/100'
          >
            Erick
          </a>
        </span>
        <a
          href='#'
          className='transition-all duration-150 hover:text-[#0400FF] underline decoration-from-font decoration-wavy underline-offset-4 decoration-[#0400FF]/0 hover:decoration-[#0400FF]/100'
        >
          Crédits
        </a>
        <span>Mis à jour : Février 2025</span>
      </footer>
    </div>
  )
}
