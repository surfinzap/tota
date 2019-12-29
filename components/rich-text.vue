<template lang="pug">
	rich-text-container(:element='containerElement')
		rich-text-block(v-for='(block, index) in blocks' :block='block' :linkedItems='linkedItems' :resolvers='resolvers' :key='index')
</template>

<script>
	import RichTextBlock from './rich-text-block';
	import RichTextContainer from './rich-text-container';
	export default {
		name: 'rich-text',
		components: {RichTextBlock, RichTextContainer},
		props: ['containerElement', 'blocks', 'linkedItems', 'resolvers'],
	}
</script>
