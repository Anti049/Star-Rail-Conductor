import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const HanyaTheme: CustomThemeConfig = {
	name: 'hanya',
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
		// primary | #0087AC
		'--color-primary-50': '217 237 243', // #d9edf3
		'--color-primary-100': '204 231 238', // #cce7ee
		'--color-primary-200': '191 225 234', // #bfe1ea
		'--color-primary-300': '153 207 222', // #99cfde
		'--color-primary-400': '77 171 197', // #4dabc5
		'--color-primary-500': '0 135 172', // #0087AC
		'--color-primary-600': '0 122 155', // #007a9b
		'--color-primary-700': '0 101 129', // #006581
		'--color-primary-800': '0 81 103', // #005167
		'--color-primary-900': '0 66 84', // #004254
		// secondary | #7E1516
		'--color-secondary-50': '236 220 220', // #ecdcdc
		'--color-secondary-100': '229 208 208', // #e5d0d0
		'--color-secondary-200': '223 197 197', // #dfc5c5
		'--color-secondary-300': '203 161 162', // #cba1a2
		'--color-secondary-400': '165 91 92', // #a55b5c
		'--color-secondary-500': '126 21 22', // #7E1516
		'--color-secondary-600': '113 19 20', // #711314
		'--color-secondary-700': '95 16 17', // #5f1011
		'--color-secondary-800': '76 13 13', // #4c0d0d
		'--color-secondary-900': '62 10 11', // #3e0a0b
		// tertiary | #CFD9E4
		'--color-tertiary-50': '248 249 251', // #f8f9fb
		'--color-tertiary-100': '245 247 250', // #f5f7fa
		'--color-tertiary-200': '243 246 248', // #f3f6f8
		'--color-tertiary-300': '236 240 244', // #ecf0f4
		'--color-tertiary-400': '221 228 236', // #dde4ec
		'--color-tertiary-500': '207 217 228', // #CFD9E4
		'--color-tertiary-600': '186 195 205', // #bac3cd
		'--color-tertiary-700': '155 163 171', // #9ba3ab
		'--color-tertiary-800': '124 130 137', // #7c8289
		'--color-tertiary-900': '101 106 112', // #656a70
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
		// surface | #141B2B
		'--color-surface-50': '220 221 223', // #dcdddf
		'--color-surface-100': '208 209 213', // #d0d1d5
		'--color-surface-200': '196 198 202', // #c4c6ca
		'--color-surface-300': '161 164 170', // #a1a4aa
		'--color-surface-400': '91 95 107', // #5b5f6b
		'--color-surface-500': '20 27 43', // #141B2B
		'--color-surface-600': '18 24 39', // #121827
		'--color-surface-700': '15 20 32', // #0f1420
		'--color-surface-800': '12 16 26', // #0c101a
		'--color-surface-900': '10 13 21' // #0a0d15
	}
};
