import { JSDOM } from 'jsdom';

const parseAttributes = (node) => {
	if (node.attributes) {
		return [...node.attributes].reduce((attributes, property) => {
			attributes[property.name] = property.value;
			return attributes;
		}, {});
	}
};

const parseChildren = (parent) =>
	[...parent.childNodes].reduce((blocks, node) => {
		blocks.push({
			type: node.nodeName,
			value: node.nodeValue || undefined,
			children: parseChildren(node),
			data: parseAttributes(node),
		});
		return blocks;
	}, []);

export const parseHtml = (htmlString) => {
	const dom = new JSDOM(htmlString);
	const { document } =  dom.window;
	const content = document.querySelector('body');

	return parseChildren(content);
};

