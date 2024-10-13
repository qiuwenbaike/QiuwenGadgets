type Ve = {
	readonly init: {
		target: {
			saveDialog: {
				$saveOptions: JQuery;
				editSummaryInput: {
					$input: JQuery;
				};
			};
			saveFields: {
				wpChangeTags: () => string;
			};
		};
	};
};

declare global {
	interface Window {
		readonly ve: Ve;
	}
}

export default global;
