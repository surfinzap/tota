import { ContentItem } from '@kentico/kontent-delivery';

export class BookInfo extends ContentItem {
	constructor() {
		super({
			richTextResolver: book_info =>
				`<h2>Informácie o publikácii</h2>`
			+ `<dl class="cp--book-info">`
				+ `<dt class="cp--book-info__term">Názov</dt>`
				+ `<dd class="cp--book-info__data">${book_info.title.value}</dd>`
				+ `<dt class="cp--book-info__term">Autor</dt>`
				+ `<dd class="cp--book-info__data">${book_info.author.value}</dd>`
				+ `<dt class="cp--book-info__term">Ilustrácie</dt>`
				+ `<dd class="cp--book-info__data">${book_info.illustrator.value}</dd>`
				+ `<dt class="cp--book-info__term">Jazyková úprava</dt>`
				+ `<dd class="cp--book-info__data">${book_info.language_editor.value}</dd>`
				+ `<dt class="cp--book-info__term">Jazyk</dt>`
				+ `<dd class="cp--book-info__data">${book_info.language.value}</dd>`
				+ `<dt class="cp--book-info__term">ISBN</dt>`
				+ `<dd class="cp--book-info__data">${book_info.isbn.value}</dd>`
				+ `<dt class="cp--book-info__term">Rok vydania</dt>`
				+ `<dd class="cp--book-info__data">${book_info.date_published.value.getFullYear()}</dd>`
				+ `<dt class="cp--book-info__term">Vydavateľ</dt>`
				+ `<dd class="cp--book-info__data">${book_info.publisher.value}</dd>`
				+ `<dt class="cp--book-info__term">Vydanie</dt>`
				+ `<dd class="cp--book-info__data">${book_info.book_edition.value}</dd>`
				+ `<dt class="cp--book-info__term">Väzba</dt>`
				+ `<dd class="cp--book-info__data">${book_info.book_format.value}</dd>`
				+ `<dt class="cp--book-info__term">Rozmer</dt>`
				+ `<dd class="cp--book-info__data">${book_info.dimensions.value}</dd>`
				+ `<dt class="cp--book-info__term">Hmotnosť</dt>`
				+ `<dd class="cp--book-info__data">${book_info.weight.value} g</dd>`
				+ `<dt class="cp--book-info__term">Počet strán</dt>`
				+ `<dd class="cp--book-info__data">${book_info.number_of_pages.value}</dd>`
				+ `<dt class="cp--book-info__term">Písmo</dt>`
				+ `<dd class="cp--book-info__data">${book_info.typeface.value}</dd>`
				+ `<dt class="cp--book-info__term">Papier</dt>`
				+ `<dd class="cp--book-info__data">${book_info.paper.value}</dd>`
				+ `<dt class="cp--book-info__term">Tlač</dt>`
				+ `<dd class="cp--book-info__data">${book_info.printer.value}</dd>`
				+ `<dt class="cp--book-info__term">Finančná podpora</dt>`
				+ `<dd class="cp--book-info__data">${book_info.financial_aid.value}</dd>`
			+ `</dl>`
		})
	}
}
