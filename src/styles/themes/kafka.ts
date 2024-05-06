import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const KafkaTheme: CustomThemeConfig = {
	name: 'kafka',
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
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #803D6C
		'--color-primary-50': '236 226 233', // #ece2e9
		'--color-primary-100': '230 216 226', // #e6d8e2
		'--color-primary-200': '223 207 218', // #dfcfda
		'--color-primary-300': '204 177 196', // #ccb1c4
		'--color-primary-400': '166 119 152', // #a67798
		'--color-primary-500': '128 61 108', // #803D6C
		'--color-primary-600': '115 55 97', // #733761
		'--color-primary-700': '96 46 81', // #602e51
		'--color-primary-800': '77 37 65', // #4d2541
		'--color-primary-900': '63 30 53', // #3f1e35
		// secondary | #EB3A6A
		'--color-secondary-50': '252 225 233', // #fce1e9
		'--color-secondary-100': '251 216 225', // #fbd8e1
		'--color-secondary-200': '250 206 218', // #faceda
		'--color-secondary-300': '247 176 195', // #f7b0c3
		'--color-secondary-400': '241 117 151', // #f17597
		'--color-secondary-500': '235 58 106', // #EB3A6A
		'--color-secondary-600': '212 52 95', // #d4345f
		'--color-secondary-700': '176 44 80', // #b02c50
		'--color-secondary-800': '141 35 64', // #8d2340
		'--color-secondary-900': '115 28 52', // #731c34
		// tertiary | #D8C4B1
		'--color-tertiary-50': '249 246 243', // #f9f6f3
		'--color-tertiary-100': '247 243 239', // #f7f3ef
		'--color-tertiary-200': '245 240 236', // #f5f0ec
		'--color-tertiary-300': '239 231 224', // #efe7e0
		'--color-tertiary-400': '228 214 200', // #e4d6c8
		'--color-tertiary-500': '216 196 177', // #D8C4B1
		'--color-tertiary-600': '194 176 159', // #c2b09f
		'--color-tertiary-700': '162 147 133', // #a29385
		'--color-tertiary-800': '130 118 106', // #82766a
		'--color-tertiary-900': '106 96 87', // #6a6057
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
		// surface | #3A3031
		'--color-surface-50': '225 224 224', // #e1e0e0
		'--color-surface-100': '216 214 214', // #d8d6d6
		'--color-surface-200': '206 203 204', // #cecbcc
		'--color-surface-300': '176 172 173', // #b0acad
		'--color-surface-400': '117 110 111', // #756e6f
		'--color-surface-500': '58 48 49', // #3A3031
		'--color-surface-600': '52 43 44', // #342b2c
		'--color-surface-700': '44 36 37', // #2c2425
		'--color-surface-800': '35 29 29', // #231d1d
		'--color-surface-900': '28 24 24' // #1c1818
	}
};
