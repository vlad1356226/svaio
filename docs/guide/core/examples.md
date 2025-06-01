# `svaio` - Examples

## Simple Usage

### ./vite.config.js

```js
import { sveltekit } from '@sveltejs/kit/vite'
import svaioPlugin   from 'svaio'
import {
	sitemap,
	pwa,
} from 'svaio/utils'
import { defineConfig } from 'vite'

export default defineConfig( { plugins : [
	svaioPlugin( {
		pwa     : pwa.setDefaultConfig( { name: 'my-website-name' } ),
		sitemap : sitemap.setDefaultConfig( ),
	} ),
	sveltekit(),
] } )

```



