<script>
	import RichTextElement from "./rich-text-element";

	export default {
		functional: true,
		name: 'rich-text-block',
		props: ['block', 'linkedItems', 'resolvers'],
		components: {
			'rich-text-block': () => import('./rich-text-element.vue')
		},
		render: (createElement, context) => {
			const {props} = context;
			const {block, linkedItems, resolvers} = props;

			return createElement(RichTextElement, {props}, block.children.map(child =>
				createElement('rich-text-block', {props: {block: child, linkedItems, resolvers}})));
		}
	}
</script>
