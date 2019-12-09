const axios = require('axios')

module.exports = {
	loading: false,
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'msapplication-TileColor', content: '#ffffff' },
			{ name: 'theme-color', content: '#ffffff' },
		],
		link: [
			{ rel:'apple-touch-icon', sizes:'180x180', href:'/apple-touch-icon.png' },
			{ rel:'icon', type:'image/png', sizes:'32x32', href:'/favicon-32x32.png' },
			{ rel:'icon', type:'image/png', sizes:'16x16', href:'/favicon-16x16.png' },
			{ rel:'manifest', href:'/site.webmanifest' },
			{ rel:'mask-icon', href:'/safari-pinned-tab.svg', color:'#5bbad5' },
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		"~/plugins/kenticoKontentNuxtModule"
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		'kentico-kontent-nuxt-module',
		'@nuxtjs/sitemap',
		'@nuxtjs/style-resources',
	],
	generate: {
		// temp & messy solution, maybe we'll improve it later
		// get articles & projects → resolve the routes differently
		// for projects, remove the ones with external routes
		routes () {
			return axios.get('https://deliver.kontent.ai/bb4c6333-f362-0041-9d56-f18f18e36725/items?system.type[in]=article,project&elements=meta__canonical_url')
				.then((response) => {
					return response.data.items.map((item) => {
						if (item.system.type == 'article') {
							return item.elements.meta__canonical_url.value;
						} else {
							if (!item.elements.meta__canonical_url.value.includes('http')){
								return '/projekt/' + item.elements.meta__canonical_url.value;
							} else {
								// TBD rewrite this:
								// translit sits on subdomain and we're avoiding to generate URL here
								return '/projekt/45f4df654sd6f54s5';
							}
						}
					})
				})
			}
	},
	kenticokontent: {
		projectId: 'bb4c6333-f362-0041-9d56-f18f18e36725',
		enableAdvancedLogging: true,
		previewApiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogImE4ZDhmZmJmY2U4ZDRhMzY5MTA1ZDU5OWMzODRhZjU0IiwNCiAgImlhdCI6ICIxNTc0ODYzNzc0IiwNCiAgImV4cCI6ICIxOTIwNDYzNzc0IiwNCiAgInByb2plY3RfaWQiOiAiYmI0YzYzMzNmMzYyMDA0MTlkNTZmMThmMThlMzY3MjUiLA0KICAidmVyIjogIjEuMC4wIiwNCiAgImF1ZCI6ICJwcmV2aWV3LmRlbGl2ZXIua2VudGljb2Nsb3VkLmNvbSINCn0.WDySoPcznGD4rldTxwXOAIYBLs7r5uGPfhnT2q7I_SI',
		enablePreviewMode: false,
		enableSecuredMode: false
	},
	styleResources: {
		scss: [
			'assets/scss/main.scss',
		]
	},
	sitemap: {
		hostname: 'https://tota.sk',
		gzip: false,
		defaults: {
			changefreq: 'monthly',
			priority: 1,
			lastmod: new Date(),
			lastmodrealtime: true
		}
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend (config, ctx) {
		}
	}
}
