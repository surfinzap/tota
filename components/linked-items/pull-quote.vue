<template lang="pug">
	blockquote {{item.pull_quote.value}}
</template>

<script>
	export default {
		props: ['item']
	}
</script>
