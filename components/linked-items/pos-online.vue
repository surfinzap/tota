<template lang="pug">
	.cp--pos-item(:class='{"cp--pos-item--primary": isPrimary}')
		rich-text(:blocks='parseHtml(item.pos.value)' :linkedItems='linkedItems' :resolvers='richTextResolvers')
		.cp--pos-item__action
			a.btn.btn--block(:class='{"btn--cta": isPrimary}' :href='`${item.url.value}&utm_source=${item.utm_source.value}&utm_medium=${item.utm_medium.value}&utm_campaign=${item.utm_campaign.value}`' target='_blank')
				| {{item.url_label.value}}
</template>

<script>
	import RichText from '../rich-text';
	import {parseHtml} from "../../utils/parseHtml";
	import linkedItemComponents from "./index";

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
			},
			isPrimary() {
				const {value} = this.item.primary_pos;
				return value.length > 0 && value[0].codename === "yes";
			}
		}
	}
</script>
