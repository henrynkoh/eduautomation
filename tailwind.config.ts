import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        'primary-dark': '#2563eb',
        secondary: '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.1)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config; 