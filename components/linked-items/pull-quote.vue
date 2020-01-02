<template lang="pug">
	blockquote
		rich-text(:content='item.pull_quote.value')
</template>

<script>
	import RichText from '../rich-text';

	export default {
		props: ['item'],
		components: {RichText}
	}
</script>
