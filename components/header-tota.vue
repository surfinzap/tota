<template lang="pug">
	header
		nuxt-link(to='/')
			logotype.logotype--header
</template>


<script>
import Logotype from '~/components/Logotype.vue'

export default {
	components: {
		Logotype,
	}
}
</script>


<style lang='scss'>
	header {
		background-color: $white;
		height: $header-height;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		width: 100%;
		margin-top: 0;
		z-index: 10;
	}
</style>
