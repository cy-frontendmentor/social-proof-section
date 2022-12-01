/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'magenta-very-dark': 'hsl(300, 43%, 22%)',
        'pink-soft': 'hsl(333, 80%, 67%)',
        'magenta-grayish-dark': 'hsl(303, 10%, 53%)',
        'magenta-grayish-light': 'hsl(300, 24%, 96%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        sans: ['var(--font-league-spartan)'],
      },
    },
  },
  plugins: [],
};
