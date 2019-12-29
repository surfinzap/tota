<template lang="pug">
	// TODO extra wrapper yet again
	div
		h4.cp--pos-item__title {{item.title.value}}
		.cp--pos-item__description {{item.description.value}}
</template>

<script>
	export default {
		props: ['item']
	}
</script>
