<template lang="pug">
	div
		.container
			div
				logo
				.links
					btn-primary(link="https://tota.sk", label="test")
					a(class="button--grey", href="https://github.com/nuxt/nuxt.js") GitHub
					nuxt-link(class="button--grey", to="projekt/test") projekt/test
					nuxt-link(class="button--grey", to="projekt/test2") projekt/test2
		.container
			projects-list
</template>


<script>
import Logo from '~/components/Logo.vue'
import BtnPrimary from '~/components/btn-primary.vue'
import ProjectsList from '~/components/projects-list.vue'

export default {
  components: {
    Logo,
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
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
