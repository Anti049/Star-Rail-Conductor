import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const QingqueTheme: CustomThemeConfig = {
	name: 'qingque',
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
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #008084
		'--color-primary-50': '217 236 237', // #d9eced
		'--color-primary-100': '204 230 230', // #cce6e6
		'--color-primary-200': '191 223 224', // #bfdfe0
		'--color-primary-300': '153 204 206', // #99ccce
		'--color-primary-400': '77 166 169', // #4da6a9
		'--color-primary-500': '0 128 132', // #008084
		'--color-primary-600': '0 115 119', // #007377
		'--color-primary-700': '0 96 99', // #006063
		'--color-primary-800': '0 77 79', // #004d4f
		'--color-primary-900': '0 63 65', // #003f41
		// secondary | #F1F2F3
		'--color-secondary-50': '253 253 253', // #fdfdfd
		'--color-secondary-100': '252 252 253', // #fcfcfd
		'--color-secondary-200': '252 252 252', // #fcfcfc
		'--color-secondary-300': '249 250 250', // #f9fafa
		'--color-secondary-400': '245 246 247', // #f5f6f7
		'--color-secondary-500': '241 242 243', // #F1F2F3
		'--color-secondary-600': '217 218 219', // #d9dadb
		'--color-secondary-700': '181 182 182', // #b5b6b6
		'--color-secondary-800': '145 145 146', // #919192
		'--color-secondary-900': '118 119 119', // #767777
		// tertiary | #9C322C
		'--color-tertiary-50': '240 224 223', // #f0e0df
		'--color-tertiary-100': '235 214 213', // #ebd6d5
		'--color-tertiary-200': '230 204 202', // #e6ccca
		'--color-tertiary-300': '215 173 171', // #d7adab
		'--color-tertiary-400': '186 112 107', // #ba706b
		'--color-tertiary-500': '156 50 44', // #9C322C
		'--color-tertiary-600': '140 45 40', // #8c2d28
		'--color-tertiary-700': '117 38 33', // #752621
		'--color-tertiary-800': '94 30 26', // #5e1e1a
		'--color-tertiary-900': '76 25 22', // #4c1916
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
		// surface | #261F1F
		'--color-surface-50': '222 221 221', // #dedddd
		'--color-surface-100': '212 210 210', // #d4d2d2
		'--color-surface-200': '201 199 199', // #c9c7c7
		'--color-surface-300': '168 165 165', // #a8a5a5
		'--color-surface-400': '103 98 98', // #676262
		'--color-surface-500': '38 31 31', // #261F1F
		'--color-surface-600': '34 28 28', // #221c1c
		'--color-surface-700': '29 23 23', // #1d1717
		'--color-surface-800': '23 19 19', // #171313
		'--color-surface-900': '19 15 15' // #130f0f
	}
};
