import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        menu: 'url("./assets/menu.svg")'
      },
      fontFamily: {
        'dm-serif': ['var(--font-dm-serif)'],
        'noto-serif': ['var(--font-noto-serif)']
      },
      colors: {
        bk: {
          '01': '#000000',
          '02': '#33302F',
          '03': '#666667',
          '04': '#9a9a9d',
          '05': '#c1c1c1'
        },
        bg: {
          f2: '#F2F2F2',
          f5: '#F5F5F5',
          wh: '#FFFFFF'
        },
        section: {
          border: '#D9D9D9'
        },
        br: {
          'dark-light': '#575250'
        },
        primary: {
          light: '#F8A13B',
          main: '#FA4A0C'
        }
      }
    }
  },
  plugins: []
};
export default config;
