'use client'

import { Link, usePathname } from '@/i18n/routing'

type LanguageToggleButtonProps = {
  defaultLocale: string
}

export function LanguageToggleButton({
  defaultLocale,
}: LanguageToggleButtonProps) {
  const pathname = usePathname()

  return (
    <Link
      className='size-5 relative group overflow-hidden flex'
      aria-label={
        defaultLocale === 'en' ? 'Switch to French' : 'Passer en anglais'
      }
      href={pathname}
      locale={defaultLocale === 'en' ? 'fr' : 'en'}
    >
      <span className='absolute inset-0 transition-all duration-300 group-hover:translate-y-5 opacity-100 group-hover:opacity-0 leading-none self-center text-center'>
        {defaultLocale === 'en' ? 'EN' : 'FR'}
      </span>
      <span className='absolute inset-0 transition-all duration-300 -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 leading-none self-center text-center'>
        {defaultLocale === 'en' ? 'FR' : 'EN'}
      </span>
    </Link>
  )
}
