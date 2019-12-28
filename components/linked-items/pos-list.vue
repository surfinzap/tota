<template lang="pug">
	// TODO This wrapper is not present in the original. Do we want to ressurect the vue-fragment package?
	div
		h3 {{item.title.value}}
		.cp--pos-list
			| {{item.resellers_list.value}}
</template>

<script>
	export default {
		props: ['item']
	}
</script>
