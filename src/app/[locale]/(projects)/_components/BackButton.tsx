import { Link } from '@/i18n/routing'

export function BackButton() {
  return (
    <nav aria-label='Back navigation' className='inline-flex'>
      <Link
        href='/'
        className='flex gap-2 items-center text-sm uppercase font-normal tracking-normal text-[#161616] dark:text-[#D3D3D3]'
        aria-label='Return to home page'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='none'
          viewBox='0 0 16 16'
          aria-hidden='true'
          role='img'
        >
          <path
            fill='currentColor'
            d='M5.217 8.667 8.95 12.4l-.95.933L2.667 8 8 2.667l.95.933-3.733 3.733h8.116v1.334H5.217Z'
          />
        </svg>
        <span className='leading-[0.7]'>Retour</span>
      </Link>
    </nav>
  )
}
