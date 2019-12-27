<template lang="pug">
	div {{block.value}}
		rich-text-block(v-for='child in block.children' :block='child')
</template>

<script>
	export default {
		name: 'rich-text-block',
		props: ['block']
	}
</script>
