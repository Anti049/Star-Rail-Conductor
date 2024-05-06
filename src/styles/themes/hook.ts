import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const HookTheme: CustomThemeConfig = {
	name: 'hook',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #FAC15E
		'--color-primary-50': '254 246 231', // #fef6e7
		'--color-primary-100': '254 243 223', // #fef3df
		'--color-primary-200': '254 240 215', // #fef0d7
		'--color-primary-300': '253 230 191', // #fde6bf
		'--color-primary-400': '252 212 142', // #fcd48e
		'--color-primary-500': '250 193 94', // #FAC15E
		'--color-primary-600': '225 174 85', // #e1ae55
		'--color-primary-700': '188 145 71', // #bc9147
		'--color-primary-800': '150 116 56', // #967438
		'--color-primary-900': '123 95 46', // #7b5f2e
		// secondary | #FFC230
		'--color-secondary-50': '255 246 224', // #fff6e0
		'--color-secondary-100': '255 243 214', // #fff3d6
		'--color-secondary-200': '255 240 203', // #fff0cb
		'--color-secondary-300': '255 231 172', // #ffe7ac
		'--color-secondary-400': '255 212 110', // #ffd46e
		'--color-secondary-500': '255 194 48', // #FFC230
		'--color-secondary-600': '230 175 43', // #e6af2b
		'--color-secondary-700': '191 146 36', // #bf9224
		'--color-secondary-800': '153 116 29', // #99741d
		'--color-secondary-900': '125 95 24', // #7d5f18
		// tertiary | #F6ECDF
		'--color-tertiary-50': '254 252 250', // #fefcfa
		'--color-tertiary-100': '253 251 249', // #fdfbf9
		'--color-tertiary-200': '253 250 247', // #fdfaf7
		'--color-tertiary-300': '251 247 242', // #fbf7f2
		'--color-tertiary-400': '249 242 233', // #f9f2e9
		'--color-tertiary-500': '246 236 223', // #F6ECDF
		'--color-tertiary-600': '221 212 201', // #ddd4c9
		'--color-tertiary-700': '185 177 167', // #b9b1a7
		'--color-tertiary-800': '148 142 134', // #948e86
		'--color-tertiary-900': '121 116 109', // #79746d
		// success | #50FA7B
		'--color-success-50': '229 254 235', // #e5feeb
		'--color-success-100': '220 254 229', // #dcfee5
		'--color-success-200': '211 254 222', // #d3fede
		'--color-success-300': '185 253 202', // #b9fdca
		'--color-success-400': '133 252 163', // #85fca3
		'--color-success-500': '80 250 123', // #50FA7B
		'--color-success-600': '72 225 111', // #48e16f
		'--color-success-700': '60 188 92', // #3cbc5c
		'--color-success-800': '48 150 74', // #30964a
		'--color-success-900': '39 123 60', // #277b3c
		// warning | #FFB86C
		'--color-warning-50': '255 244 233', // #fff4e9
		'--color-warning-100': '255 241 226', // #fff1e2
		'--color-warning-200': '255 237 218', // #ffedda
		'--color-warning-300': '255 227 196', // #ffe3c4
		'--color-warning-400': '255 205 152', // #ffcd98
		'--color-warning-500': '255 184 108', // #FFB86C
		'--color-warning-600': '230 166 97', // #e6a661
		'--color-warning-700': '191 138 81', // #bf8a51
		'--color-warning-800': '153 110 65', // #996e41
		'--color-warning-900': '125 90 53', // #7d5a35
		// error | #FF5555
		'--color-error-50': '255 230 230', // #ffe6e6
		'--color-error-100': '255 221 221', // #ffdddd
		'--color-error-200': '255 213 213', // #ffd5d5
		'--color-error-300': '255 187 187', // #ffbbbb
		'--color-error-400': '255 136 136', // #ff8888
		'--color-error-500': '255 85 85', // #FF5555
		'--color-error-600': '230 77 77', // #e64d4d
		'--color-error-700': '191 64 64', // #bf4040
		'--color-error-800': '153 51 51', // #993333
		'--color-error-900': '125 42 42', // #7d2a2a
		// surface | #382328
		'--color-surface-50': '225 222 223', // #e1dedf
		'--color-surface-100': '215 211 212', // #d7d3d4
		'--color-surface-200': '205 200 201', // #cdc8c9
		'--color-surface-300': '175 167 169', // #afa7a9
		'--color-surface-400': '116 101 105', // #746569
		'--color-surface-500': '56 35 40', // #382328
		'--color-surface-600': '50 32 36', // #322024
		'--color-surface-700': '42 26 30', // #2a1a1e
		'--color-surface-800': '34 21 24', // #221518
		'--color-surface-900': '27 17 20' // #1b1114
	}
};
