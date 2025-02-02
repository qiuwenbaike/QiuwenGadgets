type Ve = {
	readonly init: {
		target: {
			saveDialog: JQuery;
		};
	};
};

declare global {
	interface Window {
		readonly ve: Ve;
	}
}

export default global;
