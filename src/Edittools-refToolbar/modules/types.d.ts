/**
 * Types for the CiteTB object and related helpers used by Edittools-refToolbar.
 */

declare global {
	interface CiteField {
		field: string;
		autofillid?: string;
		autofillprop?: string;
		increment_group?: string;
		increment_button?: boolean;
		label?: string;
		tooltip?: string;
	}

	interface CiteIncrementable {
		fields: CiteField[];
		val: number;
		setup: boolean;
	}

	interface CiteTemplateInstance {
		templatename: string;
		shortform: string;
		basic: CiteField[];
		extra: CiteField[];
		incrementables: Record<string, CiteIncrementable>;
		makeFormInner(fields: CiteField[], incrsetup: boolean): JQuery<HTMLElement>[];
		getInitial(): JQuery<HTMLElement>;
		getForm(): JQuery<HTMLElement>;
	}

	interface CiteTBOptions {
		'date format': string;
		'autodate fields': string[];
		months: string[];
		modal: boolean;
		autoparse: boolean;
		expandtemplates: boolean;
		[key: string]: string | string[] | boolean;
	}

	/** Data returned by the citoid lookup script (JSONP callback payload) */
	interface CiteAutofillData {
		title?: string | undefined;
		authors?: string[][] | undefined;
		date?: string | undefined;
		journal?: string | undefined;
		volume?: string | undefined;
		issue?: string | undefined;
		pages?: string | undefined;
		publisher?: string | undefined;
		location?: string | undefined;
		edition?: string | undefined;
		isbn?: string | undefined;
		issn?: string | undefined;
		doi?: string | undefined;
		language?: string | undefined;
		chapter?: string | undefined;
	}

	interface CiteRefObject {
		shorttag: boolean;
		refname?: string | undefined;
		refgroup?: string | undefined;
		content?: string | undefined;
	}

	interface CiteTB {
		Templates: Record<string, CiteTemplateInstance>;
		Options: CiteTBOptions;
		UserOptions: Partial<CiteTBOptions>;
		DefaultOptions: CiteTBOptions;
		mainRefList: CiteRefObject[];
		refsLoaded: boolean;
		lastnamedrefchoice: string;
		getOption: <K extends keyof CiteTBOptions>(opt: K) => CiteTBOptions[K];
		init: () => void;
		getRef: (inneronly: boolean, forinsert: boolean) => string;
		getNamedRef: (refname: string, forinsert: boolean) => string;
		loadRefs: () => void;
		loadRefsInternal: (text: string) => void;
		parse: (text: string, callback: (html: string) => void) => void;
		expandtemplates: (text: string, callback: (restext: string) => void) => void;
		getPageText: (callback: (text: string) => void) => void;
		safeDecodeURIComponent: (s: string) => string;
		initAutofill: (this: HTMLElement) => false | undefined;
		autoFill: (data: CiteAutofillData, template: string, type: string) => void;
		incrementFields: (this: HTMLElement) => void;
		fillAccessdate: (this: HTMLElement) => false | undefined;
		formatDate: (DT: Date, useday?: boolean, usemonth?: boolean) => string;
		setupNamedRefs: () => void;
		fillNrefPreview: (parsed: string) => void;
		nrefParseClick: () => false | undefined;
		namedRefSelectClick: () => void;
		fillTemplatePreview: (text: string) => void;
		prevParseClick: () => void;
		showHideExtra: () => void;
		resetForm: () => void;
		getQuotedString: (s: string) => string;
		fixStr: (s: string) => string;
		escStr: (s: string) => string;
		getOpenTemplate: () => CiteTemplateInstance;
	}

	interface Window {
		CiteTB: CiteTB;
		CiteTemplate: new (
			templatename: string,
			shortform: string,
			basicfields: CiteField[],
			expandedfields: CiteField[]
		) => CiteTemplateInstance;
	}

	// Global assigned on `window`; also exposed as a bare identifier for readability
	const CiteTB: CiteTB;

	interface JQuery<TElement = HTMLElement> {
		// ext.wikiEditor (MediaWiki jQuery plugin)
		wikiEditor(command: string, ...args: unknown[]): JQuery<TElement>;
		// jquery-ui dialog (the non-generic `interface JQuery` in @types/jqueryui does not merge)
		dialog(methodName: string): JQuery<TElement>;
	}

	interface JQueryStatic {
		wikiEditor: {
			modules: {
				toolbar: {
					fn: {
						doAction(
							context: unknown,
							action: {
								type: string;
								options: {
									pre?: string;
									post?: string;
								};
							},
							$textarea: JQuery<HTMLElement>
						): void;
					};
				};
			};
		};
	}
}

export {};
