import { Project } from '@/components/Project'
import { setRequestLocale } from 'next-intl/server'
import { projects } from '../_projects'
import { Separator } from '@/components/Separator'

type HomeProps = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
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
  )
}
