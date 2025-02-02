type Ve = {
	readonly init: {
		target: {
			saveDialog: {
				on(arg0: string, arg1: () => void): unknown;
				$saveCheckboxes: JQuery<HTMLElement>;
				$element: JQuery<HTMLElement>;
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
