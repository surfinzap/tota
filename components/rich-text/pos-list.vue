<template lang="pug">
	div
		h3 {{ item.title.value }}
		.cp--pos-list
			rich-text(:content='item.resellers_list.value' :linkedItemComponent='richTextComponent')
</template>

<script>
	import { RichText } from 'vue-kontent-rich-text';
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
