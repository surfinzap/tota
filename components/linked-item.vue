<script>
	import { linkedItemFactory } from 'vue-kontent-rich-text';

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
