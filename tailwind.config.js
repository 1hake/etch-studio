/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.ts',
    './src/**/*.jsx',
    './src/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary brand colors - architectural and clean
        primary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Accent colors for highlights and CTAs
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Semantic colors
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        // Background and surfaces
        background: {
          DEFAULT: '#ffffff',
          secondary: '#fafafa',
          tertiary: '#f5f5f5',
        },
        surface: {
          DEFAULT: '#ffffff',
          secondary: '#fafafa',
          elevated: '#ffffff',
        },
        // Text colors
        text: {
          primary: '#171717',
          secondary: '#525252',
          tertiary: '#a3a3a3',
          inverse: '#ffffff',
        },
        // Border colors
        border: {
          DEFAULT: '#e5e5e5',
          secondary: '#d4d4d4',
          strong: '#a3a3a3',
        },
        // Dark mode overrides
        dark: {
          background: {
            DEFAULT: '#0a0a0a',
            secondary: '#171717',
            tertiary: '#262626',
          },
          surface: {
            DEFAULT: '#171717',
            secondary: '#262626',
            elevated: '#404040',
          },
          text: {
            primary: '#fafafa',
            secondary: '#d4d4d4',
            tertiary: '#737373',
            inverse: '#171717',
          },
          border: {
            DEFAULT: '#404040',
            secondary: '#525252',
            strong: '#737373',
          }
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        display: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ],
      },
      fontSize: {
        // Apple-inspired typography scale
        'display-2xl': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-lg': ['3rem', { lineHeight: '1.1', fontWeight: '600' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-xl': ['1.25rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        // Apple-inspired spacing scale
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '66': '16.5rem',
        '70': '17.5rem',
      },
      borderRadius: {
        'xs': '0.25rem',
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'light-logo': "url('https://firebasestorage.googleapis.com/v0/b/debt-666aa.appspot.com/o/logo.png?alt=media&token=c965b25f-a2a0-4f7d-824d-30b64f6a1b1a')",
        'dark-logo': "url('https://firebasestorage.googleapis.com/v0/b/debt-666aa.appspot.com/o/WhatsApp%20Image%202022-11-20%20at%2018.00.18.png?alt=media&token=a962ba31-c822-48e1-a5d1-b6bed037c665')"
      },
    },
  },
  plugins: [],
}
