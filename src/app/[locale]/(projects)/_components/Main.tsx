export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main
      className='bg-[#F9F9F9] dark:bg-[#0F0F0F] flex-[6] px-8 xl:px-20 pt-5 pb-16 xl:pb-5 flex min-h-[inherit] h-full relative xl:sticky top-0'
      role='main'
    >
      <div className='flex-1 flex flex-col'>{children}</div>
    </main>
  )
}
