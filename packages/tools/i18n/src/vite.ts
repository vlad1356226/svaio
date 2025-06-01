import { paraglide } from '@inlang/paraglide-sveltekit/vite'

import type { PluginOption } from 'vite'

export type Options = Parameters<typeof paraglide>[0]

const vitePlugin = ( opts: Options ): PluginOption => paraglide( opts )

export default vitePlugin
