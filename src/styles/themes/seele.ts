import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const SeeleTheme: CustomThemeConfig = {
	name: 'seele',
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
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #9275FE
		'--color-primary-50': '239 234 255', // #efeaff
		'--color-primary-100': '233 227 255', // #e9e3ff
		'--color-primary-200': '228 221 255', // #e4ddff
		'--color-primary-300': '211 200 255', // #d3c8ff
		'--color-primary-400': '179 158 254', // #b39efe
		'--color-primary-500': '146 117 254', // #9275FE
		'--color-primary-600': '131 105 229', // #8369e5
		'--color-primary-700': '110 88 191', // #6e58bf
		'--color-primary-800': '88 70 152', // #584698
		'--color-primary-900': '72 57 124', // #48397c
		// secondary | #D3196A
		'--color-secondary-50': '248 221 233', // #f8dde9
		'--color-secondary-100': '246 209 225', // #f6d1e1
		'--color-secondary-200': '244 198 218', // #f4c6da
		'--color-secondary-300': '237 163 195', // #eda3c3
		'--color-secondary-400': '224 94 151', // #e05e97
		'--color-secondary-500': '211 25 106', // #D3196A
		'--color-secondary-600': '190 23 95', // #be175f
		'--color-secondary-700': '158 19 80', // #9e1350
		'--color-secondary-800': '127 15 64', // #7f0f40
		'--color-secondary-900': '103 12 52', // #670c34
		// tertiary | #4B4675
		'--color-tertiary-50': '228 227 234', // #e4e3ea
		'--color-tertiary-100': '219 218 227', // #dbdae3
		'--color-tertiary-200': '210 209 221', // #d2d1dd
		'--color-tertiary-300': '183 181 200', // #b7b5c8
		'--color-tertiary-400': '129 126 158', // #817e9e
		'--color-tertiary-500': '75 70 117', // #4B4675
		'--color-tertiary-600': '68 63 105', // #443f69
		'--color-tertiary-700': '56 53 88', // #383558
		'--color-tertiary-800': '45 42 70', // #2d2a46
		'--color-tertiary-900': '37 34 57', // #252239
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
		// surface | #251F31
		'--color-surface-50': '222 221 224', // #dedde0
		'--color-surface-100': '211 210 214', // #d3d2d6
		'--color-surface-200': '201 199 204', // #c9c7cc
		'--color-surface-300': '168 165 173', // #a8a5ad
		'--color-surface-400': '102 98 111', // #66626f
		'--color-surface-500': '37 31 49', // #251F31
		'--color-surface-600': '33 28 44', // #211c2c
		'--color-surface-700': '28 23 37', // #1c1725
		'--color-surface-800': '22 19 29', // #16131d
		'--color-surface-900': '18 15 24' // #120f18
	}
};
