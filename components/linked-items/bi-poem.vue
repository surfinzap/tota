<template lang="pug">
	.cp--bi-poem
		.cp--bi-poem__item
			h2.cp--bi-poem__title {{item.title_lat.value}}
			rich-text.cp--bi-poem__stansaz(:blocks='item.stanzas_lat.value')
		.cp--bi-poem__item
			h2.cp--bi-poem__title {{item.title_rue.value}}
			rich-text.cp--bi-poem__stansaz(:blocks='item.stanzas_rue.value')
</template>

<script>
	import RichText from '../rich-text'
	export default {
		props: ['item'],
		components: { RichText}
	}
</script>
