// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  appConfig: {
    apiKey: process.env.SUPABASE_API_KEY,
    baseUrl: process.env.SUPABASE_URL,
    secretKey: process.env.SUPABASE_SECRET_KEY
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt"
  ],
  css: ["~/assets/css/tailwind.css"]
})