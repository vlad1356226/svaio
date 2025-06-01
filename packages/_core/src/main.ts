import { ensureDir }    from '@dovenv/core/utils'
import { sveltekit }    from '@sveltejs/kit/vite'
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import unoCSS           from 'unocss/vite'
import { PluginOption } from 'vite'
import sitemap          from 'vite-plugin-sitemap'

import { manifestDefaultConfig } from './utils/manifest'
import { DIST_WEB_PATH }         from './utils/routes'

export const SvaioVitePlugin = async (): Promise<PluginOption> => {

	await ensureDir( DIST_WEB_PATH )
	return [
		unoCSS(),
		sveltekit(),
		SvelteKitPWA( manifestDefaultConfig ),
		sitemap( {
			outDir   : DIST_WEB_PATH,
			hostname : PKG.homepage,
			exclude  : [ '/chat/*' ],
			i18n     : {
				defaultLanguage : 'en',
				languages       : [
					'en',
					'es',
					'ca',
				],
				strategy : 'prefix',
			},
			robots : [
				{
					userAgent : '*',
					disallow  : '/chat/*',
				},
			],
		} ),
	]

}
