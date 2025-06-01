import vitePWAPlugin           from '@svaio/pwa'
import { setPWADefaultConfig } from '@svaio/pwa/config'
import { sveltekit }           from '@sveltejs/kit/vite'
import { defineConfig }        from 'vite'

export default defineConfig( { plugins : [
	vitePWAPlugin( setPWADefaultConfig( {
		name        : 'my-svelte-app',
		description : 'My Svelte App Description',
	} ) ),
	sveltekit(),
] } )
