import type { Config } from "tailwindcss";

export default {
	darkMode: 'class',
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	safelist: [
		// Quick Access button gradients - must be safelisted for dynamic class interpolation
		'from-violet-500', 'to-purple-600',
		'from-orange-500', 'to-amber-500',
		'from-sky-500', 'to-blue-600',
		'from-rose-500', 'to-pink-500',
		'from-emerald-500', 'to-green-600',
		'from-amber-500', 'to-yellow-500',
		'from-indigo-500', 'to-violet-600',
		'from-cyan-500', 'to-teal-500',
		'from-red-500', 'to-rose-600',
		'from-gray-400', 'to-gray-500',
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
				// WWJD.COM Brand Colors
				ink: 'hsl(var(--ink))',
				paper: 'hsl(var(--paper))',
				glass: 'hsl(var(--glass))',
				'glass-elev': 'hsl(var(--glass-elev))',
				'glass-border': 'hsl(var(--glass-border))',

				// Premium Luxury Colors
				'luxury-dark': 'hsl(var(--luxury-dark))',
				'luxury-cream': 'hsl(var(--luxury-cream))',
				'luxury-gold': 'hsl(var(--luxury-gold))',
				'luxury-copper': 'hsl(var(--luxury-copper))',

				// Accent System
				'accent-primary': 'hsl(var(--accent-primary))',
				'accent-secondary': 'hsl(var(--accent-secondary))',

				// Section Colors
				'section-prayer': 'hsl(var(--section-prayer))',
				'section-compass': 'hsl(var(--section-compass))',
				'section-grow': 'hsl(var(--section-grow))',
				'section-family': 'hsl(var(--section-family))',

				// Semantic Colors
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				danger: 'hsl(var(--danger))',

				// Legacy shadcn support
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'3xl': '1.5rem',
				'4xl': '2rem'
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'glow': 'var(--shadow-glow)',
				'glass': 'var(--shadow-glass)',
				'luxury': 'var(--shadow-luxury)',
				'float': 'var(--shadow-float)'
			},
			fontFamily: {
				'sans': ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
				'heading': ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
				'serif': ['Newsreader', 'serif']
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-luxury': 'var(--gradient-luxury)',
				'gradient-dark-fade': 'var(--gradient-dark-fade)',
				'gradient-mesh': 'var(--gradient-mesh)',
				'gradient-happy': 'var(--gradient-happy)',
				'gradient-sad': 'var(--gradient-sad)',
				'gradient-angry': 'var(--gradient-angry)',
				'gradient-excited': 'var(--gradient-excited)',
				'gradient-anxious': 'var(--gradient-anxious)',
				'gradient-grateful': 'var(--gradient-grateful)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'splash-fade-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'slide-up': {
					from: { transform: 'translateY(100%)' },
					to: { transform: 'translateY(0)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.95', transform: 'scale(1.02)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-1000px 0' },
					'100%': { backgroundPosition: '1000px 0' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(79, 70, 229, 0.3)' },
					'50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(79, 70, 229, 0.6)' }
				},
				'text-gradient': {
					to: { backgroundPosition: '200% center' }
				},
				'background-shine': {
					from: { backgroundPosition: '0 0' },
					to: { backgroundPosition: '-200% 0' }
				},
			'border-rotate': {
					'0%': { '--border-angle': '0deg' },
					'100%': { '--border-angle': '360deg' }
				},
				'marquee': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-up': 'slide-up 0.3s ease-out',
				'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'splash-fade-in': 'splash-fade-in 1s ease-out forwards',
				'text-gradient': 'text-gradient 1.5s linear infinite',
				'background-shine': 'background-shine 2s linear infinite',
				'border-rotate': 'border-rotate 4s linear infinite',
				'marquee': 'marquee 30s linear infinite',
				'marquee-slow': 'marquee 45s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
