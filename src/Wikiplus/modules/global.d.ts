declare global {
	interface Window {
		_WikiplusPages: Record<number, Page>;
	}
}

export default global;
