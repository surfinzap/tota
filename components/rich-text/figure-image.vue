<template lang="pug">
	figure.cp--image
		img.cp--image__media(v-lazy='item.image.value[0].url' :alt='item.image.value[0].description')
		figcaption.cp--image__caption {{item.image.value[0].description}}
</template>

<script>
	export default {
		props: [ 'item' ]
	}
</script>
