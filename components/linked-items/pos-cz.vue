<template lang="pug">
	.cp--pos-item
		h4.cp--pos-item__title {{item.pos.title.value}}
		.cp--pos-item__description {{item.pos.delivery_conditions.value}}
</template>

<script>
	export default {
		props: ['item']
	}
</script>
