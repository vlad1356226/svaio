import {
	SVG,
	parseColors,
} from '@iconify/tools'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

import { MEDIA_SVG_PATH } from './const'

import type { presetIcons } from 'unocss'

export default {
	prefix      : 'i-',
	collections : {
		'fa6-solid'  : () => import( '@iconify-json/fa6-solid/icons.json' ).then( i => i.default ),
		'fa6-brands' : () => import( '@iconify-json/fa6-brands/icons.json' ).then( i => i.default ),
		'app'        : FileSystemIconLoader( MEDIA_SVG_PATH, async value => {

			const svg = new SVG( value )
			await parseColors( svg, { defaultColor: 'currentColor' } )

			return svg.toMinifiedString()

		} ),
	},
	extraProperties : {
		'display'        : 'inline-block',
		'vertical-align' : 'middle',
	},
} satisfies Parameters<typeof presetIcons>[0]
