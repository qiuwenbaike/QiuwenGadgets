(function textSpacing(): void {
	type DomMutationFunc = (element: Element) => void;

	const pendingActions: WeakMap<Element, DomMutationFunc[]> = new WeakMap<Element, DomMutationFunc[]>();

	const onIntersection = (entries: IntersectionObserverEntry[], _observer: IntersectionObserver): void => {
		entries.forEach((entry: IntersectionObserverEntry): void => {
			if (entry.isIntersecting) {
				const element: Element = entry.target;
				_observer.unobserve(element);
				const callbacks: DomMutationFunc[] | undefined = pendingActions.get(element);
				if (callbacks) {
					while (true) {
						const callback: DomMutationFunc | undefined = callbacks.shift();
						if (!callback) {
							break;
						}
						callback(element);
					}
				}
			}
		});
	};
	// eslint-disable-next-line compat/compat
	const observer = new IntersectionObserver(onIntersection);
	const queueDomMutation = (element: Element, callback: DomMutationFunc): void => {
		if (!pendingActions.has(element)) {
			pendingActions.set(element, []);
		}
		pendingActions.get(element)?.push(callback);
		observer.observe(element);
	};
	const isInlineHTMLElement = (node: Node): node is HTMLElement => {
		return node instanceof HTMLElement && window.getComputedStyle(node).display.includes('inline');
	};
	const isTextNode = (node: Node): node is Text => {
		return node.nodeType === Node.TEXT_NODE;
	};
	const isVisible = (element: Element): boolean => {
		const style: CSSStyleDeclaration = window.getComputedStyle(element);
		return (
			style.display !== 'none' &&
			!['hidden', 'collapse'].includes(style.visibility) &&
			Number.parseFloat(style.opacity) > 0
		);
	};
	const getNodeText = (node: HTMLElement | Text): string => {
		return node instanceof HTMLElement ? node.textContent ?? '' : node.data;
	};
	const splitAtIndexes = (str: string, indexes: number[]): string[] => {
		const result: string[] = [];
		const normalizedIndexes: number[] = [
			...new Set(
				indexes
					.sort((a: number, b: number): number => {
						return a - b;
					})
					.filter((i: number): boolean => {
						return i >= 0 && i <= str.length;
					})
			),
			str.length,
		];
		for (let i = 0; i < normalizedIndexes.length; i++) {
			const slice: string = str.slice(normalizedIndexes[i - 1], normalizedIndexes[i]);
			result.push(slice);
		}
		return result;
	};

	const REGEX_RANGE_CHINESE =
		'(?:[\\u2E80-\\u2E99\\u2E9B-\\u2EF3\\u2F00-\\u2FD5\\u3005\\u3007\\u3021-\\u3029\\u3038-\\u303B\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uF900-\\uFA6D\\uFA70-\\uFAD9]|\\uD81B[\\uDFE2\\uDFE3\\uDFF0\\uDFF1]|[\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879\\uD880-\\uD883][\\uDC00-\\uDFFF]|\\uD869[\\uDC00-\\uDEDF\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF38\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0]|\\uD87E[\\uDC00-\\uDE1D]|\\uD884[\\uDC00-\\uDF4A])';
	const REGEX_RANGE_NON_CHINESE = '[A-Za-z0-9~$%^&*-+\\=|!;,.?±]';
	const REGEX_STR_INTER_SCRIPT = `(?:(${REGEX_RANGE_CHINESE})(?=${REGEX_RANGE_NON_CHINESE})|(${REGEX_RANGE_NON_CHINESE})(?=${REGEX_RANGE_CHINESE}))`;
	const THIN_SPACE = '\u2009';
	const WRAPPER_CLASS = 'gadget-space';
	const SELECTOR_ALLOWED: string[] = [
		'a',
		'abbr',
		'article',
		'aside',
		'b',
		'bdi',
		'big',
		'blockquote',
		'button',
		'caption',
		'center',
		'cite',
		'data',
		'dd',
		'del',
		'details',
		'dfn',
		'div',
		'dt',
		'em',
		'figcaption',
		'footer',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'header',
		'i',
		'ins',
		'label',
		'legend',
		'li',
		'main',
		'mark',
		'option',
		'p',
		'q',
		'ruby',
		's',
		'section',
		'small',
		'span',
		'strike',
		'strong',
		'sub',
		'summary',
		'sup',
		'td',
		'th',
		'time',
		'u',
	];
	const SELECTOR_BLOCKED: string[] = [
		'code',
		'kbd',
		'pre',
		'rp',
		'rt',
		'samp',
		'textarea',
		'var',
		'.gadget-nospace',
		'[contenteditable="true"]',
		'.ace_editor',
		'.ve-ui-surface',
		'.ve-init-mw-diffPage-diff',
		'.diff-side-deleted',
		'.diff-side-added',
		'[class*="mw-diff-inline-"]',
	];
	// FIXME: Use :is() in the future once it has better browser compatibility
	const SELECTOR: string = SELECTOR_ALLOWED.map((allowed: string): string => {
		return `${allowed}:not(${SELECTOR_BLOCKED.flatMap((blocked: string): string | string[] => {
			return (blocked[0] as string).match(/[a-z]/i) ? `${blocked} *` : [blocked, `${blocked} *`];
		}).join(',')})`;
	}).join(',');

	const getLeafElements = (parent: HTMLElement): HTMLElement[] => {
		const candidates: NodeListOf<HTMLElement> = parent.querySelectorAll(SELECTOR);
		const result: HTMLElement[] = [];
		if (parent.matches(SELECTOR)) {
			result.push(parent);
		}
		for (const candidate of candidates) {
			for (const childNode of candidate.childNodes) {
				if (isTextNode(childNode)) {
					result.push(candidate);
					break;
				}
			}
		}
		return result;
	};
	const getNextVisibleSibling = (node: Node): HTMLElement | Text | null => {
		let currentNode: Node = node;
		while (true) {
			const candidate: ChildNode | null = currentNode.nextSibling;
			if (!candidate) {
				const parent: HTMLElement | null = currentNode.parentElement;
				if (!parent) {
					return null;
				}
				currentNode = parent;
				continue;
			}
			if (!(candidate instanceof HTMLElement || candidate instanceof Text)) {
				currentNode = candidate;
				continue;
			}
			if (candidate instanceof HTMLElement) {
				if (!isVisible(candidate)) {
					currentNode = candidate;
					continue;
				}
				if (!isInlineHTMLElement(candidate)) {
					return null;
				}
			}
			if (candidate instanceof Text && !candidate.data.trim()) {
				currentNode = candidate;
				continue;
			}
			return candidate;
		}
	};
	const createSpacingWrapper = (string: string): [string, HTMLSpanElement] => {
		const span = document.createElement('span');
		// eslint-disable-next-line mediawiki/class-doc
		span.className = WRAPPER_CLASS;
		span.textContent = string.slice(-1);
		return [string.slice(0, -1), span];
	};
	const adjustSpacing = (element: HTMLElement): void => {
		const childNodes: ChildNode[] = [...element.childNodes];
		const textSpacingPosMap: Map<Text, number[]> = new Map<Text, number[]>();
		for (const child of childNodes) {
			if (child instanceof Text) {
				const nextSibling: HTMLElement | Text | null = getNextVisibleSibling(child);
				let testString: string = getNodeText(child);
				if (nextSibling) {
					testString += getNodeText(nextSibling)[0] ?? '';
				}
				const indexes: number[] = [];
				const regexTextNodeData = new RegExp(REGEX_STR_INTER_SCRIPT, 'g');
				while (true) {
					const match: RegExpExecArray | null = regexTextNodeData.exec(testString);
					if (!match) {
						break;
					}
					indexes.push(match.index + 1);
				}
				if (!indexes.length) {
					continue;
				}
				textSpacingPosMap.set(child, indexes);
			}
		}
		queueDomMutation(element, (): void => {
			for (const [node, indexes] of textSpacingPosMap) {
				const text: string = node.data;
				const fragments: string[] = splitAtIndexes(text, indexes);
				const replacement: (string | HTMLSpanElement)[] = fragments
					.slice(0, -1)
					.flatMap((fragment: string): ReturnType<typeof createSpacingWrapper> => {
						return createSpacingWrapper(fragment);
					});
				replacement.push(fragments.slice(-1)[0] as string);
				node.replaceWith(...replacement);
			}
		});
	};

	const addSpaceToString = (str: string): string => {
		const regex = new RegExp(REGEX_STR_INTER_SCRIPT, 'g');
		return str.replace(regex, `$1$2${THIN_SPACE}`);
	};
	const run = (element: HTMLElement) => {
		const leaves: HTMLElement[] = getLeafElements(element);
		leaves.forEach((leaf: HTMLElement): void => {
			adjustSpacing(leaf);
		});
	};
	const mutationObserver: MutationObserver = new MutationObserver((records: MutationRecord[]): void => {
		records.forEach((record: MutationRecord): void => {
			if (record.type === 'childList') {
				const nodes: Node[] = [...record.addedNodes];
				if (
					!nodes.some((node: Node): boolean => {
						return node instanceof HTMLElement && node.classList.contains(WRAPPER_CLASS);
					})
				) {
					requestAnimationFrame((): void => {
						nodes.forEach((node: Node): void => {
							if (node instanceof HTMLElement) {
								run(node);
							} else if (node instanceof Text) {
								const {parentElement} = node;
								if (parentElement) {
									run(parentElement);
								}
							}
						});
					});
				}
			}
		});
	});

	const main = (): void => {
		document.title = addSpaceToString(document.title);
		mutationObserver.observe(document.body, {
			subtree: true,
			childList: true,
		});
		run(document.body);
	};
	$(main);
})();
