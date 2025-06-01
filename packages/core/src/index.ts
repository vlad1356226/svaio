import pwa     from '@svaio/pwa'
import sitemap from '@svaio/sitemap'
import unocss  from '@svaio/unocss'

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
}

const vitePlugin = ( opts: Options ) => [
	opts.unocss && unocss( opts.unocss ),
	opts.sitemap && sitemap( opts.sitemap ),
	opts.pwa && pwa( opts.pwa ),
].filter( Boolean )

export default vitePlugin
