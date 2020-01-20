<template lang="pug">
	.container.container--project-list
		ul.project-list
			li.project-tile(v-for='project in projects' v-bind:key='project.meta__canonical_url')

				nuxt-link.project-tile__link(v-if='project.is_translit' :to='project.meta__canonical_url')
					.project-tile__credentials(:style='"background-color:" + project.color + ";"')
						h2.project-tile__title {{ project.title }}
						p.project-tile__description {{ project.short_description }}
					img.project-tile__thumbnail(v-lazy='project.image' :alt='project.image_description')

				nuxt-link.project-tile__link(v-else :to='"projekt/" + project.meta__canonical_url')
					.project-tile__credentials(:style='"background-color:" + project.color + ";"')
						h2.project-tile__title {{ project.title }}
						p.project-tile__description {{ project.short_description }}
					img.project-tile__thumbnail(v-lazy='project.image' :alt='project.image_description')
</template>


<script>
	export default {
		computed: {
			projects () {
				return this.$store.state.project.projects;
			}
		}
	}
</script>

<style lang='scss'>
	.project-list {
		display: grid;
		grid-template-columns: 100%;
		grid-gap: $grid-gap-row $grid-gap-column;
		grid-auto-flow: row;
		justify-items: stretch;
		align-items: start;

		@media (min-width: $screen-sm-min) {
			grid-template-columns: 1fr 1fr;
		}
		@media (min-width: $screen-lg-min) {
			grid-template-columns: 1fr 1fr 1fr;
		}
		@media (min-width: $screen-xl-min) {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}

	.project-tile {
		&:active,
		&:focus {
			box-shadow: 0px 0px 3px 2px rgba(210,85,46,1);
		}
		&:hover {
			.project-tile__credentials {

				@media (min-width: $screen-xs-min) {
					animation: 350ms ease-out move-down forwards;

					@keyframes move-down {
						100% {
							bottom: 0;
						}
					}
				}
			}
		}
	}

	.project-tile__link {
		text-decoration: none;
		color: $white;
		position: relative;
		display: block;
	}


	.project-tile__credentials {
		padding: $grid-gap-column;
		position: absolute;
		z-index: 1;
		width: 100%;
		bottom: 0;

		@media (min-width: $screen-xs-min) {
			bottom: 28%;
		}
		@media (min-width: $screen-sm-min) {
			bottom: 28%;
		}
		@media (min-width: $screen-md-min) {
			bottom: 33%;
		}
		@media (min-width: $screen-lg-min) {
			bottom: 27%;
		}
		@media (min-width: $screen-xl-min) {
			bottom: 30%;
		}
	}

	.project-tile__title {
		@extend .h3;
		font-weight: 800;
		font-style: italic;
		letter-spacing: 0.025em;
	}
</style>
