import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./AppLayout/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'satoshi-regular': [
              'var(--font-satoshi-regular)',
              'sans-serif',
          ],
          'satoshi-medium': ['var(--font-satoshi-medium)', 'sans-serif'],
          'satoshi-bold': ['var(--font-satoshi-bold)', 'sans-serif'],
          'monument-regular': [
              'var(--font-monument-regular)',
              'sans-serif',
          ],
      },
      colors: {
          primary: '#3d8bff',
          secondary: '#ab23ff',
          tertiary: '#13171d',
      },
      padding: {
          'new-x': '15px',
          'new-x-md': '30px',
          'new-x-xl': '50px',
          'new-y': '20px',
          'new-y-md': '20px',
          'new-y-xl': '30px',
      },
      maxWidth: {
          'new-w': '1440px',
      },
      transitionProperty: {
          'max-height': 'max-height',
      },
  },
  },
  plugins: [],
};
export default config;
