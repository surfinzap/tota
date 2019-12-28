import { ContentItem } from '@kentico/kontent-delivery';

export class BiPoem extends ContentItem {
	constructor() {
		super({
			richTextResolver: bi_poem =>
				`<div class="cp--bi-poem">`
					+ `<div class="cp--bi-poem__item">`
						+ (bi_poem.title_lat.value &&
								(`<h2 class="cp--bi-poem__title">${bi_poem.title_lat.value}</h2>`))
						+ `<div class="cp--bi-poem__stanzas">${bi_poem.stanzas_lat.value}</div>`
					+ `</div>`
					+ `<div class="cp--bi-poem__item">`
						+ (bi_poem.title_rue.value &&
								(`<h2 class="cp--bi-poem__title">${bi_poem.title_rue.value}</h2>`))
						+ `<div class="cp--bi-poem__stanzas">${bi_poem.stanzas_rue.value}</div>`
				+ `</div>`
			+ `</div>`
		})
	}
}
