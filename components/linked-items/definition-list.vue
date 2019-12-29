<template lang="pug">
	rich-text.cp--dl(containerElement='dl' :blocks='parseHtml(item.definition_list.value)' :linkedItems='linkedItems' :resolvers='richTextResolvers')
</template>

<script>
	import {parseHtml} from "../../utils/parseHtml";
	import linkedItemComponents from "./index";
	import RichText from '../rich-text';

	export default {
		props: ['item'],
		components: {RichText},
		methods: {parseHtml},
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
