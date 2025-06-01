import { sveltekit }    from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

import PKG                     from './package.json'
import PWAPlugin               from '../../src/index'
import { setPWADefaultConfig } from '../../src/utils'

export default defineConfig( { plugins : [
	PWAPlugin( setPWADefaultConfig( {
		name        : PKG.name,
		description : PKG.description,
	} ) ),
	sveltekit(),
] } )
