export function Aside({ children }: { children: React.ReactNode }) {
  return (
    <aside
      className='bg-white dark:bg-black flex-8 flex flex-col gap-10 px-8 pt-16 pb-12 xl:px-20 xl:pt-20 xl:pb-20'
      role='complementary'
    >
      <div className='absolute top-0 bottom-0 right-0 bg-white dark:bg-black w-7/12 -z-10' />
      {children}
    </aside>
  )
}
