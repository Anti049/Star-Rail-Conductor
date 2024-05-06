import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const BronyaTheme: CustomThemeConfig = {
	name: 'bronya',
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
		// primary | #3C6BDD
		'--color-primary-50': '226 233 250', // #e2e9fa
		'--color-primary-100': '216 225 248', // #d8e1f8
		'--color-primary-200': '206 218 247', // #cedaf7
		'--color-primary-300': '177 196 241', // #b1c4f1
		'--color-primary-400': '119 151 231', // #7797e7
		'--color-primary-500': '60 107 221', // #3C6BDD
		'--color-primary-600': '54 96 199', // #3660c7
		'--color-primary-700': '45 80 166', // #2d50a6
		'--color-primary-800': '36 64 133', // #244085
		'--color-primary-900': '29 52 108', // #1d346c
		// secondary | #BC6CF9
		'--color-secondary-50': '245 233 254', // #f5e9fe
		'--color-secondary-100': '242 226 254', // #f2e2fe
		'--color-secondary-200': '238 218 254', // #eedafe
		'--color-secondary-300': '228 196 253', // #e4c4fd
		'--color-secondary-400': '208 152 251', // #d098fb
		'--color-secondary-500': '188 108 249', // #BC6CF9
		'--color-secondary-600': '169 97 224', // #a961e0
		'--color-secondary-700': '141 81 187', // #8d51bb
		'--color-secondary-800': '113 65 149', // #714195
		'--color-secondary-900': '92 53 122', // #5c357a
		// tertiary | #CCC0C2
		'--color-tertiary-50': '247 246 246', // #f7f6f6
		'--color-tertiary-100': '245 242 243', // #f5f2f3
		'--color-tertiary-200': '242 239 240', // #f2eff0
		'--color-tertiary-300': '235 230 231', // #ebe6e7
		'--color-tertiary-400': '219 211 212', // #dbd3d4
		'--color-tertiary-500': '204 192 194', // #CCC0C2
		'--color-tertiary-600': '184 173 175', // #b8adaf
		'--color-tertiary-700': '153 144 146', // #999092
		'--color-tertiary-800': '122 115 116', // #7a7374
		'--color-tertiary-900': '100 94 95', // #645e5f
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
		// surface | #383238
		'--color-surface-50': '225 224 225', // #e1e0e1
		'--color-surface-100': '215 214 215', // #d7d6d7
		'--color-surface-200': '205 204 205', // #cdcccd
		'--color-surface-300': '175 173 175', // #afadaf
		'--color-surface-400': '116 112 116', // #747074
		'--color-surface-500': '56 50 56', // #383238
		'--color-surface-600': '50 45 50', // #322d32
		'--color-surface-700': '42 38 42', // #2a262a
		'--color-surface-800': '34 30 34', // #221e22
		'--color-surface-900': '27 25 27' // #1b191b
	}
};
