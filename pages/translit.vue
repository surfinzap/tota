<template lang="pug">
	.translit
		client-only
			translit-app
		.container
			.grid
				.project__content
					rich-text(:content='project.content' :linkedItemComponent='richTextComponent')
</template>


<script>
import TranslitApp from '~/components/translit-app.vue'
import { RichText } from 'kontent-rich-text-for-vue';
import RichTextComponent from '../components/rich-text-component';

export default {
	scrollToTop: true,

	components: {
		TranslitApp,
		RichText
	},

	async fetch ({store, params, route}) {
		await store.dispatch({
			type: 'project/getProject',
			canonical: 'translit'
		});
		await store.dispatch('homepage/getHomepage');
	},
	computed: {
		project () {
			return this.$store.state.project.project;
		},
		richTextComponent() {
			return RichTextComponent;
		}
	},
	provide () {
		return {
			getRichTextComponents: () => this.$store.state.project.project.rich_text_components,
		}
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
				{ name: 'og:url', content: this.$store.state.homepage.homepage.meta__canonical_url + this.$store.state.project.project.meta__canonical_url },
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
				{ rel: 'canonical', href: this.$store.state.homepage.homepage.meta__canonical_url + this.$store.state.project.project.meta__canonical_url }
			]
		}
	}

}
</script>
