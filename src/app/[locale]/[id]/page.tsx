import { Link } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { projects } from '../_projects'
import Image from 'next/image'

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
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  console.log(project)

  return (
    <div className='max-w-screen-2xl mx-auto min-h-screen flex text-[#161616]'>
      <main className='bg-[#F9F9F9] flex-1 px-20 py-5' role='main'>
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

        <article className='relative mt-12'>
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

          {/* TODO */}
          <div className='content'>{/* body content here */}</div>
        </article>
      </main>

      {/* TODO */}
      <aside className='bg-white flex-1 px-20 py-5' role='complementary'>
        {/* aside content */}
      </aside>
    </div>
  )
}
