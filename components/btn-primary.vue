<template lang="pug">
	a(class="button--green", :href="link") {{ label }}
</template>

<script>
	export default {
	  name: 'btn-primary',
	  props: ['link', 'label'],
	}
</script>

<style lang='scss'>
	@import '~/assets/scss/main.scss';

	.button {
		&--green {
		  display: inline-block;
		  border-radius: 4px;
		  border: 1px solid $red;
		  color: $red;
		  text-decoration: none;
		  padding: 10px 30px;

			&:hover {
				color: #fff;
			  background-color: #3b8070;
			}
		}
	}
</style>
