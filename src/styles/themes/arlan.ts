import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const ArlanTheme: CustomThemeConfig = {
	name: 'arlan',
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
		// primary | #5D6CB6
		'--color-primary-50': '231 233 244', // #e7e9f4
		'--color-primary-100': '223 226 240', // #dfe2f0
		'--color-primary-200': '215 218 237', // #d7daed
		'--color-primary-300': '190 196 226', // #bec4e2
		'--color-primary-400': '142 152 204', // #8e98cc
		'--color-primary-500': '93 108 182', // #5D6CB6
		'--color-primary-600': '84 97 164', // #5461a4
		'--color-primary-700': '70 81 137', // #465189
		'--color-primary-800': '56 65 109', // #38416d
		'--color-primary-900': '46 53 89', // #2e3559
		// secondary | #732660
		'--color-secondary-50': '234 222 231', // #eadee7
		'--color-secondary-100': '227 212 223', // #e3d4df
		'--color-secondary-200': '220 201 215', // #dcc9d7
		'--color-secondary-300': '199 168 191', // #c7a8bf
		'--color-secondary-400': '157 103 144', // #9d6790
		'--color-secondary-500': '115 38 96', // #732660
		'--color-secondary-600': '104 34 86', // #682256
		'--color-secondary-700': '86 29 72', // #561d48
		'--color-secondary-800': '69 23 58', // #45173a
		'--color-secondary-900': '56 19 47', // #38132f
		// tertiary | #DACFCC
		'--color-tertiary-50': '249 248 247', // #f9f8f7
		'--color-tertiary-100': '248 245 245', // #f8f5f5
		'--color-tertiary-200': '246 243 242', // #f6f3f2
		'--color-tertiary-300': '240 236 235', // #f0eceb
		'--color-tertiary-400': '229 221 219', // #e5dddb
		'--color-tertiary-500': '218 207 204', // #DACFCC
		'--color-tertiary-600': '196 186 184', // #c4bab8
		'--color-tertiary-700': '164 155 153', // #a49b99
		'--color-tertiary-800': '131 124 122', // #837c7a
		'--color-tertiary-900': '107 101 100', // #6b6564
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
		// surface | #302E3A
		'--color-surface-50': '224 224 225', // #e0e0e1
		'--color-surface-100': '214 213 216', // #d6d5d8
		'--color-surface-200': '203 203 206', // #cbcbce
		'--color-surface-300': '172 171 176', // #acabb0
		'--color-surface-400': '110 109 117', // #6e6d75
		'--color-surface-500': '48 46 58', // #302E3A
		'--color-surface-600': '43 41 52', // #2b2934
		'--color-surface-700': '36 35 44', // #24232c
		'--color-surface-800': '29 28 35', // #1d1c23
		'--color-surface-900': '24 23 28' // #18171c
	}
};
