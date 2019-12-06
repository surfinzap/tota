import axios from 'axios'

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
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
		'@nuxtjs/sitemap'
	],
	kenticokontent: {
		projectId: 'bb4c6333-f362-0041-9d56-f18f18e36725',
		enableAdvancedLogging: true,
		previewApiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogImE4ZDhmZmJmY2U4ZDRhMzY5MTA1ZDU5OWMzODRhZjU0IiwNCiAgImlhdCI6ICIxNTc0ODYzNzc0IiwNCiAgImV4cCI6ICIxOTIwNDYzNzc0IiwNCiAgInByb2plY3RfaWQiOiAiYmI0YzYzMzNmMzYyMDA0MTlkNTZmMThmMThlMzY3MjUiLA0KICAidmVyIjogIjEuMC4wIiwNCiAgImF1ZCI6ICJwcmV2aWV3LmRlbGl2ZXIua2VudGljb2Nsb3VkLmNvbSINCn0.WDySoPcznGD4rldTxwXOAIYBLs7r5uGPfhnT2q7I_SI',
		enablePreviewMode: false,
		enableSecuredMode: false
	},
	generate: {
		// temp solution, maybe we'll improve it later
		routes () {
			return axios.get('https://deliver.kontent.ai/bb4c6333-f362-0041-9d56-f18f18e36725/items?system.type=project&elements=meta__canonical_url')
				.then((response) => {
					return response.data.items.map((project) => {
						return '/projekt/' + project.elements.meta__canonical_url.value
					})
				})
			}
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
