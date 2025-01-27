import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        'text-gray': 'var(--text-gray)',
        background: 'var(--background)',
        border: 'var(--border)',
        glass: 'var(--glass)',
        'glass-active': 'var(--glass-active)',
        'gradient-end': 'var(--gradient-end)',
      },
    },
  },
  plugins: [],
} satisfies Config;