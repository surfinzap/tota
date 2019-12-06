<template lang="pug">
	.container
		.grid
			.tagline-block
				h1.tagline
					| Inšpirovaní odkazom našich predkov, #[strong objavujeme, tvoríme a podporujeme rusínsku kultúru] ďalšej generácie.
					br
					| Sme #[strong tota agentura].
</template>

<style lang='scss'>
	.tagline-block {
		padding-top: ($grid-unit * 20);
		padding-bottom: ($grid-unit * 10);
		padding-left: $grid-gap-column;
		padding-right: $grid-gap-column;
		justify-self: center;

		@media (min-width: $screen-sm-min) {
			grid-column: 2 / span 12;
		}
		@media (min-width: $screen-md-min) {
			padding-top: ($grid-unit * 18);
			grid-column: 3 / span 10;
		}
		@media (min-width: $screen-lg-min) {
			grid-column: 4 / span 8;
		}
	}

	.tagline {
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
</style>
