export default (getLinkedItemComponent, getLinkedItemData) => ({
	name: 'linked-item',
	functional: true,
	props: ['block'],
	render: (createElement, context) => {
		const {block} = context.props;
		const linkedItem = getLinkedItemData(block.data['data-codename']);
		if (linkedItem) {
			const { system, ...elements } = linkedItem;
			const component = getLinkedItemComponent(system.type);
			if (component) {
				return createElement(component, {props: { item: {...elements}}}, context.children);
			}
		}

		return createElement('object', {domProps: {...block.data}}, context.children);
	}
});
