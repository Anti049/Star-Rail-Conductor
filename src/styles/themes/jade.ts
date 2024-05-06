import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const JadeTheme: CustomThemeConfig = {
	name: 'jade',
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
		// primary | #5D51E0
		'--color-primary-50': '231 229 250', // #e7e5fa
		'--color-primary-100': '223 220 249', // #dfdcf9
		'--color-primary-200': '215 212 247', // #d7d4f7
		'--color-primary-300': '190 185 243', // #beb9f3
		'--color-primary-400': '142 133 233', // #8e85e9
		'--color-primary-500': '93 81 224', // #5D51E0
		'--color-primary-600': '84 73 202', // #5449ca
		'--color-primary-700': '70 61 168', // #463da8
		'--color-primary-800': '56 49 134', // #383186
		'--color-primary-900': '46 40 110', // #2e286e
		// secondary | #ECA9F8
		'--color-secondary-50': '252 242 254', // #fcf2fe
		'--color-secondary-100': '251 238 254', // #fbeefe
		'--color-secondary-200': '250 234 253', // #faeafd
		'--color-secondary-300': '247 221 252', // #f7ddfc
		'--color-secondary-400': '242 195 250', // #f2c3fa
		'--color-secondary-500': '236 169 248', // #ECA9F8
		'--color-secondary-600': '212 152 223', // #d498df
		'--color-secondary-700': '177 127 186', // #b17fba
		'--color-secondary-800': '142 101 149', // #8e6595
		'--color-secondary-900': '116 83 122', // #74537a
		// tertiary | #4C4474
		'--color-tertiary-50': '228 227 234', // #e4e3ea
		'--color-tertiary-100': '219 218 227', // #dbdae3
		'--color-tertiary-200': '210 208 220', // #d2d0dc
		'--color-tertiary-300': '183 180 199', // #b7b4c7
		'--color-tertiary-400': '130 124 158', // #827c9e
		'--color-tertiary-500': '76 68 116', // #4C4474
		'--color-tertiary-600': '68 61 104', // #443d68
		'--color-tertiary-700': '57 51 87', // #393357
		'--color-tertiary-800': '46 41 70', // #2e2946
		'--color-tertiary-900': '37 33 57', // #252139
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
		// surface | #282237
		'--color-surface-50': '223 222 225', // #dfdee1
		'--color-surface-100': '212 211 215', // #d4d3d7
		'--color-surface-200': '201 200 205', // #c9c8cd
		'--color-surface-300': '169 167 175', // #a9a7af
		'--color-surface-400': '105 100 115', // #696473
		'--color-surface-500': '40 34 55', // #282237
		'--color-surface-600': '36 31 50', // #241f32
		'--color-surface-700': '30 26 41', // #1e1a29
		'--color-surface-800': '24 20 33', // #181421
		'--color-surface-900': '20 17 27' // #14111b
	}
};
