import { ContentItem } from '@kentico/kontent-delivery';

export class BookInfo extends ContentItem {
	constructor() {
		super({
			richTextResolver: book_info =>
				`<h2>Informácie o publikácii</h2>`
			+ `<dl class="cp--dl">`
				+ `<dt>Názov</dt>`
				+ `<dd>${book_info.title.value}</dd>`
				+ `<dt>Autor</dt>`
				+ `<dd>${book_info.author.value}</dd>`
				+ `<dt>Ilustrácie</dt>`
				+ `<dd>${book_info.illustrator.value}</dd>`
				+ `<dt>Jazyková úprava</dt>`
				+ `<dd>${book_info.language_editor.value}</dd>`
				+ `<dt>Jazyk</dt>`
				+ `<dd>${book_info.language.value}</dd>`
				+ `<dt>ISBN</dt>`
				+ `<dd>${book_info.isbn.value}</dd>`
				+ `<dt>Rok vydania</dt>`
				+ `<dd>${book_info.date_published.value.getFullYear()}</dd>`
				+ `<dt>Vydavateľ</dt>`
				+ `<dd>${book_info.publisher.value}</dd>`
				+ `<dt>Vydanie</dt>`
				+ `<dd>${book_info.book_edition.value}</dd>`
				+ `<dt>Väzba</dt>`
				+ `<dd>${book_info.book_format.value}</dd>`
				+ `<dt>Rozmer</dt>`
				+ `<dd>${book_info.dimensions.value}</dd>`
				+ `<dt>Hmotnosť</dt>`
				+ `<dd>${book_info.weight.value} g</dd>`
				+ `<dt>Počet strán</dt>`
				+ `<dd>${book_info.number_of_pages.value}</dd>`
				+ `<dt>Písmo</dt>`
				+ `<dd>${book_info.typeface.value}</dd>`
				+ `<dt>Papier</dt>`
				+ `<dd>${book_info.paper.value}</dd>`
				+ `<dt>Tlač</dt>`
				+ `<dd>${book_info.printer.value}</dd>`
				+ `<dt>Finančná podpora</dt>`
				+ `<dd>${book_info.financial_aid.value}</dd>`
			+ `</dl>`
		})
	}
}
