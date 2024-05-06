import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const PelaTheme: CustomThemeConfig = {
	name: 'pela',
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
		// primary | #524C8D
		'--color-primary-50': '229 228 238', // #e5e4ee
		'--color-primary-100': '220 219 232', // #dcdbe8
		'--color-primary-200': '212 210 227', // #d4d2e3
		'--color-primary-300': '186 183 209', // #bab7d1
		'--color-primary-400': '134 130 175', // #8682af
		'--color-primary-500': '82 76 141', // #524C8D
		'--color-primary-600': '74 68 127', // #4a447f
		'--color-primary-700': '62 57 106', // #3e396a
		'--color-primary-800': '49 46 85', // #312e55
		'--color-primary-900': '40 37 69', // #282545
		// secondary | #1582E3
		'--color-secondary-50': '220 236 251', // #dcecfb
		'--color-secondary-100': '208 230 249', // #d0e6f9
		'--color-secondary-200': '197 224 248', // #c5e0f8
		'--color-secondary-300': '161 205 244', // #a1cdf4
		'--color-secondary-400': '91 168 235', // #5ba8eb
		'--color-secondary-500': '21 130 227', // #1582E3
		'--color-secondary-600': '19 117 204', // #1375cc
		'--color-secondary-700': '16 98 170', // #1062aa
		'--color-secondary-800': '13 78 136', // #0d4e88
		'--color-secondary-900': '10 64 111', // #0a406f
		// tertiary | #FFD69E
		'--color-tertiary-50': '255 249 240', // #fff9f0
		'--color-tertiary-100': '255 247 236', // #fff7ec
		'--color-tertiary-200': '255 245 231', // #fff5e7
		'--color-tertiary-300': '255 239 216', // #ffefd8
		'--color-tertiary-400': '255 226 187', // #ffe2bb
		'--color-tertiary-500': '255 214 158', // #FFD69E
		'--color-tertiary-600': '230 193 142', // #e6c18e
		'--color-tertiary-700': '191 161 119', // #bfa177
		'--color-tertiary-800': '153 128 95', // #99805f
		'--color-tertiary-900': '125 105 77', // #7d694d
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
		// surface | #221F30
		'--color-surface-50': '222 221 224', // #dedde0
		'--color-surface-100': '211 210 214', // #d3d2d6
		'--color-surface-200': '200 199 203', // #c8c7cb
		'--color-surface-300': '167 165 172', // #a7a5ac
		'--color-surface-400': '100 98 110', // #64626e
		'--color-surface-500': '34 31 48', // #221F30
		'--color-surface-600': '31 28 43', // #1f1c2b
		'--color-surface-700': '26 23 36', // #1a1724
		'--color-surface-800': '20 19 29', // #14131d
		'--color-surface-900': '17 15 24' // #110f18
	}
};
