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
                    dark: '#040B14',      // Deep Midnight
                    darker: '#02050A',    // Almost Black
                    card: 'rgba(255, 255, 255, 0.03)',
                    sapphire: '#0F52BA',  // Sapphire Blue
                    platinum: '#E5E4E2',  // Platinum
                    silver: '#C0C0C0',    // Silver
                    accent: '#00FFFF',    // Cyan Accent for glows
                }
            },
            fontFamily: {
                pretendard: ['Pretendard', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-metal': 'linear-gradient(135deg, #E5E4E2 0%, #C0C0C0 50%, #A9A9A9 100%)',
                'gradient-blue': 'linear-gradient(to right, #0F52BA, #00FFFF)',
                'glass': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 10px rgba(15, 82, 186, 0.3)' },
                    '50%': { boxShadow: '0 0 25px rgba(15, 82, 186, 0.6)' },
                }
            }
        },
    },
    plugins: [],
}
