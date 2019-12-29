<script>
	export default {
		name: 'rich-text-element',
		functional: true,
		props: ['block', 'linkedItems', 'resolvers'],
		render: (createElement, context) => {
			const { block, linkedItems, resolvers } = context.props;

			switch (block.type) {
				case 'OBJECT': {
					const linkedItem = linkedItems[block.data['data-codename']];
					const { system, ...elements } = linkedItem;
					const component = resolvers[system.type];
					if (component) {
						return createElement(component, {props: { item: {...elements}}}, context.children);
					} else {
						return createElement('object', {domProps: {...block.data}}, context.children);
					}
				}
				case '#text':
					return context._v(block.value);
				default:
					return createElement(block.type, {domProps: {...block.data}}, context.children);
			}
		}
	}
</script>
