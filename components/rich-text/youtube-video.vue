<template lang="pug">
	figure.cp--youtube-video
		iframe.cp--youtube-video__media(:src='`https://youtube.com/embed/${item.id.value}?rel=0`' allowfullscreen frameborder='0')
		figcaption.cp--youtube-video__caption {{item.description.value}}
</template>
<script>
	export default {
		props: ['item']
	}
</script>
