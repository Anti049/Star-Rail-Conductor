import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const ClaraTheme: CustomThemeConfig = {
	name: 'clara',
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
		// primary | #DE2D1B
		'--color-primary-50': '250 224 221', // #fae0dd
		'--color-primary-100': '248 213 209', // #f8d5d1
		'--color-primary-200': '247 203 198', // #f7cbc6
		'--color-primary-300': '242 171 164', // #f2aba4
		'--color-primary-400': '232 108 95', // #e86c5f
		'--color-primary-500': '222 45 27', // #DE2D1B
		'--color-primary-600': '200 41 24', // #c82918
		'--color-primary-700': '167 34 20', // #a72214
		'--color-primary-800': '133 27 16', // #851b10
		'--color-primary-900': '109 22 13', // #6d160d
		// secondary | #BA3B61
		'--color-secondary-50': '245 226 231', // #f5e2e7
		'--color-secondary-100': '241 216 223', // #f1d8df
		'--color-secondary-200': '238 206 216', // #eeced8
		'--color-secondary-300': '227 177 192', // #e3b1c0
		'--color-secondary-400': '207 118 144', // #cf7690
		'--color-secondary-500': '186 59 97', // #BA3B61
		'--color-secondary-600': '167 53 87', // #a73557
		'--color-secondary-700': '140 44 73', // #8c2c49
		'--color-secondary-800': '112 35 58', // #70233a
		'--color-secondary-900': '91 29 48', // #5b1d30
		// tertiary | #D7C7D1
		'--color-tertiary-50': '249 247 248', // #f9f7f8
		'--color-tertiary-100': '247 244 246', // #f7f4f6
		'--color-tertiary-200': '245 241 244', // #f5f1f4
		'--color-tertiary-300': '239 233 237', // #efe9ed
		'--color-tertiary-400': '227 216 223', // #e3d8df
		'--color-tertiary-500': '215 199 209', // #D7C7D1
		'--color-tertiary-600': '194 179 188', // #c2b3bc
		'--color-tertiary-700': '161 149 157', // #a1959d
		'--color-tertiary-800': '129 119 125', // #81777d
		'--color-tertiary-900': '105 98 102', // #696266
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
		// surface | #392427
		'--color-surface-50': '225 222 223', // #e1dedf
		'--color-surface-100': '215 211 212', // #d7d3d4
		'--color-surface-200': '206 200 201', // #cec8c9
		'--color-surface-300': '176 167 169', // #b0a7a9
		'--color-surface-400': '116 102 104', // #746668
		'--color-surface-500': '57 36 39', // #392427
		'--color-surface-600': '51 32 35', // #332023
		'--color-surface-700': '43 27 29', // #2b1b1d
		'--color-surface-800': '34 22 23', // #221617
		'--color-surface-900': '28 18 19' // #1c1213
	}
};
