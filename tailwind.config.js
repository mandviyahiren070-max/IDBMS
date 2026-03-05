/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F2640E',
          'orange-light': '#FF8A3D',
          dark: '#05060d',
          blue: '#000dff',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      animation: {
        'hero-fade-in': 'heroTitleFadeIn 1.2s ease-out 0.3s forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out 1.5s infinite',
        'hero-combined': 'heroTitleFadeIn 1.2s ease-out 0.3s forwards, glowPulse 4s ease-in-out 1.5s infinite',
        'navbar-slide': 'navbarSlideIn 0.8s ease-out 0.1s both',
      },
      keyframes: {
        heroTitleFadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px) scale(0.96)',
            filter: 'blur(8px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
            filter: 'blur(0px)',
          },
        },
        navbarSlideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        glowPulse: {
          '0%, 100%': {
            textShadow: '3px 6px 5.5px #F2640E, 0 0 40px rgba(242, 100, 14, 0.45), 0 0 80px rgba(242, 100, 14, 0.2)',
          },
          '50%': {
            textShadow: '3px 6px 5.5px #F2640E, 0 0 55px rgba(242, 100, 14, 0.55), 0 0 100px rgba(242, 100, 14, 0.3)',
          },
        },
      },
    },
  },
  plugins: [],
}

