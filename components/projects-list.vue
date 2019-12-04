<template lang="pug">
	.container
		ul.project-list
			li.project-tile(v-for='project in projects' v-bind:key='project.meta__canonical_url')
				nuxt-link.project-link(:to='"projekt/" + project.meta__canonical_url')
					.project-credentials(:style='"background-color:" + project.color + ";"')
						h2.project-title {{ project.title }}
						p.project-description {{ project.short_description }}
					img.project-thumbnail(:src='project.image' :alt='project.image_description')
</template>


<script>
	export default {
		computed: {
			projects () {
				return this.$store.state.projects.projects;
			}
		},

		loading: false,
	}
</script>

<style lang='scss'>
	@import '~/assets/scss/main.scss';

	.project-list {
		background-color: $gray--30;

		display: grid;
		grid-template-columns: 100%;
		grid-gap: $grid-gap-row $grid-gap-column;
		grid-auto-flow: row;
		justify-items: stretch;
		align-items: start;


		@media (min-width: $screen-sm-min) {
			grid-template-columns: 1fr 1fr;
			margin-left: 30px;
		}
	}

	/* .project-tile {
		a {

		}
	} */

	.project-link {
		text-decoration: none;
		color: $white;
		position: relative;
		display: block;
	}

	.project-thumbnail {
		filter: saturate(0);
		width: calc(100% - 32px);
		height: calc(100% - 32px);
		margin: $grid-gap-column;

		&:hover {
			animation: 350ms ease-out desaturate forwards;

			@keyframes desaturate {
				100% {
					filter: saturate(100%);
					width: 100%;
					height: 100%;
					margin: 0;
				}
			}
		}
	}

	.project-credentials {
		padding: $grid-gap-column;
		position: absolute;
		z-index: 1;
		width: 100%;
		top: 38%;
	}

	.project-title {
		@extend .h4;
		font-style: italic;
		letter-spacing: 0.025em;

	}


</style>
