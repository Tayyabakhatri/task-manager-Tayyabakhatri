// tailwind.config.js
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        animation: {
          'bg-gradient': 'bgGradient 8s ease infinite',
        },
        keyframes: {
          bgGradient: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        },
        backgroundSize: {
          '200%': '200% 200%',
        },
      },
    },
    plugins: [],
  };
  