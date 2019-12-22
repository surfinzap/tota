export const state = () => ({
	article: {}
})

export const mutations = {
	setArticle (state, article) {
		state.article = article;
	}
}

export const actions = {
	async getArticle (state, payload) {
		await this.$deliveryClient
					.items()
					.type('article')
					.queryConfig({
						usePreviewMode: true
					})
					.equalsFilter('elements.meta__canonical_url', payload.canonical)
					.toPromise()
					.then(response => {
						state.commit('setArticle', ({
							title: response.items[0].title.value,
							content: response.items[0].content.resolveHtml(),
							meta__canonical_url: response.items[0].meta__canonical_url.value,
							meta__description: response.items[0].meta__description.value,
							meta__keywords: response.items[0].meta__keywords.value,
							meta__image: response.items[0].meta__image.value[0].url,
							meta__image__description: response.items[0].meta__image.value[0].description,
						}));
					})
					.catch(err => console.log('error:' + err));
	},
}
