export function ProjectArticle({ children }: { children: React.ReactNode }) {
  return (
    <article className='flex flex-col justify-between flex-1'>
      {children}
    </article>
  )
}
