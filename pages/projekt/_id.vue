<template lang="pug">
	div
		h1.title
			| {{ project.title }}
		div(v-html='project.content')
		div
			nuxt-link(class="button--green", to="/") spat na home
</template>

<script>
	export default {
		async fetch ({store, params, route}) {
			await store.dispatch({
				type: 'project/getProject',
				canonical: route.params.id
			});
			await store.dispatch('homepage/getHomepage');
		},

		computed: {
			canonicalUrl () {
				return this.$route.params.id
			},
			project () {
				return this.$store.state.project.project;
			},
		},
		head () {
			return {
				title: this.$store.state.project.project.title + ' — ' + this.$store.state.homepage.homepage.title,
				meta: [
					{ name: 'description', content: this.$store.state.project.project.meta__description },
					{ name: 'keywords', content: this.$store.state.project.project.meta__keywords },
					// Facebook OpenGraph meta
					{ name: 'og:type', content: 'website' },
					{ name: 'og:image', content: this.$store.state.project.project.meta__image },
					{ name: 'og:url', content: this.$store.state.homepage.homepage.meta__canonical_url + 'projekt/' + this.$store.state.project.project.meta__canonical_url },
					{ name: 'og:title', content: this.$store.state.project.project.title },
					{ name: 'og:description', content: this.$store.state.project.project.meta__description },
					// Twitter cards;
					{ name: 'twitter:card', content: 'summary' },
					{ name: 'twitter:title', content: this.$store.state.project.project.title },
					{ name: 'twitter:description', content: this.$store.state.project.project.meta__description },
					{ name: 'twitter:image', content: this.$store.state.project.project.meta__image },
					{ name: 'twitter:image:alt', content: this.$store.state.project.project.meta__image__description }
				],
				link: [
					{ rel: 'canonical', href: this.$store.state.homepage.homepage.meta__canonical_url + 'projekt/' + this.$store.state.project.project.meta__canonical_url }
				]
			}
		},
	}
</script>

<style lang='scss'>
	.padding-temp {
		padding-top: 100px;
	}
</style>
