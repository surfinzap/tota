<template lang="pug">
	div.padding-temp
		h1.title
			| {{ project.title }}
		p(v-html='project.content')
		div
			nuxt-link(class="button--green", to="/") spat na home
</template>

<script>
	export default {
		async fetch ({store, params, route}) {
			await store.dispatch({
				type: 'projects/getProject',
				canonical: route.params.id
			})
		},

		computed: {
			canonicalUrl () {
				return this.$route.params.id
			},
			project () {
				return this.$store.state.projects.project;
			},
		},
		head () {
			return {
				title: this.$store.state.projects.project.title + ' — tota agetura'
			}
		},
	}
</script>

<style lang='scss'>
	@import '~/assets/scss/main.scss';

	.padding-temp {
		padding-top: 100px;
	}
</style>
