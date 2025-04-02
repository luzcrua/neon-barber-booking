
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neon: {
					pink: '#ff00ff',
					blue: '#00f2ff',
					purple: '#b900ff',
					yellow: '#ffea00',
					green: '#00ff66',
				},
				barber: {
					dark: '#0f172a',  // Dark blue background
					light: '#f8fafc', // Light text color
					accent: '#1e293b', // Secondary background
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-neon': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1) blur(0px)'
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(1.2) blur(1px)'
					}
				},
				'flicker': {
					'0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
						opacity: '0.99',
						filter: 'drop-shadow(0 0 1px rgba(252, 211, 77, 0.5)) drop-shadow(0 0 15px rgba(245, 158, 11, 0.4))'
					},
					'20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
						opacity: '0.4',
						filter: 'none'
					}
				},
				'glow': {
					'0%, 100%': {
						filter: 'drop-shadow(0 0 0.5rem currentColor)'
					},
					'50%': {
						filter: 'drop-shadow(0 0 1rem currentColor) drop-shadow(0 0 0.5rem currentColor)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-neon': 'pulse-neon 2s infinite',
				'flicker': 'flicker 3s linear infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite'
			},
			boxShadow: {
				'neon-pink': '0 0 5px theme("colors.neon.pink"), 0 0 20px theme("colors.neon.pink")',
				'neon-blue': '0 0 5px theme("colors.neon.blue"), 0 0 20px theme("colors.neon.blue")',
				'neon-purple': '0 0 5px theme("colors.neon.purple"), 0 0 20px theme("colors.neon.purple")',
				'neon-yellow': '0 0 5px theme("colors.neon.yellow"), 0 0 20px theme("colors.neon.yellow")',
				'neon-green': '0 0 5px theme("colors.neon.green"), 0 0 20px theme("colors.neon.green")',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
