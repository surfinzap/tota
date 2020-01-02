<script>
	export default {
		functional: true,
		props: ['item'],
		render: (createElement, context) => {
			const {item} = context.props;

			return [
				createElement('h4', { 'class': 'cp--pos-item__title'}, item.title.value),
				createElement('div', {'class': 'cp--pos-item__description'}, item.description.value)
			];
		}
	}
</script>
