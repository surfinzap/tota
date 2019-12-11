<template lang="pug">
	.container
		.grid
			.article
				h1 {{ article.title }}
				div.article__content(v-html='article.content')
</template>

<script>
	export default {
		scrollToTop: true,

		async fetch ({store, params, route}) {
			await store.dispatch({
				type: 'article/getArticle',
				canonical: route.params.id
			});
			await store.dispatch('homepage/getHomepage');
		},

		computed: {
			canonicalUrl () {
				return this.$route.params.id
			},
			article () {
				return this.$store.state.article.article;
			},
		},
		head () {
			return {
				title: this.$store.state.article.article.title + ' — ' + this.$store.state.homepage.homepage.title,
				meta: [
					{ name: 'description', content: this.$store.state.article.article.meta__description },
					{ name: 'keywords', content: this.$store.state.article.article.meta__keywords },
					// Facebook OpenGraph meta
					{ name: 'og:type', content: 'website' },
					{ name: 'og:image', content: this.$store.state.article.article.meta__image },
					{ name: 'og:url', content: this.$store.state.homepage.homepage.meta__canonical_url + this.$store.state.article.article.meta__canonical_url },
					{ name: 'og:title', content: this.$store.state.article.article.title },
					{ name: 'og:description', content: this.$store.state.article.article.meta__description },
					// Twitter cards;
					{ name: 'twitter:card', content: 'summary' },
					{ name: 'twitter:title', content: this.$store.state.article.article.title },
					{ name: 'twitter:description', content: this.$store.state.article.article.meta__description },
					{ name: 'twitter:image', content: this.$store.state.article.article.meta__image },
					{ name: 'twitter:image:alt', content: this.$store.state.article.article.meta__image__description }
				],
				link: [
					{ rel: 'canonical', href: this.$store.state.homepage.homepage.meta__canonical_url + this.$store.state.article.article.meta__canonical_url }
				]
			}
		},

	}
</script>

<style lang='scss'>
	.article {
		margin: 0 $grid-gap-column;

		@media (min-width: $screen-sm-min) {
			margin: 0;
			grid-column: 1 / span 10;
		}
		@media (min-width: $screen-md-min) {
			grid-column: 1 / span 9;
		}
	}

	.article__content {
		/* class is used in vertical rhythm  @ typography */
	}
</style>
