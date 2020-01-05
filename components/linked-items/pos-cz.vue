<template lang="pug">
	.cp--pos-item
		h4.cp--pos-item__title {{item.title.value}}
		.cp--pos-item__description
			rich-text(:content='item.delivery_conditions.value')
</template>

<script>
	import RichText from '../would-be-sdk/rich-text';

	export default {
		props: ['item'],
		components: {RichText}
	}
</script>
