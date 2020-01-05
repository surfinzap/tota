<script>
	import RichTextElement from "./rich-text-element";

	export default {
		functional: true,
		name: 'rich-text-block',
		props: ['block', 'linkedItemComponent', 'blockComponent'],
		render: (createElement, context) => {
			const {block, linkedItemComponent, blockComponent} = context.props;

			return createElement(RichTextElement, {props: {block, linkedItemComponent}}, block.children.map(child =>
				createElement(blockComponent, {props: {block: child, linkedItemComponent, blockComponent}})));
		}
	}
</script>
