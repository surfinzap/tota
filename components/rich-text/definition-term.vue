<script>
	export default {
		functional: true,
		props: ['item'],
		render: (createElement, context) => {
			const {item} = context.props;

			return [
				createElement('dt', {}, item.definition_term.value),
				createElement('dd', {}, item.definition_data.value)
			]
		}
	}
</script>
