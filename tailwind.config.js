import { fontFamily } from 'tailwindcss/defaultTheme';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';
// Themes
import {
	// Trailblazers
	TrailblazerTheme,
	March7thTheme,
	DanHengTheme,
	HimekoTheme,
	WeltTheme,
	// Stellaron Hunters
	KafkaTheme,
	SilverWolfTheme,
	BladeTheme,
	FireflyTheme,
	// Herta Space Station
	HertaTheme,
	ArlanTheme,
	AstaTheme,
	RuanMeiTheme,
	// Jarilo-IV
	BronyaTheme,
	ClaraTheme,
	GepardTheme,
	HookTheme,
	LukaTheme,
	LynxTheme,
	NatashaTheme,
	PelaTheme,
	SampoTheme,
	SeeleTheme,
	ServalTheme,
	// Xianzhou Luofu
	BailuTheme,
	ImbibitorLunaeTheme,
	FuXuanTheme,
	GuinaifenTheme,
	HanyaTheme,
	HuohuoTheme,
	JingYuanTheme,
	JingliuTheme,
	LuochaTheme,
	QingqueTheme,
	SushangTheme,
	TingyunTheme,
	XueyiTheme,
	YanqingTheme,
	YukongTheme,
	// Penacony
	BlackSwanTheme,
	GallagherTheme,
	MishaTheme,
	SparkleTheme,
	AcheronTheme,
	RobinTheme,
	AventurineTheme,
	// Miscellaneous
	ArgentiTheme,
	DrRatioTheme,
	TopazNumbyTheme,
	BoothillTheme,
	JadeTheme
} from './src/styles/themes';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	safelist: ['dark'],
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
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				'star-rail': ['PF DinText Pro Medium', 'Inter', ...fontFamily.sans]
			},
			fontSize: {
				xs: ['0.875rem', '1.25rem'],
				sm: ['1rem', '1.5rem'],
				base: ['1.125rem', '1.75rem'],
				lg: ['1.25rem', '1.75rem'],
				xl: ['1.5rem', '2rem'],
				'2xl': ['1.875rem', '2.25rem'],
				'3xl': ['2.25rem', '2.5rem'],
				'4xl': ['3rem', '1'],
				'5xl': ['3.75rem', '1'],
				'6xl': ['4.5rem', '1'],
				'7xl': ['6rem', '1'],
				'8xl': ['7rem', '1']
			}
		}
	},
	plugins: [
		skeleton({
			themes: {
				custom: [
					// Trailblazers
					TrailblazerTheme,
					March7thTheme,
					DanHengTheme,
					HimekoTheme,
					WeltTheme,
					// Stellaron Hunters
					KafkaTheme,
					SilverWolfTheme,
					BladeTheme,
					FireflyTheme,
					// Herta Space Station
					HertaTheme,
					ArlanTheme,
					AstaTheme,
					RuanMeiTheme,
					// Jarilo-IV
					BronyaTheme,
					ClaraTheme,
					GepardTheme,
					HookTheme,
					LukaTheme,
					LynxTheme,
					NatashaTheme,
					PelaTheme,
					SampoTheme,
					SeeleTheme,
					ServalTheme,
					// Xianzhou Luofu
					BailuTheme,
					ImbibitorLunaeTheme,
					FuXuanTheme,
					GuinaifenTheme,
					HanyaTheme,
					HuohuoTheme,
					JingYuanTheme,
					JingliuTheme,
					LuochaTheme,
					QingqueTheme,
					SushangTheme,
					TingyunTheme,
					XueyiTheme,
					YanqingTheme,
					YukongTheme,
					// Penacony
					BlackSwanTheme,
					GallagherTheme,
					MishaTheme,
					SparkleTheme,
					AcheronTheme,
					RobinTheme,
					AventurineTheme,
					// Miscellaneous
					ArgentiTheme,
					DrRatioTheme,
					TopazNumbyTheme,
					BoothillTheme,
					JadeTheme
				]
			}
		})
	]
};

export default config;
