export const state = () => ({
	homepage: {},
})

export const mutations = {
	setHomepage (state, homepage) {
		state.homepage = homepage;
	}
}

export const actions = {
	async getHomepage (state, payload) {
		await this.$deliveryClient
					.items()
					.equalsFilter('system.codename', 'homepage')
					.toPromise()
					.then(response => {
						state.commit('setHomepage', ({
							title: response.items[0].title.value,
							tagline: response.items[0].tagline.value,
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
