<template lang="pug">
	.cp--bi-poem
		.cp--bi-poem__item
			h2.cp--bi-poem__title(v-if='item.title_lat.value') {{item.title_lat.value}}
			.cp--bi-poem__stansaz
				rich-text(:blocks='parseHtml(item.stanzas_lat.value)')
		.cp--bi-poem__item
			h2.cp--bi-poem__title(v-if='item.title_rue.value') {{item.title_rue.value}}
			.cp--bi-poem__stansaz
				rich-text(:blocks='parseHtml(item.stanzas_rue.value)')
</template>

<script>
	import RichText from '../rich-text'
	import {parseHtml} from "../../utils/parseHtml";

	export default {
		props: ['item'],
		components: { RichText },
		methods: { parseHtml }
	}
</script>
