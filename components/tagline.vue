<template lang="pug">
	.container
		.grid
			.tagline-block(v-html='homepage.tagline')
</template>

<script>
	export default {
		computed: {
			homepage () {
				return this.$store.state.homepage.homepage;
			},
		},
	}
</script>

<style lang='scss'>
	.tagline-block {
		padding-top: 0;
		padding-bottom: ($grid-unit * 5);
		padding-left: $grid-gap-column;
		padding-right: $grid-gap-column;
		justify-self: center;

		@media (min-width: $screen-sm-min) {
			grid-column: 2 / span 12;
		}
		@media (min-width: $screen-md-min) {
			padding-top: ($grid-unit * 5);
			padding-bottom: ($grid-unit * 8);
			grid-column: 3 / span 10;
		}
		@media (min-width: $screen-lg-min) {
			grid-column: 4 / span 8;
		}

		@media (min-width: $screen-xl-min) {
			grid-column: 3 / span 10;
		}
	}

	.tagline-block {
		& > h1 {
			@extend .h2;
			text-align: center;
			color: $red;
			font-weight: 500;

			@media (min-width: $screen-md-min) {
				font-size: $font-size--900;
			}

			& > strong {
				font-weight: 900;
				font-style: italic;
			}
		}
	}
</style>
