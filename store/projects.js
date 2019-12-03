import { SortOrder } from '@kentico/kontent-delivery'

export const state = () => ({
	projects: [],
	project: {}
})

export const mutations = {
	setProjects (state, projects) {
		state.projects = projects;
	},
	setProject (state, project) {
		state.project = project;
	}
}

export const actions = {
	async getProjects (state) {
		await this.$deliveryClient
					.items()
					.type('project')
					.queryConfig({
						usePreviewMode: true
					})
					.orderParameter('elements.id', SortOrder.asc)
					.toPromise()
					.then(response => {
						state.commit('setProjects', response.items.map(item => ({
							id: item.id.value,
							title: item.title.value,
							short_description: item.short_description.value,
							content: item.content.value,
							meta__canonical_url: item.meta__canonical_url.value
						})))
					})
					.catch(err => console.log('error:' + err));
	},

	async getProject (state, payload) {
		await this.$deliveryClient
					.items()
					.type('project')
					.queryConfig({
						usePreviewMode: true
					})
					.equalsFilter('elements.meta__canonical_url', payload.canonical)
					.toPromise()
					.then(response => {
						state.commit('setProject', ({
							id: response.items[0].id.value,
							title: response.items[0].title.value,
							short_description: response.items[0].short_description.value,
							content: response.items[0].content.value,
							meta__canonical_url: response.items[0].meta__canonical_url.value
						}));
					})
					.catch(err => console.log('error:' + err));
	},
}
