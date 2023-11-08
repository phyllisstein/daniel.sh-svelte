import { sveltekit } from '@sveltejs/kit/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        sveltekit(),
    ],
    ssr: {
        noExternal: [
            'gsap',
            '@gsap/shockingly',
        ],
    },
    server: {
        host: true,
    },
})
