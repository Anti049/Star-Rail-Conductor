import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const RobinTheme: CustomThemeConfig = {
	name: 'robin',
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
		// primary | #8E5BDC
		'--color-primary-50': '238 230 250', // #eee6fa
		'--color-primary-100': '232 222 248', // #e8def8
		'--color-primary-200': '227 214 246', // #e3d6f6
		'--color-primary-300': '210 189 241', // #d2bdf1
		'--color-primary-400': '176 140 231', // #b08ce7
		'--color-primary-500': '142 91 220', // #8E5BDC
		'--color-primary-600': '128 82 198', // #8052c6
		'--color-primary-700': '107 68 165', // #6b44a5
		'--color-primary-800': '85 55 132', // #553784
		'--color-primary-900': '70 45 108', // #462d6c
		// secondary | #5CCE8B
		'--color-secondary-50': '231 248 238', // #e7f8ee
		'--color-secondary-100': '222 245 232', // #def5e8
		'--color-secondary-200': '214 243 226', // #d6f3e2
		'--color-secondary-300': '190 235 209', // #beebd1
		'--color-secondary-400': '141 221 174', // #8dddae
		'--color-secondary-500': '92 206 139', // #5CCE8B
		'--color-secondary-600': '83 185 125', // #53b97d
		'--color-secondary-700': '69 155 104', // #459b68
		'--color-secondary-800': '55 124 83', // #377c53
		'--color-secondary-900': '45 101 68', // #2d6544
		// tertiary | #C4D7FB
		'--color-tertiary-50': '246 249 254', // #f6f9fe
		'--color-tertiary-100': '243 247 254', // #f3f7fe
		'--color-tertiary-200': '240 245 254', // #f0f5fe
		'--color-tertiary-300': '231 239 253', // #e7effd
		'--color-tertiary-400': '214 227 252', // #d6e3fc
		'--color-tertiary-500': '196 215 251', // #C4D7FB
		'--color-tertiary-600': '176 194 226', // #b0c2e2
		'--color-tertiary-700': '147 161 188', // #93a1bc
		'--color-tertiary-800': '118 129 151', // #768197
		'--color-tertiary-900': '96 105 123', // #60697b
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
		// surface | #201637
		'--color-surface-50': '222 220 225', // #dedce1
		'--color-surface-100': '210 208 215', // #d2d0d7
		'--color-surface-200': '199 197 205', // #c7c5cd
		'--color-surface-300': '166 162 175', // #a6a2af
		'--color-surface-400': '99 92 115', // #635c73
		'--color-surface-500': '32 22 55', // #201637
		'--color-surface-600': '29 20 50', // #1d1432
		'--color-surface-700': '24 17 41', // #181129
		'--color-surface-800': '19 13 33', // #130d21
		'--color-surface-900': '16 11 27' // #100b1b
	}
};
