<template lang="pug">
	.container.container--project-list
		ul.project-list
			li.project-tile(v-for='project in projects' v-bind:key='project.meta__canonical_url')
				a.project-link(v-if='project.external_url' :href='project.meta__canonical_url' target='_blank')
					.project-credentials(:style='"background-color:" + project.color + ";"')
						h2.project-title {{ project.title }}
						p.project-description {{ project.short_description }}
					img.project-thumbnail(:src='project.image' :alt='project.image_description')
				nuxt-link.project-link(v-else :to='"projekt/" + project.meta__canonical_url')
					.project-credentials(:style='"background-color:" + project.color + ";"')
						h2.project-title {{ project.title }}
						p.project-description {{ project.short_description }}
					img.project-thumbnail(:src='project.image' :alt='project.image_description')
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

	.project-link {
		text-decoration: none;
		color: $white;
		position: relative;
		display: block;
	}

	.project-thumbnail {
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

	.project-credentials {
		padding: $grid-gap-column;
		position: absolute;
		z-index: 1;
		width: 100%;
		top: 38%;

	}

	.project-title {
		@extend .h3;
		font-weight: 800;
		font-style: italic;
		letter-spacing: 0.025em;

	}


</style>
