<template lang="pug">
	rich-text-element(:block='block')
			rich-text-block(v-for='(child, index) in block.children' :block='child' :key='index')
</template>


<script>
	import RichTextElement from "./rich-text-element";
	export default {
		name: 'rich-text-block',
		props: ['block'],
		components: {RichTextElement },
	}
</script>
