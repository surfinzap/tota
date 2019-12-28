<template lang="pug">
	div(:class='htmlClass')
		rich-text-block(v-for='(block, index) in blocks' :block='block' :key='index')
</template>

<script>
	import RichTextBlock from './rich-text-block';
	export default {
		name: 'rich-text',
		components: {RichTextBlock},
		props: ['htmlClass', 'blocks']
	}
</script>
