<script>
	import linkedItemFactory from './would-be-sdk/linked-item-factory';

	import FigureImage from './linked-items/figure-image';
	import Pos from './linked-items/pos';
	import PosCz from './linked-items/pos-cz';
	import PosOnline from './linked-items/pos-online';
	import PosOffline from './linked-items/pos-offline';
	import PosListWithHeading from './linked-items/pos-list-with-heading';
	import DefinitionList from './linked-items/definition-list';
	import DefinitionTerm from './linked-items/definition-term';
	import BookInfoWithHeading from './linked-items/book-info-with-heading';
	import YoutubeVideo  from './linked-items/youtube-video';
	import PullQuote from './linked-items/pull-quote';
	import BiPoem from './linked-items/bi-poem';
	import TheatrePlayInfoWithHeading from './linked-items/theatre-play-info-with-heading';
	import ProcurementItem from './linked-items/procurement-item';

	const resolvers = {
		'youtube_video': YoutubeVideo,
		'book_info': BookInfoWithHeading,
		'theatre_play_info': TheatrePlayInfoWithHeading,
		'pull_quote': PullQuote,
		'figure_image': FigureImage,
		'definition_list': DefinitionList,
		'definition_term': DefinitionTerm,
		'pos_list': PosListWithHeading,
		'pos_online': PosOnline,
		'pos_offline': PosOffline,
		'pos_cz': PosCz,
		'pos': Pos,
		'bi_poem': BiPoem,
		'procurement_item': ProcurementItem,
	};

	export default {
		functional: true,
		inject: ['getLinkedItems'],
		render: (createElement, context) => {
			const {props, children, injections} = context;
			const component = linkedItemFactory(
				itemType => resolvers[itemType],
				itemCodeName => injections.getLinkedItems()[itemCodeName]);

			return createElement(component, {props}, children);
		}
	}
</script>
