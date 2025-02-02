'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

declare global {
  interface Window {
    _updateTheme: (theme: Theme) => void
  }
}

type Theme = 'light' | 'dark' | 'system'

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | null>({
  theme: 'system',
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    const isDarkTheme =
      savedTheme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)

    setTheme(isDarkTheme ? 'dark' : 'light')
  }, [])

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}

export function ToggleThemeButton() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      type='button'
      aria-label='Toggle theme'
      data-dark={theme === 'dark'}
      className='w-5 h-5 relative group overflow-hidden group'
      onClick={() => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)

        window._updateTheme(newTheme)
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        fill='none'
        viewBox='0 0 20 20'
        className='absolute inset-0 transition-all duration-300 -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-data-[dark=true]:translate-y-0 group-data-[dark=true]:opacity-100 group-data-[dark=true]:group-hover:translate-y-5 group-data-[dark=true]:group-hover:opacity-0'
        aria-hidden='true'
      >
        <path
          fill='currentColor'
          d='M10 17.5c-2.083 0-3.854-.73-5.313-2.188C3.23 13.854 2.5 12.084 2.5 10s.73-3.854 2.188-5.313C6.146 3.23 7.917 2.5 10 2.5a7.77 7.77 0 0 1 1.125.083A4.414 4.414 0 0 0 9.76 4.157a4.415 4.415 0 0 0-.51 2.093c0 1.25.438 2.313 1.313 3.188.874.874 1.937 1.312 3.187 1.312.764 0 1.465-.17 2.104-.51a4.443 4.443 0 0 0 1.563-1.365A7.106 7.106 0 0 1 17.5 10c0 2.083-.73 3.854-2.188 5.313C13.854 16.77 12.084 17.5 10 17.5Zm0-1.667c1.222 0 2.32-.337 3.292-1.01a5.848 5.848 0 0 0 2.125-2.636 8.87 8.87 0 0 1-.834.167 5.618 5.618 0 0 1-.833.063c-1.708 0-3.163-.601-4.365-1.803C8.183 9.412 7.583 7.958 7.583 6.25c0-.278.021-.556.063-.833.042-.278.097-.556.167-.834a5.847 5.847 0 0 0-2.636 2.125c-.674.973-1.01 2.07-1.01 3.292 0 1.611.57 2.986 1.708 4.125 1.139 1.139 2.514 1.708 4.125 1.708Z'
        />
      </svg>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        className='absolute inset-0 transition-all duration-300 translate-y-0 opacity-100 group-hover:translate-y-5 group-hover:opacity-0 group-data-[dark=true]:-translate-y-5 group-data-[dark=true]:opacity-0 group-data-[dark=true]:group-hover:translate-y-0 group-data-[dark=true]:group-hover:opacity-100'
        aria-hidden='true'
      >
        <path d='M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m0 2q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75 3.875 5.325 5.3 3.85l2.4 2.5zm12.3 12.4-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525zM12 12' />
      </svg>
    </button>
  )
}
