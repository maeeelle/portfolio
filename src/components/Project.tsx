import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/app/[locale]/_projects'

type ProjectTagProps = {
  name: string
}

function ProjectTag({ name }: ProjectTagProps) {
  return (
    <span className='text-[#838383] text-base/none px-2 py-1.5 rounded-sm border border-[#DBDBDB]'>
      {name}
    </span>
  )
}

export function Project({ organization, project, tags, id }: Project) {
  return (
    <Link href={`/project/${id}`}>
      <article className='font-[350] pr-12'>
        <div>
          <div className='text-[#161616] text-base mb-4 inline-flex items-center gap-2'>
            <Image
              src={organization.image}
              alt={organization.name}
              width={80}
              height={80}
              className='rounded-sm size-5'
              aria-hidden
            />
            <div>
              <span>{organization.name}</span>
              <span> - </span>
              <span>{organization.year}</span>
            </div>
          </div>
          <div>
            <h2 className='text-4.5xl/none text-black mb-2'>{project.title}</h2>
            <span className='text-[#8E8E8E] text-2xl/none'>
              {project.subtitle}
            </span>
          </div>
        </div>

        <div className='inline-flex gap-2 flex-wrap mt-6'>
          {tags.map((tag) => (
            <ProjectTag key={tag} name={tag} />
          ))}
        </div>
      </article>
    </Link>
  )
}
