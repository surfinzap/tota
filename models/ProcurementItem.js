import { ContentItem } from '@kentico/kontent-delivery';
var moment = require('moment');

const dateLocale = 'sk';
const dateFormat = 'LL'; // 10. december 2019

export class ProcurementItem extends ContentItem {
	constructor() {
		super({
			richTextResolver: procurement_item =>
				`<dt>${moment(procurement_item.date.value).locale(dateLocale).format(dateFormat)}</dt>`
			+ `<dd><a href="${procurement_item.document.value[0].url}" target="_blank">${procurement_item.document.value[0].description}</a></dd>`
		})
	}
}
