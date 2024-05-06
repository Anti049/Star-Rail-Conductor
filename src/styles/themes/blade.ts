import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const BladeTheme: CustomThemeConfig = {
	name: 'blade',
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
		// primary | #720000
		'--color-primary-50': '234 217 217', // #ead9d9
		'--color-primary-100': '227 204 204', // #e3cccc
		'--color-primary-200': '220 191 191', // #dcbfbf
		'--color-primary-300': '199 153 153', // #c79999
		'--color-primary-400': '156 77 77', // #9c4d4d
		'--color-primary-500': '114 0 0', // #720000
		'--color-primary-600': '103 0 0', // #670000
		'--color-primary-700': '86 0 0', // #560000
		'--color-primary-800': '68 0 0', // #440000
		'--color-primary-900': '56 0 0', // #380000
		// secondary | #D9AE73
		'--color-secondary-50': '249 243 234', // #f9f3ea
		'--color-secondary-100': '247 239 227', // #f7efe3
		'--color-secondary-200': '246 235 220', // #f6ebdc
		'--color-secondary-300': '240 223 199', // #f0dfc7
		'--color-secondary-400': '228 198 157', // #e4c69d
		'--color-secondary-500': '217 174 115', // #D9AE73
		'--color-secondary-600': '195 157 104', // #c39d68
		'--color-secondary-700': '163 131 86', // #a38356
		'--color-secondary-800': '130 104 69', // #826845
		'--color-secondary-900': '106 85 56', // #6a5538
		// tertiary | #20729B
		'--color-tertiary-50': '222 234 240', // #deeaf0
		'--color-tertiary-100': '210 227 235', // #d2e3eb
		'--color-tertiary-200': '199 220 230', // #c7dce6
		'--color-tertiary-300': '166 199 215', // #a6c7d7
		'--color-tertiary-400': '99 156 185', // #639cb9
		'--color-tertiary-500': '32 114 155', // #20729B
		'--color-tertiary-600': '29 103 140', // #1d678c
		'--color-tertiary-700': '24 86 116', // #185674
		'--color-tertiary-800': '19 68 93', // #13445d
		'--color-tertiary-900': '16 56 76', // #10384c
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
		// surface | #1F1F27
		'--color-surface-50': '221 221 223', // #dddddf
		'--color-surface-100': '210 210 212', // #d2d2d4
		'--color-surface-200': '199 199 201', // #c7c7c9
		'--color-surface-300': '165 165 169', // #a5a5a9
		'--color-surface-400': '98 98 104', // #626268
		'--color-surface-500': '31 31 39', // #1F1F27
		'--color-surface-600': '28 28 35', // #1c1c23
		'--color-surface-700': '23 23 29', // #17171d
		'--color-surface-800': '19 19 23', // #131317
		'--color-surface-900': '15 15 19' // #0f0f13
	}
};
