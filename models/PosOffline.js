import { ContentItem } from '@kentico/kontent-delivery';

export class PosOffline extends ContentItem {
	constructor() {
		super({
			richTextResolver: pos_offline => {
				const hasMapURL = pos_offline.map_url.value.length > 0;

				return `<div class="cp--pos-item">`
								+ `<h4 class="cp--pos-item__title">${pos_offline.city.value}</h4>`
								+ `<div class="cp--pos-item__subtitle">${pos_offline.title.value}</div>`
								+ `<div class="cp--pos-item__address">${pos_offline.address.value}</div>`
								+ `${hasMapURL ? `<div class="cp--pos-item__map_url"><a href="${pos_offline.map_url.value}" target="_blank" rel="nofollow">→ otvoriť mapu</a></div>` : ``}`
								+ `<div class="cp--pos-item__opening-hours-title">Otváracie hodiny</div>`
								+ `<div class="cp--pos-item__opening-hours">${pos_offline.opening_hours.value}</div>`
							+ `</div>`
			}
		})
	}
}
