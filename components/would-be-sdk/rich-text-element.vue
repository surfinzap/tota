<script>
	export default {
		name: 'rich-text-element',
		functional: true,
		props: ['block', 'linkedItemComponent'],
		render: (createElement, context) => {
			const { block, linkedItemComponent } = context.props;

			switch (block.type) {
				case 'OBJECT':
					return createElement(linkedItemComponent, {props: { block }});
				case '#text':
					return context._v(block.value);
				default:
					return createElement(block.type, {domProps: {...block.data}}, context.children);
			}
		}
	}
</script>
