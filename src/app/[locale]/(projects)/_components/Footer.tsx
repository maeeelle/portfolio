type ProjectFooterProps = {
  children: React.ReactNode
  year: string
}

export function ProjectFooter({ children, year }: ProjectFooterProps) {
  return (
    <footer className='flex justify-between items-center mt-10'>
      {children}

      <small className='font-[350] text-[#8E8E8E] dark:text-[#737373] text-base/5'>
        {year}
      </small>
    </footer>
  )
}
