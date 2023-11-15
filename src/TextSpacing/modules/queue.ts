type DomMutationFunc = (element: Element) => void;

const pendingActions: WeakMap<Element, DomMutationFunc[]> = new WeakMap<Element, DomMutationFunc[]>();

const onIntersection = (entries: IntersectionObserverEntry[]): void => {
	for (const entry of entries) {
		if (!entry.isIntersecting) {
			continue;
		}

		const element = entry.target;
		observer.unobserve(element);

		const callbacks = pendingActions.get(element);
		if (!callbacks) {
			continue;
		}

		while (true) {
			const callback = callbacks.shift(); // FIFO
			if (!callback) {
				break;
			}
			callback(element);
		}
	}
};

// Optimization: lazily execute pending actions once an element is visible
// eslint-disable-next-line compat/compat
const observer: IntersectionObserver = new IntersectionObserver(onIntersection);

const queueDomMutation = (element: Element, callback: DomMutationFunc): void => {
	if (!pendingActions.has(element)) {
		pendingActions.set(element, []);
	}

	pendingActions.get(element)?.push(callback);
	observer.observe(element);
};

export {queueDomMutation};
