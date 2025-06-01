import type { SvelteKitPWAOptions } from '@vite-pwa/sveltekit'

export type Options = SvelteKitPWAOptions
export type ManifestOptions = Exclude<NonNullable<Options['manifest']>, false>
