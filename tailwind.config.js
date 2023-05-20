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
            height: '80vh'
          },
          to: {
            height: '90vh'
          }
        }
      },
      animation: {
        'sidebar-height': 'sidebar-height 0.5s ease-in-out'
      }
    }
  },
  plugins: []
};
