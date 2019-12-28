<template lang="pug">
	div
		rich-text-block(v-for='(block, index) in blocks' :block='block' :linkedItems='linkedItems' :resolvers='resolvers' :key='index')
</template>

<script>
	import RichTextBlock from './rich-text-block';
	export default {
		name: 'rich-text',
		components: {RichTextBlock},
		props: ['blocks', 'linkedItems', 'resolvers'],
	}
</script>
