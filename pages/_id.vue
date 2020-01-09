<template lang="pug">
	.container
		.grid
			.article
				h1 {{ article.title }}
				.article__content
					rich-text(:content='article.content' :linkedItemComponent='richTextComponent')
</template>

<script>
	import { RichText } from 'vue-kontent-rich-text';
	import RichTextComponent from "../components/rich-text-component";

	export default {
		scrollToTop: true,

		async fetch ({store, params, route}) {
			await store.dispatch({
				type: 'article/getArticle',
				canonical: route.params.id
			});
			await store.dispatch('homepage/getHomepage');
		},
		components: { RichText },
		computed: {
			canonicalUrl () {
				return this.$route.params.id
			},
			article () {
				return this.$store.state.article.article;
			},
			richTextComponent() {
				return RichTextComponent;
			}
		},
		provide () {
			return {
				getRichTextComponents: () => this.$store.state.article.article.rich_text_components,
			};
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
			grid-column: 4 / span 8;
		}
	}

	.article__content {
		/* class is used in vertical rhythm  @ typography */
	}
</style>
