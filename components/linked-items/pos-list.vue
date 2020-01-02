<template lang="pug">
	// TODO This wrapper is not present in the original. Do we want to ressurect the vue-fragment package?
	div
		h3 {{item.title.value}}
		.cp--pos-list
			rich-text(:content='item.resellers_list.value' :linkedItemComponent='linkedItemComponent')
</template>

<script>
	import RichText from '../rich-text';
	import LinkedItem from '../project-linked-item';

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
