import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { LockIcon } from './LockIcon'
import { useLocale } from 'next-intl'

type ProjectTagProps = {
  name: string
}

export function ProjectTag({ name }: ProjectTagProps) {
  return (
    <li className='text-[#838383] dark:text-[#6D6D6D] text-base/[.7] -tracking-[.02em] px-2 py-1.5 rounded-xs border border-[#DBDBDB] dark:border-[#3C3C3C] font-[350]'>
      {name}
    </li>
  )
}

export function ProjectTagList({ children }: { children: React.ReactNode }) {
  return (
    <ul className='inline-flex gap-2 flex-wrap list-none p-0'>{children}</ul>
  )
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='none'
      viewBox='0 0 32 32'
      className={className}
    >
      <path
        fill='currentColor'
        className='dark:fill-[#B2FF5D] fill-[#4F32FF]'
        d='M8 8v2.667h11.453L6.667 23.453l1.88 1.88 12.786-12.786V24H24V8H8Z'
      />
    </svg>
  )
}

type ProjectProps = {
  id: string
  organization: {
    name: string
    image: string
  }
  project: {
    year: string
    title: string
    subtitle: string
  }
  tags: string[]
  isLocked?: boolean
}

export function Project({
  organization,
  project,
  tags,
  id,
  isLocked,
}: ProjectProps) {
  const titleId = `project-${id}-title`
  const locale = useLocale()

  return (
    <article className='font-[350]'>
      <Link
        href={isLocked ? '/' : `/${id}`}
        aria-labelledby={titleId}
        data-locked={!!isLocked}
        scroll={!isLocked}
        locale={locale}
        className='block group'
      >
        <div className='relative mb-5 sm:mb-7'>
          <div className='text-[#161616] dark:text-[#D3D3D3] text-base -tracking-[.02em] mb-4 sm:mb-5 inline-flex items-center gap-2'>
            <Image
              src={organization.image}
              alt={`${organization.name} logo`}
              width={80}
              height={80}
              className='rounded-xs size-5'
            />
            <span>{organization.name}</span>
          </div>
          <div>
            <h2
              id={titleId}
              className='text-3xl/none sm:text-4.5xl/none text-[#282828] dark:text-[#D3D3D3] inline-flex mb-3 sm:mb-2 items-center gap-2 group-hover:group-data-[locked=false]:text-[#4F32FF] dark:group-hover:group-data-[locked=false]:text-[#B2FF5D] group-focus-visible:group-data-[locked=false]:text-[#4F32FF] dark:group-focus-visible:group-data-[locked=false]:text-[#B2FF5D] transition-colors duration-150'
            >
              {project.title}
              {isLocked ? (
                <LockIcon className='shrink-0 group-focus:animate-wiggle group-active:animate-none text-[#DBDBDB] dark:text-[#3C3C3C] group-focus:text-red-500 transition-colors duration-75' />
              ) : (
                <ArrowIcon className='hidden shrink-0 sm:inline-block transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0' />
              )}
            </h2>
            <p className='text-[#8E8E8E] dark:text-[#6D6D6D] text-xl/[22px] sm:text-2xl/7'>
              {project.subtitle}
            </p>
          </div>
        </div>

        <div className='text-[#8E8E8E] -tracking-[.02em] flex flex-col sm:flex-row gap-4 sm:items-center'>
          <time
            dateTime={project.year}
            className='font-[350] text-base leading-[.7]'
          >
            {project.year}
          </time>

          <span className='hidden sm:inline-block' aria-hidden>
            •
          </span>

          <ProjectTagList>
            {tags.map((tag) => (
              <ProjectTag key={tag} name={tag} />
            ))}
          </ProjectTagList>
        </div>
      </Link>
    </article>
  )
}
