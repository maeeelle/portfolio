import Image from 'next/image'
import type { Project } from '@/app/[locale]/_projects'
import { Link } from '@/i18n/routing'

type ProjectTagProps = {
  name: string
}

export function ProjectTag({ name }: ProjectTagProps) {
  return (
    <li className='text-[#838383] text-base/none px-2 py-1.5 rounded-sm border border-[#DBDBDB] font-[350]'>
      {name}
    </li>
  )
}

function ArrowIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='none'
      viewBox='0 0 32 32'
      className='transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
    >
      <path
        fill='#4F32FF'
        d='M8 8v2.667h11.453L6.667 23.453l1.88 1.88 12.786-12.786V24H24V8H8Z'
      />
    </svg>
  )
}

export function Project({ organization, project, tags, id }: Project) {
  const titleId = `project-${id}-title`

  return (
    <Link href={`/${id}`} aria-labelledby={titleId} className='block group'>
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
            <h2
              id={titleId}
              className='text-4.5xl/none text-black mb-2 inline-flex items-center gap-2 group-hover:text-[#4F32FF] transition-colors duration-150'
            >
              {project.title}
              <ArrowIcon />
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
