import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const LynxTheme: CustomThemeConfig = {
	name: 'lynx',
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
		// primary | #3178CD
		'--color-primary-50': '224 235 248', // #e0ebf8
		'--color-primary-100': '214 228 245', // #d6e4f5
		'--color-primary-200': '204 221 243', // #ccddf3
		'--color-primary-300': '173 201 235', // #adc9eb
		'--color-primary-400': '111 161 220', // #6fa1dc
		'--color-primary-500': '49 120 205', // #3178CD
		'--color-primary-600': '44 108 185', // #2c6cb9
		'--color-primary-700': '37 90 154', // #255a9a
		'--color-primary-800': '29 72 123', // #1d487b
		'--color-primary-900': '24 59 100', // #183b64
		// secondary | #1FB1CB
		'--color-secondary-50': '221 243 247', // #ddf3f7
		'--color-secondary-100': '210 239 245', // #d2eff5
		'--color-secondary-200': '199 236 242', // #c7ecf2
		'--color-secondary-300': '165 224 234', // #a5e0ea
		'--color-secondary-400': '98 200 219', // #62c8db
		'--color-secondary-500': '31 177 203', // #1FB1CB
		'--color-secondary-600': '28 159 183', // #1c9fb7
		'--color-secondary-700': '23 133 152', // #178598
		'--color-secondary-800': '19 106 122', // #136a7a
		'--color-secondary-900': '15 87 99', // #0f5763
		// tertiary | #F1D2AF
		'--color-tertiary-50': '253 248 243', // #fdf8f3
		'--color-tertiary-100': '252 246 239', // #fcf6ef
		'--color-tertiary-200': '252 244 235', // #fcf4eb
		'--color-tertiary-300': '249 237 223', // #f9eddf
		'--color-tertiary-400': '245 224 199', // #f5e0c7
		'--color-tertiary-500': '241 210 175', // #F1D2AF
		'--color-tertiary-600': '217 189 158', // #d9bd9e
		'--color-tertiary-700': '181 158 131', // #b59e83
		'--color-tertiary-800': '145 126 105', // #917e69
		'--color-tertiary-900': '118 103 86', // #766756
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
		// surface | #1E2742
		'--color-surface-50': '221 223 227', // #dddfe3
		'--color-surface-100': '210 212 217', // #d2d4d9
		'--color-surface-200': '199 201 208', // #c7c9d0
		'--color-surface-300': '165 169 179', // #a5a9b3
		'--color-surface-400': '98 104 123', // #62687b
		'--color-surface-500': '30 39 66', // #1E2742
		'--color-surface-600': '27 35 59', // #1b233b
		'--color-surface-700': '23 29 50', // #171d32
		'--color-surface-800': '18 23 40', // #121728
		'--color-surface-900': '15 19 32' // #0f1320
	}
};
