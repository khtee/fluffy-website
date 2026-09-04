/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#F45287',
          'pink-hover': '#E03E75',
          'pink-light': '#FDF2F5',
          'pink-soft': '#FBE3EB',
          peach: '#FDBBB0',
          'peach-light': '#FFF5F2',
          cream: '#FFFDF9',
          'cream-soft': '#FDF9F5',
          'cream-border': '#F4EAE1',
          blue: '#4FA8DE',
          'blue-hover': '#3D93C9',
          'blue-light': '#F0F8FD',
          charcoal: '#22181C',
          'charcoal-muted': '#5E545A',
          'charcoal-light': '#8F828B',
          whatsapp: '#25D366',
          'whatsapp-dark': '#1EBE5D',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(244, 82, 135, 0.12)',
        'soft-hover': '0 20px 35px -10px rgba(244, 82, 135, 0.22)',
        'blue-soft': '0 10px 30px -10px rgba(79, 168, 222, 0.15)',
        'elevated': '0 20px 40px -15px rgba(34, 24, 28, 0.07)',
      }
    },
  },
  plugins: [],
}
