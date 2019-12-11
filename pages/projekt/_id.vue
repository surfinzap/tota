<template lang="pug">
	.project
		.project__header
			.container
				img.project__header-image(:src='project.image' :alt='project.image_description')
			.project__header-color-line(:style='"background-color:" + project.color + ";"')
				.container
					.grid
						.project__header-credentials
							h1.project__header-title {{ project.title }}
							p.project__header-description {{ project.short_description }}
		.container
			.grid
				.project__content(v-html='project.content')
			.grid
				.project__content
					h3 Internetové obchody
					pos-list
</template>

<script>
	import PosList from '~/components/pos-list.vue'

	export default {
		scrollToTop: true,
		
		components: {
			PosList
		},
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
	.project__header {
		position: relative;
		overflow: hidden;

		@media (min-width: $screen-sm-min) {
			height: $container-sm / 16 * 9;
		}
		@media (min-width: $screen-md-min) {
			height: $container-md / 16 * 9;
		}
		@media (min-width: $screen-lg-min) {
			height: $container-lg / 16 * 9;
		}
	}

	.project__header-image {
		padding-left: $grid-gap-column;
		padding-right: $grid-gap-column;
		justify-self: center;

		@media (min-width: $screen-sm-min) {
			grid-column: 1 / span 14;
			padding: 0;
		}
	}

	.project__header-color-line {
		padding: $grid-gap-column * 1;
		position: absolute;
		z-index: 1;
		width: 100%;
		top: 35%;

		@media (min-width: $screen-xs-min) {
			padding: $grid-gap-column * 2;
		}
		@media (min-width: $screen-sm-min) {
			top: 38%;
		}
	}

	.project__header-credentials {
		@media (min-width: $screen-sm-min) {
			grid-column: 2 / span 12;
		}
		@media (min-width: $screen-md-min) {
			grid-column: 3 / span 10;
		}
	}

	.project__header-title {
		color: $white;
		font-size: $font-size--700;
		letter-spacing: 0.025em;

		@media (min-width: $screen-xs-min) {
			font-size: $font-size--800;
		}

		@media (min-width: $screen-sm-min) {
			font-size: $font-size--900;
		}
	}

	.project__header-description {
		color: $white;
		font-size: $font-size--500;
		line-height: $line-height--400;

		@media (min-width: $screen-sm-min) {
			font-size: $font-size--700;
		}

		@media (min-width: $screen-sm-min) {
			font-size: $font-size--800;
		}

		.project__header-title + &{
			margin-top: 0;
		}
	}

	.project__content {
		padding: 0 $grid-gap-column * 1;

		@media (min-width: $screen-xs-min) {
			padding: 0 $grid-gap-column * 2;
		}

		@media (min-width: $screen-sm-min) {
			padding: 0;
			grid-column: 2 / span 12;
		}
		@media (min-width: $screen-md-min) {
			grid-column: 3 / span 10;
		}
	}
</style>
