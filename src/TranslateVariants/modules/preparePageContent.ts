const preparePageContent = (content: string): string =>
	content
		.replace(/[\s#&'*:<>[\]_{|}]/gim, (character: string): string => `&#${character.codePointAt(0)};`)
		.replace(/(&#91;&#91;)((?:(?!&#124;)(?!&#93;).)+?)(&#124;(?:(?!&#93;).)+?&#93;&#93;)/g, '$1-{$2}-$3')
		.replace(/-&#123;(.+?)&#125;-/g, (match: string): string =>
			match
				.replace('-&#123;', '-{')
				.replace('-&#123;', '-{')
				.replace('&#125;-', '}-')
				.replace(/&#124;/g, '|')
				.replace(/&#32;/g, ' ')
				.replace(/&#61;/g, '=')
				.replace(/&#62;/g, '>')
				.replace(/&#58;/g, ':')
		);

export {preparePageContent};
