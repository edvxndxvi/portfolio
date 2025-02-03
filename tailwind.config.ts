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
      animation: {
        spotlight: 'spotlight 7s ease-in-out infinite',
        spotlight2: 'spotlight2 7s ease-in-out infinite',
        'spotlight-bottom': 'spotlight-bottom 7s ease-in-out infinite',
        'spotlight-bottom2': 'spotlight-bottom2 7s ease-in-out infinite'
      },
      keyframes: {
        spotlight: {
          '0%': {
            transform: 'scale(1)',
            rotate: '25deg',
          },
          '33%': {
            transform: 'scale(0.9)',
            rotate: '30deg',
          },
          '66%': {
            transform: 'scale(1.1)',
            rotate: '20deg',
          },
          '100%': {
            transform: 'scale(1)',
            rotate: '25deg',
          }
        },
        spotlight2: {
          '0%': {
            transform: 'scale(1)',
            rotate: '25deg',
          },
          '33%': {
            transform: 'scale(1.1)',
            rotate: '30deg',
          },
          '66%': {
            transform: 'scale(0.9)',
            rotate: '20deg',
          },
          '100%': {
            transform: 'scale(1)',
            rotate: '25deg',
          }
        },
        'spotlight-bottom': {
          '0%': {
            transform: 'scale(1)',
            rotate: '-25deg',
          },
          '33%': {
            transform: 'scale(0.9)',
            rotate: '-30deg',
          },
          '66%': {
            transform: 'scale(1.1)',
            rotate: '-20deg',
          },
          '100%': {
            transform: 'scale(1)',
            rotate: '-25deg',
          }
        },
        'spotlight-bottom2': {
          '0%': {
            transform: 'scale(1)',
            rotate: '-25deg',
          },
          '33%': {
            transform: 'scale(1.1)',
            rotate: '-30deg',
          },
          '66%': {
            transform: 'scale(0.9)',
            rotate: '-20deg',
          },
          '100%': {
            transform: 'scale(1)',
            rotate: '-25deg',
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;