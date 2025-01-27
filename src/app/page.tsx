import Image from 'next/image'

export default function Home() {
  return (
    <div className='min-h-dvh flex flex-col relative overflow-hidden max-h-dvh'>
      <header className='bg-[#161C51] p-6 sm:p-4.5 flex justify-center items-center'>
        <p className='text-sm text-[#F1F2FF] font-normal uppercase max-sm:max-w-56'>
          Portfolio update coming soon, 2022&apos;s book is available{' '}
          <a href='/doc/book.pdf' className='inline-flex items-center gap-0.5'>
            <span className='underline decoration-wavy underline-offset-4 decoration-from-font text-white'>
              here
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='14'
              fill='none'
              viewBox='0 0 14 14'
            >
              <path
                fill='#fff'
                d='m3.733 10.5-.816-.817 5.6-5.6H3.5V2.917h7v7H9.333V4.9l-5.6 5.6Z'
              />
            </svg>
          </a>
        </p>
      </header>

      <main className='max-w-screen-lg px-11 py-14 sm:py-20 flex-1 flex flex-col justify-end xl:ml-[12.5rem]'>
        <Image
          role='presentation'
          src='/blur-bg.webp'
          alt=''
          width={1512}
          height={982}
          priority
          className='pointer-events-none absolute right-0 top-0 w-full h-screen object-cover select-none -z-10'
        />
        <Image
          role='presentation'
          src='/maelle-bg.webp'
          alt=''
          width={2578}
          height={659}
          unoptimized
          priority
          className='pointer-events-none absolute -left-24 sm:-left-12 bottom-16 object-cover object-left min-w-max w-full 2xl:min-w-[171vw] select-none -z-10 mix-blend-multiply supports-[mix-blend-mode:plus-darker]:mix-blend-plus-darker'
        />
        <div className='mb-6 flex gap-4'>
          <a
            href='https://www.linkedin.com/in/maellems/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm text-[#11187F] p-3 bg-white bg-opacity-40 rounded-lg leading-none border border-white gap-2 inline-flex items-center backdrop-blur-sm'
            aria-label='Visit LinkedIn profile'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='none'
              viewBox='0 0 16 16'
            >
              <path
                fill='#0C1354'
                d='M3.322 4.798a1.459 1.459 0 1 0 0-2.917 1.459 1.459 0 0 0 0 2.917ZM6.158 5.903v8.093h2.513V9.994c0-1.056.198-2.079 1.508-2.079 1.291 0 1.307 1.208 1.307 2.146v3.936H14V9.559c0-2.18-.47-3.856-3.017-3.856-1.224 0-2.044.672-2.379 1.307H8.57V5.903H6.158Zm-4.095 0H4.58v8.093H2.063V5.903Z'
              />
            </svg>
          </a>
          <a
            href='mailto:moisismaelle@gmail.com'
            className='text-sm text-[#11187F] p-3 bg-white bg-opacity-40 rounded-lg leading-none border border-white gap-2 inline-flex items-center backdrop-blur-sm'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='none'
              viewBox='0 0 16 16'
            >
              <path
                fill='#0C1354'
                d='M13.333 2.667H2.667c-.736 0-1.334.598-1.334 1.333v8c0 .735.598 1.333 1.334 1.333h10.666c.736 0 1.334-.598 1.334-1.333V4c0-.735-.598-1.333-1.334-1.333Zm0 1.333v.34L8 8.49 2.667 4.34V4h10.666ZM2.667 12V6.03L7.59 9.86a.663.663 0 0 0 .818 0l4.924-3.83.002 5.97H2.667Z'
              />
            </svg>

            <span>moisismaelle@gmail.com</span>
          </a>
        </div>

        <h1 className='inline-block font-normal text-5xl sm:text-5.5xl italic text-[#0C1354] max-w-5xl leading-[56px] sm:leading-[65px]'>
          Digital product designer based in Paris{' '}
          <span className='hidden lg:inline'>
            <br />
          </span>
          focused on clean and user-centered solutions
        </h1>
      </main>
    </div>
  )
}
