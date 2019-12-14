import { ContentItem } from '@kentico/kontent-delivery';

export class PosCz extends ContentItem {
	constructor() {
		super({
			richTextResolver: pos_cz =>
				`<div class="cp--pos-item">`
				+ `<h4 class="cp--pos-item__title">${pos_cz.title.value}</h4>`
				+ `<div class="cp--pos-item__description">${pos_cz.delivery_conditions.value}</div>`
			+ `</div>`

		})
	}
}
