export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className='mb-8 font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
      <span className='bg-white dark:bg-black relative pr-4'>{children}</span>
    </h2>
  )
}
