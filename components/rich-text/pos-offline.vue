<template lang="pug">
	.cp--pos-item
		h4.cp--pos-item__title {{item.city.value}}
		.cp--pos-item__subtitle {{item.title.value}}
		.cp--pos-item__address(v-if='item.address.value.length > 0') {{item.address.value}}
		.cp--pos-item__map_url(v-if='item.map_url.value.length > 0')
			a(:href='item.map_url.value' target='_blank' rel='nofollow') → otvoriť mapu
		.cp--pos-item__opening-hours-title(v-if='item.opening_hours.value.length > 0') Otváracie hodiny
		.cp--pos-item__opening-hours(v-if='item.opening_hours.value.length > 0') {{item.opening_hours.value}}
</template>

<script>
	export default {
		props: ['item']
	}
</script>
