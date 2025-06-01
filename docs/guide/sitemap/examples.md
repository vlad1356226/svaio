# `@svaio/sitemap` - Examples

## Simple Usage

### ./vite.config.js

```js
import sitemapPlugin        from '@svaio/sitemap'
import { setDefaultConfig } from '@svaio/sitemap/config'
import { sveltekit }        from '@sveltejs/kit/vite'
import { defineConfig }     from 'vite'

export default defineConfig( { plugins: [ sitemapPlugin( setDefaultConfig( ) ), sveltekit() ] } )

```



