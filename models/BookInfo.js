import { ContentItem } from '@kentico/kontent-delivery';

export class BookInfo extends ContentItem {
	constructor() {
		super({
			richTextResolver: book_info =>
				`<h2>Informácie o publikácii</h2>`
			+ `<dl class="cp--book-info">`
				+ `<dt class="cp--book-info__term">Názov</dt>`
				+ `<dd class="cp--book-info__data">${book_info.title.value}</figcaption>`
				+ `<dt class="cp--book-info__term">Autor</dt>`
				+ `<dd class="cp--book-info__data">${book_info.author.value}</figcaption>`
				+ `<dt class="cp--book-info__term">Ilustrácie</dt>`
				+ `<dd class="cp--book-info__data">${book_info.illustrator.value}</figcaption>`
			+ `</dl>`
		})
	}
}
