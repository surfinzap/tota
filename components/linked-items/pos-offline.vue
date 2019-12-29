<template lang="pug">
	.cp--pos-item
		h4.cp--pos-item__title {{item.city.value}}
		.cp--pos-item__subtitle {{item.title.value}}
		.cp--pos-item__address {{item.address.value}}
		.cp--pos-item__map_url(v-if='item.map_url.value.length > 0')
			a(:href='item.map_url.value' target='_blank' rel='nofollow') → otvoriť mapu
		.cp--pos-item__opening-hours-title Otváracie hodiny
		.cp--pos-item__opening-hours {{item.opening_hours.value}}
</template>

<script>
	export default {
		props: ['item']
	}
</script>
