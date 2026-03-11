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
          'dark-card': '#0a0d1a',
          blue: '#000dff',
          'blue-glow': 'rgba(30, 60, 220, 0.22)',
        },
      },
      fontFamily: {
        sans: ['Mulish', 'system-ui', '-apple-system', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        din: ['"DIN Condensed"', '"Bebas Neue"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['130px', { lineHeight: '0.92' }],
        'section-title': ['100px', { lineHeight: '1.0' }],
        'body-lg': ['20px', { lineHeight: '1.5' }],
        'card-title-lg': ['25px', { lineHeight: '1.2', letterSpacing: '0.07em' }],
      },
      maxWidth: {
        'figma': '1298px',
        'content': '1200px',
      },
      animation: {
        'hero-fade-in': 'heroTitleFadeIn 1.2s ease-out 0.3s forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out 1.5s infinite',
        'hero-combined': 'heroTitleFadeIn 1.2s ease-out 0.3s forwards, glowPulse 4s ease-in-out 1.5s infinite, shimmerText 5s linear infinite',
        'navbar-slide': 'navbarSlideIn 0.8s ease-out 0.1s both',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'shimmer': 'shimmerText 5s linear infinite',
        'first': 'moveVertical 30s ease infinite',
        'second': 'moveInCircle 20s reverse infinite',
        'third': 'moveInCircle 40s linear infinite',
        'fourth': 'moveHorizontal 40s ease infinite',
        'fifth': 'moveVertical 20s ease infinite',
      },
      keyframes: {
        moveHorizontal: {
          '0%': { transform: 'translateX(-50%) translateY(-10%)' },
          '50%': { transform: 'translateX(50%) translateY(10%)' },
          '100%': { transform: 'translateX(-50%) translateY(-10%)' },
        },
        moveVertical: {
          '0%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        moveInCircle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
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
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        shimmerText: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
}
