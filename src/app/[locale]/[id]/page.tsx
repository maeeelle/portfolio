import { Link } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { projects } from '../_projects'
import Image from 'next/image'
import { ProjectTag } from '@/components/Project'

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className='font-bold text-xs text-[#AEAEAE] mb-1'>{children}</h2>
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className='text-base/relaxed font-[350] text-[#282828]'>{children}</p>
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
  const { id } = await params
  console.log(id)
  const project = getProjectById('mon-coach-bescherelle')

  if (!project) {
    notFound()
  }

  return (
    <div className='max-w-screen-2xl mx-auto min-h-screen flex text-[#161616]'>
      <div className='absolute top-0 bottom-0 right-0 bg-white -z-10 w-7/12' />

      <main className='bg-[#F9F9F9] flex-[6] px-20 py-5' role='main'>
        <nav aria-label='Back navigation' className='inline-flex'>
          <Link
            href='/'
            className='flex gap-2 items-center text-[#161616] text-base/none font-normal'
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
                fill='#000'
                d='M5.217 8.667 8.95 12.4l-.95.933L2.667 8 8 2.667l.95.933-3.733 3.733h8.116v1.334H5.217Z'
              />
            </svg>
            Retour
          </Link>
        </nav>

        <article className='mt-12 sticky top-5'>
          <header>
            <div className='text-base mb-4 inline-flex items-center gap-2 font-[350]'>
              <Image
                src={project.organization.image}
                alt={`${project.organization.name} logo`}
                width={80}
                height={80}
                className='rounded-sm size-5'
              />
              <span>{project.organization.name}</span>
            </div>
            <div className='text-3xl text-balance'>
              <h1 className='font-medium'>
                <span>{project.project.title}</span>
                <span> - </span>
                <span className='font-[350]'>{project.project.subtitle}</span>
              </h1>
            </div>
          </header>

          <div className='my-10 space-y-8'>
            <section>
              <Heading>Contexte</Heading>
              <Paragraph>
                Mon Coach Bescherelle est une application développée par Hatier
                proposant un entraînement en orthographe et en rédaction. Elle
                permet un apprentissage basé sur l’intelligence artificielle
                afin de s’adapter au parcours de l’utilisateur en temps réel.
                Cet outil est mis à disposition des entreprises et des écoles
                afin d’aider les personnes à progresser de manière ludique. Il
                cible surtout les lycéens et les salariés. Cette application
                présente à la fois un côté B2C et un côté B2B accessible via un
                code d’activation.  Mon coach Bescherelle permet aussi à ses
                utilisateurs de valider leurs compétences grâce à la
                certification Bescherelle.
              </Paragraph>
            </section>
            <section>
              <Heading>Contribution</Heading>
              <Paragraph>
                Le problème de Mon coach Bescherelle est son accessibilité. En
                effet, elle n’est présente que sous forme d’application sur
                smartphone. Ma mission était donc de rendre Mon Coach
                Bescherelle disponible sur la plateforme Educadhoc tout en
                prenant en compte les contraintes posées par celle-ci.
              </Paragraph>
            </section>
          </div>

          <footer className='flex justify-between items-center'>
            <ul className='inline-flex gap-2 flex-wrap list-none p-0'>
              <ProjectTag name='UX' />
              <ProjectTag name='UI' />
              <ProjectTag name='Web Application' />
            </ul>

            <small className='font-[350] text-[#8E8E8E] text-base/5'>
              2020
            </small>
          </footer>
        </article>
      </main>

      <aside
        className='bg-white flex-[8] px-20 py-20 mt-2 flex flex-col gap-10'
        role='complementary'
      >
        <Image
          src='/images/projects/mon-coach-bescherelle/pré-accueil-1.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/tableau-de-bord-test.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/tableau-de-bord-n1-td.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/parcours-test.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/parcours-conjugaison-intermédiaire.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/parcours-rédaction-Intermédiaire.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/parcours-confusions-exercice.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/parcours-accords-exercice.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none'
        />
        <Image
          src='/images/projects/mon-coach-bescherelle/vidéos-accords.png'
          alt=''
          width={1920}
          height={1080}
          className='rounded-lg w-full select-none'
        />
      </aside>
    </div>
  )
}
