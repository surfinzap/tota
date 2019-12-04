<template lang="pug">
	div
		ul.projects
			li(v-for='project in projects' v-bind:key='project.meta__canonical_url')
				img(:src='project.image' :alt='project.image_description')
				p {{ project.title }}
				p {{ project.short_description }}
				p {{ project.color }}
				nuxt-link(:to='"projekt/" + project.meta__canonical_url') {{ project.url_label }}
</template>


<script>
export default {
	computed: {
		projects () {
			return this.$store.state.projects.projects;
		}
	},

	head: {
		title: 'List of projects'
	},
	loading: false,
}
</script>
