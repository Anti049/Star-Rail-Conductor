import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const GallagherTheme: CustomThemeConfig = {
	name: 'gallagher',
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
		// primary | #B00E4A
		'--color-primary-50': '243 219 228', // #f3dbe4
		'--color-primary-100': '239 207 219', // #efcfdb
		'--color-primary-200': '235 195 210', // #ebc3d2
		'--color-primary-300': '223 159 183', // #df9fb7
		'--color-primary-400': '200 86 128', // #c85680
		'--color-primary-500': '176 14 74', // #B00E4A
		'--color-primary-600': '158 13 67', // #9e0d43
		'--color-primary-700': '132 11 56', // #840b38
		'--color-primary-800': '106 8 44', // #6a082c
		'--color-primary-900': '86 7 36', // #560724
		// secondary | #66524E
		'--color-secondary-50': '232 229 228', // #e8e5e4
		'--color-secondary-100': '224 220 220', // #e0dcdc
		'--color-secondary-200': '217 212 211', // #d9d4d3
		'--color-secondary-300': '194 186 184', // #c2bab8
		'--color-secondary-400': '148 134 131', // #948683
		'--color-secondary-500': '102 82 78', // #66524E
		'--color-secondary-600': '92 74 70', // #5c4a46
		'--color-secondary-700': '77 62 59', // #4d3e3b
		'--color-secondary-800': '61 49 47', // #3d312f
		'--color-secondary-900': '50 40 38', // #322826
		// tertiary | #9F949A
		'--color-tertiary-50': '241 239 240', // #f1eff0
		'--color-tertiary-100': '236 234 235', // #eceaeb
		'--color-tertiary-200': '231 228 230', // #e7e4e6
		'--color-tertiary-300': '217 212 215', // #d9d4d7
		'--color-tertiary-400': '188 180 184', // #bcb4b8
		'--color-tertiary-500': '159 148 154', // #9F949A
		'--color-tertiary-600': '143 133 139', // #8f858b
		'--color-tertiary-700': '119 111 116', // #776f74
		'--color-tertiary-800': '95 89 92', // #5f595c
		'--color-tertiary-900': '78 73 75', // #4e494b
		// success | #50fa7b
		'--color-success-50': '229 254 235', // #e5feeb
		'--color-success-100': '220 254 229', // #dcfee5
		'--color-success-200': '211 254 222', // #d3fede
		'--color-success-300': '185 253 202', // #b9fdca
		'--color-success-400': '133 252 163', // #85fca3
		'--color-success-500': '80 250 123', // #50fa7b
		'--color-success-600': '72 225 111', // #48e16f
		'--color-success-700': '60 188 92', // #3cbc5c
		'--color-success-800': '48 150 74', // #30964a
		'--color-success-900': '39 123 60', // #277b3c
		// warning | #ffb86c
		'--color-warning-50': '255 244 233', // #fff4e9
		'--color-warning-100': '255 241 226', // #fff1e2
		'--color-warning-200': '255 237 218', // #ffedda
		'--color-warning-300': '255 227 196', // #ffe3c4
		'--color-warning-400': '255 205 152', // #ffcd98
		'--color-warning-500': '255 184 108', // #ffb86c
		'--color-warning-600': '230 166 97', // #e6a661
		'--color-warning-700': '191 138 81', // #bf8a51
		'--color-warning-800': '153 110 65', // #996e41
		'--color-warning-900': '125 90 53', // #7d5a35
		// error | #ff5555
		'--color-error-50': '255 230 230', // #ffe6e6
		'--color-error-100': '255 221 221', // #ffdddd
		'--color-error-200': '255 213 213', // #ffd5d5
		'--color-error-300': '255 187 187', // #ffbbbb
		'--color-error-400': '255 136 136', // #ff8888
		'--color-error-500': '255 85 85', // #ff5555
		'--color-error-600': '230 77 77', // #e64d4d
		'--color-error-700': '191 64 64', // #bf4040
		'--color-error-800': '153 51 51', // #993333
		'--color-error-900': '125 42 42', // #7d2a2a
		// surface | #30262F
		'--color-surface-50': '224 222 224', // #e0dee0
		'--color-surface-100': '214 212 213', // #d6d4d5
		'--color-surface-200': '203 201 203', // #cbc9cb
		'--color-surface-300': '172 168 172', // #aca8ac
		'--color-surface-400': '110 103 109', // #6e676d
		'--color-surface-500': '48 38 47', // #30262F
		'--color-surface-600': '43 34 42', // #2b222a
		'--color-surface-700': '36 29 35', // #241d23
		'--color-surface-800': '29 23 28', // #1d171c
		'--color-surface-900': '24 19 23' // #181317
	}
};
