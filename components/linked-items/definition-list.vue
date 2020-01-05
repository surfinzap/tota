<template lang="pug">
	dl.cp--dl
		rich-text(:content='item.definition_list.value' :linkedItemComponent='linkedItemComponent')
</template>

<script>
	import RichText from '../rich-text';
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
