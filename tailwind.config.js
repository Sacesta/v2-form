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
          primary: '#2563EB',     // McKinsey Royal Blue
          secondary: '#1E40AF',   // Deep Blue
          hover: '#1D4ED8',       // Bright interactive blue
          light: '#EFF6FF',       // Soft blue surface
          background: '#FFFFFF',  // Clean background
          surface: '#F8FAFC',     // Modern cool-gray surface
          text: '#0F172A',        // Slate-900 high readability
          muted: '#475569',       // Slate-600 secondary text
          border: '#E2E8F0',      // Light border
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-in': 'slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-out': 'slideOut 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-10px)', opacity: '0' },
        },
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 8px -1px rgba(15, 23, 42, 0.02)',
        'premium-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
}


