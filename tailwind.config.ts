import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        corugette: ['var(--font-corugette)'],
        sriracha: ['var(--font-sriracha)'],
      },
      colors: {
        background: 'hsl(var(--background))',
        text: 'rgba(var(--text))',
        'text-secondary': 'rgba(var(--text-secondary))',
        'text-inverted': 'rgba(var(--text-inverted))',
        'text-cta': 'rgba(var(--text-cta))',
        border: 'rgba(var(--border))',
        'border-focus': 'rgba(var(--border-focus))',
        cta: 'rgba(var(--cta))',
        'cta-secondary': 'rgba(var(--cta-secondary))',
        overlay: 'rgba(0,0,0,0.5)',
      },
    },
  },
} satisfies Config
