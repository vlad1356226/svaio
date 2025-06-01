
import unoCSS           from 'unocss/vite'
import { PluginOption } from 'vite'

import { Options } from './types'

export type { Options }

/**
 * Vite plugin for UnoCSS & SvelteKit.
 *
 * @template Theme
 * @param   {Options<Theme>}        opts - An object containing configuration options for UnoCSS.
 * @returns {import('vite').Plugin}      The configured UnoCSS plugin instance.
 * @example
 * import { defineConfig } from 'vite'
 * import vitePlugin from '@svaio/unocss'
 *
 * export default defineConfig( {
 *   plugins: [
 *      vitePlugin( {
 *        // Your UnoCSS configuration here.
 *      } ),
 *   ],
 * } )
 */
const vitePlugin = <Theme extends object>( opts: Options<Theme> ): PluginOption =>
	unoCSS<Theme>( opts )

export default vitePlugin
