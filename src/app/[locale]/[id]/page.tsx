import { Link } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { projects } from '../_projects'

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
    <div>
      <main className='bg-[#F9F9F9]'>
        <Link
          href='/'
          className='flex gap-2 items-center text-[#161616] text-base/none font-normal'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='none'
            viewBox='0 0 16 16'
          >
            <path
              fill='#000'
              d='M5.217 8.667 8.95 12.4l-.95.933L2.667 8 8 2.667l.95.933-3.733 3.733h8.116v1.334H5.217Z'
            />
          </svg>
          Retour
        </Link>
      </main>
      <aside className='bg-white'></aside>
    </div>
  )
}
