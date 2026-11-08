interface Messages {
	start: string;
	startMain: string;
	startSame: string;
	close: string;
	undo: string;
	omit: string;
	refresh: string;
	titleAsText: string;
	disamNeeded: string;
	intentionalLink: string;
	titleAsTextPrompt: string;
	removeLink: string;
	optionMarker: string;
	targetOptionMarker: string;
	redirectOptionMarker: string;
	pageTitleLine: string;
	noMoreLinks: string;
	pendingEditCounter: string;
	pendingEditBox: string;
	pendingEditBoxTimeEstimation: string;
	pendingEditBoxLimited: string;
	error: string;
	fetchRedirectsError: string;
	getBacklinksError: string;
	fetchRightsError: string;
	loadPageError: string;
	savePageError: string;
	dismissError: string;
	pending: string;
	editInProgress: string;
	ellipsis: string;
	notifyCharacter: string;
	summary: string;
	summaryChanged: string;
	summaryOmitted: string;
	summaryRemoved: string;
	summaryIntentional: string;
	summaryHelpNeeded: string;
	summarySeparator: string;
	redirectSummary: string;
}

interface Link {
	start: number;
	end: number;
	possiblyAmbiguous: boolean;
	hasDisamTemplate: boolean;
	title: string;
	description: string;
	afterDescription: string;
}

interface PageData {
	content: string;
	baseTimeStamp: string | undefined;
	startTimeStamp: string | undefined;
	editToken: string;
	redirect: boolean;
	missing: boolean;
}

interface PageChange {
	title: string;
	page: PageData;
	contentBefore: string[];
	links: Link[];
	summary: string[];
}

interface Redirect {
	from: string;
	to: string;
}

interface DisamAssistUI {
	display: JQuery<HTMLElement>;
	finishedMessage: JQuery<HTMLElement>;
	pageTitleLine: JQuery<HTMLElement>;
	pendingEditCounter: JQuery<HTMLElement>;
	context: JQuery<HTMLElement>;
	undoButton: JQuery<HTMLElement>;
	omitButton: JQuery<HTMLElement>;
	endButton: JQuery<HTMLElement>;
	refreshButton: JQuery<HTMLElement>;
	titleAsTextButton: JQuery<HTMLElement>;
	intentionalLinkButton: JQuery<HTMLElement>;
	disamNeededButton: JQuery<HTMLElement>;
	removeLinkButton: JQuery<HTMLElement>;
}

type SaveArgs = [pageTitle: string, page: PageData, summary: string, minorEdit: boolean, botEdit: boolean];

type SaveFunction = (...args: SaveArgs) => JQuery.Promise<void>;

interface PendingSave {
	args: SaveArgs;
	dfd: JQuery.Deferred<void>;
}

export default global;

export type {DisamAssistUI, Link, Messages, PageChange, PageData, PendingSave, Redirect, SaveArgs, SaveFunction};
