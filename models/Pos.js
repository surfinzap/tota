import { ContentItem } from '@kentico/kontent-delivery';

export class Pos extends ContentItem {
	constructor() {
		super({
			richTextResolver: pos =>
				`<h4 class="cp--pos-item__title">${pos.title.value}</h4>`
			+ `<div class="cp--pos-item__description">${pos.description.value}</p>`
		})
	}
}
