import clsx from 'clsx'

export function TeamMemberLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'a'>) {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      className={clsx(
        'relative underline text-[#4F32FF] dark:text-[#B2FF5D] transition-all duration-150 decoration-from-font decoration-wavy underline-offset-4 decoration-[#4F32FF]/0 dark:decoration-[#B2FF5D]/0 hover:decoration-[#4F32FF]/100 dark:hover:decoration-[#B2FF5D]/100',
        className,
      )}
      {...props}
    >
      {props.children}
    </a>
  )
}
