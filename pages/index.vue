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
		title: 'tota agentura',
		meta: [
			{ name: 'description', content: 'Objavujeme, tvoríme a podporujeme (nielen) rusínsku kultúru. Najnovšie sme vydali knihu básní v rusínskom jazyku pre deti. Sme tota agentura.' },
			{ name: 'keywords', content: 'rusínska kultúra, občianske združenie, tota agentura' },
			{ name: 'og:type', content: 'website' },
			{ name: 'og:image', content: 'https://tota.sk/assets/img/tota-agentura-logotype-1200-737.png' },
			{ name: 'og:url', content: 'https://tota.sk/' },
			{ name: 'og:title', content: 'Sme tota agentura' },
			{ name: 'og:description', content: 'Inšpirovaní odkazom našich predkov objavujeme, tvoríme a podporujeme (nielen) rusínsku kultúru ďalšej generácie. Vydali sme knihu básní v rusínskom jazyku pre deti, spolupracovali sme na festivale pre tisíce ľudí. Sme tota agentura.' },
		]
	},
	loading: false,
}
</script>
