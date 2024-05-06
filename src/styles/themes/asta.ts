import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const AstaTheme: CustomThemeConfig = {
	name: 'asta',
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
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #EA7D97
		'--color-primary-50': '252 236 239', // #fcecef
		'--color-primary-100': '251 229 234', // #fbe5ea
		'--color-primary-200': '250 223 229', // #fadfe5
		'--color-primary-300': '247 203 213', // #f7cbd5
		'--color-primary-400': '240 164 182', // #f0a4b6
		'--color-primary-500': '234 125 151', // #EA7D97
		'--color-primary-600': '211 113 136', // #d37188
		'--color-primary-700': '176 94 113', // #b05e71
		'--color-primary-800': '140 75 91', // #8c4b5b
		'--color-primary-900': '115 61 74', // #733d4a
		// secondary | #97CAF9
		'--color-secondary-50': '239 247 254', // #eff7fe
		'--color-secondary-100': '234 244 254', // #eaf4fe
		'--color-secondary-200': '229 242 254', // #e5f2fe
		'--color-secondary-300': '213 234 253', // #d5eafd
		'--color-secondary-400': '182 218 251', // #b6dafb
		'--color-secondary-500': '151 202 249', // #97CAF9
		'--color-secondary-600': '136 182 224', // #88b6e0
		'--color-secondary-700': '113 152 187', // #7198bb
		'--color-secondary-800': '91 121 149', // #5b7995
		'--color-secondary-900': '74 99 122', // #4a637a
		// tertiary | #774F8A
		'--color-tertiary-50': '235 229 237', // #ebe5ed
		'--color-tertiary-100': '228 220 232', // #e4dce8
		'--color-tertiary-200': '221 211 226', // #ddd3e2
		'--color-tertiary-300': '201 185 208', // #c9b9d0
		'--color-tertiary-400': '160 132 173', // #a084ad
		'--color-tertiary-500': '119 79 138', // #774F8A
		'--color-tertiary-600': '107 71 124', // #6b477c
		'--color-tertiary-700': '89 59 104', // #593b68
		'--color-tertiary-800': '71 47 83', // #472f53
		'--color-tertiary-900': '58 39 68', // #3a2744
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
		// surface | #332D36
		'--color-surface-50': '224 224 225', // #e0e0e1
		'--color-surface-100': '214 213 215', // #d6d5d7
		'--color-surface-200': '204 203 205', // #cccbcd
		'--color-surface-300': '173 171 175', // #adabaf
		'--color-surface-400': '112 108 114', // #706c72
		'--color-surface-500': '51 45 54', // #332D36
		'--color-surface-600': '46 41 49', // #2e2931
		'--color-surface-700': '38 34 41', // #262229
		'--color-surface-800': '31 27 32', // #1f1b20
		'--color-surface-900': '25 22 26' // #19161a
	}
};
