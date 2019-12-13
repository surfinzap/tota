import { ContentItem } from '@kentico/kontent-delivery';

export class DefinitionList extends ContentItem {
	constructor() {
		super({
			richTextResolver: definition_list =>
				`<dl class="cp--dl">${definition_list.definition_list.value}</dl>`
		})
	}
}
