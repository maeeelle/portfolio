import clsx from 'clsx'

export function Separator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      role='none'
      className={clsx(
        'w-full h-px bg-[#E1E1E1] dark:bg-[#181818] shrink-0',
        className,
      )}
      {...props}
    />
  )
}
