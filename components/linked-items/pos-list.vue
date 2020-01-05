<template lang="pug">
	.cp--pos-list
		rich-text(:content='item.resellers_list.value' :linkedItemComponent='linkedItemComponent')
</template>

<script>
	import RichText from '../would-be-sdk/rich-text';
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
