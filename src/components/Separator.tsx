import clsx from 'clsx'

export function Separator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('w-full h-px bg-[#E1E1E1] shrink-0', className)}
      {...props}
    />
  )
}
