<template lang="pug">
	div
		h3 {{ item.title.value }}
		.cp--pos-list
			rich-text(:content='item.resellers_list.value' :linkedItemComponent='linkedItemComponent')
</template>

<script>
	import { RichText } from 'vue-kontent-rich-text';
	import LinkedItem from '../linked-item';

	export default {
		props: ['item'],
		components: {RichText},
		computed: {
			linkedItemComponent() {
				return LinkedItem;
			}
		}
	}
</script>
