import type { Config } from 'tailwindcss'

export default {
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
      fontSize: {
        '5xl': '3.25rem',
        '5.5xl': '3.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config
