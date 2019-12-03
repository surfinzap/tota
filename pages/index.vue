<template lang="pug">
	div
		header-tota
		.container
			.links
				btn-primary(link="https://tota.sk", label="test")
				a(class="button--grey", href="https://github.com/nuxt/nuxt.js") GitHub
				nuxt-link(class="button--grey", to="projekt/test") projekt/test
				nuxt-link(class="button--grey", to="projekt/test2") projekt/test2
		.container
			projects-list
</template>


<script>
import HeaderTota from '~/components/header-tota.vue'
import BtnPrimary from '~/components/btn-primary.vue'
import ProjectsList from '~/components/projects-list.vue'

export default {
  components: {
    HeaderTota,
		BtnPrimary,
		ProjectsList
  },

	async fetch ({store, params}) {
		await store.dispatch('projects/getProjects');
	},

	head: {
		title: 'Homepage'
	},
	loading: false,
}
</script>

<style>
	.container {
		height: 60vh;
		padding-top: 80px;
	}
</style>
