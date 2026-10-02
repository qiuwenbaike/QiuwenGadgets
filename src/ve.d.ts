type ParseResponse = {
	parse: {
		displaytitle: string;
		text: string;
		categorieshtml: string;
	};
};

type VisualEditorTarget = {
	saveDialog: {
		previewPanel: {$element: JQuery<HTMLElement>};
		off: (event: string, methodName: string, context: VisualEditorTarget) => void;
		on: (event: string, callback: () => void) => void;
		pushPending: () => void;
		popPending: () => void;
		swapPanel: (panel: string) => void;
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
	getContentApi: () => {
		post: (params: Record<string, unknown>) => Promise<ParseResponse>;
		getErrorMessage: (error: unknown) => string;
	};
	getPageName: () => string;
	getDocToSave: () => string;
	emit: (event: string) => void;
	getSurface: () => {
		getModel: () => {
			getDocument: () => {once: (event: string, callback: () => void) => void};
		};
	};
};

type VisualEditorRuntime = {
	init: {target: VisualEditorTarget};
	targetLinksToNewWindow: (element: HTMLElement) => void;
};

declare global {
	interface Window {
		readonly ve: VisualEditorRuntime;
	}
}

export default global;
