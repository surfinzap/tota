<script>
	const moment = require('moment');
	const dateLocale = 'sk';
	const dateFormat = 'LL'; // 10. december 2019

	export default {
		functional: true,
		props: ['item'],
		render: (createElement, context) => {
			const {item} = context.props;

			return [
				createElement('dt', {}, moment(item.date.value).locale(dateLocale).format(dateFormat)),
				createElement('dd', {}, [
					createElement('a', { domProps: { href: item.document.value[0].url, target: '_blank'}}, item.document.value[0].description)
				])
			]
		}
	}
</script>
