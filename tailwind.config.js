export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        surface: '#0a0a0a',
        surfaceSoft: '#111111',
      },
      boxShadow: {
        glow: '0 0 30px rgba(212,175,55,0.15)',
        premium: '0 0 120px rgba(212,175,55,0.08)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, rgba(212,175,55,1) 0%, rgba(255,255,255,0.14) 100%)',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
