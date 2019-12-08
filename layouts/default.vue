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

export default {
	components: {
		HeaderTota,
		FooterTota,
	},
	head: {
		link: [
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alegreya:500,500i,800i,900i&display=swap&subset=cyrillic-ext,latin-ext' }
		]
	}
}
</script>

<style lang='scss'>
	.content-wrapper {
		padding-top: $header-height;
		display: grid;
		grid-template-rows: 1fr auto;
		min-height: 100vh;
	}
</style>
