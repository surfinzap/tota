import { ContentItem } from '@kentico/kontent-delivery';

export class PosList extends ContentItem {
	constructor() {
		super({
			richTextResolver: pos_list =>
				`<h3>${pos_list.title.value}</h3>`
			+ `<div class="cp--pos-list">${pos_list.resellers_list.value}</div>`
		})
	}
}
