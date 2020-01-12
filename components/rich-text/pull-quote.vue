<template lang="pug">
	blockquote
		rich-text(:content='item.pull_quote.value')
</template>

<script>
	import { RichText } from 'kontent-rich-text-for-vue';

	export default {
		props: ['item'],
		components: {RichText}
	}
</script>
