import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const TrailblazerTheme: CustomThemeConfig = {
	name: 'trailblazer',
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
		// primary | #E9C66F
		'--color-primary-50': '252 246 233', // #fcf6e9
		'--color-primary-100': '251 244 226', // #fbf4e2
		'--color-primary-200': '250 241 219', // #faf1db
		'--color-primary-300': '246 232 197', // #f6e8c5
		'--color-primary-400': '240 215 154', // #f0d79a
		'--color-primary-500': '233 198 111', // #E9C66F
		'--color-primary-600': '210 178 100', // #d2b264
		'--color-primary-700': '175 149 83', // #af9553
		'--color-primary-800': '140 119 67', // #8c7743
		'--color-primary-900': '114 97 54', // #726136
		// secondary | #B53F34
		'--color-secondary-50': '244 226 225', // #f4e2e1
		'--color-secondary-100': '240 217 214', // #f0d9d6
		'--color-secondary-200': '237 207 204', // #edcfcc
		'--color-secondary-300': '225 178 174', // #e1b2ae
		'--color-secondary-400': '203 121 113', // #cb7971
		'--color-secondary-500': '181 63 52', // #B53F34
		'--color-secondary-600': '163 57 47', // #a3392f
		'--color-secondary-700': '136 47 39', // #882f27
		'--color-secondary-800': '109 38 31', // #6d261f
		'--color-secondary-900': '89 31 25', // #591f19
		// tertiary | #DFDBD8
		'--color-tertiary-50': '250 250 249', // #fafaf9
		'--color-tertiary-100': '249 248 247', // #f9f8f7
		'--color-tertiary-200': '247 246 245', // #f7f6f5
		'--color-tertiary-300': '242 241 239', // #f2f1ef
		'--color-tertiary-400': '233 230 228', // #e9e6e4
		'--color-tertiary-500': '223 219 216', // #DFDBD8
		'--color-tertiary-600': '201 197 194', // #c9c5c2
		'--color-tertiary-700': '167 164 162', // #a7a4a2
		'--color-tertiary-800': '134 131 130', // #868382
		'--color-tertiary-900': '109 107 106', // #6d6b6a
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
		// surface | #222021
		'--color-surface-50': '222 222 222', // #dedede
		'--color-surface-100': '211 210 211', // #d3d2d3
		'--color-surface-200': '200 199 200', // #c8c7c8
		'--color-surface-300': '167 166 166', // #a7a6a6
		'--color-surface-400': '100 99 100', // #646364
		'--color-surface-500': '34 32 33', // #222021
		'--color-surface-600': '31 29 30', // #1f1d1e
		'--color-surface-700': '26 24 25', // #1a1819
		'--color-surface-800': '20 19 20', // #141314
		'--color-surface-900': '17 16 16' // #111010
	}
};
