import path from 'path';
import adapter from '@sveltejs/adapter-static';
// import { preprocess } from './utils/preprocess.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svelte.md'],

	// preprocess,

	kit: {
		adapter: adapter(),


		package: {
			files: (id) => !id.startsWith('site/')
		},

		vite: {
			resolve: {
				alias: {
					'svelte-cubed': path.resolve('src/lib')
				}
			},
			optimizeDeps: {
				include: ['svelte-knobby'],
				exclude: ['three']
			},
			ssr: {
				noExternal: ['three', 'svelte-knobby']
			},
		}
	}
};

export default config;
