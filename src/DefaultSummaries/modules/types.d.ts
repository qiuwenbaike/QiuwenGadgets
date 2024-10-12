type Ve = {
	readonly init: {
		target: {
			saveDialog: {
				$saveOptions: JQuery;
				editSummaryInput: {
					$input: JQuery;
				};
			};
		};
	};
};

declare global {
	interface Window {
		readonly ve: Ve;
	}
}

export type {Ve};
