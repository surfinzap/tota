<script>
	import TheatrePlayInfo from './theatre-play-info';

	export default {
		functional: true,
		props: ['item'],
		render: (createElement, context) => {
			const {props} = context;
			return [
				createElement('h2', 'Informácie o predstavení'),
				createElement(TheatrePlayInfo, { props })
			]
		}
	}
</script>
