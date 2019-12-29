<script>
	import RichTextElement from "./rich-text-element";

	export default {
		functional: true,
		name: 'rich-text-block',
		props: ['block', 'linkedItems', 'resolvers', 'blockComponent'],
		render: (createElement, context) => {
			const {props} = context;
			const {block, linkedItems, resolvers, blockComponent} = props;

			return createElement(RichTextElement, {props}, block.children.map(child =>
				createElement(blockComponent, {props: {block: child, linkedItems, resolvers}})));
		}
	}
</script>
