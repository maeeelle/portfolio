import { Link } from '@/i18n/routing'

type ExternalLinkProps = {
  href: string
  children: React.ReactNode
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <Link
      href={href}
      className='px-4 py-3.5 mt-10 rounded inline-block leading-none font-[350] -tracking-[.02em] text-[#F9F9F9] bg-[#161616] dark:bg-[#F9F9F9] dark:text-[#161616]'
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </Link>
  )
}
