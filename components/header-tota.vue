<template lang="pug">
	header
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
	@import '~/assets/scss/main.scss';

	header {
		background-color: $white;
		height: ($grid-unit * 20);
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		width: 100%;
		margin-top: 0;
	}
</style>
