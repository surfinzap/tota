import { ContentItem } from '@kentico/kontent-delivery';

export class YoutubeVideo extends ContentItem {
	constructor() {
		super({
			richTextResolver: video =>
				`<figure>`
				+ `<iframe src="https://youtube.com/embed/${video.id.value}?rel=0" frameborder="0" allowfullscreen></iframe>`
				+ `<figcaption>${video.description.value}</figcaption>`
			+ `</figure>`
		})
	}
}
