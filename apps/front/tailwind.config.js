const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {
      animation: {
        wave: 'move-wave 4s 0.7s ease-in-out infinite alternate',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },

      backgroundImage: {
        'home-background': 'url(/home-background.webp)',
        'hero-background': 'url("/hero-background.png")',
        'not-found-background': 'url("/not-found-background.jpg")',
        'support-background': 'url("/features/atendimento.jpeg")',
        'laboratory-background': 'url("/features/laboratorio.jpeg")',
        'marketing-background': 'url("/features/marketing.jpeg")',
        'supply-background': 'url("/features/supply_chain.jpeg")',
        'logos-background': 'url("/logos-background.png")',
        'abstract-background':
          'url("https://images.unsplash.com/photo-1633436245198-44bc17f86b89?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
      },

      boxShadow: {
        fill: '5px 5px 0 0'
      },

      colors: {
        primary: '#e8324e',
        secondary: '#ec265a',
        tertiary: '#f01966',
        quaternary: '#2E0F2B',
        background: '#242130',
        backgroundAlt: '#121118',
        backgroundAlt2: '#1B1924',
        lightGray: '#cacaca',
        darkGray: '#2F2923',

        // Laboratory colors
        labPrimary: '#E89005',
        labSecondary: '#D84A05'
      },

      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)'
      },

      fontSize: {
        'primary-title': '180px',
        'secondary-title': '80px',
        'slogan-title': '30px'
      },

      gridTemplateColumns: {
        '1.5fr': '1.5fr 0.5fr'
      },

      height: {
        '80vh': '80vh',
        120: '30rem'
      },

      keyframes: {
        'move-wave': {
          '0%': {
            transform: 'translateX(0px)'
          },
          '100%': {
            transform: 'translateX(-100px)'
          }
        },
        pulse: {
          '0%, 100%': {
            opacity: 0.5
          },
          '50%': {
            opacity: 1
          }
        }
      },

      width: {
        '70vw': '70vw'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),

    function addTextShadowWhite({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-white': {
          'text-shadow': '-7px -7px 30px rgba(255, 255, 255, 0.5)'
        },
        '.text-shadow-black': {
          'text-shadow': '-7px -7px 30px rgba(0, 0, 0, 0.8)'
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ]
};
