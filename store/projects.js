import { SortOrder,
				 ImageUrlBuilder,
				 ImageCompressionEnum,
				 ImageFitModeEnum} from '@kentico/kontent-delivery'

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
					.equalsFilter('system.codename', 'project_list')
					.queryConfig({
						usePreviewMode: true
					})
					.toPromise()
					.then(response => {
						state.commit('setProjects', response.items[0].project_list.value.map(item => ({
							title: item.title.value,
							short_description: item.short_description.value,
							content: item.content.value,
							image: new ImageUrlBuilder(item.image.value[0].url)
								.withQuality(80)
								.withWidth(768)
								.withFitMode(ImageFitModeEnum.Scale)
								.getUrl(),
							image_description: item.image.value[0].description,
							meta__canonical_url: item.meta__canonical_url.value,
							color: item.color.value
						})))
					})
					.catch(err => console.log('error: ' + err));
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
							title: response.items[0].title.value,
							short_description: response.items[0].short_description.value,
							content: response.items[0].content.value,
							meta__canonical_url: response.items[0].meta__canonical_url.value
						}));
					})
					.catch(err => console.log('error:' + err));
	},
}
