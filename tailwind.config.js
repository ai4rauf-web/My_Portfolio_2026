/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#071012',
        charcoal: '#242424',
        muted: '#686868',
        surface: '#f6f6f6',
        'tag-bg': '#eaecee',
        'tag-blue': '#1377b0',
        'banner-blue': '#d0eeff',
        'warn-bg': '#fdefc0',
        'warn-text': '#197417',
        online: '#06a131',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'online-halo': {
          '0%, 100%': { opacity: '0.01' },
          '50%': { opacity: '1' },
        },
        'online-dot': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        'blob-drift': {
          '0%': { transform: 'translate(-99px, 0px) scale(1)' },
          '50%': { transform: 'translate(99px, 24px) scale(1.08)' },
          '100%': { transform: 'translate(-99px, 0px) scale(1)' },
        },
        'blob-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wave: {
          '0%, 60%, 100%': { transform: 'rotate(0deg)' },
          '10%, 30%, 50%': { transform: 'rotate(14deg)' },
          '20%, 40%': { transform: 'rotate(-8deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'online-halo': 'online-halo 1.6s ease-in-out infinite',
        'online-dot': 'online-dot 1.6s ease-in-out infinite',
        'blob-drift': 'blob-drift 20s ease-in-out infinite',
        'blob-spin': 'blob-spin 21s ease-in-out infinite',
        wave: 'wave 2.2s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
