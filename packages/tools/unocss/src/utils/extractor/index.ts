import extractorSvelteCore from '@unocss/extractor-svelte'
import { Extractor }       from 'unocss'

/**
 * Supports extracting classes from class: directive.
 *
 * @returns {Extractor} The extractor function.
 * @example
 * import { defineConfig } from 'unocss'
 * import { extractorSvelte } from '@svaio/unocss'
 *
 * export default defineConfig( {
 *   extractors : [ extractorSvelte() ],
 * } )
 */
export const extractorSvelte = (): Extractor =>
	extractorSvelteCore()
