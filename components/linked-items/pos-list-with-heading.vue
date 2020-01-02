<script>
	import PosList from './pos-list';

	export default {
		functional: true,
		props: ['item'],
		render: (createElement, context) => {
			const {item} = context.props;
			return [
				createElement('h3', item.title.value),
				createElement(PosList, { props: { item }})
			]
		}
	}
</script>
