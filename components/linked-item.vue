<script>
	import FigureImage from './linked-items/figure-image';
	import Pos from './linked-items/pos';
	import PosCz from './linked-items/pos-cz';
	import PosOnline from './linked-items/pos-online';
	import PosOffline from './linked-items/pos-offline';
	import PosList from './linked-items/pos-list';
	import DefinitionList from './linked-items/definition-list';
	import DefinitionTerm from './linked-items/definition-term';
	import BookInfo from './linked-items/book-info';
	import YoutubeVideo  from './linked-items/youtube-video';
	import PullQuote from './linked-items/pull-quote';
	import BiPoem from './linked-items/bi-poem';
	import TheatrePlayInfo from './linked-items/theatre-play-info';
	import ProcurementItem from './linked-items/procurement-item';

	const resolvers = {
		'youtube_video': YoutubeVideo,
		'book_info': BookInfo,
		'theatre_play_info': TheatrePlayInfo,
		'pull_quote': PullQuote,
		'figure_image': FigureImage,
		'definition_list': DefinitionList,
		'definition_term': DefinitionTerm,
		'pos_list': PosList,
		'pos_online': PosOnline,
		'pos_offline': PosOffline,
		'pos_cz': PosCz,
		'pos': Pos,
		'bi_poem': BiPoem,
		'procurement_item': ProcurementItem,
	};

	const getItemData = (block, context) => {
		const linkedItems = context.parent.$store.state.project.project.linked_items;

		return linkedItems[block.data['data-codename']];
	};

	export default {
		name: 'linked-item',
		functional: true,
		props: ['block'],
		render: (createElement, context) => {
			const {block} = context.props;
			const linkedItem = getItemData(block, context);
			const { system, ...elements } = linkedItem;
			const component = resolvers[system.type];

			if (component) {
				return createElement(component, {props: { item: {...elements}}}, context.children);
			} else {
				return createElement('object', {domProps: {...block.data}}, context.children);
			}
		}
	}
</script>
