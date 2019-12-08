import { ContentItem } from '@kentico/kontent-delivery';

export class YoutubeVideo extends ContentItem {
	constructor() {
		super({
			richTextResolver: video =>
				`<iframe src="https://youtube.com/embed/${video.id.value}"></iframe>`
		})
	}
}
