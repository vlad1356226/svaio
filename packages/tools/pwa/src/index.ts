import { SvelteKitPWA } from '@vite-pwa/sveltekit'

import type { Options }      from './types'
import type { PluginOption } from 'vite'

export type { Options }

/**
 * SvelteKit PWA Plugin
 *
 * @param   {Options}      opts - An object containing configuration options for the PWA.
 * @returns {PluginOption}      The configured SvelteKit PWA plugin instance.
 * @example
 * import pwaPlugin            from '@svaio/pwa'
 * import { setDefaultConfig } from '@svaio/pwa/config'
 * import { sveltekit }        from '@sveltejs/kit/vite'
 * import { defineConfig }     from 'vite'
 *
 * export default defineConfig( {
 *   plugins: [
 *      pwaPlugin( setDefaultConfig({name: 'my-svelte-app'}) ),
 *      sveltekit()
 *   ],
 * } )
 */

const vitePlugin = ( opts: Options ): PluginOption =>
	SvelteKitPWA( opts )

export default vitePlugin
