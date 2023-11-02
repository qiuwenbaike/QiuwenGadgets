export const codeLinks = (): void => {
	/**
	 * @source <https://daringfireball.net/2010/07/improved_regex_for_matching_urls>
	 * @author John Gruber
	 */
	const urlRegExp =
		/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))/i;

	const processComment = (node: Node): void => {
		const textNode: ChildNode | null = node.firstChild; // always a text node.
		if (!textNode) {
			return;
		}
		const {textContent} = textNode;
		if (!textContent) {
			return;
		}
		let wikilinkMatch: RegExpExecArray | null = /\[\[([^|{}[\]\n]+)?(?:\|.*?)?]]/.exec(textContent);
		let templateMatch: RegExpExecArray | null = /(\{\{(?:#invoke:)?)([^|{}[\]\n#]+)(?=\||}})/i.exec(textContent);
		let urlMatch: RegExpExecArray | null = urlRegExp.exec(textContent);
		while (wikilinkMatch || templateMatch || urlMatch) {
			const link: HTMLAnchorElement = document.createElement('a');
			let start: number = (wikilinkMatch || templateMatch || urlMatch)?.index ?? 0;
			let linkText = '';
			link.classList.add('code-link');
			if (urlMatch) {
				const [url] = urlMatch;
				link.href = url;
				linkText = url;
			} else {
				let fullPageName = '';
				if (wikilinkMatch) {
					[linkText] = wikilinkMatch;
					fullPageName = wikilinkMatch[1] as string;
				} else if (templateMatch) {
					const prefix: string = templateMatch[1] as string;
					const pageName: string = templateMatch[2] as string;
					linkText = pageName;
					fullPageName = (prefix === '{{#invoke:' ? 'Module:' : 'Template:') + pageName;
					link.title = fullPageName;
					start += prefix.length;
				}
				link.href = mw.util.getUrl(fullPageName);
			}
			const beforeLink: string = textContent.slice(0, Math.max(0, start));
			const afterLink: string = textContent.slice(Math.max(0, start + linkText.length));
			textNode.textContent = afterLink;
			link.append(document.createTextNode(linkText));
			textNode.before(link);
			node.insertBefore(document.createTextNode(beforeLink), link);
			// ensure all matches are null at beginning of loop body; is this necessary?
			urlMatch = null;
			templateMatch = null;
			wikilinkMatch = null;
		}
	};

	Array.prototype.forEach.call(document.querySelectorAll('.mw-highlight'), (codeBlock: HTMLElement): void => {
		for (const commentClass of ['c', 'c1', 'cm']) {
			Array.prototype.forEach.call(
				codeBlock.querySelectorAll(`.${commentClass}`),
				(element: HTMLElement): void => {
					processComment(element);
				}
			);
		}
	});

	// Link module names after `require` and `mw.loadData`, and tracking template
	// names after `require("Module:debug").track`.
	const classes: {
		identifier: string;
		functionName: string;
		singleQuoteString: string;
		doubleQuoteString: string;
	} = {
		identifier: 'n',
		functionName: 'nb',
		singleQuoteString: 's1',
		doubleQuoteString: 's2',
	};

	const moduleNames: Element[] = [];
	Array.prototype.forEach.call(
		document.querySelectorAll(`.${classes.functionName}`),
		(functionName: HTMLElement): void => {
			const text: string | null | undefined = functionName.firstChild?.nodeValue;
			if (text !== 'require') {
				return;
			}
			let next: Element | null = functionName.nextElementSibling;
			if (!next) {
				return;
			}
			let nextText: string | null = next.firstChild && next.firstChild.nodeValue;
			const hasParenthesis: boolean = nextText === '(';
			if (hasParenthesis) {
				next = next.nextElementSibling;
				if (!next) {
					return;
				}
				nextText = next.firstChild && next.firstChild.nodeValue;
			}
			const {classList} = next;
			if (!(classList.contains(classes.singleQuoteString) || classList.contains(classes.doubleQuoteString))) {
				return;
			}
			const element: Element = next;
			const elementValue: string | null = nextText;
			if (!elementValue) {
				return;
			}
			next = next.nextElementSibling;
			if (!next) {
				return;
			}
			nextText = next.firstChild && next.firstChild.nodeValue;
			if (hasParenthesis && nextText?.[0] !== ')') {
				return;
			}
			moduleNames.push(element);
		}
	);

	const dataModuleNames: Element[] = [];
	const callback = (element: HTMLElement): void => {
		if (moduleNames.includes(element)) {
			return;
		}
		const stringValue: string | null | undefined = element.firstChild?.nodeValue;
		if (!stringValue || !/^["'](?:module|模[组組块]):/i.test(stringValue)) {
			return;
		}
		let prev: Element | null = element.previousElementSibling;
		if (!prev) {
			return;
		}
		let prevText: string | null = prev.firstChild && prev.firstChild.nodeValue;
		if (prevText === '(') {
			const next: Element | null = element.nextElementSibling;
			if (!next) {
				return;
			}
			const nextText: string | null = next.firstChild && next.firstChild.nodeValue;
			if (nextText?.[0] !== ')') {
				return;
			}
			prev = prev.previousElementSibling;
			if (!prev) {
				return;
			}
			prevText = prev.firstChild && prev.firstChild.nodeValue;
		}
		if (prevText !== 'loadData') {
			return;
		}
		prev = prev.previousElementSibling;
		if (!prev) {
			return;
		}
		prevText = prev.firstChild && prev.firstChild.nodeValue;
		if (prevText !== '.') {
			return;
		}
		prev = prev.previousElementSibling;
		if (!prev) {
			return;
		}
		prevText = prev.firstChild && prev.firstChild.nodeValue;
		if (prevText !== 'mw') {
			return;
		}
		dataModuleNames.push(element);
	};
	Array.prototype.forEach.call(document.querySelectorAll(`.${classes.singleQuoteString}`), callback);
	Array.prototype.forEach.call(document.querySelectorAll(`.${classes.doubleQuoteString}`), callback);

	if (moduleNames.length || dataModuleNames.length) {
		const addLink = (element: Element, page: string): void => {
			if (!(element instanceof Element)) {
				throw new TypeError('Expected Element object');
			}
			const link: HTMLAnchorElement = document.createElement('a');
			link.href = mw.util.getUrl(page);
			// put text node from element inside link
			const {firstChild} = element;
			if (!(firstChild instanceof Text)) {
				throw new TypeError('Expected Text object');
			}
			link.append(firstChild);
			element.append(link); // put link inside syntax-highlighted string
		};
		// Link module names to module pages,
		// or to the section in the Scribunto manual.
		const addLinkCallback = (module: Element): void => {
			const stringValue: string | null | undefined = module.firstChild?.nodeValue;
			if (!stringValue) {
				return;
			}
			// eslint-disable-next-line unicorn/prefer-string-slice
			const moduleName: string = stringValue.substring(1, stringValue.length - 1);
			const linkPage: string = /^(module|模[组組块])?:/i.test(moduleName) ? moduleName : `Help:Lua#${moduleName}`;
			addLink(module, linkPage);
		};
		for (const module of moduleNames) {
			addLinkCallback(module);
		}
		for (const dataModule of dataModuleNames) {
			addLinkCallback(dataModule);
		}
	}
};
