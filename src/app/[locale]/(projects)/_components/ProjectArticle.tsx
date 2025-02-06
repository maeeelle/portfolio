export function ProjectArticle({ children }: { children: React.ReactNode }) {
  return (
    <article className='mt-[3.75rem] flex flex-col justify-between flex-1'>
      {children}
    </article>
  )
}
