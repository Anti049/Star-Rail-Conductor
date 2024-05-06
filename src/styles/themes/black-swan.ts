import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const BlackSwanTheme: CustomThemeConfig = {
	name: 'black-swan',
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
		// primary | #7E71E7
		'--color-primary-50': '236 234 251', // #eceafb
		'--color-primary-100': '229 227 250', // #e5e3fa
		'--color-primary-200': '223 220 249', // #dfdcf9
		'--color-primary-300': '203 198 245', // #cbc6f5
		'--color-primary-400': '165 156 238', // #a59cee
		'--color-primary-500': '126 113 231', // #7E71E7
		'--color-primary-600': '113 102 208', // #7166d0
		'--color-primary-700': '95 85 173', // #5f55ad
		'--color-primary-800': '76 68 139', // #4c448b
		'--color-primary-900': '62 55 113', // #3e3771
		// secondary | #A771D0
		'--color-secondary-50': '242 234 248', // #f2eaf8
		'--color-secondary-100': '237 227 246', // #ede3f6
		'--color-secondary-200': '233 220 243', // #e9dcf3
		'--color-secondary-300': '220 198 236', // #dcc6ec
		'--color-secondary-400': '193 156 222', // #c19cde
		'--color-secondary-500': '167 113 208', // #A771D0
		'--color-secondary-600': '150 102 187', // #9666bb
		'--color-secondary-700': '125 85 156', // #7d559c
		'--color-secondary-800': '100 68 125', // #64447d
		'--color-secondary-900': '82 55 102', // #523766
		// tertiary | #BBB5E7
		'--color-tertiary-50': '245 244 251', // #f5f4fb
		'--color-tertiary-100': '241 240 250', // #f1f0fa
		'--color-tertiary-200': '238 237 249', // #eeedf9
		'--color-tertiary-300': '228 225 245', // #e4e1f5
		'--color-tertiary-400': '207 203 238', // #cfcbee
		'--color-tertiary-500': '187 181 231', // #BBB5E7
		'--color-tertiary-600': '168 163 208', // #a8a3d0
		'--color-tertiary-700': '140 136 173', // #8c88ad
		'--color-tertiary-800': '112 109 139', // #706d8b
		'--color-tertiary-900': '92 89 113', // #5c5971
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
		// surface | #372C46
		'--color-surface-50': '225 223 227', // #e1dfe3
		'--color-surface-100': '215 213 218', // #d7d5da
		'--color-surface-200': '205 202 209', // #cdcad1
		'--color-surface-300': '175 171 181', // #afabb5
		'--color-surface-400': '115 107 126', // #736b7e
		'--color-surface-500': '55 44 70', // #372C46
		'--color-surface-600': '50 40 63', // #32283f
		'--color-surface-700': '41 33 53', // #292135
		'--color-surface-800': '33 26 42', // #211a2a
		'--color-surface-900': '27 22 34' // #1b1622
	}
};
