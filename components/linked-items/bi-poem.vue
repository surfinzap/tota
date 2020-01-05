<template lang="pug">
	.cp--bi-poem
		.cp--bi-poem__item
			h2.cp--bi-poem__title(v-if='item.title_lat.value') {{item.title_lat.value}}
			.cp--bi-poem__stansaz
				rich-text(:content='item.stanzas_lat.value')
		.cp--bi-poem__item
			h2.cp--bi-poem__title(v-if='item.title_rue.value') {{item.title_rue.value}}
			.cp--bi-poem__stansaz
				rich-text(:content='item.stanzas_rue.value')
</template>

<script>
	import RichText from '../would-be-sdk/rich-text'

	export default {
		props: ['item'],
		components: { RichText }
	}
</script>
