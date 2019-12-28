<template lang="pug">
	footer
		.container
			.grid
				.footer__logotype
					nuxt-link(to='/')
						logotype.logotype--footer
				.footer__nav
					.footer__nav-group
						h3.footer__nav-group-title tota agentura
						ul
							li
								nuxt-link(to='/') projekty
							li
								nuxt-link(to='/kontakt') kontakt
					.footer__nav-group
						h3.footer__nav-group-title sledujte nás
						ul
							li
								a(href='https://www.facebook.com/totaagentura' target='_blank' rel='nofollow') facebook
							li
								a(href='https://www.youtube.com/user/totaagentura' target='_blank' rel='nofollow') youtube
					.footer__nav-group
						h3.footer__nav-group-title impressum
						ul
							li
								nuxt-link(to='/profil-verejneho-obstaravatela') profil verejného obstarávateľa
							li
								nuxt-link(to='/prehlasenie-o-ochrane-sukromia') prehlásenie o ochrane súkromia (cookies)
							li
								nuxt-link(to='/podmienky-pouzivania') podmienky používania
						p#copyrightNotice {{ copyrightNotice }}

</template>


<script>
import Logotype from '~/components/Logotype.vue';

export default {
	components: {
		Logotype,
	},
	computed: {
		copyrightNotice () {
			var currentYear = new Date().getFullYear().toString().substring(2, 4);
			return "2013–"+ currentYear +" © tota agentura";
		}
	},
}



</script>


<style lang='scss'>
	footer {
		background-color: $gray--20;
		margin-top: ($grid-unit * 8);
		padding: ($grid-unit * 8) 0;
	}

	.footer__logotype {
		margin-top: -($grid-unit * 3);
		margin-left: $grid-gap-column;
		align-self: start;
		justify-self: start;

		@media (min-width: $screen-sm-min) {
			grid-column: 1 / span 1;
			margin-left: 0;
		}

		@media (min-width: $screen-md-min) {
			grid-column: 3 / span 1;
			margin-left: 0;
		}
	}

	.footer__nav {
		align-self: start;
		justify-self: start;

		display: grid;
		grid-template-columns: 100%;
		grid-gap: $grid-gap-row $grid-gap-column;
		grid-auto-flow: row;
		justify-items: start;
		align-items: start;
		justify-content: start;
		align-content: start;

		margin-left: $grid-gap-column;

		@media (min-width: $screen-sm-min) {
			grid-template-columns: 3fr 3fr 7fr;
			grid-column: 2 / span 10;
		}

		@media (min-width: $screen-md-min) {
			grid-template-columns: 3fr 3fr 7fr;
			grid-column: 4 / span 10;
		}

		@media (min-width: $screen-md-min) {
			margin-left: 0;
		}
	}

	.footer__nav-group {
		& + & {
			margin-top: $grid-gap-column;
			@media (min-width: $screen-sm-min) {
				margin-top: 0;
			}
		}

		ul {
			list-style-type: none;
			padding:0;

			& + p {
				margin-top: $font-size--400;
			}
		}

		li a {
			text-decoration: none;
			color: $gray--60;

			&:hover {
				text-decoration: underline;
			}
		}

		p {
			color: $gray--60;
		}
	}

	.footer__nav-group-title {
		color: $gray--60;
		font-size: $font-size--400;
		font-style: italic;
		font-weight: 900;
		letter-spacing: 0.025em;
	}
</style>
