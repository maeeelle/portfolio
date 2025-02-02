import { Link } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { projects } from '../_projects'
import Image from 'next/image'
import { ProjectTag } from '@/components/Project'
import { setRequestLocale } from 'next-intl/server'

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className='font-bold text-xs text-[#AEAEAE] dark:text-[#4C4C4C] mb-2 sm:mb-1 uppercase'>
      {children}
    </h2>
  )
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className='text-base text-pretty leading-normal sm:leading-[21px] font-[350] text-[#282828] dark:text-[#D3D3D3] has-[+p]:mb-1'>
      {children}
    </p>
  )
}

type PageProps = {
  params: Promise<{
    id: string
    locale: string
  }>
}

function getProjectById(id: string) {
  return projects.find((project) => project.id === id)
}

export default async function ProjectPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const project = getProjectById('mon-coach-bescherelle')

  if (!project) {
    notFound()
  }

  return (
    <div className='max-w-screen-2xl mx-auto min-h-screen flex flex-col lg:flex-row text-[#161616] dark:text-[#D3D3D3] tracking-[-.02em]'>
      <div className='absolute top-0 bottom-0 right-0 bg-white dark:bg-black w-7/12' />

      <main
        className='bg-[#F9F9F9] dark:bg-[#0F0F0F] flex-[6] px-8 xl:px-20 pt-5 pb-16 xl:pb-5 flex min-h-[inherit] h-full sticky top-0'
        role='main'
      >
        <div className='flex-1 flex flex-col'>
          <nav aria-label='Back navigation' className='inline-flex'>
            <Link
              href='/'
              className='flex gap-2 items-center text-base/none font-normal tracking-normal'
              aria-label='Return to home page'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='none'
                viewBox='0 0 16 16'
                aria-hidden='true'
                role='img'
              >
                <path
                  fill='currentColor'
                  d='M5.217 8.667 8.95 12.4l-.95.933L2.667 8 8 2.667l.95.933-3.733 3.733h8.116v1.334H5.217Z'
                />
              </svg>
              Retour
            </Link>
          </nav>

          <article className='mt-[3.75rem] flex flex-col justify-between flex-1'>
            <div>
              <header>
                <div className='text-base mb-2 sm:mb-4 inline-flex items-center gap-2 font-[350]'>
                  <Image
                    src={project.organization.image}
                    alt={`${project.organization.name} logo`}
                    width={80}
                    height={80}
                    className='rounded-sm size-5'
                  />
                  <span>{project.organization.name}</span>
                </div>
                <div className='text-3xl/[2.25rem]'>
                  <h1 className='font-medium'>
                    <span>{project.project.title}</span>
                    <span> - </span>
                    <span className='font-normal sm:font-[350]'>
                      Repenser une application mobile en une solution web
                      adaptée aux contraintes de la plateforme Educadhoc
                    </span>
                  </h1>
                </div>
              </header>

              <div className='mt-8 space-y-10 sm:space-y-8'>
                <section>
                  <Heading>Contexte</Heading>
                  <Paragraph>
                    Mon Coach Bescherelle est un outil développé par Hatier
                    proposant un entraînement en orthographe et en rédaction.
                  </Paragraph>
                  <Paragraph>
                    Son problème principal était son accessibilité. Le service
                    n&apos;était présent que sous forme d’application sur
                    smartphone. Ma mission était donc de le rendre disponible
                    sur la plateforme éducative Educadhoc tout en prenant en
                    compte les contraintes imposées par sa mise en page.
                  </Paragraph>
                </section>
                <section>
                  <Heading>Contribution</Heading>
                  <Paragraph>
                    Le problème de Mon coach Bescherelle est son accessibilité.
                    En effet, elle n’est présente que sous forme d’application
                    sur smartphone. Ma mission était donc de rendre Mon Coach
                    Bescherelle disponible sur la plateforme Educadhoc tout en
                    prenant en compte les contraintes posées par celle-ci.
                  </Paragraph>
                </section>
              </div>

              <Link
                href='#'
                className='p-4 mt-10 rounded inline-block leading-none font-[350] -tracking-[.02em] text-[#F9F9F9] bg-[#161616] dark:bg-[#F9F9F9] dark:text-[#161616]'
              >
                Accéder à la démo
              </Link>
            </div>

            <footer className='flex justify-between items-center mt-10'>
              <ul className='inline-flex gap-2 flex-wrap list-none p-0'>
                <ProjectTag name='UX' />
                <ProjectTag name='UI' />
                <ProjectTag name='Web Application' />
              </ul>

              <small className='font-[350] text-[#8E8E8E] dark:text-[#737373] text-base/5'>
                2020
              </small>
            </footer>
          </article>
        </div>
      </main>

      <aside
        className='bg-white dark:bg-black flex-[8] flex flex-col gap-10 px-8 pt-16 pb-12 xl:px-20 xl:pt-20 xl:pb-20 xl:mt-2 relative'
        role='complementary'
      >
        <Image
          src='/images/projects/mon-coach-bescherelle/pré-accueil-1.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none border border-black/10 dark:border-white/10'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/tableau-de-bord-test.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none border border-black/10 dark:border-white/10'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/tableau-de-bord-n1-td.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none border border-black/10 dark:border-white/10'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/parcours-test.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none border border-black/10 dark:border-white/10'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/parcours-conjugaison-intermédiaire.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none border border-black/10 dark:border-white/10'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/parcours-rédaction-Intermédiaire.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none border border-black/10 dark:border-white/10'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/parcours-confusions-exercice.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none border border-black/10 dark:border-white/10'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/parcours-accords-exercice.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none border border-black/10 dark:border-white/10'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/vidéos-accords.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none border border-black/10 dark:border-white/10'
        />
      </aside>
    </div>
  )
}
