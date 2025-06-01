import extractorSvelte    from '@unocss/extractor-svelte'
import {
	defineConfig,
	presetIcons,
	presetTypography,
	presetWind3,
	transformerDirectives,
} from 'unocss'

import iconsConfig from './utils/uno.icons'
import presetApp   from './utils/uno.preset'

export default defineConfig( {
	extractors   : [ extractorSvelte() ],
	transformers : [ transformerDirectives() ],
	presets      : [
		presetWind3(),
		presetIcons( iconsConfig ),
		presetTypography(),
		presetApp(),
	],
	content : { pipeline : { include : [
		/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
		'src/**/*.{js,ts}',
		'node_modules/flowbite-svelte/dist/**/*.{js,ts,svelte}',
	] } },
	safelist : [ 'prose' ],
} )
