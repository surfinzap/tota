import { TypeResolver } from '@kentico/kontent-delivery';
import { YoutubeVideo } from "../models/YoutubeVideo";
import { BookInfo } from "../models/BookInfo";
import { TheatrePlayInfo } from "../models/TheatrePlayInfo";
import { PullQuote } from "../models/PullQuote";
import { FigureImage } from "../models/FigureImage";
import { DefinitionList } from "../models/DefinitionList";
import { DefinitionTerm } from "../models/DefinitionTerm";
import { PosList } from "../models/PosList";
import { PosOnline } from "../models/PosOnline";
import { PosOffline } from "../models/PosOffline";
import { PosCz } from "../models/PosCz";
import { Pos } from "../models/Pos";

export default function({ store, app, $deliveryClient }) {
	$deliveryClient.config.typeResolvers = [
		new TypeResolver('youtube_video', () => new YoutubeVideo()),
		new TypeResolver('book_info', () => new BookInfo()),
		new TypeResolver('theatre_play_info', () => new TheatrePlayInfo()),
		new TypeResolver('pull_quote', () => new PullQuote()),
		new TypeResolver('figure_image', () => new FigureImage()),
		new TypeResolver('definition_list', () => new DefinitionList()),
		new TypeResolver('definition_term', () => new DefinitionTerm()),
		new TypeResolver('pos_list', () => new PosList()),
		new TypeResolver('pos_online', () => new PosOnline()),
		new TypeResolver('pos_offline', () => new PosOffline()),
		new TypeResolver('pos_cz', () => new PosCz()),
		new TypeResolver('pos', () => new Pos()),
	];
}
