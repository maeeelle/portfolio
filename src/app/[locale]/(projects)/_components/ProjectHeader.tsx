import Image from 'next/image'

type ProjectHeaderProps = {
  logoSrc: string
  logoAlt: string
  company: string
  title: string
  subtitle: string
}

export function ProjectHeader({
  logoSrc,
  logoAlt,
  company,
  title,
  subtitle,
}: ProjectHeaderProps) {
  return (
    <header>
      <div className='text-base mb-2 xl:mb-4 inline-flex items-center gap-2 font-[350]'>
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={80}
          height={80}
          className='rounded-sm size-5'
        />
        <span>{company}</span>
      </div>
      <div className='text-3xl/[2.25rem]'>
        <h1 className='font-medium'>
          <span>{title}</span>
          <span> - </span>
          <span className='font-normal xl:font-[350]'>{subtitle}</span>
        </h1>
      </div>
    </header>
  )
}
