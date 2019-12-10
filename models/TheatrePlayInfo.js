import { ContentItem } from '@kentico/kontent-delivery';
var moment = require('moment');

const dateLocale = 'sk';
const dateFormat = 'LL'; // 10. december 2019

export class TheatrePlayInfo extends ContentItem {
	constructor() {
		super({
			richTextResolver: theatre_play_info =>
				`<h2>Informácie o predstavení</h2>`
			+ `<dl class="cp--dl">`
				+ `<dt>Názov</dt>`
				+ `<dd>${theatre_play_info.title.value}</dd>`
				+ `<dt>Premiéra</dt>`
				+ `<dd>${moment(theatre_play_info.premiere_date.value).locale(dateLocale).format(dateFormat)}, ${theatre_play_info.premiere_place.value}</dd>`
				+ `<dt>Scenár</dt>`
				+ `<dd>${theatre_play_info.playwright.value}</dd>`
				+ `<dt>Režisér</dt>`
				+ `<dd>${theatre_play_info.director.value}</dd>`
				+ `<dt>Hudba</dt>`
				+ `<dd>${theatre_play_info.music.value}</dd>`
				+ (theatre_play_info.author_of_songs.value &&
						(`<dt>Autor skladieb</dt>`
					 + `<dd>${theatre_play_info.author_of_songs.value}</dd>`))
				+ (theatre_play_info.choreography.value &&
						(`<dt>Choreografia</dt>`
					 + `<dd>${theatre_play_info.choreography.value}</dd>`))
				+ (theatre_play_info.dancing_group.value &&
						(`<dt>Tanečníci</dt>`
					 + `<dd>${theatre_play_info.dancing_group.value}</dd>`))
				+ `<dt>Scénografia</dt>`
				+ `<dd>${theatre_play_info.scenography.value}</dd>`
				+ `<dt>Grafický dizajn</dt>`
				+ `<dd>${theatre_play_info.graphic_design.value}</dd>`
				+ `<dt>Fotografia</dt>`
				+ `<dd>${theatre_play_info.photography.value}</dd>`
				+ `<dt>Finančná podpora</dt>`
				+ `<dd>${theatre_play_info.financial_aid.value}</dd>`
			+ `</dl>`
		})
	}
}
