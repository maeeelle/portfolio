import Image from 'next/image'
import type { Project } from '@/app/[locale]/_projects'
import { Link } from '@/i18n/routing'

type ProjectTagProps = {
  name: string
}

export function ProjectTag({ name }: ProjectTagProps) {
  return (
    <li className='text-[#838383] dark:text-[#6D6D6D] text-base/[.7] -tracking-[.02em] px-2 py-1.5 rounded-sm border border-[#DBDBDB] dark:border-[#3C3C3C] font-[350]'>
      {name}
    </li>
  )
}

export function ProjectTagList({ children }: { children: React.ReactNode }) {
  return (
    <ul className='inline-flex gap-2 flex-wrap list-none p-0'>{children}</ul>
  )
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='28'
      height='28'
      fill='none'
      viewBox='0 0 28 28'
      className={className}
    >
      <path
        fill='#DBDBDB'
        d='M4.667 25.667V9.333h3.5V7c0-1.614.569-2.99 1.706-4.126C11.011 1.736 12.387 1.167 14 1.167c1.613-.001 2.989.568 4.128 1.707C19.266 4.012 19.835 5.388 19.833 7v2.333h3.5v16.334H4.667ZM7 23.333h14V11.667H7v11.666Zm7-3.5a2.25 2.25 0 0 0 1.649-.684 2.241 2.241 0 0 0 .684-1.649 2.25 2.25 0 0 0-.684-1.647A2.255 2.255 0 0 0 14 15.167a2.227 2.227 0 0 0-1.647.686 2.27 2.27 0 0 0-.686 1.647c-.003.64.226 1.189.686 1.648.46.46 1.008.689 1.647.685Zm-3.5-10.5h7V7c0-.972-.34-1.799-1.02-2.48-.681-.68-1.508-1.02-2.48-1.02s-1.799.34-2.48 1.02c-.68.681-1.02 1.508-1.02 2.48v2.333Z'
      />
    </svg>
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
  isLocked?: boolean
} & Project

export function Project({
  organization,
  project,
  tags,
  id,
  isLocked,
}: ProjectProps) {
  const titleId = `project-${id}-title`

  return (
    <Link
      href={isLocked ? '' : `/${id}`}
      aria-labelledby={titleId}
      data-locked={!!isLocked}
      className='block group data-[locked=true]:cursor-not-allowed'
    >
      <article aria-labelledby={titleId} className='font-[350]'>
        <header className='relative'>
          <div className='text-[#161616] dark:text-[#D3D3D3] text-base -tracking-[.02em] mb-5 sm:mb-6 inline-flex items-center gap-2'>
            <Image
              src={organization.image}
              alt={`${organization.name} logo`}
              width={80}
              height={80}
              className='rounded-sm size-5'
            />
            <div>
              <span>{organization.name}</span>
            </div>
          </div>
          <div>
            <h2
              id={titleId}
              className='text-3xl/none sm:text-4.5xl/none text-[#282828] dark:text-[#D3D3D3] inline-flex mb-3 sm:mb-2 items-center gap-2 group-data-[locked=false]:group-hover:text-[#4F32FF] dark:group-data-[locked=false]:group-hover:text-[#B2FF5D] transition-colors duration-150 leading-[.7]'
            >
              {project.title}
              {isLocked ? (
                <LockIcon className='fill-[#DBDBDB] dark:fill-[#3C3C3C] shrink-0' />
              ) : (
                <ArrowIcon className='hidden shrink-0 sm:inline-block transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0' />
              )}
            </h2>
            <p className='text-[#8E8E8E] dark:text-[#6D6D6D] text-xl/[22px] sm:text-2xl/7'>
              {project.subtitle}
            </p>
          </div>
        </header>

        <footer className='mt-5 sm:mt-7 text-[#8E8E8E] -tracking-[.02em] flex flex-col sm:flex-row gap-4 sm:items-center'>
          <small className='font-[350] text-base leading-[.7]'>
            {organization.year}
          </small>

          <span className='hidden sm:inline-block'>•</span>

          <ProjectTagList>
            {tags.map((tag) => (
              <ProjectTag key={tag} name={tag} />
            ))}
          </ProjectTagList>
        </footer>
      </article>
    </Link>
  )
}
