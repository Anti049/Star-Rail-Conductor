import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const AcheronTheme: CustomThemeConfig = {
	name: 'acheron',
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
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #8372D6
		'--color-primary-50': '236 234 249', // #eceaf9
		'--color-primary-100': '230 227 247', // #e6e3f7
		'--color-primary-200': '224 220 245', // #e0dcf5
		'--color-primary-300': '205 199 239', // #cdc7ef
		'--color-primary-400': '168 156 226', // #a89ce2
		'--color-primary-500': '131 114 214', // #8372D6
		'--color-primary-600': '118 103 193', // #7667c1
		'--color-primary-700': '98 86 161', // #6256a1
		'--color-primary-800': '79 68 128', // #4f4480
		'--color-primary-900': '64 56 105', // #403869
		// secondary | #DD2A38
		'--color-secondary-50': '250 223 225', // #fadfe1
		'--color-secondary-100': '248 212 215', // #f8d4d7
		'--color-secondary-200': '247 202 205', // #f7cacd
		'--color-secondary-300': '241 170 175', // #f1aaaf
		'--color-secondary-400': '231 106 116', // #e76a74
		'--color-secondary-500': '221 42 56', // #DD2A38
		'--color-secondary-600': '199 38 50', // #c72632
		'--color-secondary-700': '166 32 42', // #a6202a
		'--color-secondary-800': '133 25 34', // #851922
		'--color-secondary-900': '108 21 27', // #6c151b
		// tertiary | #4855DF
		'--color-tertiary-50': '228 230 250', // #e4e6fa
		'--color-tertiary-100': '218 221 249', // #daddf9
		'--color-tertiary-200': '209 213 247', // #d1d5f7
		'--color-tertiary-300': '182 187 242', // #b6bbf2
		'--color-tertiary-400': '127 136 233', // #7f88e9
		'--color-tertiary-500': '72 85 223', // #4855DF
		'--color-tertiary-600': '65 77 201', // #414dc9
		'--color-tertiary-700': '54 64 167', // #3640a7
		'--color-tertiary-800': '43 51 134', // #2b3386
		'--color-tertiary-900': '35 42 109', // #232a6d
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
		// surface | #262130
		'--color-surface-50': '222 222 224', // #dedee0
		'--color-surface-100': '212 211 214', // #d4d3d6
		'--color-surface-200': '201 200 203', // #c9c8cb
		'--color-surface-300': '168 166 172', // #a8a6ac
		'--color-surface-400': '103 100 110', // #67646e
		'--color-surface-500': '38 33 48', // #262130
		'--color-surface-600': '34 30 43', // #221e2b
		'--color-surface-700': '29 25 36', // #1d1924
		'--color-surface-800': '23 20 29', // #17141d
		'--color-surface-900': '19 16 24' // #131018
	}
};
