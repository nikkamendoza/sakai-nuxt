// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
   modules: [
     '@primevue/nuxt-module',
     // ...existing code...
   ],
    primevue: {
      options: {
        theme: {
          preset: (await import('@primevue/themes/aura')).default,
          options: {
            darkModeSelector: '.app-dark'
          }
        }
      }
    },
    vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
