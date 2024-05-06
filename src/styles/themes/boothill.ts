import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const BoothillTheme: CustomThemeConfig = {
	name: 'boothill',
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
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #736963
		'--color-primary-50': '234 233 232', // #eae9e8
		'--color-primary-100': '227 225 224', // #e3e1e0
		'--color-primary-200': '220 218 216', // #dcdad8
		'--color-primary-300': '199 195 193', // #c7c3c1
		'--color-primary-400': '157 150 146', // #9d9692
		'--color-primary-500': '115 105 99', // #736963
		'--color-primary-600': '104 95 89', // #685f59
		'--color-primary-700': '86 79 74', // #564f4a
		'--color-primary-800': '69 63 59', // #453f3b
		'--color-primary-900': '56 51 49', // #383331
		// secondary | #D23B40
		'--color-secondary-50': '248 226 226', // #f8e2e2
		'--color-secondary-100': '246 216 217', // #f6d8d9
		'--color-secondary-200': '244 206 207', // #f4cecf
		'--color-secondary-300': '237 177 179', // #edb1b3
		'--color-secondary-400': '224 118 121', // #e07679
		'--color-secondary-500': '210 59 64', // #D23B40
		'--color-secondary-600': '189 53 58', // #bd353a
		'--color-secondary-700': '158 44 48', // #9e2c30
		'--color-secondary-800': '126 35 38', // #7e2326
		'--color-secondary-900': '103 29 31', // #671d1f
		// tertiary | #7F5F41
		'--color-tertiary-50': '236 231 227', // #ece7e3
		'--color-tertiary-100': '229 223 217', // #e5dfd9
		'--color-tertiary-200': '223 215 208', // #dfd7d0
		'--color-tertiary-300': '204 191 179', // #ccbfb3
		'--color-tertiary-400': '165 143 122', // #a58f7a
		'--color-tertiary-500': '127 95 65', // #7F5F41
		'--color-tertiary-600': '114 86 59', // #72563b
		'--color-tertiary-700': '95 71 49', // #5f4731
		'--color-tertiary-800': '76 57 39', // #4c3927
		'--color-tertiary-900': '62 47 32', // #3e2f20
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
		// surface | #3C3533
		'--color-surface-50': '226 225 224', // #e2e1e0
		'--color-surface-100': '216 215 214', // #d8d7d6
		'--color-surface-200': '206 205 204', // #cecdcc
		'--color-surface-300': '177 174 173', // #b1aead
		'--color-surface-400': '119 114 112', // #777270
		'--color-surface-500': '60 53 51', // #3C3533
		'--color-surface-600': '54 48 46', // #36302e
		'--color-surface-700': '45 40 38', // #2d2826
		'--color-surface-800': '36 32 31', // #24201f
		'--color-surface-900': '29 26 25' // #1d1a19
	}
};
