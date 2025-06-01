import {
	Preset,
	presetIcons as presetIconsCore,
} from 'unocss'

export * from './loader'

export type PresetIconsOptions = NonNullable<Parameters<typeof presetIconsCore>[0]>

/**
 * Preset icons for **unocss**
 *
 * @param   {PresetIconsOptions} opts - An object containing configuration options for the preset icons.
 * @returns {Preset}                  Returns the preset configuration.
 * @see https://unocss.dev/presets/icons
 */
export const presetIcons = ( opts?:PresetIconsOptions ): Preset => presetIconsCore( opts ?? {} )
