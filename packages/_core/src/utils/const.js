
import PKG from '../../../../package.json'

export { PKG }
export const isDev = process.env.NODE_ENV === 'development'
export const port = Number( process.env.PORT ) || 13124
export const API_PROXY_PATH = '/api'
export const API_URL = 'http://localhost:8787'

export * from './routes.js'

