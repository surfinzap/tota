<template lang="pug">
	.cp--pos-item(:class='{"cp--pos-item--primary": isPrimary}')
		rich-text(:content='item.pos.value', :linkedItemComponent='richTextComponent')
		.cp--pos-item__action
			a.btn.btn--block(:class='{"btn--cta": isPrimary}' :href='`${item.url.value}?utm_source=${item.utm_source.value}&utm_medium=${item.utm_medium.value}&utm_campaign=${item.utm_campaign.value}`' target='_blank')
				| {{item.url_label.value}}
</template>

<script>
	import { RichText } from 'kontent-rich-text-for-vue';
	import RichTextComponent from '../rich-text-component';

	export default {
		props: ['item'],
		components: {RichText},
		computed: {
			isPrimary() {
				const {value} = this.item.primary_pos;
				return value.length > 0 && value[0].codename === "yes";
			},
			richTextComponent() {
				return RichTextComponent;
			}
		}
	}
</script>
