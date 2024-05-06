import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const HimekoTheme: CustomThemeConfig = {
	name: 'himeko',
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
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #BA3B42
		'--color-primary-50': '245 226 227', // #f5e2e3
		'--color-primary-100': '241 216 217', // #f1d8d9
		'--color-primary-200': '238 206 208', // #eeced0
		'--color-primary-300': '227 177 179', // #e3b1b3
		'--color-primary-400': '207 118 123', // #cf767b
		'--color-primary-500': '186 59 66', // #BA3B42
		'--color-primary-600': '167 53 59', // #a7353b
		'--color-primary-700': '140 44 50', // #8c2c32
		'--color-primary-800': '112 35 40', // #702328
		'--color-primary-900': '91 29 32', // #5b1d20
		// secondary | #E98E44
		'--color-secondary-50': '252 238 227', // #fceee3
		'--color-secondary-100': '251 232 218', // #fbe8da
		'--color-secondary-200': '250 227 208', // #fae3d0
		'--color-secondary-300': '246 210 180', // #f6d2b4
		'--color-secondary-400': '240 176 124', // #f0b07c
		'--color-secondary-500': '233 142 68', // #E98E44
		'--color-secondary-600': '210 128 61', // #d2803d
		'--color-secondary-700': '175 107 51', // #af6b33
		'--color-secondary-800': '140 85 41', // #8c5529
		'--color-secondary-900': '114 70 33', // #724621
		// tertiary | #FFE37F
		'--color-tertiary-50': '255 251 236', // #fffbec
		'--color-tertiary-100': '255 249 229', // #fff9e5
		'--color-tertiary-200': '255 248 223', // #fff8df
		'--color-tertiary-300': '255 244 204', // #fff4cc
		'--color-tertiary-400': '255 235 165', // #ffeba5
		'--color-tertiary-500': '255 227 127', // #FFE37F
		'--color-tertiary-600': '230 204 114', // #e6cc72
		'--color-tertiary-700': '191 170 95', // #bfaa5f
		'--color-tertiary-800': '153 136 76', // #99884c
		'--color-tertiary-900': '125 111 62', // #7d6f3e
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
		// surface | #2D2422
		'--color-surface-50': '224 222 222', // #e0dede
		'--color-surface-100': '213 211 211', // #d5d3d3
		'--color-surface-200': '203 200 200', // #cbc8c8
		'--color-surface-300': '171 167 167', // #aba7a7
		'--color-surface-400': '108 102 100', // #6c6664
		'--color-surface-500': '45 36 34', // #2D2422
		'--color-surface-600': '41 32 31', // #29201f
		'--color-surface-700': '34 27 26', // #221b1a
		'--color-surface-800': '27 22 20', // #1b1614
		'--color-surface-900': '22 18 17' // #161211
	}
};
