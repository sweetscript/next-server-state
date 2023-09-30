import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      keyframes: {
        flash: {
          '0%, 100%': { filter: 'contrast(1)' },
          '50%': { filter: 'contrast(0.8)' }
        }
      },
      animation: {
        'flash-once': 'flash 0.35s linear 1'
      }
    }
  },
  plugins: []
};
export default config;
