<template lang="pug">
	mixin richTextElement
		template(v-if='block.type === "P"')
			p
				block
		template(v-else-if='block.type === "STRONG"')
			strong
				block
		template(v-else-if='block.type === "#text"')
			| {{block.value}}
		template(v-else-if='block.type === "H1"')
			h1
				block
		template(v-else-if='block.type === "H2"')
			h2
				block
		template(v-else-if='block.type === "H3"')
			h3
				block
		template(v-else-if='block.type === "H4"')
			h4
				block
		template(v-else-if='block.type === "A"')
			a(:href='block.data["href"]')
				block
		template(v-else)
			// TODO here come the custom rich text renderer components

	fragment
		+richTextElement
			rich-text-block(v-for='(child, index) in block.children' :block='child' :key='index')
</template>


<script>
	import { Fragment } from 'vue-fragment';
	export default {
		name: 'rich-text-block',
		props: ['block'],
		components: { Fragment },
	}
</script>
