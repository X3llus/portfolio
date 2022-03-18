/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: vercel()
	}
};

export default config;
