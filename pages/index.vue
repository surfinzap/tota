<template lang="pug">
	div
		tagline
		projects-list
</template>


<script>
export default {
	scrollToTop: false,

	async fetch ({store, params}) {
		await store.dispatch('homepage/getHomepage');
		await store.dispatch('project/getProjects');
	},

	head () {
		return {
			title: this.$store.state.homepage.homepage.title,
			meta: [
				{ name: 'description', content: this.$store.state.homepage.homepage.meta__description },
				{ name: 'keywords', content: this.$store.state.homepage.homepage.meta__keywords },
				// Facebook OpenGraph meta
				{ name: 'og:type', content: 'website' },
				{ name: 'og:image', content: this.$store.state.homepage.homepage.meta__image },
				{ name: 'og:url', content: this.$store.state.homepage.homepage.meta__canonical_url },
				{ name: 'og:title', content: this.$store.state.homepage.homepage.title },
				{ name: 'og:description', content: this.$store.state.homepage.homepage.meta__description },
				// Twitter cards;
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: this.$store.state.homepage.homepage.title },
				{ name: 'twitter:description', content: this.$store.state.homepage.homepage.meta__description },
				{ name: 'twitter:image', content: this.$store.state.homepage.homepage.meta__image },
				{ name: 'twitter:image:alt', content: this.$store.state.homepage.homepage.meta__image__description }
			],
			link: [
				{ rel: 'canonical', href: this.$store.state.homepage.homepage.meta__canonical_url}
			]
		}
	}
}
</script>
