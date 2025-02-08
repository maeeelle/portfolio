export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-(--breakpoint-2xl) mx-auto min-h-screen flex flex-col xl:flex-row text-[#161616] dark:text-[#D3D3D3] tracking-[-.02em]'>
      {children}
    </div>
  )
}
