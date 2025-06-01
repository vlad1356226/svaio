
import type { Options } from './types'

export type DefaultConfig = {
	/**
	 * Hostname for the sitemap.
	 */
	hostname? : string
	/**
	 * Output directory for the build files.
	 *
	 * @default 'dist/web'
	 */
	outDir?   : string
	/**
	 * Array of paths to exclude from the sitemap.
	 *
	 * @example ['/admin/*']
	 */
	exclude?  : string[]
}

export const setDefaultConfig = ( opts?: DefaultConfig ): Options => ( {
	outDir   : opts?.outDir || 'dist/web',
	hostname : opts?.hostname,
	exclude  : opts?.exclude,
	robots   : [
		{
			userAgent : '*',
			disallow  : opts?.exclude,
		},
	],
} )
