<template lang="pug">
	dl.cp--dl
		| {{item.definition_list.value}}
</template>

<script>
	export default {
		props: ['item']
	}
</script>
