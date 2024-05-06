import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const SparkleTheme: CustomThemeConfig = {
	name: 'sparkle',
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
		// primary | #D61741
		'--color-primary-50': '249 220 227', // #f9dce3
		'--color-primary-100': '247 209 217', // #f7d1d9
		'--color-primary-200': '245 197 208', // #f5c5d0
		'--color-primary-300': '239 162 179', // #efa2b3
		'--color-primary-400': '226 93 122', // #e25d7a
		'--color-primary-500': '214 23 65', // #D61741
		'--color-primary-600': '193 21 59', // #c1153b
		'--color-primary-700': '161 17 49', // #a11131
		'--color-primary-800': '128 14 39', // #800e27
		'--color-primary-900': '105 11 32', // #690b20
		// secondary | #F381D4
		'--color-secondary-50': '253 236 249', // #fdecf9
		'--color-secondary-100': '253 230 246', // #fde6f6
		'--color-secondary-200': '252 224 244', // #fce0f4
		'--color-secondary-300': '250 205 238', // #facdee
		'--color-secondary-400': '247 167 225', // #f7a7e1
		'--color-secondary-500': '243 129 212', // #F381D4
		'--color-secondary-600': '219 116 191', // #db74bf
		'--color-secondary-700': '182 97 159', // #b6619f
		'--color-secondary-800': '146 77 127', // #924d7f
		'--color-secondary-900': '119 63 104', // #773f68
		// tertiary | #E66D69
		'--color-tertiary-50': '251 233 233', // #fbe9e9
		'--color-tertiary-100': '250 226 225', // #fae2e1
		'--color-tertiary-200': '249 219 218', // #f9dbda
		'--color-tertiary-300': '245 197 195', // #f5c5c3
		'--color-tertiary-400': '238 153 150', // #ee9996
		'--color-tertiary-500': '230 109 105', // #E66D69
		'--color-tertiary-600': '207 98 95', // #cf625f
		'--color-tertiary-700': '173 82 79', // #ad524f
		'--color-tertiary-800': '138 65 63', // #8a413f
		'--color-tertiary-900': '113 53 51', // #713533
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
		// surface | #2C1E30
		'--color-surface-50': '223 221 224', // #dfdde0
		'--color-surface-100': '213 210 214', // #d5d2d6
		'--color-surface-200': '202 199 203', // #cac7cb
		'--color-surface-300': '171 165 172', // #aba5ac
		'--color-surface-400': '107 98 110', // #6b626e
		'--color-surface-500': '44 30 48', // #2C1E30
		'--color-surface-600': '40 27 43', // #281b2b
		'--color-surface-700': '33 23 36', // #211724
		'--color-surface-800': '26 18 29', // #1a121d
		'--color-surface-900': '22 15 24' // #160f18
	}
};
