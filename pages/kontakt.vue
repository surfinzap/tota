<template lang="pug">
	.container
		.grid
			.kontakt
				h1 Kontakt
				p Sme tota agentura, venujeme sa rozvoju Rusínskej kultúry. V prípade akýchkoľvek otázok alebo záujmu o spoluprácu sa nám ozvite na #[a(href='mailto:kontakt@tota.sk') kontakt@tota.sk].
				p Ak sa nám niečo podarí, zverejníme to na #[a(href='https://www.facebook.com/totaagentura/') facebooku] alebo #[a(href='https://www.youtube.com/user/totaagentura') youtube] — sledujte nás.

				h2 Členovia
				dl
					dt Riaditeľ
					dd Ing. Ľudmila Šandalová
					dt Dizajnér
					dd Braňo Šandala

				h2 Identifikačné údaje
				dl
					dt Názov
					dd tota agentura
					dt Právna forma
					dd občianske združenie
					dt Adresa
					dd
						| Gen. Svobodu 698/21
						br
						|  089 01 Svidník
						br
						|  Slovenská republika
					dt IČO
					dd 42231027
					dt DIČ
					dd 2023251912
					dt č. reg.
					dd VVS/1-900/90-37518-1

				h2 Fakturačné údaje
				dl
					dt Číslo účtu
					dd
						| 622892154 / 0900
						br
						|  (Slovenská sporiteľňa)
					dt IBAN
					dd SK67 0900 0000 0006 2289 2154
					dt SWIFT
					dd GIBASKBX
				p Nie sme platcami DPH.
</template>


<script>
export default {
	async fetch ({store, params}) {
		await store.dispatch('homepage/getHomepage');
	},

	head () {
		return {
			title: 'Kontakt — ' + this.$store.state.homepage.homepage.title,
			meta: [
				{ name: 'description', content: this.$store.state.homepage.homepage.meta__description },
				{ name: 'keywords', content: this.$store.state.homepage.homepage.meta__keywords },
				// Facebook OpenGraph meta
				{ name: 'og:type', content: 'website' },
				{ name: 'og:image', content: this.$store.state.homepage.homepage.meta__image },
				{ name: 'og:url', content: this.$store.state.homepage.homepage.meta__canonical_url },
				{ name: 'og:title', content: 'Kontakt — ' + this.$store.state.homepage.homepage.title },
				{ name: 'og:description', content: this.$store.state.homepage.homepage.meta__description },
				// Twitter cards;
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: 'Kontakt — ' + this.$store.state.homepage.homepage.title },
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


<style lang='scss'>
	.kontakt {
		margin: 0 $grid-gap-column;

		@media (min-width: $screen-sm-min) {
			margin: 0;
			grid-column: 1 / span 9;
		}
		@media (min-width: $screen-md-min) {
			grid-column: 1 / span 6;
		}
	}
</style>
