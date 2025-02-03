import type { Config } from 'tailwindcss'

export default {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      spacing: {
        4.5: '1.125rem',
      },
      maxWidth: {
        'screen-lg': '1112px',
      },
      screens: {
        xl: '1200px',
      },
      fontSize: {
        xs: ['0.625rem', '0.75rem'],
        '3xl': ['2rem', '2.5rem'],
        '4.5xl': ['2.5rem', '3.5rem'],
        '5xl': '3.25rem',
        '5.5xl': '3.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config
