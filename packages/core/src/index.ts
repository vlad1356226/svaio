import i18n    from '@svaio/i18n/vite'
import pwa     from '@svaio/pwa'
import sitemap from '@svaio/sitemap'
import unocss  from '@svaio/unocss'

import type { PluginOption } from 'vite'

export type Options = {
	/**
	 * Add unocss support
	 */
	unocss? : false | Parameters<typeof unocss>[0]

	/**
	 * Add sitemap support
	 */
	sitemap? : false | Parameters<typeof sitemap>[0]

	/**
	 * Add PWA support
	 */
	pwa? : false | Parameters<typeof pwa>[0]

	/**
	 * Add i18n support
	 */
	i18n? : false | Parameters<typeof i18n>[0]
}

/**
 * Vite plugin for integrating support for UnoCSS, Sitemap, PWA, and i18n.
 *
 * @param   {Options} opts - An object containing configuration options for each feature.
 * @returns {Array}        Returns an array of plugins, filtering out any that are not enabled.
 */

const vitePlugin = ( opts: Options ): PluginOption => [
	opts.unocss && unocss( opts.unocss ),
	opts.sitemap && sitemap( opts.sitemap ),
	opts.pwa && pwa( opts.pwa ),
	opts.i18n && i18n( opts.i18n ),
]

export default vitePlugin
