<script>
	import BookInfo from './book-info';

	export default {
		functional: true,
		props: ['item'],
		render: (createElement, context) => {
			const {props} = context;
			return [
				createElement('h2', 'Informácie o publikácii'),
				createElement(BookInfo, { props})
			]
		}
	}

</script>
