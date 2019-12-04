<template lang="pug">
	div
		tagline
		projects-list
</template>


<script>
import HeaderTota from '~/components/header-tota.vue'
import Tagline from '~/components/tagline.vue'
import BtnPrimary from '~/components/btn-primary.vue'
import ProjectsList from '~/components/projects-list.vue'

export default {
  components: {
    Tagline,
		BtnPrimary,
		ProjectsList
  },

	async fetch ({store, params}) {
		await store.dispatch('projects/getProjects');
	},

	head: {
		title: 'tota agentura'
	},
	loading: false,
}
</script>
