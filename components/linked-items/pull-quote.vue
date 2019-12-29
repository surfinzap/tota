<template lang="pug">
	blockquote
		rich-text(:blocks='parseHtml(item.pull_quote.value)')
</template>

<script>
	import {parseHtml} from "../../utils/parseHtml";
	import RichText from '../rich-text';

	export default {
		props: ['item'],
		components: {RichText},
		methods: {parseHtml}
	}
</script>
