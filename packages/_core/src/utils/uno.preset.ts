
import { toEscapedSelector as e } from 'unocss'

import theme from './uno.theme'

import type {  Preset } from 'unocss'

const preset: () => Preset = ( ) => ( {
	name : 'preset-app',
	theme,
	// preflights : [
	// 	{ getCSS : (  ) => {

	// 		if ( !( 'colors' in theme && theme.colors ) ) return ''
	// 		const vars = Object.entries( theme.colors ).flatMap( ( [ key, shades ] ) =>
	// 			Object.entries( shades ).map( ( [ shade, value ] ) =>
	// 				`--color-${key}-${shade}: ${value};`,
	// 			),
	// 		).join( '\n' )
	// 		return `:root {\n${vars}\n}`

	// 	} },
	// ],
	rules : [
		[ 'rounded-theme', { 'border-radius': '3rem' } ],
		[
			/^scrollbar-hidden$/,
			( [ , name ], { rawSelector } ) => {

				const selector = e( rawSelector )
				return `${selector}::-webkit-scrollbar { display: none; }
				${selector} {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}`

			},
		],
		[
			/^transition-theme$/,
			() => ( {
				'transition-property'        : 'all',
				'transition-duration'        : '300ms',
				'transition-timing-function' : 'ease-in-out',
			} ),
		],
		// theme => { // Function that returns more rules based on theme

		// 	const colors                                           = theme.colors || {}
		// 	const glowRules: [RegExp, () => Record<string, any>][] = []

		// 	const createGlowEffect = ( color: string ) => ( {
		// 		position        : 'relative',
		// 		backgroundSize  : '200% 100%',
		// 		animation       : 'themeBgGlow 1s ease-in-out forwards',
		// 		backgroundImage : `linear-gradient(120deg, rgba(0,0,0,0) 0%, ${color} 25%, rgba(0,0,0,0) 100%)`,
		// 	} )

		// 	const createTextGlow = ( color: string ) => ( {
		// 		...createGlowEffect( color ),
		// 		backgroundClip       : 'text',
		// 		WebkitBackgroundClip : 'text',
		// 		color                : 'transparent',
		// 	} )

		// 	const processColor = ( prefix: string, colorValue: string | Record<string, string>, key?: string ) => {

		// 		const suffix = key ? `-${key}` : ''
		// 		glowRules.push( [ new RegExp( `^${prefix}${suffix}$` ), () => createGlowEffect( colorValue as string ) ] )
		// 		glowRules.push( [ new RegExp( `^text-${prefix}${suffix}$` ), () => createTextGlow( colorValue as string ) ] )

		// 	}

		// 	for ( const colorName in colors ) {

		// 		const color = colors[colorName]
		// 		if ( typeof color === 'string' ) {

		// 			processColor( `bg-glow-effect-${colorName}`, color )
		// 			processColor( `text-glow-effect-${colorName}`, color )

		// 		}
		// 		else if ( typeof color === 'object' ) {

		// 			for ( const shade in color ) {

		// 				processColor( `bg-glow-effect-${colorName}`, color[shade], shade )
		// 				processColor( `text-glow-effect-${colorName}`, color[shade], shade )

		// 			}

		// 		}

		// 	}

		// 	glowRules.push( [
		// 		/^themeBgGlow$/,
		// 		() => ( { '@keyframes themeBgGlow' : {
		// 			'0%'   : { backgroundPosition: '-100%' },
		// 			'100%' : { backgroundPosition: '100%' },
		// 		} } ),
		// 	] )

		// 	return glowRules

		// },
	],
} )

export default preset
