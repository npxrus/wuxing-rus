import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://npxrus.github.io',
  base: '/wuxing-rus/',
  
  // Режим статической сборки (для GitHub Pages)
  output: 'static',
  
  // Настройки Vite
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@data': '/src/data',
        '@types': '/src/types',
        '@utils': '/src/utils',
        '@styles': '/src/styles',
      },
    },
  },
});