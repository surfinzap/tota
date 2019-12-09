import { TypeResolver } from '@kentico/kontent-delivery';
import { YoutubeVideo } from "../models/YoutubeVideo";
import { BookInfo } from "../models/BookInfo";
import { PullQuote } from "../models/PullQuote";

export default function({ store, app, $deliveryClient }) {
	$deliveryClient.config.typeResolvers = [
		new TypeResolver('youtube_video', () => new YoutubeVideo()),
		new TypeResolver('book_info', () => new BookInfo()),
		new TypeResolver('pull_quote', () => new PullQuote()),
	];
}
