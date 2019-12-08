import { TypeResolver } from '@kentico/kontent-delivery';
import { YoutubeVideo } from "../models/YoutubeVideo";

export default function({ store, app, $deliveryClient }) {
	$deliveryClient.config.typeResolvers = [
		new TypeResolver('youtube_video', () => new YoutubeVideo())
	];
}
