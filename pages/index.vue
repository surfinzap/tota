<template lang="pug">
	div
		header-tota
		tagline
		.container
			projects-list
</template>


<script>
import HeaderTota from '~/components/header-tota.vue'
import Tagline from '~/components/tagline.vue'
import BtnPrimary from '~/components/btn-primary.vue'
import ProjectsList from '~/components/projects-list.vue'

export default {
  components: {
		HeaderTota,
    Tagline,
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
