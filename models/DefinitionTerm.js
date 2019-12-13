import { ContentItem } from '@kentico/kontent-delivery';

export class DefinitionTerm extends ContentItem {
	constructor() {
		super({
			richTextResolver: definition_term =>
				`<dt>${definition_term.definition_term.value}</dt>`
			+ `<dd>${definition_term.definition_data.value}</dd>`
		})
	}
}
