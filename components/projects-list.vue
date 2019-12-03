<template lang="pug">
	div
		h1
			| List of fancy projects
		ul.projects
			li(v-for='project in projects' v-bind:key='project.meta__canonical_url')
				nuxt-link(:to='"projekt/" + project.meta__canonical_url')
					| {{ project.title }}
				p
					| {{ project.short_description }}
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
