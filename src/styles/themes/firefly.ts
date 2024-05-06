import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const FireflyTheme: CustomThemeConfig = {
	name: 'firefly',
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
		// primary | #82E6DB
		'--color-primary-50': '236 251 250', // #ecfbfa
		'--color-primary-100': '230 250 248', // #e6faf8
		'--color-primary-200': '224 249 246', // #e0f9f6
		'--color-primary-300': '205 245 241', // #cdf5f1
		'--color-primary-400': '168 238 230', // #a8eee6
		'--color-primary-500': '130 230 219', // #82E6DB
		'--color-primary-600': '117 207 197', // #75cfc5
		'--color-primary-700': '98 173 164', // #62ada4
		'--color-primary-800': '78 138 131', // #4e8a83
		'--color-primary-900': '64 113 107', // #40716b
		// secondary | #E56A16
		'--color-secondary-50': '251 233 220', // #fbe9dc
		'--color-secondary-100': '250 225 208', // #fae1d0
		'--color-secondary-200': '249 218 197', // #f9dac5
		'--color-secondary-300': '245 195 162', // #f5c3a2
		'--color-secondary-400': '237 151 92', // #ed975c
		'--color-secondary-500': '229 106 22', // #E56A16
		'--color-secondary-600': '206 95 20', // #ce5f14
		'--color-secondary-700': '172 80 17', // #ac5011
		'--color-secondary-800': '137 64 13', // #89400d
		'--color-secondary-900': '112 52 11', // #70340b
		// tertiary | #F0E6B1
		'--color-tertiary-50': '253 251 243', // #fdfbf3
		'--color-tertiary-100': '252 250 239', // #fcfaef
		'--color-tertiary-200': '251 249 236', // #fbf9ec
		'--color-tertiary-300': '249 245 224', // #f9f5e0
		'--color-tertiary-400': '245 238 200', // #f5eec8
		'--color-tertiary-500': '240 230 177', // #F0E6B1
		'--color-tertiary-600': '216 207 159', // #d8cf9f
		'--color-tertiary-700': '180 173 133', // #b4ad85
		'--color-tertiary-800': '144 138 106', // #908a6a
		'--color-tertiary-900': '118 113 87', // #767157
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
		// surface | #21181D
		'--color-surface-50': '222 220 221', // #dedcdd
		'--color-surface-100': '211 209 210', // #d3d1d2
		'--color-surface-200': '200 197 199', // #c8c5c7
		'--color-surface-300': '166 163 165', // #a6a3a5
		'--color-surface-400': '100 93 97', // #645d61
		'--color-surface-500': '33 24 29', // #21181D
		'--color-surface-600': '30 22 26', // #1e161a
		'--color-surface-700': '25 18 22', // #191216
		'--color-surface-800': '20 14 17', // #140e11
		'--color-surface-900': '16 12 14' // #100c0e
	}
};
