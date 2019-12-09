import { ContentItem } from '@kentico/kontent-delivery';

export class PullQuote extends ContentItem {
	constructor() {
		super({
			richTextResolver: pull_quote =>
				`<blockquote>${pull_quote.pull_quote.value}</blockquote>`
		})
	}
}
