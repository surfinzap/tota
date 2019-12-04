<template lang="pug">
	div
		header-tota
		nuxt
</template>


<script>
import HeaderTota from '~/components/header-tota.vue'

export default {
	components: {
		HeaderTota,
	},
	head: {
		link: [
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alegreya:500,500i,900i&display=swap&subset=cyrillic-ext,latin-ext' }
		]
	}
}
</script>

<style lang='scss'>
	@import '~/assets/scss/main.scss';
</style>
