<script>
	import RichTextBlock from './rich-text-block';
	import {parseHtml} from "../utils/parseHtml";
	export default {
		name: 'rich-text',
		functional: true,
		props: ['content', 'linkedItemComponent'],
		render: (createElement, context) => {
			const { content, linkedItemComponent } = context.props;

			// A temporary measure until delivery API returns something one can machine process
			const blocks = parseHtml(content);

			return blocks.map(block =>
				createElement(RichTextBlock, { props: { block, linkedItemComponent, blockComponent: RichTextBlock }}));
		}
	}
</script>
