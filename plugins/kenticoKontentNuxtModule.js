import { TypeResolver } from '@kentico/kontent-delivery';
import { YoutubeVideo } from "../models/YoutubeVideo";
import { BookInfo } from "../models/BookInfo";
import { TheatrePlayInfo } from "../models/TheatrePlayInfo";
import { PullQuote } from "../models/PullQuote";
import { FigureImage } from "../models/FigureImage";
import { DefinitionList } from "../models/DefinitionList";
import { DefinitionTerm } from "../models/DefinitionTerm";

export default function({ store, app, $deliveryClient }) {
	$deliveryClient.config.typeResolvers = [
		new TypeResolver('youtube_video', () => new YoutubeVideo()),
		new TypeResolver('book_info', () => new BookInfo()),
		new TypeResolver('theatre_play_info', () => new TheatrePlayInfo()),
		new TypeResolver('pull_quote', () => new PullQuote()),
		new TypeResolver('figure_image', () => new FigureImage()),
		new TypeResolver('definition_list', () => new DefinitionList()),
		new TypeResolver('definition_term', () => new DefinitionTerm()),
	];
}
