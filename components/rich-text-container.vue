<script>
	export default {
		functional: true,
		props: ['element'],
		render: (createElement, context) => {
			return createElement(context.props.element || 'div', {}, context.children);
		}
	}
</script>
