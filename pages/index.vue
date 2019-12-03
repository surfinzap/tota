<template lang="pug">
	div
		.container
			div
				logo
				h1.title
					| tota
				h2.subtitle
					| tota.sk web app
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
