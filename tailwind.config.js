/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./views/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'slide-in-down': 'slideInDown 0.3s ease-out',
        'slide-in-up': 'slideInUp 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'zoom-in': 'zoomIn 0.6s ease-out',
        'zoom-out': 'zoomOut 0.6s ease-out',
        'rotate-in': 'rotateIn 0.6s ease-out',
        'flip': 'flip 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          'from': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInDown: {
          'from': {
            transform: 'translateY(-100%)',
          },
          'to': {
            transform: 'translateY(0)',
          },
        },
        slideInUp: {
          'from': {
            transform: 'translateY(100%)',
          },
          'to': {
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          'from': {
            transform: 'translateX(-100%)',
          },
          'to': {
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          'from': {
            transform: 'translateX(100%)',
          },
          'to': {
            transform: 'translateX(0)',
          },
        },
        zoomIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0.3)',
          },
          '50%': {
            opacity: '1',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        zoomOut: {
          'from': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '1',
          },
          'to': {
            opacity: '0',
            transform: 'scale(0.3)',
          },
        },
        rotateIn: {
          'from': {
            transform: 'rotate(-200deg)',
            opacity: '0',
          },
          'to': {
            transform: 'rotate(0)',
            opacity: '1',
          },
        },
        flip: {
          'from': {
            transform: 'perspective(400px) rotateY(-90deg)',
            opacity: '0',
          },
          '40%': {
            transform: 'perspective(400px) rotateY(-10deg)',
          },
          '70%': {
            transform: 'perspective(400px) rotateY(10deg)',
          },
          'to': {
            transform: 'perspective(400px) rotateY(0deg)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}
