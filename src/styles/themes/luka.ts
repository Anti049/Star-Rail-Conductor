import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const LukaTheme: CustomThemeConfig = {
	name: 'luka',
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
		// primary | #CD0039
		'--color-primary-50': '248 217 225', // #f8d9e1
		'--color-primary-100': '245 204 215', // #f5ccd7
		'--color-primary-200': '243 191 206', // #f3bfce
		'--color-primary-300': '235 153 176', // #eb99b0
		'--color-primary-400': '220 77 116', // #dc4d74
		'--color-primary-500': '205 0 57', // #CD0039
		'--color-primary-600': '185 0 51', // #b90033
		'--color-primary-700': '154 0 43', // #9a002b
		'--color-primary-800': '123 0 34', // #7b0022
		'--color-primary-900': '100 0 28', // #64001c
		// secondary | #FB1D0A
		'--color-secondary-50': '254 221 218', // #feddda
		'--color-secondary-100': '254 210 206', // #fed2ce
		'--color-secondary-200': '254 199 194', // #fec7c2
		'--color-secondary-300': '253 165 157', // #fda59d
		'--color-secondary-400': '252 97 84', // #fc6154
		'--color-secondary-500': '251 29 10', // #FB1D0A
		'--color-secondary-600': '226 26 9', // #e21a09
		'--color-secondary-700': '188 22 8', // #bc1608
		'--color-secondary-800': '151 17 6', // #971106
		'--color-secondary-900': '123 14 5', // #7b0e05
		// tertiary | #79B6FF
		'--color-tertiary-50': '235 244 255', // #ebf4ff
		'--color-tertiary-100': '228 240 255', // #e4f0ff
		'--color-tertiary-200': '222 237 255', // #deedff
		'--color-tertiary-300': '201 226 255', // #c9e2ff
		'--color-tertiary-400': '161 204 255', // #a1ccff
		'--color-tertiary-500': '121 182 255', // #79B6FF
		'--color-tertiary-600': '109 164 230', // #6da4e6
		'--color-tertiary-700': '91 137 191', // #5b89bf
		'--color-tertiary-800': '73 109 153', // #496d99
		'--color-tertiary-900': '59 89 125', // #3b597d
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
		// surface | #32141A
		'--color-surface-50': '224 220 221', // #e0dcdd
		'--color-surface-100': '214 208 209', // #d6d0d1
		'--color-surface-200': '204 196 198', // #ccc4c6
		'--color-surface-300': '173 161 163', // #ada1a3
		'--color-surface-400': '112 91 95', // #705b5f
		'--color-surface-500': '50 20 26', // #32141A
		'--color-surface-600': '45 18 23', // #2d1217
		'--color-surface-700': '38 15 20', // #260f14
		'--color-surface-800': '30 12 16', // #1e0c10
		'--color-surface-900': '25 10 13' // #190a0d
	}
};
