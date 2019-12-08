<template lang="pug">
	.container.container--project-list
		ul.project-list
			li.project-tile(v-for='project in projects' v-bind:key='project.meta__canonical_url')
				a.project-tile__link(v-if='project.external_url' :href='project.meta__canonical_url' target='_blank')
					.project-tile__credentials(:style='"background-color:" + project.color + ";"')
						h2.project-tile__title {{ project.title }}
						p.project-tile__description {{ project.short_description }}
					img.project-tile__thumbnail(:src='project.image' :alt='project.image_description')
				nuxt-link.project-tile__link(v-else :to='"projekt/" + project.meta__canonical_url')
					.project-tile__credentials(:style='"background-color:" + project.color + ";"')
						h2.project-tile__title {{ project.title }}
						p.project-tile__description {{ project.short_description }}
					img.project-tile__thumbnail(:src='project.image' :alt='project.image_description')
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

	.project-tile__link {
		text-decoration: none;
		color: $white;
		position: relative;
		display: block;
	}

	.project-tile__thumbnail {
		filter: opacity(30%);
		width: calc(100% - 32px);
		height: calc(100% - 32px);
		margin: $grid-gap-column;

		&:hover {
			animation: 350ms ease-out desaturate forwards;

			@keyframes desaturate {
				100% {
					filter: opacity(100%);
					width: 100%;
					height: 100%;
					margin: 0;
				}
			}
		}
	}

	.project-tile__credentials {
		padding: $grid-gap-column;
		position: absolute;
		z-index: 1;
		width: 100%;
		top: 38%;

	}

	.project-tile__title {
		@extend .h3;
		font-weight: 800;
		font-style: italic;
		letter-spacing: 0.025em;

	}


</style>
