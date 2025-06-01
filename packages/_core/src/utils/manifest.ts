/* eslint-disable camelcase */
import {
	createAppleSplashScreens,
	minimal2023Preset,
} from '@vite-pwa/assets-generator/config'

import { PKG } from './const'
import theme   from './uno.theme'

import type { SvelteKitPWAOptions } from '@vite-pwa/sveltekit'

export const manifestDefaultConfig = {
	srcDir         : './src',
	mode           : 'development',
	injectRegister : 'script-defer',
	registerType   : 'autoUpdate',
	injectManifest : { globPatterns: [ '**/*.{js,css,ico,png,svg,webp,woff,woff2}' ] },
	workbox        : { globPatterns: [ '**/*.{css,js,html,svg,png,ico,txt,woff2}' ] },
	// experimental   : { includeAllowlist: true },
	devOptions     : {
		enabled          : true,
		suppressWarnings : true,
		navigateFallback : '/',
	},
	pwaAssets : {
		preset : {
			...minimal2023Preset,
			appleSplashScreens : createAppleSplashScreens( {
				padding       : 0.3,
				resizeOptions : {
					fit        : 'contain',
					background : 'white',
				},
				darkResizeOptions : {
					fit        : 'contain',
					background : 'black',
				},
				linkMediaOptions : {
					log            : true,
					addMediaScreen : true,
					xhtml          : true,
				},
			}, [ 'iPad Air 9.7"' ] ),
		},
		image : 'static/favicon.svg',
	},
	manifest : {
		short_name       : PKG.extra.productName,
		name             : PKG.extra.productName,
		description      : PKG.description,
		start_url        : '/?source=pwa',
		scope            : '/',
		display          : 'standalone',
		theme_color      : theme.colors.primary[500],
		background_color : theme.colors.primary[950],
	},
} satisfies SvelteKitPWAOptions
