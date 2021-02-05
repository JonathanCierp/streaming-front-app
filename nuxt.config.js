require("dotenv").config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "stream-front",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: ""}
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/assets/css/style.scss"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/v-tooltip.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://github.com/nuxt-community/color-mode-module
    "@nuxtjs/color-mode",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt#readme
    "cookie-universal-nuxt",
    // https://github.com/nuxt-community/proxy-module#readme
    "@nuxtjs/proxy",
    // https://www.npmjs.com/package/@nuxtjs/toast
    "@nuxtjs/toast"
  ],

  // https://go.nuxtjs.dev/tailwindcss
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },

  // https://purgecss.com/
  /*purgeCSS: {
    whitelist: ["dark-mode"]
  },*/

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true
  },

  // Proxy module configuration (https://github.com/nuxt-community/proxy-module#readme)
  proxy: {
    "/api": {
      target: process.env.NUXT_ENV_API_URL,
      pathRewrite: {"^/api": ""}
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      })
    }
  }
}
