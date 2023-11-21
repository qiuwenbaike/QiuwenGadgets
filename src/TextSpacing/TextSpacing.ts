import {WRAPPER_CLASS, addSpaceToString, adjustSpacing, getLeafElements} from './modules/spacing';

const run = (element: HTMLElement): void => {
	const leaves: HTMLElement[] = getLeafElements(element);
	for (const leaf of leaves) {
		adjustSpacing(leaf);
	}
};

const mutationObserver = new MutationObserver((records: MutationRecord[]): void => {
	for (const record of records) {
		if (record.type !== 'childList') {
			continue;
		}

		const addedNodes = [...record.addedNodes];

		// Exclude mutations caused by adjustSpacing() to prevent infinite loops
		// Typically they will contain nodes with class WRAPPER_CLASS
		if (
			addedNodes.some((node: Node): boolean => {
				return node instanceof HTMLElement && node.classList.contains(WRAPPER_CLASS);
			})
		) {
			continue;
		}

		// Optimization: prevent forced reflows
		requestAnimationFrame((): void => {
			for (const node of addedNodes) {
				if (node instanceof HTMLElement) {
					run(node);
				} else if (node instanceof Text) {
					const {parentElement} = node;
					if (parentElement) {
						run(parentElement);
					}
				}
			}
		});
	}
});

const main = (): void => {
	document.title = addSpaceToString(document.title);

	const bodyElement: HTMLBodyElement = $('body').get(0) as HTMLBodyElement;
	// Watch for added nodes
	mutationObserver.observe(bodyElement, {
		subtree: true,
		childList: true,
	});
	run(bodyElement);
};

$(main);
