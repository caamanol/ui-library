import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const isStorybook = Boolean(process.env.STORYBOOK);
  const libBuild = !isStorybook; // Avoid library mode when Storybook builds

  return {
    plugins: [react()],
    ...(libBuild
      ? {
          build: {
            lib: {
              entry: 'src/ui/index.js',
              name: 'opendevUI',
              fileName: (format) => `opendev-ui.${format}.js`,
              formats: ['es', 'cjs']
            },
            rollupOptions: {
              external: ['react', 'react-dom'],
              output: {
                globals: {
                  react: 'React',
                  'react-dom': 'ReactDOM'
                }
              }
            }
          }
        }
      : {}),
    test: {
      environment: 'jsdom',
      setupFiles: './tests/setup.js',
      globals: true,
      css: true
    }
  }
})
