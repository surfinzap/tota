<template lang="pug">
	.cp--pos-item
		| {{item.pos.value}}
		.cp--pos-item__action
			a.btn.btn--block(:href='`${item.url.value}&utm_source=${item.utm_source.value}&utm_medium=${item.utm_medium.value}&utm_campaign=&{item.utm_campaign.value}`' target='_blank')
				| {{item.url_label.value}}
</template>

<script>
	export default {
		props: ['item']
	}
</script>
