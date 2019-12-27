<template lang="pug">
	div(:class='htmlClass')
		rich-text-block(v-for='block in blocks' :block='block')
</template>

<script>
	import RichTextBlock from './rich-text-block';
	export default {
		name: 'rich-text',
		components: {RichTextBlock},
		props: ['htmlClass', 'blocks']
	}
</script>
