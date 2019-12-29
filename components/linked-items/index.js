import FigureImage from './figure-image';
import Pos from './pos';
import PosCz from './pos-cz';
import PosOnline from './pos-online';
import PosOffline from './pos-offline';
import PosList from './pos-list';
import DefinitionList from './definition-list';
import DefinitionTerm from './definition-term';
import BookInfo from './book-info';
import YoutubeVideo  from './youtube-video';
import PullQuote from './pull-quote';
import BiPoem from './bi-poem';
import TheatrePlayInfo from './theatre-play-info';
import ProcurementItem from './procurement-item';

export default {
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
}
