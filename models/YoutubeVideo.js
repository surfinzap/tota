import { ContentItem } from '@kentico/kontent-delivery';

export class YoutubeVideo extends ContentItem {
	constructor() {
		super({
			richTextResolver: video =>
				`<figure class="cp--youtube-video">`
				+ `<iframe src="https://youtube.com/embed/${video.id.value}?rel=0" frameborder="0" allowfullscreen class="cp--youtube-video__media"></iframe>`
				+ `<figcaption class="cp--youtube-video__caption">${video.description.value}</figcaption>`
			+ `</figure>`
		})
	}
}
