import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    preview: {
        port: 8000,
    },
    server: {
        port: 8000
    },
    build: {
        watch: { include: [process.cwd() + '/*.css', '/*.css', './*.css', '*.css'] }
    }
})
