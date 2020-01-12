<template lang="pug">
	dl.cp--dl
		rich-text(:content='item.definition_list.value' :linkedItemComponent='richTextComponent')
</template>

<script>
	import { RichText } from 'kontent-rich-text-for-vue';
	import RichTextComponent from '../rich-text-component';

	export default {
		props: ['item'],
		components: {RichText},
		computed: {
			richTextComponent() {
				return RichTextComponent;
			}
		}
	}
</script>
