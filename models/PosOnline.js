import { ContentItem } from '@kentico/kontent-delivery';

export class PosOnline extends ContentItem {
	constructor() {
		super({
			richTextResolver: pos_online => {
				const isPrimary = pos_online.primary_pos.value.length > 0 && pos_online.primary_pos.value[0].codename == "yes";
				return `<div class="cp--pos-item ${isPrimary ? ` cp--pos-item--primary` : ``}">`
				+ `${pos_online.pos.value}`
				+ `<div class="cp--pos-item__action">`
					+ `<a class="btn btn--block ${isPrimary ? ` btn--cta` : ``}"`
						+ `href="${pos_online.url.value}`
						+ `&utm_source=${pos_online.utm_source.value}`
						+ `&utm_medium=${pos_online.utm_medium.value}`
						+ `&utm_campaign=${pos_online.utm_campaign.value}"`
						+ ` target="_blank">`
						+ `${pos_online.url_label.value}</a>`
					+ `</div>`
				+ `</div>`
			}
		})
	}
}
