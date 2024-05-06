import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const GepardTheme: CustomThemeConfig = {
	name: 'gepard',
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
		// primary | #4ECFF3
		'--color-primary-50': '228 248 253', // #e4f8fd
		'--color-primary-100': '220 245 253', // #dcf5fd
		'--color-primary-200': '211 243 252', // #d3f3fc
		'--color-primary-300': '184 236 250', // #b8ecfa
		'--color-primary-400': '131 221 247', // #83ddf7
		'--color-primary-500': '78 207 243', // #4ECFF3
		'--color-primary-600': '70 186 219', // #46badb
		'--color-primary-700': '59 155 182', // #3b9bb6
		'--color-primary-800': '47 124 146', // #2f7c92
		'--color-primary-900': '38 101 119', // #266577
		// secondary | #054BFC
		'--color-secondary-50': '218 228 255', // #dae4ff
		'--color-secondary-100': '205 219 254', // #cddbfe
		'--color-secondary-200': '193 210 254', // #c1d2fe
		'--color-secondary-300': '155 183 254', // #9bb7fe
		'--color-secondary-400': '80 129 253', // #5081fd
		'--color-secondary-500': '5 75 252', // #054BFC
		'--color-secondary-600': '5 68 227', // #0544e3
		'--color-secondary-700': '4 56 189', // #0438bd
		'--color-secondary-800': '3 45 151', // #032d97
		'--color-secondary-900': '2 37 123', // #02257b
		// tertiary | #E5BD8E
		'--color-tertiary-50': '251 245 238', // #fbf5ee
		'--color-tertiary-100': '250 242 232', // #faf2e8
		'--color-tertiary-200': '249 239 227', // #f9efe3
		'--color-tertiary-300': '245 229 210', // #f5e5d2
		'--color-tertiary-400': '237 209 176', // #edd1b0
		'--color-tertiary-500': '229 189 142', // #E5BD8E
		'--color-tertiary-600': '206 170 128', // #ceaa80
		'--color-tertiary-700': '172 142 107', // #ac8e6b
		'--color-tertiary-800': '137 113 85', // #897155
		'--color-tertiary-900': '112 93 70', // #705d46
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
		// surface | #202533
		'--color-surface-50': '222 222 224', // #dedee0
		'--color-surface-100': '210 211 214', // #d2d3d6
		'--color-surface-200': '199 201 204', // #c7c9cc
		'--color-surface-300': '166 168 173', // #a6a8ad
		'--color-surface-400': '99 102 112', // #636670
		'--color-surface-500': '32 37 51', // #202533
		'--color-surface-600': '29 33 46', // #1d212e
		'--color-surface-700': '24 28 38', // #181c26
		'--color-surface-800': '19 22 31', // #13161f
		'--color-surface-900': '16 18 25' // #101219
	}
};
