import { ContentItem } from '@kentico/kontent-delivery';

export class FigureImage extends ContentItem {
	constructor() {
		super({
			richTextResolver: figure_image =>
				`<figure class="cp--image">`
				+ `<img class="cp--image__media" src="${figure_image.image.value[0].url}" alt="${figure_image.image.value[0].description}">`
				+ `<figcaption class="cp--image__caption">${figure_image.image.value[0].description}</figcaption>`
			+ `</figure>`
		})
	}
}
