import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const SampoTheme: CustomThemeConfig = {
	name: 'sampo',
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
		// primary | #3F46A8
		'--color-primary-50': '226 227 242', // #e2e3f2
		'--color-primary-100': '217 218 238', // #d9daee
		'--color-primary-200': '207 209 233', // #cfd1e9
		'--color-primary-300': '178 181 220', // #b2b5dc
		'--color-primary-400': '121 126 194', // #797ec2
		'--color-primary-500': '63 70 168', // #3F46A8
		'--color-primary-600': '57 63 151', // #393f97
		'--color-primary-700': '47 53 126', // #2f357e
		'--color-primary-800': '38 42 101', // #262a65
		'--color-primary-900': '31 34 82', // #1f2252
		// secondary | #AF1249
		'--color-secondary-50': '243 219 228', // #f3dbe4
		'--color-secondary-100': '239 208 219', // #efd0db
		'--color-secondary-200': '235 196 210', // #ebc4d2
		'--color-secondary-300': '223 160 182', // #dfa0b6
		'--color-secondary-400': '199 89 128', // #c75980
		'--color-secondary-500': '175 18 73', // #AF1249
		'--color-secondary-600': '158 16 66', // #9e1042
		'--color-secondary-700': '131 14 55', // #830e37
		'--color-secondary-800': '105 11 44', // #690b2c
		'--color-secondary-900': '86 9 36', // #560924
		// tertiary | #32CD79
		'--color-tertiary-50': '224 248 235', // #e0f8eb
		'--color-tertiary-100': '214 245 228', // #d6f5e4
		'--color-tertiary-200': '204 243 222', // #ccf3de
		'--color-tertiary-300': '173 235 201', // #adebc9
		'--color-tertiary-400': '112 220 161', // #70dca1
		'--color-tertiary-500': '50 205 121', // #32CD79
		'--color-tertiary-600': '45 185 109', // #2db96d
		'--color-tertiary-700': '38 154 91', // #269a5b
		'--color-tertiary-800': '30 123 73', // #1e7b49
		'--color-tertiary-900': '25 100 59', // #19643b
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
		// surface | #2D273D
		'--color-surface-50': '224 223 226', // #e0dfe2
		'--color-surface-100': '213 212 216', // #d5d4d8
		'--color-surface-200': '203 201 207', // #cbc9cf
		'--color-surface-300': '171 169 177', // #aba9b1
		'--color-surface-400': '108 104 119', // #6c6877
		'--color-surface-500': '45 39 61', // #2D273D
		'--color-surface-600': '41 35 55', // #292337
		'--color-surface-700': '34 29 46', // #221d2e
		'--color-surface-800': '27 23 37', // #1b1725
		'--color-surface-900': '22 19 30' // #16131e
	}
};
