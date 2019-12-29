<template lang="pug">
	// TODO This wrapper is not present in the original. Do we want to ressurect the vue-fragment package?
	div
		h3 {{item.title.value}}
		rich-text.cp--pos-list(:blocks='parseHtml(item.resellers_list.value)' :linkedItems='linkedItems' :resolvers='richTextResolvers')
</template>

<script>
	import RichText from '../rich-text';
	import { parseHtml } from '../../utils/parseHtml';
	import linkedItemComponents from "./index";

	export default {
		props: ['item'],
		components: { RichText },
		methods: { parseHtml },
		computed: {
			linkedItems() {
				return this.$store.state.project.project.linked_items;
			},
			richTextResolvers() {
				return linkedItemComponents;
			}
		}
	}
</script>
