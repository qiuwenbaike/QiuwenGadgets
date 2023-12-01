import type {Tippy} from 'tippy.js';

declare global {
	const tippy: Tippy;

	interface Window {
		tippy: Tippy;
	}
}

export default global;
