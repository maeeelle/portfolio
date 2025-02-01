import Image from 'next/image'
import type { Project } from '@/app/[locale]/_projects'
import { Link } from '@/i18n/routing'

type ProjectTagProps = {
  name: string
}

function ProjectTag({ name }: ProjectTagProps) {
  return (
    <li className='text-[#838383] text-base/none px-2 py-1.5 rounded-sm border border-[#DBDBDB]'>
      {name}
    </li>
  )
}

export function Project({ organization, project, tags, id }: Project) {
  const titleId = `project-${id}-title`

  return (
    <Link href={`/${id}`} aria-labelledby={titleId} className='block'>
      <article aria-labelledby={titleId} className='font-[350] pr-12'>
        <header>
          <div className='text-[#161616] text-base mb-4 inline-flex items-center gap-2'>
            <Image
              src={organization.image}
              alt={`${organization.name} logo`}
              width={80}
              height={80}
              className='rounded-sm size-5'
            />
            <div>
              <span>{organization.name}</span>
              <span> - </span>
              <span>{organization.year}</span>
            </div>
          </div>
          <div>
            <h2 id={titleId} className='text-4.5xl/none text-black mb-2'>
              {project.title}
            </h2>
            <p className='text-[#8E8E8E] text-2xl/none'>{project.subtitle}</p>
          </div>
        </header>

        <footer className='mt-6'>
          <ul
            className='inline-flex gap-2 flex-wrap list-none p-0'
            aria-label='Project technologies'
          >
            {tags.map((tag) => (
              <ProjectTag key={tag} name={tag} />
            ))}
          </ul>
        </footer>
      </article>
    </Link>
  )
}
