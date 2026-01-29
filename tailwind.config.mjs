/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Theme 1: Bold/Rock - Dark + Red
        'rock': {
          primary: '#dc2626',
          secondary: '#991b1b',
          dark: '#0a0a0a',
          light: '#fafafa'
        },
        // Theme 2: Minimal/Electronic - Black + White
        'minimal': {
          primary: '#ffffff',
          secondary: '#a3a3a3',
          dark: '#000000',
          light: '#f5f5f5'
        },
        // Theme 3: Warm/Acoustic - Earth tones
        'acoustic': {
          primary: '#d97706',
          secondary: '#92400e',
          dark: '#1c1917',
          light: '#fef3c7'
        },
        // Theme 4: Urban/Hip-hop - Neon gradients
        'urban': {
          primary: '#8b5cf6',
          secondary: '#06b6d4',
          dark: '#0f0f23',
          light: '#f0f9ff'
        },
        // Theme 5: Classical/Elegant - Gold + Dark
        'classical': {
          primary: '#d4af37',
          secondary: '#b8860b',
          dark: '#1a1a2e',
          light: '#fffbeb'
        },
        // Theme 6: Indie/Creative - Muted pastels
        'indie': {
          primary: '#f472b6',
          secondary: '#a78bfa',
          dark: '#1e1e2f',
          light: '#fdf2f8'
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255,255,255,0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(255,255,255,0.3)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
