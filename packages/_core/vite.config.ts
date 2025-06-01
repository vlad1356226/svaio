
import { ensureDir }    from '@dovenv/core/utils'
import { defineConfig } from 'vite'

import { SvaioVitePlugin } from './src/main'
import {
	PKG,
	port,
	API_URL,
	API_PROXY_PATH,
} from './utils/const'

export default defineConfig( {
	plugins : [ await SvaioVitePlugin() ],
	server  : {
		port,
		strictPort : true,
		host       : '0.0.0.0', // important for docker image
		proxy      : { [API_PROXY_PATH] : {
			target       : API_URL,
			changeOrigin : true,
			rewrite      : path => path.replace( new RegExp( `^${API_PROXY_PATH}` ), '' ),
			// headers         : { 'Access-Control-Allow-Origin': '*' },
			// followRedirects : true,
		} },
	},
	define : { PKG },
} )
