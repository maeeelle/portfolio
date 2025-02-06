export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className='font-bold text-xs text-[#AEAEAE] dark:text-[#4C4C4C] mb-2 xl:mb-1 uppercase'>
      {children}
    </h2>
  )
}
