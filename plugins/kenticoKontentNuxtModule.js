import { TypeResolver } from '@kentico/kontent-delivery';
import { YoutubeVideo } from "../models/YoutubeVideo";
import { BookInfo } from "../models/BookInfo";

export default function({ store, app, $deliveryClient }) {
	$deliveryClient.config.typeResolvers = [
		new TypeResolver('youtube_video', () => new YoutubeVideo()),
		new TypeResolver('book_info', () => new BookInfo())
	];
}
