module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Heroes of 1944',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Game Web Representation' }
    ],
		link: [
			{ href: 'https://fonts.googleapis.com/css?family=Righteous|Special+Elite|Teko', rel: 'stylesheet' }
		]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#795548' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
		/*
		**
		*/
		vendor: ['axios']
  }
}
