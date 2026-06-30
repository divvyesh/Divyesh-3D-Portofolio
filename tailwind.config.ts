import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg0: '#050507',
        bg1: '#0c0d12',
        bg2: '#14161d',
        line: '#21242e',
        hi: '#f4f5f7',
        mid: '#a9adb8',
        low: '#6c707c',
        accent: '#6ee7b7',
        gold: '#f5c842',
        danger: '#ef6f6f',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
