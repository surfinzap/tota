<script>
	import RichTextBlock from './rich-text-block';
	export default {
		name: 'rich-text',
		functional: true,
		props: ['blocks', 'linkedItems', 'resolvers'],
		render: (createElement, context) => {
			const { blocks, linkedItems, resolvers } = context.props;

			return blocks.map(block =>
				createElement(RichTextBlock, { props: { block, linkedItems, resolvers, blockComponent: RichTextBlock }}));
		}
	}
</script>
