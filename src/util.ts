const ding = (value: string, autoHide = false, type: 'default' | 'info' | 'success' | 'warning' = 'default'): void => {
	autoHide ? DingExposedInterface(value, type) : DingExposedInterface(value, type, 'long');
};

const cleanSvgText = (svg: string): string => {
	const doc: Document = new DOMParser().parseFromString(svg, 'application/xml');
	const element: HTMLElement = document.importNode(doc.documentElement, true);
	return element.outerHTML;
};

const generateSvgDataUrl = (svg: string, prefix = 'data:image/svg+xml;'): string => {
	return `${prefix}${encodeURIComponent(cleanSvgText(svg))}`;
};

export {ding, generateSvgDataUrl};
