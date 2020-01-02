<template lang="pug">
	div
		header-tota
		.content-wrapper
			nuxt
			footer-tota
</template>


<script>
import HeaderTota from '~/components/header-tota.vue'
import FooterTota from '~/components/footer-tota.vue'

if (process.client) { // running a client-side javascript for cookieconsent
	require('cookieconsent');
	window.cookieconsent.initialise({
		cookie: {
			name: 'tota_cookieconsent',
			domain: 'tota.sk',
		},
		palette: {
			popup: {
				background: '#393939',
				text: '#fff',
				link: '#fff'
			},
		},
		elements: {
			dismiss: '<div class="cc-compliance"><a aria-label="dismiss cookie message" role="button" tabindex="0" class="cc-btn cc-dismiss btn btn--cta">Rozumiem</a></div>',
		},
		theme: 'classic',
		content: {
			message: 'Používame súbory cookies, ktoré nám umožňujú poskytovať lepšie služby. Používaním nášho webu súhlasíte s ukládaním a používaním súborov cookies.',
			link: '(viac informácií)',
			href: '/podmienky-pouzivania',
			target: 'blank'
		},
	});
}

export default {
	components: {
		HeaderTota,
		FooterTota,
	},
	head: {
		link: [
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alegreya:500,500i,700,800i,900i&display=swap&subset=cyrillic-ext,latin-ext' }
		]
	}
}
</script>

<style lang='scss'>
	.content-wrapper {
		padding-top: $header-height--xs;
		display: grid;
		grid-template-rows: 1fr auto;
		min-height: 100vh;

		@media (min-width: $screen-xs-min) {
			padding-top: $header-height;
		}
	}


	.cc-banner {
		font-family: $font-family--base;
		font-size: $font-size--400;
		line-height: $line-height--500;
	}
</style>
