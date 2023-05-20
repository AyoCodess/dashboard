/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      keyframes: {
        'sidebar-height': {
          from: {
            height: '40vh'
          },
          to: {
            height: '100vh'
          }
        },
        'fade-in': {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        }
      },
      animation: {
        'sidebar-height': 'sidebar-height 1s ease-in-out',
        'fade-in': 'fade-in 1.5s ease-in-out'
      }
    }
  },
  plugins: []
};
