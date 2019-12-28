<script>
	export default {
		name: 'rich-text-element',
		functional: true,
		props: ['block'],
		render: (createElement, context) => {
			const { block } = context.props;
			switch (block.type) {
				case 'OBJECT': {
					return createElement('div', {}, [ context._v(block.data['data-type'])]);
				}
				case '#text':
					return context._v(block.value);
				default:
					return createElement(block.type, {domProps: {...block.data}}, context.children);
			}
		}
	}
</script>
