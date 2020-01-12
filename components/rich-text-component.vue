<script>
	import { linkedItemFactory } from 'kontent-rich-text-for-vue';

	import FigureImage from './rich-text/figure-image';
	import Pos from './rich-text/pos';
	import PosCz from './rich-text/pos-cz';
	import PosOnline from './rich-text/pos-online';
	import PosOffline from './rich-text/pos-offline';
	import PosList from './rich-text/pos-list';
	import DefinitionList from './rich-text/definition-list';
	import DefinitionTerm from './rich-text/definition-term';
	import BookInfo from './rich-text/book-info';
	import YoutubeVideo  from './rich-text/youtube-video';
	import PullQuote from './rich-text/pull-quote';
	import BiPoem from './rich-text/bi-poem';
	import TheatrePlayInfo from './rich-text/theatre-play-info';
	import ProcurementItem from './rich-text/procurement-item';

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
		inject: ['getRichTextComponents'],
		render: (createElement, context) => {
			const {props, children, injections} = context;
			const component = linkedItemFactory(
				itemType => resolvers[itemType],
				itemCodeName => injections.getRichTextComponents()[itemCodeName]);

			return createElement(component, {props}, children);
		}
	}
</script>
