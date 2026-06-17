/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',
        'cream-dark': '#F5EDE0',
        charcoal: '#2C2C2C',
        'charcoal-light': '#4A4A4A',
        pink: '#F4B8C1',
        'pink-soft': '#F9D5DC',
        'pink-deep': '#E8919E',
        gold: '#C9A96E',
        'gold-muted': '#B8944F',
        'gold-light': '#E0C992',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Lora', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-medium': 'floatMedium 6s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'butterfly-glide': 'butterflyGlide 15s linear forwards',
        'particle-burst': 'particleBurst 2s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-out': 'fadeOut 2s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-15px) translateX(5px)' },
          '50%': { transform: 'translateY(-8px) translateX(-5px)' },
          '75%': { transform: 'translateY(-20px) translateX(3px)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-12px) translateX(8px)' },
          '66%': { transform: 'translateY(-18px) translateX(-6px)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drift: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        },
        butterflyGlide: {
          '0%': { transform: 'var(--start-pos)', opacity: '0' },
          '5%': { opacity: '0.7' },
          '90%': { opacity: '0.7' },
          '100%': { transform: 'var(--end-pos)', opacity: '0' },
        },
        particleBurst: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '50%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(-30px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
