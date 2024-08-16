import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app',
				additionalPrerenderRoutes: ['/file-upload'], // prerender? search for it later - ADD any new pages for the site
				previewMiddlewareEnabled: true,
				previewMiddlewareFallback: '/file-upload', // fallback? search for it later - ADD any new pages for the site
			},
		}),
	],
});
