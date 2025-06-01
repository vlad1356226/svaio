# `@svaio/pwa` - Examples

## Simple Usage

### ./vite.config.js

```js
import vitePWAPlugin        from '@svaio/pwa'
import { setDefaultConfig } from '@svaio/pwa/config'
import { sveltekit }        from '@sveltejs/kit/vite'
import { defineConfig }     from 'vite'

export default defineConfig( { plugins : [
	vitePWAPlugin( setDefaultConfig( {
		name        : 'my-svelte-app',
		description : 'My Svelte App Description',
	} ) ),
	sveltekit(),
] } )

```



