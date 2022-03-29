
export default {
  buildDir: 'nuxt-dist',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Bar - Restaurant - Afterwork | La Teste de Buch",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Venez découvrir nos afterwork sur La Teste de Buch à l'ambiance irlandaise, profitez de notre bar et laissez vous tentez par notre restaurant. Chez Angel's Pub, voyagez sans vous déplacer !" },
      { hid: 'keywords', name: 'keyworks', content: "bar, bar la teste de buch, restaurant, restaurant la teste de buch, afterwork, afterwork la teste de buch, la teste de buch, biere, beers, beer, cocktails, tapas, bar à tapas, terrasse, événements, concerts, concert, matchs, match" },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-tiny-slider.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  serverMiddleware: [{ path: '/api/index', handler: '~api/index' }],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
