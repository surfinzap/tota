<template lang="pug">
	rich-text-element(:block='block' :linkedItems='linkedItems' :resolvers='resolvers')
			rich-text-block(v-for='(child, index) in block.children' :block='child' :linkedItems='linkedItems' :resolvers='resolvers' :key='index')
</template>


<script>
	import RichTextElement from "./rich-text-element";
	export default {
		name: 'rich-text-block',
		props: ['block', 'linkedItems', 'resolvers'],
		components: {RichTextElement },
	}
</script>
