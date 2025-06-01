import type { Preset } from 'unocss'

export default {
	animation : {
		'border'     : 'background ease-in-out infinite',
		'fill'       : 'fill 5s infinite',
		'theme-card' : 'fadeIn .5s ease-in-out',
	},
	keyframes : {
		fadeIn     : `{from { opacity: 0;} to { opacity: 1;}}`,
		background : `{0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; }}`,
		fill       : `{ 0% { fill: theme('colors.primary.50'); } 50% { fill: theme('colors.primary.300'); } 80% { fill: theme('colors.secondary.200'); } 100% { fill: theme('colors.primary.50'); }}`,
	},

	// textShadow : {
	// 	sm      : '0 1px 2px var(--un-shadow-color)',
	// 	DEFAULT : '0 2px 4px var(--un-shadow-color)',
	// 	lg      : '0 8px 16px var(--un-shadow-color)',
	// },

	// boxShadow : { btn: '0 0 40px 10px var(--un-shadow-color)' },

	/**
	 * Colors of interface.
	 *
	 * @see https://uicolors.app/create
	 * @see https://www.tints.dev/
	 */
	colors : {
		red : {
			50  : '#FCF2F4',
			100 : '#F9E2E4',
			200 : '#F3C9CE',
			300 : '#ECACB3',
			400 : '#E68E99',
			500 : '#E0737F',
			600 : '#D33B4D',
			700 : '#A72534',
			800 : '#711923',
			900 : '#360C11',
			950 : '#1D0609',
		},
		primary : {
			50  : '#f5f5fd',
			100 : '#eeecfb',
			200 : '#dfdcf8',
			300 : '#c8c1f1',
			400 : '#ab9de8',
			500 : '#8e75dd',
			600 : '#7c57d0',
			700 : '#6b45bc',
			800 : '#59399e',
			900 : '#50348b',
			950 : '#2e1e57',
		},
		secondary : {
			50  : '#f7f7fb',
			100 : '#f1eff8',
			200 : '#e5e2f2',
			300 : '#d1cbe7',
			400 : '#b8add8',
			500 : '#9e8bc7',
			600 : '#8b71b6',
			700 : '#8167a8',
			800 : '#664f88',
			900 : '#544270',
			950 : '#362a4b',
		},
		tertiary : {
			50  : '#fcf5f4',
			100 : '#f9eae7',
			200 : '#f1ccc4',
			300 : '#ecbfb5',
			400 : '#e09889',
			500 : '#d07663',
			600 : '#bb5c47',
			700 : '#9d4a38',
			800 : '#824032',
			900 : '#6d3a2f',
			950 : '#3a1c15',
		},
		gold : {
			50  : '#fdfce9',
			100 : '#faf9c7',
			200 : '#f7f291',
			300 : '#f2e352',
			400 : '#ecd123',
			500 : '#cdac14',
			600 : '#be9110',
			700 : '#986910',
			800 : '#7e5415',
			900 : '#6b4418',
			950 : '#3e230a',
		},
		gray : {
			50  : '#F2F2F2',
			100 : '#E8E8E8',
			200 : '#CFCFCF',
			300 : '#B8B8B8',
			400 : '#A1A1A1',
			500 : '#888888',
			600 : '#6E6E6E',
			700 : '#525252',
			800 : '#363636',
			900 : '#1C1C1C',
			950 : '#0D0D0D',
		},
	},
} satisfies NonNullable<Preset['theme']>
