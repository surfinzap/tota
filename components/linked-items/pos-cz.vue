<template lang="pug">
	.cp--pos-item
		h4.cp--pos-item__title {{item.title.value}}
		.cp--pos-item__description
			rich-text(:blocks='parseHtml(item.delivery_conditions.value)')
</template>

<script>
	import RichText from '../rich-text';
	import {parseHtml} from "../../utils/parseHtml";

	export default {
		props: ['item'],
		components: {RichText},
		methods: {parseHtml}
	}
</script>
