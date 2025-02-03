export function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className='text-base text-pretty leading-normal xl:leading-[21px] font-[350] text-[#282828] dark:text-[#D3D3D3] has-[+p]:mb-1'>
      {children}
    </p>
  )
}
