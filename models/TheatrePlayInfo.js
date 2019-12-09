import { ContentItem } from '@kentico/kontent-delivery';

const dateLocale = 'sk-SK';
const dateOptions = {day: 'numeric',  month: 'long', year: 'numeric' };

/* just a dummy date for debugging purpose to see the result in console*/
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(event.toLocaleDateString(dateLocale, dateOptions));

export class TheatrePlayInfo extends ContentItem {
	constructor() {
		super({
			richTextResolver: theatre_play_info =>
				`<h2>Informácie o predstavení</h2>`
			+ `<dl class="cp--book-info">`
				+ `<dt class="cp--book-info__term">Názov</dt>`
				+ `<dd class="cp--book-info__data">${theatre_play_info.title.value}</dd>`
				+ `<dt class="cp--book-info__term">Premiéra</dt>`
				+ `<dd class="cp--book-info__data">${theatre_play_info.premiere_date.value.toLocaleDateString(dateLocale, dateOptions)}, ${theatre_play_info.premiere_place.value}</dd>`
				+ `<dt class="cp--book-info__term">Scenár</dt>`
				+ `<dd class="cp--book-info__data">${theatre_play_info.playwright.value}</dd>`
				+ `<dt class="cp--book-info__term">Režisér</dt>`
				+ `<dd class="cp--book-info__data">${theatre_play_info.director.value}</dd>`
				+ `<dt class="cp--book-info__term">Hudba</dt>`
				+ `<dd class="cp--book-info__data">${theatre_play_info.music.value}</dd>`
				+ `<dt class="cp--book-info__term">Autor skladieb</dt>`
				+ `<dd class="cp--book-info__data">${theatre_play_info.author_of_songs.value}</dd>`
				+ `<dt class="cp--book-info__term">Choreografia</dt>`
				+ `<dd class="cp--book-info__data">${theatre_play_info.choreography.value}</dd>`
				+ `<dt class="cp--book-info__term">Tanečníci</dt>`
				+ `<dd class="cp--book-info__data">${theatre_play_info.dancing_group.value}</dd>`
				+ `<dt class="cp--book-info__term">Scénografia</dt>`
				+ `<dd class="cp--book-info__data">${theatre_play_info.scenography.value}</dd>`
				+ `<dt class="cp--book-info__term">Grafický dizajn</dt>`
				+ `<dd class="cp--book-info__data">${theatre_play_info.graphic_design.value}</dd>`
				+ `<dt class="cp--book-info__term">Fotografia</dt>`
				+ `<dd class="cp--book-info__data">${theatre_play_info.photography.value}</dd>`
				+ `<dt class="cp--book-info__term">Finančná podpora</dt>`
				+ `<dd class="cp--book-info__data">${theatre_play_info.financial_aid.value}</dd>`
			+ `</dl>`
		})
	}
}
