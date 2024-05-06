import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const ServalTheme: CustomThemeConfig = {
	name: 'serval',
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
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #AA51D2
		'--color-primary-50': '242 229 248', // #f2e5f8
		'--color-primary-100': '238 220 246', // #eedcf6
		'--color-primary-200': '234 212 244', // #ead4f4
		'--color-primary-300': '221 185 237', // #ddb9ed
		'--color-primary-400': '196 133 224', // #c485e0
		'--color-primary-500': '170 81 210', // #AA51D2
		'--color-primary-600': '153 73 189', // #9949bd
		'--color-primary-700': '128 61 158', // #803d9e
		'--color-primary-800': '102 49 126', // #66317e
		'--color-primary-900': '83 40 103', // #532867
		// secondary | #5043C8
		'--color-secondary-50': '229 227 247', // #e5e3f7
		'--color-secondary-100': '220 217 244', // #dcd9f4
		'--color-secondary-200': '211 208 241', // #d3d0f1
		'--color-secondary-300': '185 180 233', // #b9b4e9
		'--color-secondary-400': '133 123 217', // #857bd9
		'--color-secondary-500': '80 67 200', // #5043C8
		'--color-secondary-600': '72 60 180', // #483cb4
		'--color-secondary-700': '60 50 150', // #3c3296
		'--color-secondary-800': '48 40 120', // #302878
		'--color-secondary-900': '39 33 98', // #272162
		// tertiary | #3AA1FE
		'--color-tertiary-50': '225 241 255', // #e1f1ff
		'--color-tertiary-100': '216 236 255', // #d8ecff
		'--color-tertiary-200': '206 232 255', // #cee8ff
		'--color-tertiary-300': '176 217 255', // #b0d9ff
		'--color-tertiary-400': '117 189 254', // #75bdfe
		'--color-tertiary-500': '58 161 254', // #3AA1FE
		'--color-tertiary-600': '52 145 229', // #3491e5
		'--color-tertiary-700': '44 121 191', // #2c79bf
		'--color-tertiary-800': '35 97 152', // #236198
		'--color-tertiary-900': '28 79 124', // #1c4f7c
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
		// surface | #24224C
		'--color-surface-50': '222 222 228', // #dedee4
		'--color-surface-100': '211 211 219', // #d3d3db
		'--color-surface-200': '200 200 210', // #c8c8d2
		'--color-surface-300': '167 167 183', // #a7a7b7
		'--color-surface-400': '102 100 130', // #666482
		'--color-surface-500': '36 34 76', // #24224C
		'--color-surface-600': '32 31 68', // #201f44
		'--color-surface-700': '27 26 57', // #1b1a39
		'--color-surface-800': '22 20 46', // #16142e
		'--color-surface-900': '18 17 37' // #121125
	}
};
