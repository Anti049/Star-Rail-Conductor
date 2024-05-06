import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const WeltTheme: CustomThemeConfig = {
	name: 'welt',
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
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #A06846
		'--color-primary-50': '241 232 227', // #f1e8e3
		'--color-primary-100': '236 225 218', // #ece1da
		'--color-primary-200': '231 217 209', // #e7d9d1
		'--color-primary-300': '217 195 181', // #d9c3b5
		'--color-primary-400': '189 149 126', // #bd957e
		'--color-primary-500': '160 104 70', // #A06846
		'--color-primary-600': '144 94 63', // #905e3f
		'--color-primary-700': '120 78 53', // #784e35
		'--color-primary-800': '96 62 42', // #603e2a
		'--color-primary-900': '78 51 34', // #4e3322
		// secondary | #941750
		'--color-secondary-50': '239 220 229', // #efdce5
		'--color-secondary-100': '234 209 220', // #ead1dc
		'--color-secondary-200': '228 197 211', // #e4c5d3
		'--color-secondary-300': '212 162 185', // #d4a2b9
		'--color-secondary-400': '180 93 133', // #b45d85
		'--color-secondary-500': '148 23 80', // #941750
		'--color-secondary-600': '133 21 72', // #851548
		'--color-secondary-700': '111 17 60', // #6f113c
		'--color-secondary-800': '89 14 48', // #590e30
		'--color-secondary-900': '73 11 39', // #490b27
		// tertiary | #D3CCCA
		'--color-tertiary-50': '248 247 247', // #f8f7f7
		'--color-tertiary-100': '246 245 244', // #f6f5f4
		'--color-tertiary-200': '244 242 242', // #f4f2f2
		'--color-tertiary-300': '237 235 234', // #edebea
		'--color-tertiary-400': '224 219 218', // #e0dbda
		'--color-tertiary-500': '211 204 202', // #D3CCCA
		'--color-tertiary-600': '190 184 182', // #beb8b6
		'--color-tertiary-700': '158 153 152', // #9e9998
		'--color-tertiary-800': '127 122 121', // #7f7a79
		'--color-tertiary-900': '103 100 99', // #676463
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
		// surface | #32262A
		'--color-surface-50': '224 222 223', // #e0dedf
		'--color-surface-100': '214 212 212', // #d6d4d4
		'--color-surface-200': '204 201 202', // #ccc9ca
		'--color-surface-300': '173 168 170', // #ada8aa
		'--color-surface-400': '112 103 106', // #70676a
		'--color-surface-500': '50 38 42', // #32262A
		'--color-surface-600': '45 34 38', // #2d2226
		'--color-surface-700': '38 29 32', // #261d20
		'--color-surface-800': '30 23 25', // #1e1719
		'--color-surface-900': '25 19 21' // #191315
	}
};
