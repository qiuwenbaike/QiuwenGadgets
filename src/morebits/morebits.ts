/*! Twinkle.js - morebits.ts */

/**
 * A library full of lots of goodness for user scripts on MediaWiki wikis.
 *
 * The highlights include:
 * - {@link Morebits.wiki.api} - make calls to the MediaWiki API
 * - {@link Morebits.wiki.page} - modify pages on the wiki (edit, revert, delete, etc.)
 * - {@link Morebits.date} - enhanced date object processing, sort of a light moment.js
 * - {@link Morebits.quickForm} - generate quick HTML forms on the fly
 * - {@link Morebits.simpleWindow} - a draggable dialog window implemented with plain jQuery, with a custom look and extra features
 * - {@link Morebits.status} - a rough-and-ready status message displayer, used by the Morebits.wiki classes
 * - {@link Morebits.wikitext} - utilities for dealing with wikitext
 * - {@link Morebits.string} - utilities for manipulating strings
 * - {@link Morebits.array} - utilities for manipulating arrays
 * - {@link Morebits.ip} - utilities to help process IP addresses
 *
 * Dependencies:
 * - The whole thing relies on jQuery.  But most wikis should provide this by default.
 * - {@link Morebits.quickForm}, {@link Morebits.simpleWindow}, and {@link Morebits.status} rely on the "morebits.css" file for their styling.
 * - To create a gadget based on morebits, use this syntax in MediaWiki:Gadgets-definition:
 *     - `*GadgetName[ResourceLoader|dependencies=mediawiki.user,mediawiki.util,mediawiki.Title]|morebits.js|morebits.css|GadgetName.js`
 * - Alternatively, you can configure morebits as a hidden gadget in MediaWiki:Gadgets-definition:
 *     - `*morebits[ResourceLoader|dependencies=mediawiki.user,mediawiki.util,mediawiki.Title|hidden]|morebits.js|morebits.css`
 *     and then load ext.gadget.morebits as one of the dependencies for the new gadget.
 *
 * All the stuff here works on all browsers for which MediaWiki provides JavaScript support.
 *
 * This library is maintained by the maintainers of Twinkle.
 * For queries, suggestions, help, etc., head to [Help:Twinkle](https://www.qiuwenbaike.cn/wiki/H:TW).
 * The latest development source is available at {@link https://github.com/wikimedia-gadgets/twinkle/blob/master/morebits.js|GitHub}.
 *
 * @namespace Morebits
 */
import './morebits.less';
import {uls} from './utils/useUls';

declare global {
	interface Window {
		Morebits: MorebitsNamespace;
	}
}

/** Input accepted by {@link Morebits.createHtml}: a string, a Node, or an array thereof. */
type MorebitsHtmlInput = string | Node | (string | Node)[] | null | undefined;

/** The callable {@link Morebits.createHtml}, with {@link Morebits.createHtml.renderWikilinks} attached. */
type MorebitsCreateHtml = ((input: MorebitsHtmlInput) => DocumentFragment) & {
	renderWikilinks: (text: string) => string;
};

/**
 * The shape of the global `Morebits` namespace.
 *
 * This interface is declaration-merged: each section of this file contributes
 * the members it defines.
 */
interface MorebitsNamespace {
	/** Wiki-specific configurations for Morebits. */
	l10n: typeof l10n;
	/** Simple helper function to see what groups a user might belong. */
	userIsInGroup: (group: string) => boolean;
	/** Hardcodes whether the user is a sysop, used a lot. */
	userIsSysop: boolean;
	/** @deprecated Use {@link Morebits.ip.sanitizeIPv6}. */
	sanitizeIPv6: (address: string) => string | null;
	/** Determines whether the current page is a redirect or soft redirect. */
	isPageRedirect: () => boolean;
	/** A normalized (underscores converted to spaces) version of the `wgPageName` variable. */
	pageNameNorm: string;
	/** Create a string for use in regex matching a page name. */
	pageNameRegex: (pageName: string) => string;
	/** Converts string or array of DOM nodes into an HTML fragment. */
	createHtml: MorebitsCreateHtml;
	/** Create a string for use in regex matching all namespace aliases. */
	namespaceRegex: (namespaces: number | number[]) => string;
}

const Morebits = {} as MorebitsNamespace;
window.Morebits = Morebits; // allow global access
// No Morebits.i18n at this time

/**
 * Wiki-specific configurations for Morebits
 */
const l10n = {
	/**
	 * Local aliases for "redirect" magic word.
	 * Check using api.php?action=query&format=json&meta=siteinfo&formatversion=2&siprop=magicwords
	 */
	redirectTagAliases: ['#REDIRECT', '#重定向'],
	/**
	 * Takes a string as argument and checks if it is a timestamp or not
	 * If not, it returns null. If yes, it returns an array of integers
	 * in the format [year, month, date, hour, minute, second]
	 * which can be passed to Date.UTC()
	 */
	signatureTimestampFormat: (str: string): number[] | null => {
		const rgxUTC = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(UTC\)/; // YYYY年Month月DD日 (w) HH:mm (UTC)
		const rgxCST = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(CST\)/; // YYYY年Month月DD日 (w) HH:mm (CST)
		const match = (rgxUTC.exec(str) ?? rgxCST.exec(str)) as [string, string, string, string, string, string] | null;
		const matchCST = rgxCST.exec(str);
		if (!match) {
			return null;
		}
		const month = Morebits.date.localeData.months.indexOf(match[4]);
		if (month === -1) {
			return null;
		}
		// ..... year .... month ... date .... hour ... minute
		return matchCST
			? [Number(match[1]), Number(match[2]) - 1, Number(match[3]), Number(match[4]) - 8, Number(match[5])]
			: [Number(match[1]), Number(match[2]) - 1, Number(match[3]), Number(match[4]), Number(match[5])];
	},
};
Morebits.l10n = l10n;

/**
 * Simple helper function to see what groups a user might belong.
 *
 * @param {string} group - e.g. `sysop`, `autoconfirmed`, etc.
 */
Morebits.userIsInGroup = (group: string): boolean => {
	const userGroups = mw.config.get('wgUserGroups') ?? [];
	const globalGroups = (mw.config.get('wgGlobalGroups') as string[] | undefined) ?? [];
	return userGroups.includes(group) || globalGroups.includes(group);
};

/**
 * Hardcodes whether the user is a sysop, used a lot.
 */
Morebits.userIsSysop =
	Morebits.userIsInGroup('sysop') || Morebits.userIsInGroup('steward') || Morebits.userIsInGroup('qiuwen');

/**
 * @deprecated Use {@link Morebits.ip.sanitizeIPv6}.
 * Converts an IPv6 address to the canonical form stored and used by MediaWiki.
 * JavaScript translation of the {@link https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/core/+/8eb6ac3e84ea3312d391ca96c12c49e3ad0753bb/includes/utils/IP.php#131|`IP::sanitizeIP()`}
 * function from the IPUtils library.  Addresses are verbose, uppercase,
 * normalized, and expanded to 8 words.
 *
 * @param {string} address - The IPv6 address, with or without CIDR.
 */
Morebits.sanitizeIPv6 = (address) => {
	console.warn(
		'[Morebits] NOTE: Morebits.sanitizeIPv6 was renamed to Morebits.ip.sanitizeIPv6 in February 2021, please use that instead'
	);
	return Morebits.ip.sanitizeIPv6(address);
};

/**
 * Determines whether the current page is a redirect or soft redirect. Fails
 * to detect soft redirects on edit, history, etc. pages.  Will attempt to
 * detect Module:RfD, with the same failure points.
 */
Morebits.isPageRedirect = () => {
	return !!(
		mw.config.get('wgIsRedirect') ||
		document.querySelector('#softredirect') ||
		document.querySelector('.box-RfD') ||
		document.querySelector('.box-Redirect_category_shell')
	);
};

/**
 * A normalized (underscores converted to spaces) version of the
 * `wgPageName` variable.
 */
Morebits.pageNameNorm = mw.config.get('wgPageName').replace(/_/g, ' ');

/**
 * Create a string for use in regex matching a page name.  Accounts for
 * leading character's capitalization, underscores as spaces, and special
 * characters being escaped.  See also {@link Morebits.namespaceRegex}.
 *
 * @param {string} pageName - Page name without namespace.
 * @returns {string} - For a page name `Foo bar`, returns the string `[Ff]oo[_ ]bar`.
 */
Morebits.pageNameRegex = (pageName) => {
	if (pageName === '') {
		return '';
	}
	const firstChar = pageName.charAt(0);
	const remainder = Morebits.string.escapeRegExp(pageName.slice(1));
	if (mw.Title.phpCharToUpper(firstChar) !== firstChar.toLowerCase()) {
		return `[${mw.Title.phpCharToUpper(firstChar)}${firstChar.toLowerCase()}]${remainder}`;
	}
	return Morebits.string.escapeRegExp(firstChar) + remainder;
};

/**
 * Converts string or array of DOM nodes into an HTML fragment.
 * Wikilink syntax (`[[...]]`) is transformed into HTML anchor.
 * Used in Morebits.quickForm and Morebits.status
 *
 * @internal
 */
const createHtml = ((input: MorebitsHtmlInput): DocumentFragment => {
	const fragment = document.createDocumentFragment();
	if (!input) {
		return fragment;
	}
	const elements = ([] as (string | Node)[]).concat(input);
	for (const element of elements) {
		if (element instanceof Node) {
			fragment.appendChild(element);
		} else {
			for (const node of $.parseHTML(createHtml.renderWikilinks(element)) ?? []) {
				fragment.appendChild(node);
			}
		}
	}
	return fragment;
}) as MorebitsCreateHtml;

Morebits.createHtml = createHtml;

/**
 * Converts wikilinks to HTML anchor tags.
 */
createHtml.renderWikilinks = (text) => {
	const ub = new Morebits.unbinder(text);
	// Don't convert wikilinks within code tags as they're used for displaying wiki-code
	ub.unbind('<code>', '</code>');
	ub.content = ub.content.replace(/\[\[:?(?:([^|\]]+?)\|)?([^\]|]+?)\]\]/g, (_, target: string, text_: string) => {
		target ||= text_;
		return `<a rel="noopener" target="_blank" href="${mw.util.getUrl(target)}" title="${target.replace(
			/"/g,
			'&#34;'
		)}">${text_}</a>`;
	});
	return ub.rebind();
};

/**
 * Create a string for use in regex matching all namespace aliases, regardless
 * of the capitalization and underscores/spaces.  Doesn't include the optional
 * leading `:`, but if there's more than one item, wraps the list in a
 * non-capturing group.  This means you can do `Morebits.namespaceRegex([4]) +
 * ':' + Morebits.pageNameRegex('Twinkle')` to match a full page.  Uses
 * {@link Morebits.pageNameRegex}.
 *
 * @example
 * // returns '(?:[Ff][Ii][Ll][Ee]|[Ii][Mm][Aa][Gg][Ee])'
 * Morebits.namespaceRegex([6])
 * @param {number[]} namespaces - Array of namespace numbers.  Unused/invalid
 * namespace numbers are silently discarded.
 * @returns {string} - Regex-suitable string of all namespace aliases.
 */
Morebits.namespaceRegex = (namespaces) => {
	const namespaceList = ([] as number[]).concat(namespaces);
	const aliases: string[] = [];
	let regex: string;
	for (const [name, number] of Object.entries(mw.config.get('wgNamespaceIds'))) {
		if (namespaceList.includes(number)) {
			// Namespaces are completely agnostic as to case,
			// and a regex string is more useful/compatible than a RegExp object,
			// so we accept any casing for any letter.
			aliases[aliases.length] = [...name].map((char) => Morebits.pageNameRegex(char)).join('');
		}
	}
	switch (aliases.length) {
		case 0:
			regex = '';
			break;

		case 1:
			regex = aliases[0] ?? '';
			break;

		default:
			regex = `(?:${aliases.join('|')})`;
			break;
	}
	return regex;
};

/* **************** Morebits.quickForm **************** */
interface MorebitsNamespace {
	/** Creation of simple and standard forms without much specific coding. */
	quickForm: typeof QuickForm;
}

declare global {
	interface HTMLFormElement {
		names: Record<string, HTMLInputElement>;
		getChecked: (name: string, type?: string) => string[];
		getUnchecked: (name: string, type?: string) => string[];
	}
	interface HTMLInputElement {
		values?: string;
		subgroup?: HTMLElement;
		shown?: boolean;
		sublist?: QuickFormData;
		area?: HTMLElement;
		counter?: number;
		listnode?: HTMLElement;
		inputnode?: HTMLElement;
		morebutton?: HTMLElement;
	}
	interface HTMLOptionElement {
		values?: string;
	}
	interface HTMLElement {
		extra?: unknown;
		/** Used by morebits.quickForm on generated elements (mirrors the native `disabled` of concrete element types). */
		disabled?: boolean;
		/** Used by morebits.quickForm to carry the `value` of generated inputs/options. */
		values?: string;
	}
}

/**
 * Object representing a quickform element. Should specify one of the available
 * types from the index on {@link QuickFormElement}, as well as any relevant and
 * available attributes.
 */
interface QuickFormData {
	/** The type of the quickform element, e.g. `form`, `input`, `checkbox`, `select`, ... */
	type: string;
	/** Global attribute: id */
	id?: string | undefined;
	/** Global attribute: className */
	className?: string | undefined;
	/** Global attribute: style */
	style?: string | undefined;
	/** Global attribute: tooltip */
	tooltip?: string | undefined;
	/** Global attribute: extra */
	extra?: unknown;
	/** Global attribute: $data */
	$data?: Record<string, unknown> | undefined;
	/** Global attribute: adminonly */
	adminonly?: boolean | undefined;
	/** Function to execute on the relevant event. */
	event?: ((event: Event) => unknown) | undefined;
	/** Type of the event (for `form` elements). */
	eventType?: string | undefined;
	/** Name of the element. */
	name?: string | undefined;
	/**
	 * Label of the element. `div`, `select`, `field`, `checkbox`/`radio`, `input`,
	 * `textarea`, `header`, and `dyninput` can accept an array of items, and the
	 * label item(s) can be `Element`s; `option`, `optgroup`, `_dyninput_element`,
	 * `submit`, and `button` accept only a single string.
	 */
	label?: string | (string | Node)[] | undefined;
	/** Value of the element. */
	value?: string | undefined;
	/** List of child items (for `select`, `optgroup`, `checkbox`, `radio`, `number`). */
	list?: QuickFormData[] | string | undefined;
	/** Whether the `select` is a multiple select. */
	multiple?: boolean | undefined;
	/** Size attribute of the element. */
	size?: number | undefined;
	/** Whether the element is disabled. */
	disabled?: boolean | undefined;
	/** Whether the `option` is selected. */
	selected?: boolean | undefined;
	/** Whether the element is hidden. */
	hidden?: boolean | undefined;
	/** Whether the `checkbox`/`radio` (or its list item) is checked. */
	checked?: boolean | undefined;
	/** Subgroup(s) of a `checkbox`/`radio` item. */
	subgroup?: QuickFormData | QuickFormData[] | undefined;
	/** Whether to add shift-click support for `checkbox` lists. */
	shiftClickSupport?: boolean | undefined;
	/** Placeholder attribute. */
	placeholder?: string | undefined;
	/** Maxlength attribute. */
	maxlength?: number | undefined;
	/** Whether the element is required. */
	required?: boolean | undefined;
	/** Whether the element is readonly. */
	readonly?: boolean | undefined;
	/** Min attribute (for `number` and `dyninput`). */
	min?: number | undefined;
	/** Max attribute (for `number` and `dyninput`). */
	max?: number | undefined;
	/** Step attribute (for `number`). */
	step?: number | undefined;
	/** Sublabel of the `dyninput` rows. */
	sublabel?: string | undefined;
	/** Cols attribute of a `textarea`. */
	cols?: number | undefined;
	/** Rows attribute of a `textarea`. */
	rows?: number | undefined;
	// dyninput internals (`_dyninput_element`):
	/** @internal Whether the dyninput row has a "remove" button. */
	remove?: boolean | undefined;
	/** @internal The "add" button of the dyninput group. */
	morebutton?: HTMLElement | undefined;
	/** @internal The container of the dyninput rows. */
	listnode?: HTMLElement | undefined;
}

/** A form control (or list of controls) retrieved by name from a form. */
type FormControlOrList = HTMLInputElement | HTMLSelectElement | RadioNodeList;

/**
 * The "add" button of a `dyninput` group, carrying bookkeeping state.
 *
 * (`max` is omitted and re-declared since `HTMLInputElement.max` is a string
 * attribute reflection, while dyninput stores a numeric limit here.)
 */
type DyninputMoreButton = Omit<HTMLInputElement, 'max'> & {
	max: number;
	counter: number;
	sublist: QuickFormData;
	area: HTMLElement;
};

/** The "remove" button of a `dyninput` row element. */
type DyninputRemoveButton = HTMLInputElement & {
	inputnode: HTMLElement;
	listnode: HTMLElement;
	morebutton: DyninputMoreButton;
};

/**
 * Create a new element for the the form.
 *
 * Index to Morebits.quickForm.element types:
 * - Global attributes: id, className, style, tooltip, extra, $data, adminonly
 * - `select`: A combo box (aka drop-down).
 *     - Attributes: name, label, multiple, size, list, event, disabled
 *  - `option`: An element for a combo box.
 *      - Attributes: value, label, selected, disabled
 *  - `optgroup`: A group of "option"s.
 *      - Attributes: label, list
 *  - `field`: A fieldset (aka group box).
 *      - Attributes: name, label, disabled
 *  - `checkbox`: A checkbox. Must use "list" parameter.
 *      - Attributes: name, list, event
 *      - Attributes (within list): name, label, value, checked, disabled, event, subgroup
 *  - `radio`: A radio button. Must use "list" parameter.
 *      - Attributes: name, list, event
 *      - Attributes (within list): name, label, value, checked, disabled, event, subgroup
 *  - `input`: A text input box.
 *      - Attributes: name, label, value, size, placeholder, maxlength, disabled, required, readonly, event
 *  - `number`: A number input box.
 *      - Attributes: Everything the text `input` has, as well as: min, max, step, list
 *  - `dyninput`: A set of text boxes with "Remove" buttons and an "Add" button.
 *      - Attributes: name, label, min, max, sublabel, value, size, maxlength, event
 *  - `hidden`: An invisible form field.
 *      - Attributes: name, value
 *  - `header`: A level 5 header.
 *      - Attributes: label
 *  - `div`: A generic placeholder element or label.
 *      - Attributes: name, label
 *  - `submit`: A submit button. Morebits.simpleWindow moves these to the footer of the dialog.
 *      - Attributes: name, label, disabled
 *  - `button`: A generic button.
 *      - Attributes: name, label, disabled, event
 *  - `textarea`: A big, multi-line text box.
 *      - Attributes: name, label, value, cols, rows, disabled, required, readonly
 *  - `fragment`: A DocumentFragment object.
 *      - No attributes, and no global attributes except adminonly.
 * There is some difference on how types handle the `label` attribute:
 * - `div`, `select`, `field`, `checkbox`/`radio`, `input`, `textarea`, `header`, and `dyninput` can accept an array of items,
 * and the label item(s) can be `Element`s.
 * - `option`, `optgroup`, `_dyninput_element`, `submit`, and `button` accept only a single string.
 *
 * @class
 * @param {QuickFormData} data - Object representing the quickform element. Should
 * specify one of the available types from the index above, as well as any
 * relevant and available attributes.
 * @example new Morebits.quickForm.element({
 *     name: 'target',
 *     type: 'input',
 *     label: 'Your target:',
 *     tooltip: 'Enter your target. Required.',
 *     required: true
 * });
 */
class QuickFormElement {
	data: QuickFormData;
	childs: QuickFormElement[];
	/**
	 * @memberof Morebits.quickForm.element
	 * @type {number}
	 */
	static id = 0;

	constructor(data: QuickFormData) {
		this.data = data;
		this.childs = [];
	}

	/**
	 * Appends an element to current element.
	 *
	 * @param {QuickFormData | QuickFormElement} data - A quickForm element or the object required to
	 * create the quickForm element.
	 * @returns {QuickFormElement} The same element passed in.
	 */
	append(data: QuickFormData | QuickFormElement): QuickFormElement {
		let child: QuickFormElement;
		if (data instanceof QuickFormElement) {
			child = data;
		} else {
			child = new QuickFormElement(data);
		}
		this.childs[this.childs.length] = child;
		return child;
	}

	/**
	 * Renders the HTML output for the quickForm element.  This should be called
	 * without parameters: `form.render()`.
	 *
	 * @param {number | string} internalSubgroupId
	 * @returns {HTMLElement}
	 */
	render(internalSubgroupId?: number | string): HTMLElement {
		const currentNode = this.compute(this.data, internalSubgroupId);
		for (const child of this.childs) {
			// do not pass internal_subgroup_id to recursive calls
			currentNode[1].appendChild(child.render());
		}
		return currentNode[0] as HTMLElement;
	}

	/**
	 * @param {QuickFormData} data
	 * @param {number | string} inId
	 * @returns {[Node, Node]}
	 */
	compute(data: QuickFormData, inId?: number | string): [Node, Node] {
		let node: HTMLElement;
		let childContainer: HTMLElement | null = null;
		let label: HTMLElement | undefined;
		const id = `${inId ? `${inId}_` : ''}node_${QuickFormElement.id++}`;
		if (data.adminonly && !Morebits.userIsSysop) {
			// hell hack alpha
			data.type = 'hidden';
		}
		let i: number;
		let current: QuickFormData;
		let subnode: HTMLInputElement | HTMLTextAreaElement | [Node, Node];
		switch (data.type) {
			case 'form':
				node = document.createElement('form');
				node.className = 'quickform';
				node.setAttribute('action', 'javascript:void(0);');
				if (data.event) {
					node.addEventListener(data.eventType || 'submit', data.event, false);
				}
				break;
			case 'fragment': {
				const fragmentNode = document.createDocumentFragment();
				// fragments can't have any attributes, so just return it straight away
				return [fragmentNode, fragmentNode];
			}
			case 'select': {
				node = document.createElement('div');
				node.setAttribute('id', `div_${id}`);
				if (data.label) {
					label = node.appendChild(document.createElement('label'));
					label.setAttribute('for', id);
					label.appendChild(Morebits.createHtml(data.label));
					// No margin
				}

				const select = node.appendChild(document.createElement('select'));
				if (data.event) {
					select.addEventListener('change', data.event, false);
				}
				if (data.multiple) {
					select.setAttribute('multiple', 'multiple');
				}
				if (data.size) {
					select.setAttribute('size', String(data.size));
				}
				if (data.disabled) {
					select.disabled = true;
				}
				select.setAttribute('name', data.name as string);
				if (data.list) {
					const list = data.list as QuickFormData[];
					for (i = 0; i < list.length; ++i) {
						current = list[i] as QuickFormData;
						if (current.list) {
							current.type = 'optgroup';
						} else {
							current.type = 'option';
						}
						subnode = this.compute(current);
						select.appendChild(subnode[0]);
					}
				}
				childContainer = select;
				break;
			}
			case 'option':
				node = document.createElement('option');
				node.values = data.value as string;
				node.setAttribute('value', data.value as string);
				if (data.selected) {
					node.setAttribute('selected', 'selected');
				}
				if (data.disabled) {
					node.disabled = true;
				}
				// Add hidden attr
				if (data.hidden) {
					node.setAttribute('hidden', '');
				}
				node.setAttribute('label', data.label as string);
				node.appendChild(document.createTextNode(data.label as string));
				break;
			case 'optgroup':
				node = document.createElement('optgroup');
				node.setAttribute('label', data.label as string);
				if (data.list) {
					const list = data.list as QuickFormData[];
					for (i = 0; i < list.length; ++i) {
						current = list[i] as QuickFormData;
						current.type = 'option'; // must be options here
						subnode = this.compute(current);
						node.appendChild(subnode[0]);
					}
				}
				break;
			case 'field':
				node = document.createElement('fieldset');
				label = node.appendChild(document.createElement('legend'));
				label.appendChild(Morebits.createHtml(data.label));
				if (data.name) {
					node.setAttribute('name', data.name);
				}
				if (data.disabled) {
					node.disabled = true;
				}
				break;
			case 'checkbox':
			case 'radio':
				node = document.createElement('div');
				if (data.list) {
					const list = data.list as QuickFormData[];
					for (i = 0; i < list.length; ++i) {
						const curId = `${id}_${i}`;
						current = list[i] as QuickFormData;
						let curDiv: HTMLElement;
						if (current.type === 'header') {
							// inline hack
							curDiv = node.appendChild(document.createElement('h6'));
							curDiv.appendChild(document.createTextNode(current.label as string));
							if (current.tooltip) {
								QuickFormElement.generateTooltip(curDiv, current);
							}
							continue;
						}
						curDiv = node.appendChild(document.createElement('div'));
						// Add hidden attr
						if (current.hidden) {
							curDiv.setAttribute('hidden', '');
						}
						subnode = curDiv.appendChild(document.createElement('input'));
						subnode.values = current.value as string;
						subnode.setAttribute('value', current.value as string);
						subnode.setAttribute('type', data.type);
						subnode.setAttribute('id', curId);
						subnode.setAttribute('name', (current.name || data.name) as string);
						// If name is provided on the individual checkbox, add a data-single
						// attribute which indicates it isn't part of a list of checkboxes with
						// same name. Used in getInputData()
						if (current.name) {
							subnode.setAttribute('data-single', 'data-single');
						}
						if (current.checked) {
							subnode.checked = true;
						}
						if (current.disabled) {
							subnode.disabled = true;
						}
						label = curDiv.appendChild(document.createElement('label'));
						label.appendChild(Morebits.createHtml(current.label));
						label.setAttribute('for', curId);
						if (current.tooltip) {
							QuickFormElement.generateTooltip(label, current);
						}
						// styles go on the label, doesn't make sense to style a checkbox/radio
						if (current.style) {
							label.setAttribute('style', current.style);
						}
						let event: ((e: Event) => void) | undefined;
						if (current.subgroup) {
							let tmpgroup: QuickFormData | QuickFormData[] = current.subgroup;
							tmpgroup = ([] as QuickFormData[]).concat(tmpgroup);
							const subgroupRaw = new QuickFormElement({
								type: 'div',
								id: `${id}_${i}_subgroup`,
							});
							for (const el of tmpgroup) {
								const newEl: QuickFormData = {
									...el,
								};
								newEl.type ||= data.type;
								newEl.name = `${current.name || data.name}.${newEl.name}`;
								subgroupRaw.append(newEl);
							}
							const subgroup = subgroupRaw.render(curId);
							subgroup.className = 'quickformSubgroup';
							subnode.subgroup = subgroup;
							subnode.shown = false;
							event = (e: Event): void => {
								const target = e.target as HTMLInputElement;
								if (target.checked) {
									target.parentNode?.appendChild(target.subgroup as HTMLElement);
									if (target.type === 'radio') {
										const {name} = target;
										const form = target.form as HTMLFormElement;
										const previous = form.names[name];
										if (previous !== undefined) {
											previous.parentNode?.removeChild(previous.subgroup as HTMLElement);
										}
										form.names[name] = target;
									}
								} else {
									target.parentNode?.removeChild(target.subgroup as HTMLElement);
								}
							};
							subnode.addEventListener('change', event, true);
							if (current.checked) {
								subnode.parentNode?.appendChild(subgroup);
							}
						} else if (data.type === 'radio') {
							event = (e: Event): void => {
								const target = e.target as HTMLInputElement;
								if (target.checked) {
									const {name} = target;
									const form = target.form as HTMLFormElement;
									const previous = form.names[name];
									if (previous !== undefined) {
										previous.parentNode?.removeChild(previous.subgroup as HTMLElement);
									}
									delete form.names[name];
								}
							};
							subnode.addEventListener('change', event, true);
						}
						// add users' event last, so it can interact with the subgroup
						if (data.event) {
							subnode.addEventListener('change', data.event, false);
						} else if (current.event) {
							subnode.addEventListener('change', current.event, true);
						}
					}
				}
				if (data.shiftClickSupport && data.type === 'checkbox') {
					Morebits.checkboxShiftClickSupport(QuickForm.getElements(node, data.name as string));
				}
				break;

			// input is actually a text-type, so number here inherits the same stuff
			case 'number':
			case 'input':
				node = document.createElement('div');
				node.setAttribute('id', `div_${id}`);
				// Add hidden attr
				if (data.hidden) {
					node.setAttribute('hidden', '');
				}
				if (data.label) {
					label = node.appendChild(document.createElement('label'));
					label.appendChild(Morebits.createHtml(data.label));
					label.setAttribute('for', data.id || id);
					// No margin
				}

				subnode = node.appendChild(document.createElement('input'));
				// Add value and placeholder attrs
				if (data.value) {
					subnode.setAttribute('value', data.value);
				}
				if (data.placeholder) {
					subnode.setAttribute('placeholder', data.placeholder);
				}
				subnode.setAttribute('name', data.name as string);
				if (data.type === 'input') {
					subnode.setAttribute('type', 'text');
				} else {
					subnode.setAttribute('type', 'number');
					for (const att of ['min', 'max', 'step', 'list'] as const) {
						if (data[att]) {
							subnode.setAttribute(att, String(data[att]));
						}
					}
				}
				for (const att of ['value', 'size', 'placeholder', 'maxlength'] as const) {
					if (data[att]) {
						subnode.setAttribute(att, String(data[att]));
					}
				}
				for (const att of ['disabled', 'required', 'readonly'] as const) {
					if (data[att]) {
						subnode.setAttribute(att, att);
					}
				}
				if (data.event) {
					subnode.addEventListener('keyup', data.event, false);
				}
				childContainer = subnode;
				break;
			case 'dyninput': {
				const min = data.min || 1;
				const max = data.max || Number.POSITIVE_INFINITY;
				node = document.createElement('div');
				label = node.appendChild(document.createElement('h5'));
				label.appendChild(Morebits.createHtml(data.label));
				const listNode = node.appendChild(document.createElement('div'));
				const more = this.compute({
					type: 'button',
					label: '更多',
					disabled: min >= max,
					event: (e: Event): void => {
						const target = e.target as DyninputMoreButton;
						const newNode = new QuickFormElement(target.sublist);
						target.area.appendChild(newNode.render());
						if (++target.counter >= target.max) {
							target.disabled = true;
						}
						e.stopPropagation();
					},
				});
				node.appendChild(more[0]);
				const moreButton = more[1] as DyninputMoreButton;
				const sublist: QuickFormData = {
					type: '_dyninput_element',
					label: data.sublabel || data.label,
					name: data.name,
					value: data.value,
					size: data.size,
					remove: false,
					maxlength: data.maxlength,
					event: data.event,
				};
				for (i = 0; i < min; ++i) {
					const elem = new QuickFormElement(sublist);
					listNode.appendChild(elem.render());
				}
				sublist.remove = true;
				sublist.morebutton = moreButton;
				sublist.listnode = listNode;
				moreButton.sublist = sublist;
				moreButton.area = listNode;
				moreButton.max = max - min;
				moreButton.counter = 0;
				break;
			}
			case '_dyninput_element':
				// Private, similar to normal input
				node = document.createElement('div');
				if (data.label) {
					label = node.appendChild(document.createElement('label'));
					label.appendChild(document.createTextNode(data.label as string));
					label.setAttribute('for', id);
					// No margin
				}

				subnode = node.appendChild(document.createElement('input'));
				if (data.value) {
					subnode.setAttribute('value', data.value);
				}
				subnode.setAttribute('name', data.name as string);
				subnode.setAttribute('type', 'text');
				if (data.size) {
					subnode.setAttribute('size', String(data.size));
				}
				if (data.maxlength) {
					subnode.setAttribute('maxlength', String(data.maxlength));
				}
				if (data.event) {
					subnode.addEventListener('keyup', data.event, false);
				}
				if (data.remove) {
					const remove = this.compute({
						type: 'button',
						label: '移除',
						event: (e: Event): void => {
							const target = e.target as DyninputRemoveButton;
							const list = target.listnode;
							const node_ = target.inputnode;
							const more = target.morebutton;
							list.removeChild(node_);
							--more.counter;
							more.removeAttribute('disabled');
							e.stopPropagation();
						},
					});
					node.appendChild(remove[0]);
					const removeButton = remove[1] as DyninputRemoveButton;
					removeButton.inputnode = node;
					removeButton.listnode = data.listnode as HTMLElement;
					removeButton.morebutton = data.morebutton as DyninputMoreButton;
				}
				break;
			case 'hidden':
				node = document.createElement('input');
				node.setAttribute('type', 'hidden');
				node.values = data.value as string;
				node.setAttribute('value', data.value as string);
				node.setAttribute('name', data.name as string);
				break;
			case 'header':
				node = document.createElement('h5');
				node.appendChild(Morebits.createHtml(data.label));
				break;
			case 'div':
				node = document.createElement('div');
				if (data.name) {
					node.setAttribute('name', data.name);
				}
				if (data.label) {
					const result = document.createElement('span');
					result.className = 'quickformDescription';
					result.appendChild(Morebits.createHtml(data.label));
					node.appendChild(result);
				}
				break;
			case 'submit':
				node = document.createElement('span');
				childContainer = node.appendChild(document.createElement('input'));
				childContainer.setAttribute('type', 'submit');
				if (data.label) {
					childContainer.setAttribute('value', data.label as string);
				}
				childContainer.setAttribute('name', data.name || 'submit');
				if (data.disabled) {
					childContainer.disabled = true;
				}
				break;
			case 'button':
				node = document.createElement('span');
				childContainer = node.appendChild(document.createElement('input'));
				childContainer.setAttribute('type', 'button');
				if (data.label) {
					childContainer.setAttribute('value', data.label as string);
				}
				childContainer.setAttribute('name', data.name as string);
				if (data.disabled) {
					childContainer.disabled = true;
				}
				if (data.event) {
					childContainer.addEventListener('click', data.event, false);
				}
				break;
			case 'textarea':
				node = document.createElement('div');
				node.setAttribute('id', `div_${id}`);
				// Add hidden attr
				if (data.hidden) {
					node.setAttribute('hidden', '');
				}
				if (data.label) {
					label = node.appendChild(document.createElement('h5'));
					const labelElement = document.createElement('label');
					labelElement.appendChild(Morebits.createHtml(data.label));
					labelElement.setAttribute('for', data.id || id);
					label.appendChild(labelElement);
				}
				subnode = node.appendChild(document.createElement('textarea'));
				subnode.setAttribute('name', data.name as string);
				if (data.cols) {
					subnode.setAttribute('cols', String(data.cols));
				}
				if (data.rows) {
					subnode.setAttribute('rows', String(data.rows));
				}
				if (data.disabled) {
					subnode.disabled = true;
				}
				if (data.required) {
					subnode.setAttribute('required', 'required');
				}
				if (data.readonly) {
					subnode.setAttribute('readonly', 'readonly');
				}
				if (data.value) {
					subnode.value = data.value;
				}
				// Add placeholder attr
				if (data.placeholder) {
					subnode.placeholder = data.placeholder;
				}
				childContainer = subnode;
				break;
			default:
				throw new Error(`Morebits.quickForm: unknown element type ${data.type.toString()}`);
		}
		childContainer ||= node;
		if (data.tooltip) {
			QuickFormElement.generateTooltip(label || node, data);
		}
		if (data.extra) {
			childContainer.extra = data.extra;
		}
		if (data.$data) {
			$(childContainer).data(data.$data);
		}
		if (data.style) {
			childContainer.setAttribute('style', data.style);
		}
		if (data.className) {
			childContainer.className = childContainer.className
				? `${childContainer.className} ${data.className}`
				: data.className;
		}
		childContainer.setAttribute('id', data.id || id);
		return [node, childContainer];
	}

	/**
	 * Create a tooltip, implemented in plain jQuery (formerly jQuery UI tooltip).
	 *
	 * @param {HTMLElement} node - The HTML element beside which a tooltip is to be generated.
	 * @param {QuickFormData} data - Tooltip-related configuration data.
	 */
	static generateTooltip = (node: HTMLElement, data: QuickFormData): void => {
		const tooltipText = data.tooltip;
		if (!tooltipText) {
			return;
		}
		const tooltipButton = node.appendChild(document.createElement('span'));
		tooltipButton.className = 'morebits-tooltipButton';
		tooltipButton.setAttribute('aria-label', tooltipText);
		tooltipButton.appendChild(document.createTextNode('?'));
		let timer = 0;
		let tooltip: HTMLElement | null = null;
		const removeTooltip = (): void => {
			window.clearTimeout(timer);
			if (tooltip) {
				tooltip.remove();
				tooltip = null;
			}
		};
		const showTooltip = (): void => {
			removeTooltip();
			const element = document.createElement('div');
			element.className = 'morebits-ui-tooltip';
			element.textContent = tooltipText;
			document.body.appendChild(element);
			const buttonRect = tooltipButton.getBoundingClientRect();
			const tooltipRect = element.getBoundingClientRect();
			let top = buttonRect.bottom + 4;
			if (top + tooltipRect.height > window.innerHeight - 5) {
				// flip above the button if it would overflow the viewport
				top = Math.max(5, buttonRect.top - tooltipRect.height - 4);
			}
			const left = Math.min(
				Math.max(5, buttonRect.left + buttonRect.width / 2),
				window.innerWidth - tooltipRect.width - 5
			);
			element.style.left = `${left}px`;
			element.style.top = `${top}px`;
			tooltip = element;
		};
		$(tooltipButton).on({
			mouseenter: () => {
				timer = window.setTimeout(showTooltip, 400);
			},
			mouseleave: removeTooltip,
			click: removeTooltip,
		});
	};
}

/**
 * Creation of simple and standard forms without much specific coding.
 *
 * @class
 * @param {event} event - Function to execute when form is submitted.
 * @param {string} [eventType=submit] - Type of the event.
 */
class QuickForm {
	root: QuickFormElement;

	constructor(event: (event: Event) => unknown, eventType?: string) {
		this.root = new QuickFormElement({
			type: 'form',
			event,
			eventType,
		});
	}

	/**
	 * Renders the HTML output of the quickForm.
	 *
	 * @returns {HTMLElement}
	 */
	render(): HTMLElement {
		const ret = this.root.render() as HTMLFormElement;
		ret.names = {};
		return ret;
	}

	/**
	 * Append element to the form.
	 *
	 * @param {(QuickFormData | QuickFormElement)} data - A quickform element, or the object with which
	 * a quickform element is constructed.
	 * @returns {QuickFormElement} - Same as what is passed to the function.
	 */
	append(data: QuickFormData | QuickFormElement): QuickFormElement {
		return this.root.append(data);
	}

	static element = QuickFormElement;

	// Some utility methods for manipulating quickForms after their creation:
	// (None of these work for "dyninput" type fields at present)
	/**
	 * Returns an object containing all filled form data entered by the user, with the object
	 * keys being the form element names. Disabled fields will be ignored, but not hidden fields.
	 *
	 * @param {HTMLFormElement} form
	 * @returns {Record<string, string | boolean | string[]>} With field names as keys, input data as values.
	 */
	static getInputData = (form: HTMLFormElement): Record<string, string | boolean | string[]> => {
		const result: Record<string, string | boolean | string[]> = {};
		for (const field of Array.from(form.elements) as HTMLInputElement[]) {
			if (field.disabled || !field.name || !field.type || field.type === 'submit' || field.type === 'button') {
				continue;
			}
			// For elements in subgroups, quickform prepends element names with
			// name of the parent group followed by a period, get rid of that.
			const fieldNameNorm = field.name.slice(field.name.indexOf('.') + 1);
			switch (field.type) {
				case 'radio':
					if (field.checked) {
						result[fieldNameNorm] = field.value;
					}
					break;
				case 'checkbox':
					if (field.dataset['single']) {
						result[fieldNameNorm] = field.checked; // boolean
					} else {
						result[fieldNameNorm] ||= [];
						if (field.checked) {
							const group = result[fieldNameNorm] as string[];
							group[group.length] = field.value;
						}
					}
					break;
				case 'select-multiple':
					result[fieldNameNorm] = $(field).val() as string | string[];
					// field.value doesn't work
					break;
				case 'text': // falls through
				case 'textarea':
					result[fieldNameNorm] = field.value.trim();
					break;
				default:
					// could be select-one, date, number, email, etc
					if (field.value) {
						result[fieldNameNorm] = field.value;
					}
					break;
			}
		}
		return result;
	};

	/**
	 * Returns all form elements with a given field name or ID.
	 *
	 * @param {HTMLElement} form
	 * @param {string} fieldName - The name or id of the fields.
	 * @returns {HTMLElement[]} - Array of matching form elements.
	 */
	static getElements = (form: HTMLElement, fieldName: string): HTMLElement[] => {
		const $form = $(form);
		fieldName = $.escapeSelector(fieldName); // sanitize input
		let $elements = $form.find(`[name="${fieldName}"]`);
		if ($elements.length > 0) {
			return $elements.toArray();
		}
		$elements = $form.find(`#${fieldName}`);
		return $elements.toArray();
	};

	/**
	 * Searches the array of elements for a checkbox or radio button with a certain
	 * `value` attribute, and returns the first such element. Returns null if not found.
	 *
	 * @param {HTMLInputElement[]} elementArray - Array of checkbox or radio elements.
	 * @param {string} value - Value to search for.
	 * @returns {HTMLInputElement | null}
	 */
	static getCheckboxOrRadio = (elementArray: HTMLInputElement[], value: string): HTMLInputElement | null => {
		const found = elementArray.filter((element) => {
			return element.value === value;
		});
		if (found.length > 0) {
			return found[0] as HTMLInputElement;
		}
		return null;
	};

	/**
	 * Returns the &lt;div> containing the form element, or the form element itself
	 * May not work as expected on checkboxes or radios.
	 *
	 * @param {HTMLElement} element
	 * @returns {HTMLElement}
	 */
	static getElementContainer = (element: HTMLElement): HTMLElement => {
		// for divs, headings and fieldsets, the container is the element itself
		if (
			element instanceof HTMLFieldSetElement ||
			element instanceof HTMLDivElement ||
			element instanceof HTMLHeadingElement
		) {
			return element;
		}
		// for others, just return the parent node
		return element.parentNode as HTMLElement;
	};

	/**
	 * Gets the HTML element that contains the label of the given form element
	 * (mainly for internal use).
	 *
	 * @param {(HTMLElement | QuickFormElement)} element
	 * @returns {HTMLElement | null}
	 */
	static getElementLabelObject = (element: HTMLElement | QuickFormElement): HTMLElement | null => {
		// for buttons, divs and headers, the label is on the element itself
		if (
			(element as HTMLInputElement).type === 'button' ||
			(element as HTMLInputElement).type === 'submit' ||
			element instanceof HTMLDivElement ||
			element instanceof HTMLHeadingElement
		) {
			return element as HTMLElement;
			// for fieldsets, the label is the child <legend> element
		} else if (element instanceof HTMLFieldSetElement) {
			return element.querySelector('legend');
			// for textareas, the label is the sibling <h5> element
		} else if (element instanceof HTMLTextAreaElement) {
			return (element.parentNode as HTMLElement).querySelector('h5');
		}
		// for others, the label is the sibling <label> element
		return ((element as HTMLElement).parentNode as HTMLElement).querySelector('label');
	};

	/**
	 * Gets the label text of the element.
	 *
	 * @param {(HTMLElement | QuickFormElement)} element
	 * @returns {string | null}
	 */
	static getElementLabel = (element: HTMLElement | QuickFormElement): string | null => {
		const labelElement = QuickForm.getElementLabelObject(element);
		if (!labelElement) {
			return null;
		}
		return (labelElement.firstChild as Node).textContent;
	};

	/**
	 * Sets the label of the element to the given text.
	 *
	 * @param {(HTMLElement | QuickFormElement)} element
	 * @param {string} labelText
	 * @returns {boolean} True if succeeded, false if the label element is unavailable.
	 */
	static setElementLabel = (element: HTMLElement | QuickFormElement, labelText: string): boolean => {
		const labelElement = QuickForm.getElementLabelObject(element);
		if (!labelElement) {
			return false;
		}
		(labelElement.firstChild as Node).textContent = labelText;
		return true;
	};

	/**
	 * Stores the element's current label, and temporarily sets the label to the given text.
	 *
	 * @param {(HTMLElement | QuickFormElement)} element
	 * @param {string} temporaryLabelText
	 * @returns {boolean} `true` if succeeded, `false` if the label element is unavailable.
	 */
	static overrideElementLabel = (element: HTMLElement | QuickFormElement, temporaryLabelText: string): boolean => {
		if (!(element as HTMLElement).hasAttribute('data-oldlabel')) {
			(element as HTMLElement).setAttribute('data-oldlabel', QuickForm.getElementLabel(element) as string);
		}
		return QuickForm.setElementLabel(element, temporaryLabelText);
	};

	/**
	 * Restores the label stored by overrideElementLabel.
	 *
	 * @param {(HTMLElement | QuickFormElement)} element
	 * @returns {boolean | null} True if succeeded, false if the label element is unavailable.
	 */
	static resetElementLabel = (element: HTMLElement | QuickFormElement): boolean | null => {
		if ((element as HTMLElement).hasAttribute('data-oldlabel')) {
			return QuickForm.setElementLabel(element, (element as HTMLElement).getAttribute('data-oldlabel') as string);
		}
		return null;
	};

	/**
	 * Shows or hides a form element plus its label and tooltip.
	 *
	 * @param {(HTMLElement | JQuery | string)} element - HTML/jQuery element, or jQuery selector string.
	 * @param {boolean} [visibility] - Skip this to toggle visibility.
	 */
	static setElementVisibility = (element: HTMLElement | JQuery<HTMLElement> | string, visibility?: boolean): void => {
		$(element as HTMLElement).toggle(visibility);
	};

	/**
	 * Shows or hides the question mark icon (which displays the tooltip) next to a form element.
	 *
	 * @param {(HTMLElement | JQuery)} element
	 * @param {boolean} [visibility] - Skip this to toggle visibility.
	 */
	static setElementTooltipVisibility = (element: HTMLElement | JQuery<HTMLElement>, visibility?: boolean): void => {
		$(QuickForm.getElementContainer(element as HTMLElement))
			.find('.morebits-tooltipButton')
			.toggle(visibility);
	};
}

Morebits.quickForm = QuickForm;

/**
 * @external HTMLFormElement
 */
/**
 * Get checked items in the form.
 *
 * @function external:HTMLFormElement.getChecked
 * @param {string} name - Find checked property of elements (i.e. a checkbox
 * or a radiobutton) with the given name, or select options that have selected
 * set to true (don't try to mix selects with radio/checkboxes).
 * @param {string} [type] - Optionally specify either radio or checkbox (for
 * the event that both checkboxes and radiobuttons have the same name).
 * @returns {string[]} - Contains the values of elements with the given name
 * checked property set to true.
 */
HTMLFormElement.prototype.getChecked = function (this: HTMLFormElement, name: string, type?: string): string[] {
	const elements = (this.elements as unknown as Record<string, FormControlOrList>)[name];
	if (!elements) {
		return [];
	}
	const returnArray: string[] = [];
	let i: number;
	if (elements instanceof HTMLSelectElement) {
		const {options} = elements;
		for (i = 0; i < options.length; ++i) {
			const option = options[i] as HTMLOptionElement;
			if (option.selected) {
				if (option.values) {
					returnArray[returnArray.length] = option.values;
				} else {
					returnArray[returnArray.length] = option.value;
				}
			}
		}
	} else if (elements instanceof HTMLInputElement) {
		if (type && elements.type !== type) {
			return [];
		} else if (elements.checked) {
			return [elements.value];
		}
	} else {
		for (i = 0; i < elements.length; ++i) {
			const element = elements[i] as HTMLInputElement;
			if (element.checked) {
				if (type && element.type !== type) {
					continue;
				}
				if (element.values) {
					returnArray[returnArray.length] = element.values;
				} else {
					returnArray[returnArray.length] = element.value;
				}
			}
		}
	}
	return returnArray;
};

/**
 * Does the same as {@link HTMLFormElement.getChecked|getChecked}, but with unchecked elements.
 *
 * @function external:HTMLFormElement.getUnchecked
 * @param {string} name - Find checked property of elements (i.e. a checkbox
 * or a radiobutton) with the given name, or select options that have selected
 * set to true (don't try to mix selects with radio/checkboxes).
 * @param {string} [type] - Optionally specify either radio or checkbox (for
 * the event that both checkboxes and radiobuttons have the same name).
 * @returns {string[]} - Contains the values of elements with the given name
 * checked property set to true.
 */
HTMLFormElement.prototype.getUnchecked = function (this: HTMLFormElement, name: string, type?: string): string[] {
	const elements = (this.elements as unknown as Record<string, FormControlOrList>)[name];
	if (!elements) {
		return [];
	}
	const returnArray: string[] = [];
	let i: number;
	if (elements instanceof HTMLSelectElement) {
		const {options} = elements;
		for (i = 0; i < options.length; ++i) {
			const option = options[i] as HTMLOptionElement;
			if (!option.selected) {
				if (option.values) {
					returnArray[returnArray.length] = option.values;
				} else {
					returnArray[returnArray.length] = option.value;
				}
			}
		}
	} else if (elements instanceof HTMLInputElement) {
		if (type && elements.type !== type) {
			return [];
		} else if (!elements.checked) {
			return [elements.value];
		}
	} else {
		for (i = 0; i < elements.length; ++i) {
			const element = elements[i] as HTMLInputElement;
			if (!element.checked) {
				if (type && element.type !== type) {
					continue;
				}
				if (element.values) {
					returnArray[returnArray.length] = element.values;
				} else {
					returnArray[returnArray.length] = element.value;
				}
			}
		}
	}
	return returnArray;
};

interface MorebitsNamespace {
	ip: typeof ip;
	string: typeof string;
	array: typeof array;
	unbinder: typeof Unbinder;
	date: typeof MorebitsDate;
}
/**
 * Utilities to help process IP addresses.
 *
 * @namespace Morebits.ip
 * @memberof Morebits
 */
const ip = {
	/**
	 * Converts an IPv6 address to the canonical form stored and used by MediaWiki.
	 * JavaScript translation of the {@link https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/core/+/8eb6ac3e84ea3312d391ca96c12c49e3ad0753bb/includes/utils/IP.php#131|`IP::sanitizeIP()`}
	 * function from the IPUtils library.  Addresses are verbose, uppercase,
	 * normalized, and expanded to 8 words.
	 *
	 * @param {string} address - The IPv6 address, with or without CIDR.
	 * @returns {string | null}
	 */
	sanitizeIPv6: (address: string): string | null => {
		address = address.trim();
		if (address === '') {
			return null;
		}
		if (!mw.util.isIPv6Address(address, true)) {
			return address; // nothing else to do for IPv4 addresses or invalid ones
		}
		// Remove any whitespaces, convert to upper case
		address = address.toUpperCase();
		// Expand zero abbreviations
		const abbrevPos = address.indexOf('::');
		if (abbrevPos !== -1) {
			// We know this is valid IPv6. Find the last index of the
			// address before any CIDR number (e.g. "a:b:c::/24").
			const CIDRStart = address.indexOf('/');
			const addressEnd = CIDRStart === -1 ? address.length - 1 : CIDRStart - 1;
			// If the '::' is at the beginning...
			let repeat: string;
			let extra: string;
			let pad: number;
			if (abbrevPos === 0) {
				repeat = '0:';
				extra = address === '::' ? '0' : ''; // for the address '::'
				pad = 9; // 7+2 (due to '::')
				// If the '::' is at the end...
			} else if (abbrevPos === addressEnd - 1) {
				repeat = ':0';
				extra = '';
				pad = 9; // 7+2 (due to '::')
				// If the '::' is in the middle...
			} else {
				repeat = ':0';
				extra = ':';
				pad = 8; // 6+2 (due to '::')
			}

			let replacement = repeat;
			pad -= address.split(':').length - 1;
			for (let i = 1; i < pad; i++) {
				replacement += repeat;
			}
			replacement += extra;
			address = address.replace('::', replacement);
		}
		// Remove leading zeros from each bloc as needed
		return address.replace(/(^|:)0+([0-9A-Fa-f]{1,4})/g, '$1$2');
	},
	/**
	 * Determine if the given IP address is a range.  Just conjoins
	 * `mw.util.isIPAddress` with and without the `allowBlock` option.
	 *
	 * @param {string} ip
	 * @returns {boolean} - True if given a valid IP address range, false otherwise.
	 */
	isRange: (ip: string): boolean => {
		return mw.util.isIPAddress(ip, true) && !mw.util.isIPAddress(ip);
	},
	/**
	 * Check that an IP range is within the CIDR limits.  Most likely to be useful
	 * in conjunction with `wgRelevantUserName`.  CIDR limits are hardcoded as /16
	 * for IPv4 and /32 for IPv6.
	 *
	 * @param {string} ip
	 * @returns {boolean} - True for valid ranges within the CIDR limits,
	 * otherwise false (ranges outside the limit, single IPs, non-IPs).
	 */
	validCIDR: (ip: string): boolean => {
		if (Morebits.ip.isRange(ip)) {
			const match = ip.match(/\/(\d{1,3})$/) as [string, string];
			const subnet = Number.parseInt(match[1], 10);
			if (subnet) {
				// Should be redundant
				if (mw.util.isIPv6Address(ip, true)) {
					if (subnet >= 32) {
						return true;
					}
				} else if (subnet >= 16) {
					return true;
				}
			}
		}
		return false;
	},
	/**
	 * Get the /64 subnet for an IPv6 address.
	 *
	 * @param {string} ipv6 - The IPv6 address, with or without a subnet.
	 * @returns {boolean|string} - False if not IPv6 or bigger than a 64,
	 * otherwise the (sanitized) /64 address.
	 */
	get64: (ipv6: string): string | false => {
		if (!ipv6 || !mw.util.isIPv6Address(ipv6, true)) {
			return false;
		}
		const subnetMatch = ipv6.match(/\/(\d{1,3})$/) as [string, string] | null;
		if (subnetMatch && Number.parseInt(subnetMatch[1], 10) < 64) {
			return false;
		}
		ipv6 = Morebits.ip.sanitizeIPv6(ipv6) as string;
		const ipRegex = /^((?:[0-9A-F]{1,4}:){4})(?:[0-9A-F]{1,4}:){3}[0-9A-F]{1,4}(?:\/\d{1,3})?$/;
		return ipv6.replace(ipRegex, '$1'.concat('0:0:0:0/64'));
	},
};
Morebits.ip = ip;
/**
 * Helper functions to manipulate strings.
 *
 * @namespace Morebits.string
 * @memberof Morebits
 */
const string = {
	/**
	 * @param {string} str
	 * @returns {string}
	 */
	toUpperCaseFirstChar: (str: string): string => {
		str = str.toString();
		return str.slice(0, 1).toUpperCase() + str.slice(1);
	},
	/**
	 * @param {string} str
	 * @returns {string}
	 */
	toLowerCaseFirstChar: (str: string): string => {
		str = str.toString();
		return str.slice(0, 1).toLowerCase() + str.slice(1);
	},
	/**
	 * Gives an array of substrings of `str` - starting with `start` and
	 * ending with `end` - which is not in `skiplist`.  Intended for use
	 * on wikitext with templates or links.
	 *
	 * @param {string} str
	 * @param {string} start
	 * @param {string} end
	 * @param {(string[]|string)} [skiplist]
	 * @returns {string[]}
	 * @throws {Error} If the `start` and `end` strings aren't of the same length.
	 * @throws {TypeError} If `skiplist` isn't an array or string
	 */
	splitWeightedByKeys: (str: string, start: string, end: string, skiplist?: string[] | string): string[] => {
		if (start.length !== end.length) {
			throw new Error('start marker and end marker must be of the same length');
		}
		let level = 0;
		let initial: number | null = null;
		const result: string[] = [];
		if (!Array.isArray(skiplist)) {
			if (skiplist === undefined) {
				skiplist = [];
			} else if (typeof skiplist === 'string') {
				skiplist = [skiplist];
			} else {
				throw new TypeError('non-applicable skiplist parameter');
			}
		}
		for (let i = 0; i < str.length; ++i) {
			for (const element of skiplist) {
				if (str.slice(i, i + element.length) === element) {
					i += element.length - 1;
					continue;
				}
			}
			if (str.slice(i, i + start.length) === start) {
				if (initial === null) {
					initial = i;
				}
				++level;
				i += start.length - 1;
			} else if (str.slice(i, i + end.length) === end) {
				--level;
				i += end.length - 1;
			}
			if (!level && initial !== null) {
				result[result.length] = str.slice(initial, i + 1);
				initial = null;
			}
		}
		return result;
	},
	/**
	 * Formats freeform "reason" (from a textarea) for deletion/other
	 * templates that are going to be substituted, (e.g. PROD, XFD, RPP).
	 * Handles `|` outside a nowiki tag.
	 * Optionally, also adds a signature if not present already.
	 *
	 * @param {string} str
	 * @param {boolean} [addSig]
	 * @returns {string}
	 */
	formatReasonText: (str: string, addSig?: boolean): string => {
		let reason = (str || '').toString().trim();
		const unbinder = new Morebits.unbinder(reason);
		unbinder.unbind('<no'.concat('wiki', '>'), '</no'.concat('wiki', '>'));
		unbinder.content = unbinder.content.replace(/\|/g, '{{'.concat('subst:', '!}}'));
		reason = unbinder.rebind();
		if (addSig) {
			const sig = '~~'.concat('~~');
			const sigIndex = reason.lastIndexOf(sig);
			if (sigIndex === -1 || sigIndex !== reason.length - sig.length) {
				reason += ` ${sig}`;
			}
		}
		return reason.trim();
	},
	/**
	 * Formats a "reason" (from a textarea) for inclusion in a userspace
	 * log.  Replaces newlines with {{Pb}}, and adds an extra `#` before
	 * list items for proper formatting.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	formatReasonForLog: (str: string): string => {
		return (
			str
				// handle line breaks, which otherwise break numbering
				.replace(/\n+/g, '{{pb}}')
				// put an extra # in front before bulleted or numbered list items
				.replace(/^(#+)/gm, '#$1')
				.replace(/^(\*+)/gm, '#$1')
		);
	},
	/**
	 * Like `String.prototype.replace()`, but escapes any dollar signs in
	 * the replacement string.  Useful when the the replacement string is
	 * arbitrary, such as a username or freeform user input, and could
	 * contain dollar signs.
	 *
	 * @param {string} string - Text in which to replace.
	 * @param {(string|RegExp)} pattern
	 * @param {string} replacement
	 * @returns {string}
	 */
	safeReplace: (string: string, pattern: string | RegExp, replacement: string): string => {
		return string.replace(pattern, replacement.replace(/\$/g, '$$$$'));
	},
	/**
	 * Determine if the user-provided expiration will be considered an
	 * infinite-length by MW.
	 *
	 * @see {@link https://phabricator.wikimedia.org/T68646}
	 *
	 * @param {string} expiry
	 * @returns {boolean}
	 */
	isInfinity: (expiry: string): boolean => {
		return ['indefinite', 'infinity', 'infinite', 'never'].includes(expiry);
	},
	/**
	 * Escapes a string to be used in a RegExp, replacing spaces and
	 * underscores with `[_ ]` as they are often equivalent.
	 *
	 * @param {string} text - String to be escaped.
	 * @returns {string} - The escaped text.
	 */
	escapeRegExp: (text: string): string => {
		return mw.util.escapeRegExp(text).replace(/ |_/g, '[_ ]');
	},
	/**
	 * formatTime
	 *
	 * @param {*} time The string to foramt
	 * @returns {string}
	 */
	formatTime: (time: string): string => {
		let m: RegExpMatchArray | null;
		if ((m = time.match(/^\s*(\d+)\s*sec(ond)?s?\s*$/)) !== null) {
			return `${m[1]}秒`;
		}
		if ((m = time.match(/^\s*(\d+)\s*min(ute)?s?\s*$/)) !== null) {
			return `${m[1]}分`;
		}
		if ((m = time.match(/^\s*(\d+)\s*hours?\s*$/)) !== null) {
			return (m[1] as string) + uls('小时', '小時');
		}
		if ((m = time.match(/^\s*(\d+)\s*days?\s*$/)) !== null) {
			return `${m[1]}天`;
		}
		if ((m = time.match(/^\s*(\d+)\s*weeks?\s*$/)) !== null) {
			return (m[1] as string) + uls('周', '週');
		}
		if ((m = time.match(/^\s*(\d+)\s*months?\s*$/)) !== null) {
			return (m[1] as string) + uls('个月', '個月');
		}
		if ((m = time.match(/^\s*(\d+)\s*years?\s*$/)) !== null) {
			return `${m[1]}年`;
		}
		if (Morebits.string.isInfinity(time.trim())) {
			return uls('无限期', '無限期');
		}
		return time;
	},
	/**
	 * Append punctuation to a string when it's missing
	 *
	 * @param {string} str
	 * @param {string} punctuation
	 * @returns {string}
	 */
	appendPunctuation: (str: string, punctuation?: string): string => {
		if (punctuation === undefined) {
			punctuation = '。';
		}
		if (str.search(/[.?!;。？！；]$/) === -1) {
			str += punctuation;
		}
		return str;
	},
};
Morebits.string = string;
/**
 * Helper functions to manipulate arrays.
 *
 * @namespace Morebits.array
 * @memberof Morebits
 */
const array = {
	/**
	 * Remove duplicated items from an array.
	 *
	 * @param {Array} arr
	 * @returns {Array} A copy of the array with duplicates removed.
	 * @throws {Array} When provided a non-array.
	 */
	uniq: <T>(arr: T[]): T[] => {
		if (!Array.isArray(arr)) {
			throw new TypeError('A non-array object passed to Morebits.array.uniq');
		}
		return arr.filter((item, idx) => {
			return arr.indexOf(item) === idx;
		});
	},
	/**
	 * Remove non-duplicated items from an array.
	 *
	 * @param {Array} arr
	 * @returns {Array} A copy of the array with the first instance of each value
	 * removed; subsequent instances of those values (duplicates) remain.
	 * @throws {Array} When provided a non-array.
	 */
	dups: <T>(arr: T[]): T[] => {
		if (!Array.isArray(arr)) {
			throw new TypeError('A non-array object passed to Morebits.array.dups');
		}
		return arr.filter((item, idx) => {
			return arr.indexOf(item) !== idx;
		});
	},
	/**
	 * Break up an array into smaller arrays.
	 *
	 * @param {Array} arr
	 * @param {number} size - Size of each chunk (except the last, which could be different).
	 * @returns {Array[]} An array containing the smaller, chunked arrays.
	 * @throws {Array} When provided a non-array.
	 */
	chunk: <T>(arr: T[], size: number): T[][] => {
		if (!Array.isArray(arr)) {
			throw new TypeError('A non-array object passed to Morebits.array.chunk');
		}
		if (typeof size !== 'number' || size <= 0) {
			// pretty impossible to do anything :)
			return [arr]; // we return an array consisting of this array.
		}

		const numChunks = Math.ceil(arr.length / size);
		const result = Array.from<T[]>({length: numChunks});
		for (let i = 0; i < numChunks; i++) {
			result[i] = arr.slice(i * size, (i + 1) * size);
		}
		return result;
	},
};
Morebits.array = array;
/**
 * Temporarily hide a part of a string while processing the rest of it.
 * Used by {@link Morebits.wikitext.page#commentOutImage|Morebits.wikitext.page.commentOutImage}.
 *
 * @memberof Morebits
 * @class
 * @param {string} string - The initial text to process.
 * @example const u = new Morebits.unbinder('Hello world <!-- world --> world');
 * u.unbind('<!--', '-->'); // text inside comment remains intact
 * u.content = u.content.replace(/world/g, 'earth');
 * u.rebind(); // gives 'Hello earth <!-- world --> earth'
 */
class Unbinder {
	/** The text being processed. */
	content: string;
	prefix: string; // %UNIQ::0.5955981644938324::
	postfix: string; // ::UNIQ%
	counter: number; // 0++
	history: Record<string, string>; // {}
	constructor(string: string) {
		if (typeof string !== 'string') {
			throw new TypeError('not a string');
		}
		this.content = string;
		this.counter = 0;
		this.history = {};
		this.prefix = `%UNIQ::${Math.random()}::`;
		this.postfix = '::UNIQ%';
	}
	/**
	 * Hide the region encapsulated by the `prefix` and `postfix` from
	 * string processing.  `prefix` and `postfix` will be used in a
	 * RegExp, so items that need escaping should be use `\\`.
	 *
	 * @param {string} prefix
	 * @param {string} postfix
	 * @throws {Error} If either `prefix` or `postfix` is missing.
	 */
	unbind(prefix: string, postfix: string): void {
		if (!prefix || !postfix) {
			throw new Error('Both prefix and postfix must be provided');
		}
		const re = new RegExp(`${prefix}([\\s\\S]*?)${postfix}`, 'g');
		this.content = this.content.replace(re, Morebits.unbinder.getCallback(this));
	}
	/**
	 * Restore the hidden portion of the `content` string.
	 *
	 * @returns {string} The processed output.
	 */
	rebind(): string {
		let {content} = this;
		for (const current in this.history) {
			if (!Object.hasOwn(this.history, current)) {
				continue;
			}
			content = content.replace(current, this.history[current] as string);
		}
		return content;
	}
	/**
	 * @param {typeof Morebits} self
	 * @memberof Morebits.unbinder
	 */
	static getCallback(self: Unbinder): (match: string) => string {
		return (match) => {
			const current = self.prefix + self.counter + self.postfix;
			self.history[current] = match;
			++self.counter;
			return current;
		};
	}
}
Morebits.unbinder = Unbinder;
/* **************** Morebits.date **************** */
/** Normalized unit names with corresponding `Date.prototype` getter/setter names. */
type MbDateUnitNorm = 'Seconds' | 'Minutes' | 'Hours' | 'Date' | 'Month' | 'FullYear';
/** The argument lists accepted by the standard `Date` constructor overloads. */
type MorebitsDateArgs =
	| []
	| [value: number | string]
	| [
			year: number,
			monthIndex: number,
			date?: number,
			hours?: number,
			minutes?: number,
			seconds?: number,
			ms?: number,
	  ];
/**
 * Create a date object with enhanced processing capabilities, a la
 * {@link https://momentjs.com/|moment.js}. MediaWiki timestamp format is also
 * acceptable, in addition to everything that JS Date() accepts.
 *
 * @param {...any} args
 * @memberof Morebits
 * @class
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging -- Date 方法由 Object.assign 在运行时委托挂载，需要类/接口声明合并以补全类型
class MorebitsDate {
	_d: Date;
	/**
	 * Localized strings for date processing.
	 *
	 * @memberof Morebits.date
	 * @type {object.<string, string>}
	 * @property {string[]} months
	 * @property {string[]} monthsShort
	 * @property {string[]} days
	 * @property {string[]} daysShort
	 * @property {object.<string, string>} relativeTimes
	 * @private
	 */
	static localeData = {
		// message names here correspond to MediaWiki message names
		// No i18n at this time
		months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
		daysShort: ['日', '一', '二', '三', '四', '五', '六'],
		relativeTimes: {
			thisDay: '[今天]A hh:mm',
			prevDay: '[昨天]A hh:mm',
			nextDay: '[明天]A hh:mm',
			thisWeek: 'ddddA hh:mm',
			pastWeek: '[上]ddddA hh:mm',
			other: 'YYYY-MM-DD',
		},
	};
	/**
	 * Map units with getter/setter function names, for `add` and `subtract`
	 * methods.
	 *
	 * @memberof Morebits.date
	 * @type {object.<string, string>}
	 * @property {string} seconds
	 * @property {string} minutes
	 * @property {string} hours
	 * @property {string} days
	 * @property {string} weeks
	 * @property {string} months
	 * @property {string} years
	 */
	static unitMap: Record<string, MbDateUnitNorm | 'Week'> = {
		seconds: 'Seconds',
		minutes: 'Minutes',
		hours: 'Hours',
		days: 'Date',
		weeks: 'Week',
		// Not a function but handled in `add` through cunning use of multiplication
		months: 'Month',
		years: 'FullYear',
	};
	constructor(...args: MorebitsDateArgs) {
		// Check MediaWiki formats
		// Must be first since firefox erroneously accepts the timestamp
		// format, sans timezone (See also: #921, #936, #1174, #1187), and the
		// 14-digit string will be interpreted differently.
		if (args.length === 1) {
			const [param] = args;
			if (/^\d{14}$/.test(String(param))) {
				// YYYYMMDDHHmmss
				const digitMatch = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/.exec(String(param)) as
					[string, string, string, string, string, string, string] | null;
				if (digitMatch) {
					// ..... year ... month .. date ... hour .... minute ..... second
					this._d = new Date(
						Date.UTC(
							Number(digitMatch[1]),
							Number(digitMatch[2]) - 1,
							Number(digitMatch[3]),
							Number(digitMatch[4]),
							Number(digitMatch[5]),
							Number(digitMatch[6])
						)
					);
				}
			} else if (typeof param === 'string') {
				// Wikitext signature timestamp
				const dateParts = Morebits.l10n.signatureTimestampFormat(param);
				if (dateParts) {
					this._d = new Date(Reflect.apply(Date.UTC, undefined, dateParts));
				}
			}
		}
		// Try standard date
		this._d ??= new Date(...(args as ConstructorParameters<typeof Date>));
		// Still no?
		if (!this.isValid()) {
			mw.log.warn('Invalid Morebits.date initialisation:', args);
		}
	}
	/** @returns {boolean} */
	isValid(): boolean {
		return !Number.isNaN(this.getTime());
	}
	/**
	 * @param {(Date|Morebits.date)} date
	 * @returns {boolean}
	 */
	isBefore(date: Date): boolean {
		return this.getTime() < date.getTime();
	}
	/**
	 * @param {(Date|Morebits.date)} date
	 * @returns {boolean}
	 */
	isAfter(date: Date): boolean {
		return this.getTime() > date.getTime();
	}
	/** @returns {string} */
	getUTCMonthName(): string {
		return Morebits.date.localeData.months[this.getUTCMonth()] ?? '';
	}
	/** @returns {string} */
	getUTCMonthNameAbbrev(): string {
		return Morebits.date.localeData.monthsShort[this.getUTCMonth()] ?? '';
	}
	/** @returns {string} */
	getMonthName(): string {
		return Morebits.date.localeData.months[this.getMonth()] ?? '';
	}
	/** @returns {string} */
	getMonthNameAbbrev(): string {
		return Morebits.date.localeData.monthsShort[this.getMonth()] ?? '';
	}
	/** @returns {string} */
	getUTCDayName(): string {
		return Morebits.date.localeData.days[this.getUTCDay()] ?? '';
	}
	/** @returns {string} */
	getUTCDayNameAbbrev(): string {
		return Morebits.date.localeData.daysShort[this.getUTCDay()] ?? '';
	}
	/** @returns {string} */
	getDayName(): string {
		return Morebits.date.localeData.days[this.getDay()] ?? '';
	}
	/** @returns {string} */
	getDayNameAbbrev(): string {
		return Morebits.date.localeData.daysShort[this.getDay()] ?? '';
	}
	/**
	 * Add a given number of minutes, hours, days, weeks, months, or years to the date.
	 * This is done in-place. The modified date object is also returned, allowing chaining.
	 *
	 * @param {number} number - Should be an integer.
	 * @param {string} unit
	 * @throws {TypeError} If invalid or unsupported unit is given.
	 * @returns {Morebits.date}
	 */
	add(number: number | string, unit: string): MorebitsDate {
		let num = Number.parseInt(String(number), 10); // normalize
		if (Number.isNaN(num)) {
			throw new TypeError(`Invalid number "${number}" provided.`);
		}
		unit = unit.toLowerCase(); // normalize
		const {unitMap} = Morebits.date;
		let unitNorm: MbDateUnitNorm | 'Week' | undefined = unitMap[unit] || unitMap[`${unit}s`]; // so that both singular and  plural forms work
		if (unitNorm) {
			// No built-in week functions, so rather than build out ISO's getWeek/setWeek, just multiply
			// Probably can't be used for Julian->Gregorian changeovers, etc.
			if (unitNorm === 'Week') {
				unitNorm = 'Date';
				num *= 7;
			}
			const getter = `get${unitNorm}` as `get${MbDateUnitNorm}`;
			const setter = `set${unitNorm}` as `set${MbDateUnitNorm}`;
			this[setter](this[getter]() + num);
			return this;
		}
		throw new Error(`Invalid unit "${unit}": Only ${Object.keys(unitMap).join(', ')} are allowed.`);
	}
	/**
	 * Subtracts a given number of minutes, hours, days, weeks, months, or years to the date.
	 * This is done in-place. The modified date object is also returned, allowing chaining.
	 *
	 * @param {number} number - Should be an integer.
	 * @param {string} unit
	 * @throws {Error} If invalid or unsupported unit is given.
	 * @returns {Morebits.date}
	 */
	subtract(number: number, unit: string): MorebitsDate {
		return this.add(-number, unit);
	}
	/**
	 * Format the date into a string per the given format string.
	 * Replacement syntax is a subset of that in moment.js:
	 *
	 * | Syntax | Output |
	 * |--------|--------|
	 * | H | Hours (24-hour) |
	 * | HH | Hours (24-hour, padded to 2 digits) |
	 * | h | Hours (12-hour) |
	 * | hh | Hours (12-hour, padded to 2 digits) |
	 * | A | AM or PM |
	 * | m | Minutes |
	 * | mm | Minutes (padded to 2 digits) |
	 * | s | Seconds |
	 * | ss | Seconds (padded to 2 digits) |
	 * | SSS | Milliseconds fragment, 3 digits |
	 * | d | Day number of the week (Sun=0) |
	 * | ddd | Abbreviated day name |
	 * | dddd | Full day name |
	 * | D | Date |
	 * | DD | Date (padded to 2 digits) |
	 * | M | Month number (1-indexed) |
	 * | MM | Month number (1-indexed, padded to 2 digits) |
	 * | MMM | Abbreviated month name |
	 * | MMMM | Full month name |
	 * | Y | Year |
	 * | YY | Final two digits of year (20 for 2020, 42 for 1942) |
	 * | YYYY | Year (same as `Y`) |
	 *
	 * @param {string} formatstr - Format the date into a string, using
	 * the replacement syntax.  Use `[` and `]` to escape items.  If not
	 * provided, will return the ISO-8601-formatted string.
	 * @param {(string|number)} [zone=system] - `system` (for browser-default time zone),
	 * `utc`, or specify a time zone as number of minutes relative to UTC.
	 * @returns {string}
	 */
	format(formatstr?: string, zone?: string | number): string {
		if (!this.isValid()) {
			return 'Invalid date'; // Put the truth out, preferable to "NaNNaNNan NaN:NaN" or whatever
		}

		let udate: MorebitsDate = this;
		// create a new date object that will contain the date to display as system time
		if (zone === 'utc') {
			udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset(), 'minutes');
		} else if (typeof zone === 'number') {
			// convert to utc, then add the utc offset given
			udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset() + zone, 'minutes');
		}
		// default to ISOString
		if (!formatstr) {
			return udate.toISOString();
		}
		const pad = (num: number, len?: number) => {
			len ||= 2; // Up to length of 00 + 1
			return `00${num}`.toString().slice(0 - len);
		};
		const h24 = udate.getHours();
		const m = udate.getMinutes();
		const s = udate.getSeconds();
		const ms = udate.getMilliseconds();
		const D = udate.getDate();
		const M = udate.getMonth() + 1;
		const Y = udate.getFullYear();
		const h12 = h24 % 12 || 12;
		const amOrPm = h24 >= 12 ? '下午' : '上午';
		const replacementMap: Record<string, string | number> = {
			HH: pad(h24),
			H: h24,
			hh: pad(h12),
			h: h12,
			A: amOrPm,
			mm: pad(m),
			m,
			ss: pad(s),
			s,
			SSS: pad(ms, 3),
			dddd: udate.getDayName(),
			ddd: udate.getDayNameAbbrev(),
			d: udate.getDay(),
			DD: pad(D),
			D,
			MMMM: udate.getMonthName(),
			MMM: udate.getMonthNameAbbrev(),
			MM: pad(M),
			M,
			YYYY: Y,
			YY: pad(Y % 100),
			Y,
		};
		const unbinder = new Morebits.unbinder(formatstr); // escape stuff between [...]
		unbinder.unbind(String.raw`\[`, String.raw`\]`);
		unbinder.content = unbinder.content.replace(
			/* Regex notes:
			 * d(d{2,3})? matches exactly 1, 3 or 4 occurrences of 'd' ('dd' is treated as a double match of 'd')
			 * Y{1,2}(Y{2})? matches exactly 1, 2 or 4 occurrences of 'Y'
			 */
			/H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|d(d{2,3})?|D{1,2}|M{1,4}|Y{1,2}(Y{2})?|A/g,
			(match) => {
				return String(replacementMap[match] ?? match);
			}
		);
		return unbinder.rebind().replace(/\[(.*?)\]/g, '$1');
	}
	/**
	 * Gives a readable relative time string such as "Yesterday at 6:43 PM" or "Last Thursday at 11:45 AM".
	 * Similar to `calendar` in moment.js, but with time zone support.
	 *
	 * @param {(string|number)} [zone=system] - 'system' (for browser-default time zone),
	 * 'utc' (for UTC), or specify a time zone as number of minutes past UTC.
	 * @returns {string}
	 */
	calendar(zone?: string | number): string {
		// Zero out the hours, minutes, seconds and milliseconds - keeping only the date;
		// find the difference. Note that setHours() returns the same thing as getTime().
		const dateDiff = (new Date().setHours(0, 0, 0, 0) - new Date(this.getTime()).setHours(0, 0, 0, 0)) / 8.64e7;
		switch (true) {
			case dateDiff === 0:
				return this.format(Morebits.date.localeData.relativeTimes.thisDay, zone);
			case dateDiff === 1:
				return this.format(Morebits.date.localeData.relativeTimes.prevDay, zone);
			case dateDiff > 0 && dateDiff < 7:
				return this.format(Morebits.date.localeData.relativeTimes.pastWeek, zone);
			case dateDiff === -1:
				return this.format(Morebits.date.localeData.relativeTimes.nextDay, zone);
			case dateDiff < 0 && dateDiff > -7:
				return this.format(Morebits.date.localeData.relativeTimes.thisWeek, zone);
			default:
				return this.format(Morebits.date.localeData.relativeTimes.other, zone);
		}
	}
	/**
	 * Get a regular expression that matches wikitext section titles, such
	 * as `==December 2019==` or `=== Jan 2018 ===`.
	 *
	 * @returns {RegExp}
	 */
	monthHeaderRegex(): RegExp {
		return new RegExp(
			`^(==+)\\s*${this.getUTCFullYear()}年(?:${this.getUTCMonthName()}|${this.getUTCMonthNameAbbrev()})\\s*\\1`,
			'mg'
		);
	}
	/**
	 * Creates a wikitext section header with the month and year.
	 *
	 * @param {number} [level=2] - Header level.  Pass 0 for just the text
	 * with no wikitext markers (==).
	 * @returns {string}
	 */
	monthHeader(level?: number | string): string {
		// Default to 2, but allow for 0 or stringy numbers
		level = Number.parseInt(String(level), 10);
		level = Number.isNaN(level) ? 2 : level;
		const header = '='.repeat(level);
		const text = `${this.getUTCFullYear()}年${this.getUTCMonthName()}`;
		if (header.length) {
			// wikitext-formatted header
			return `${header} ${text} ${header}`;
		}
		return text; // Just the string
	}
}
// Allow native Date.prototype methods to be used on Morebits.date objects
// Exclude methods that collide with PageTriage's Date.js external, which clobbers native Date
const delegatedDateProto: Record<string, (this: MorebitsDate, ...args: unknown[]) => unknown> = {};
for (const func of Object.getOwnPropertyNames(Date.prototype)) {
	if (func !== 'constructor' && !['add', 'getDayName', 'getMonthName'].includes(func)) {
		delegatedDateProto[func] = function (this: MorebitsDate, ...args: unknown[]): unknown {
			return (this._d as unknown as Record<string, (...args: unknown[]) => unknown>)[func]!(...args);
		};
	}
}
Object.assign(MorebitsDate.prototype, delegatedDateProto);
/**
 * Native Date.prototype methods delegated to the wrapped Date instance.
 * @see delegatedDateProto above
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging -- 同上：声明委托给原型实例的 Date 方法
interface MorebitsDate extends Date {}
Morebits.date = MorebitsDate;

interface MorebitsNamespace {
	wiki: WikiNamespace;
}
interface WikiNamespace {}
interface WikiNamespace {
	/** @deprecated in favor of Morebits.isPageRedirect as of November 2020 */
	isPageRedirect: () => boolean;
	/** Counter incremented at the start of every Morebits.wiki.api call. */
	numberOfActionsLeft: number;
	/** Counter used for batch operations, managed by addCheckpoint/removeCheckpoint. */
	nbrOfCheckpointsLeft: number;
	/** Display message and/or redirect to page upon completion of tasks. */
	actionCompleted: WikiActionCompleted;
	/** Indicate that processing is not complete upon the conclusion of the final callback function. */
	addCheckpoint: () => void;
	/** Signal the end of a batch. */
	removeCheckpoint: () => void;
	/** An easy way to talk to the MediaWiki API. */
	api: typeof WikiApi;
	/** Retrieves wikitext from a page. Caching enabled, duration 1 day. */
	getCachedJson: (title: string) => JQuery.Promise<unknown>;
}

/**
 * The callable `Morebits.wiki.actionCompleted`, with its per-action
 * configuration properties attached.
 */
type WikiActionCompleted = ((self?: unknown) => void) & {
	event: (self?: unknown) => void;
	timeOut: number;
	redirect: string | null;
	notice: string | null;
	/** Assigned by consumers before the first call, see Morebits.wiki.page. */
	followRedirect?: boolean;
};

/** A Morebits.status instance (defined by a later fragment of this module). */
type StatusElement = InstanceType<MorebitsNamespace['status']>;

/**
 * The JSON response of a MediaWiki API request, in the partial shape used
 * by Morebits.
 */
interface MwApiResponse {
	/** API errors, limited to the first one. */
	errors?: {code: string; html?: string; text?: string}[];
	[key: string]: unknown;
}

/** The query payload of a Morebits.wiki.api request. */
interface WikiApiQuery {
	action?: string;
	assert?: string;
	errorformat?: string;
	uselang?: string;
	errorlang?: string;
	errorsuselocal?: number;
	format?: string;
	formatversion?: string | number;
	tags?: string | string[];
	token?: string | null;
	[key: string]: unknown;
}

declare global {
	interface Window {
		/** Used by consumers to override the actionCompleted redirect timeout (ms). */
		wpActionCompletedTimeOut?: number;
	}
}

/* **************** Morebits.wiki **************** */
/**
 * Various objects for wiki editing and API access, including
 * {@link Morebits.wiki.api} and {@link Morebits.wiki.page}.
 *
 * @namespace Morebits.wiki
 * @memberof Morebits
 */
Morebits.wiki = {} as WikiNamespace;
/**
 * @deprecated in favor of Morebits.isPageRedirect as of November 2020
 * @memberof Morebits.wiki
 * @returns {boolean}
 */
Morebits.wiki.isPageRedirect = () => {
	console.warn(
		'[Morebits] NOTE: Morebits.wiki.isPageRedirect has been deprecated, use Morebits.isPageRedirect instead.'
	);
	return Morebits.isPageRedirect();
};
/* **************** Morebits.wiki.actionCompleted **************** */
/**
 * @memberof Morebits.wiki
 * @type {number}
 */
Morebits.wiki.numberOfActionsLeft = 0;
/**
 * @memberof Morebits.wiki
 * @type {number}
 */
Morebits.wiki.nbrOfCheckpointsLeft = 0;
/**
 * Display message and/or redirect to page upon completion of tasks.
 *
 * Every call to Morebits.wiki.api.post() results in the dispatch of an
 * asynchronous callback. Each callback can in turn make an additional call to
 * Morebits.wiki.api.post() to continue a processing sequence. At the
 * conclusion of the final callback of a processing sequence, it is not
 * possible to simply return to the original caller because there is no call
 * stack leading back to the original context. Instead,
 * Morebits.wiki.actionCompleted.event() is called to display the result to
 * the user and to perform an optional page redirect.
 *
 * The determination of when to call Morebits.wiki.actionCompleted.event() is
 * managed through the globals Morebits.wiki.numberOfActionsLeft and
 * Morebits.wiki.nbrOfCheckpointsLeft. Morebits.wiki.numberOfActionsLeft is
 * incremented at the start of every Morebits.wiki.api call and decremented
 * after the completion of a callback function. If a callback function does
 * not create a new Morebits.wiki.api object before exiting, it is the final
 * step in the processing chain and Morebits.wiki.actionCompleted.event() will
 * then be called.
 *
 * Optionally, callers may use Morebits.wiki.addCheckpoint() to indicate that
 * processing is not complete upon the conclusion of the final callback
 * function.  This is used for batch operations. The end of a batch is
 * signaled by calling Morebits.wiki.removeCheckpoint().
 *
 * @param {typeof Morebits} self
 * @memberof Morebits.wiki
 */
Morebits.wiki.actionCompleted = ((self?: unknown) => {
	if (--Morebits.wiki.numberOfActionsLeft <= 0 && Morebits.wiki.nbrOfCheckpointsLeft <= 0) {
		Morebits.wiki.actionCompleted.event(self);
	}
}) as WikiActionCompleted;
// Change per action wanted
/** @memberof Morebits.wiki */
Morebits.wiki.actionCompleted.event = () => {
	if (Morebits.wiki.actionCompleted.notice) {
		Morebits.status.actionCompleted(Morebits.wiki.actionCompleted.notice);
	}
	if (Morebits.wiki.actionCompleted.redirect) {
		// if it isn't a URL, make it one. TODO: This breaks on the articles 'http://', 'ftp://', and similar ones.
		if (!/^\w+:\/\//.test(Morebits.wiki.actionCompleted.redirect)) {
			Morebits.wiki.actionCompleted.redirect = mw.util.getUrl(Morebits.wiki.actionCompleted.redirect);
			if (Morebits.wiki.actionCompleted.followRedirect === false) {
				Morebits.wiki.actionCompleted.redirect += '?redirect=no';
			}
		}
		setTimeout(() => {
			location.href = Morebits.wiki.actionCompleted.redirect as string;
		}, Morebits.wiki.actionCompleted.timeOut);
	}
};
/** @memberof Morebits.wiki */
Morebits.wiki.actionCompleted.timeOut =
	window.wpActionCompletedTimeOut === undefined ? 5000 : window.wpActionCompletedTimeOut;
/** @memberof Morebits.wiki */
Morebits.wiki.actionCompleted.redirect = null;
/** @memberof Morebits.wiki */
Morebits.wiki.actionCompleted.notice = null;
/** @memberof Morebits.wiki */
Morebits.wiki.addCheckpoint = () => {
	++Morebits.wiki.nbrOfCheckpointsLeft;
};
/** @memberof Morebits.wiki */
Morebits.wiki.removeCheckpoint = () => {
	if (--Morebits.wiki.nbrOfCheckpointsLeft <= 0 && Morebits.wiki.numberOfActionsLeft <= 0) {
		Morebits.wiki.actionCompleted.event();
	}
};
/* **************** Morebits.wiki.api **************** */
/**
 * An easy way to talk to the MediaWiki API.  Accepts either json or xml
 * (default) formats; if json is selected, will default to `formatversion=2`
 * unless otherwise specified.  Similarly, enforces newer `errorformat`s,
 * defaulting to `html` if unspecified.  `uselang` enforced to the wiki's
 * content language.
 *
 * In new code, the use of the last 3 parameters should be avoided, instead
 * use {@link Morebits.wiki.api#setStatusElement|setStatusElement()} to bind
 * the status element (if needed) and use `.then()` or `.catch()` on the
 * promise returned by `post()`, rather than specify the `onSuccess` or
 * `onFailure` callbacks.
 *
 * @memberof Morebits.wiki
 * @class
 * @param {string} currentAction - The current action (required).
 * @param {Object} query - The query (required).
 * @param {Function} [onSuccess] - The function to call when request is successful.
 * @param {Morebits.status} [statusElement] - A Morebits.status object to use for status messages.
 * @param {Function} [onError] - The function to call if an error occurs.
 */
class WikiApi {
	currentAction: string;
	onSuccess: ((apiobj: WikiApi) => void) | null;
	onError: ((apiobj: WikiApi) => void) | null;
	parent: object = window; // use global context if there is no parent object
	query: WikiApiQuery;
	response: MwApiResponse | XMLDocument | null = null;
	responseXML: MwApiResponse | XMLDocument | null = null; // use `response` instead; retained for backwards compatibility
	statelem!: StatusElement; // this non-standard name kept for backwards compatibility
	statusText: string | null = null; // result received from the API, normally "success" or "error"
	errorCode: string | null = null; // short text error code, if any, as documented in the MediaWiki API
	errorText: string | null = null; // full error description, if any
	badtokenRetry: boolean = false; // set to true if this on a retry attempted after a badtoken error
	// assigned in onAPIfailure; frequently undefined
	declare errorThrown?: string;

	constructor(
		currentAction: string,
		query: WikiApiQuery,
		onSuccess?: ((apiobj: WikiApi) => void) | null,
		statusElement?: StatusElement,
		onError?: ((apiobj: WikiApi) => void) | null
	) {
		this.currentAction = currentAction;
		this.query = query;
		this.query.assert = 'user';
		// Enforce newer error formats, preferring html
		if (!query.errorformat || !['wikitext', 'plaintext'].includes(query.errorformat)) {
			this.query.errorformat = 'html';
		}
		// Explicitly use the wiki's content language to minimize confusion,
		// see #1179 for discussion
		this.query.uselang ||= 'content'; // Use wgUserLanguage for preview
		this.query.errorlang = 'uselang';
		this.query.errorsuselocal = 1;
		this.onSuccess = onSuccess ?? null;
		this.onError = onError ?? null;
		if (statusElement) {
			this.setStatusElement(statusElement);
		} else {
			this.statelem = new Morebits.status(currentAction);
		}
		// JSON is used throughout Morebits/Twinkle, but xml remains the default for backwards compatibility
		if (!query.format) {
			this.query.format = 'xml';
		} else if (query.format === 'json' && !query.formatversion) {
			this.query.formatversion = '2';
		} else if (!['xml', 'json'].includes(query.format)) {
			this.statelem.error('Invalid API format: only xml and json are supported.');
		}
		// Ignore tags for queries and most common unsupported actions, produces warnings
		if (query.action && ['query', 'watch'].includes(query.action)) {
			delete query.tags;
		} else if (!query.tags && morebitsWikiChangeTag) {
			query.tags = morebitsWikiChangeTag;
		}
	}

	/**
	 * Keep track of parent object for callbacks.
	 *
	 * @param {*} parent
	 */
	setParent(parent: object) {
		this.parent = parent;
	}
	/** @param {Morebits.status} statusElement */
	setStatusElement(statusElement: StatusElement) {
		this.statelem = statusElement;
		this.statelem.status(this.currentAction);
	}
	/**
	 * Carry out the request.
	 *
	 * @param {Object} callerAjaxParameters - Do not specify a parameter unless you really
	 * really want to give jQuery some extra parameters.
	 * @returns {promise} - A jQuery promise object that is resolved or rejected with the api object.
	 */
	post(callerAjaxParameters?: JQuery.AjaxSettings): JQuery.Promise<WikiApi> {
		++Morebits.wiki.numberOfActionsLeft;
		const queryStringArr: string[] = [];
		for (const [i, val] of Object.entries(this.query)) {
			if (Array.isArray(val)) {
				queryStringArr[queryStringArr.length] =
					`${encodeURIComponent(i)}=${val.map(encodeURIComponent).join('|')}`;
			} else if (val !== undefined) {
				queryStringArr[queryStringArr.length] = `${encodeURIComponent(i)}=${encodeURIComponent(String(val))}`;
			}
		}
		const queryString = queryStringArr.join('&').replace(/^(.*?)(\btoken=[^&]*)&(.*)/, '$1$3&$2');
		// token should always be the last item in the query string (bug TW-B-0013)
		const ajaxparams = {
			context: this,
			type: this.query.action === 'query' ? 'GET' : 'POST',
			url: mw.util.wikiScript('api'),
			data: queryString,
			dataType: this.query.format,
			headers: {
				'Api-User-Agent': morebitsWikiApiUserAgent,
			},
			...callerAjaxParameters,
		};
		return $.ajax(ajaxparams).then(
			function onAPIsuccess(
				this: WikiApi,
				response: MwApiResponse | XMLDocument,
				statusText: JQuery.Ajax.SuccessTextStatus
			) {
				this.statusText = statusText;
				this.response = response;
				this.responseXML = response;
				// Limit to first error
				if (this.query.format === 'json') {
					const jsonResponse = response as MwApiResponse;
					this.errorCode = jsonResponse.errors?.[0]?.code ?? null;
					if (this.query.errorformat === 'html') {
						this.errorText = jsonResponse.errors?.[0]?.html ?? null;
					} else if (this.query.errorformat === 'wikitext' || this.query.errorformat === 'plaintext') {
						this.errorText = jsonResponse.errors?.[0]?.text ?? null;
					}
				} else {
					this.errorCode =
						$(response as XMLDocument)
							.find('errors error')
							.eq(0)
							.attr('code') ?? null;
					// Sufficient for html, wikitext, or plaintext errorformats
					this.errorText = $(response as XMLDocument)
						.find('errors error')
						.eq(0)
						.text();
				}
				if (typeof this.errorCode === 'string') {
					// the API didn't like what we told it, e.g., bad edit token or an error creating a page
					return this.returnError(callerAjaxParameters);
				}
				// invoke success callback if one was supplied
				if (this.onSuccess) {
					// set the callback context to this.parent for new code and supply the API object
					// as the first argument to the callback (for legacy code)
					this.onSuccess.call(this.parent, this);
				} else {
					this.statelem.info('完成');
				}
				Morebits.wiki.actionCompleted();
				return $.Deferred<WikiApi>().resolveWith(this.parent, [this]);
			},
			// only network and server errors reach here - complaints from the API itself are caught in success()
			function onAPIfailure(
				this: WikiApi,
				error: JQuery.jqXHR,
				statusText: JQuery.Ajax.ErrorTextStatus,
				errorThrown: string
			) {
				this.statusText = statusText;
				this.errorThrown = errorThrown; // frequently undefined
				this.errorText =
					statusText +
					uls('在调用API时发生了错误“', '在呼叫API時發生了錯誤「') +
					error.statusText +
					uls('”。', '」。');
				return this.returnError();
			}
		) as JQuery.Promise<WikiApi>;
	}
	returnError(callerAjaxParameters?: JQuery.AjaxSettings): JQuery.Promise<WikiApi> {
		if (this.errorCode === 'badtoken' && !this.badtokenRetry) {
			this.statelem.warn(uls('无效令牌，获取新的令牌并重试……', '無效權杖，取得新的權杖並重試……'));
			this.badtokenRetry = true;
			// Get a new CSRF token and retry. If the original action needs a different
			// type of action than CSRF, we do one pointless retry before bailing out
			return Morebits.wiki.api.getToken().then((token) => {
				this.query.token = token;
				return this.post(callerAjaxParameters);
			});
		}
		this.statelem.error(`${this.errorText}（${this.errorCode}）`);
		// invoke failure callback if one was supplied
		if (this.onError) {
			// set the callback context to this.parent for new code and supply the API object
			// as the first argument to the callback for legacy code
			this.onError.call(this.parent, this);
		}
		// don't complete the action so that the error remains displayed
		return $.Deferred<WikiApi>().rejectWith(this.parent, [this]);
	}
	getStatusElement() {
		return this.statelem;
	}
	getErrorCode() {
		return this.errorCode;
	}
	getErrorText() {
		return this.errorText;
	}
	getXML() {
		// retained for backwards compatibility, use getResponse() instead
		return this.responseXML;
	}
	getResponse() {
		return this.response;
	}

	/**
	 * Set the custom user agent header, which is used for server-side logging.
	 * Note that doing so will set the useragent for every `Morebits.wiki.api`
	 * process performed thereafter.
	 *
	 * @see {@link https://lists.wikimedia.org/pipermail/mediawiki-api-announce/2014-November/000075.html}
	 * for original announcement.
	 *
	 * @memberof Morebits.wiki.api
	 * @param {string} [ua=Qiuwen/1.1 (morebits.js)] - User agent.  The default
	 * value of `morebits.js` will be appended to any provided
	 * value.
	 */
	static setApiUserAgent(ua?: string) {
		morebitsWikiApiUserAgent = `Qiuwen/1.1 (morebits.js${ua ? `; ${ua}` : ''})`;
	}

	/**
	 * Get a new CSRF token on encountering token errors.
	 *
	 * @memberof Morebits.wiki.api
	 * @returns {string} MediaWiki CSRF token.
	 */
	static getToken(): JQuery.Promise<string> {
		const tokenApi = new Morebits.wiki.api(uls('获取令牌', '取得權杖'), {
			action: 'query',
			meta: 'tokens',
			type: 'csrf',
			format: 'json',
		});
		return tokenApi.post().then((apiobj) => {
			return (apiobj.response as {query: {tokens: {csrftoken: string}}}).query.tokens.csrftoken;
		});
	}
}
Morebits.wiki.api = WikiApi;
/**
 * Retrieves wikitext from a page. Caching enabled, duration 1 day.
 *
 * @param {string} title
 */
Morebits.wiki.getCachedJson = (title: string): JQuery.Promise<unknown> => {
	const query = {
		action: 'query',
		prop: 'revisions',
		titles: title,
		rvslots: 'main',
		rvprop: 'content',
		format: 'json',
		smaxage: '3600',
		maxage: '3600',
	};

	return new Morebits.wiki.api('', query).post().then((apiobj) => {
		apiobj.getStatusElement().unlink();
		const response = apiobj.getResponse() as {
			query: {
				pages: [{revisions: [{slots: {main: {content: string}}}]}];
			};
		};
		const wikitext = response.query.pages[0].revisions[0].slots.main.content;
		return JSON.parse(wikitext);
	});
};
let morebitsWikiApiUserAgent = 'Qiuwen/1.1 (morebits.js)';
/**
 * Change/revision tag applied to Morebits actions when no other tags are specified.
 * Unused by default.
 *
 * @constant
 * @memberof Morebits.wiki.api
 * @type {string}
 */
const morebitsWikiChangeTag: string = '';
/* **************** Morebits.wiki.page **************** */
/**
 * Use the MediaWiki API to load a page and optionally edit it, move it, etc.
 *
 * Callers are not permitted to directly access the properties of this class!
 * All property access is through the appropriate get___() or set___() method.
 *
 * Callers should set {@link Morebits.wiki.actionCompleted.notice} and {@link Morebits.wiki.actionCompleted.redirect}
 * before the first call to {@link Morebits.wiki.page.load()}.
 *
 * Each of the callback functions takes one parameter, which is a
 * reference to the Morebits.wiki.page object that registered the callback.
 * Callback functions may invoke any Morebits.wiki.page prototype method using this reference.
 *
 *
 * Call sequence for common operations (optional final user callbacks not shown):
 *
 * - Edit current contents of a page (no edit conflict):
 * `.load(userTextEditCallback) -> ctx.loadApi.post() ->
 * ctx.loadApi.post.success() -> ctx.fnLoadSuccess() -> userTextEditCallback() ->
 * .save() -> ctx.saveApi.post() -> ctx.loadApi.post.success() -> ctx.fnSaveSuccess()`
 *
 * - Edit current contents of a page (with edit conflict):
 * `.load(userTextEditCallback) -> ctx.loadApi.post() ->
 * ctx.loadApi.post.success() -> ctx.fnLoadSuccess() -> userTextEditCallback() ->
 * .save() -> ctx.saveApi.post() -> ctx.loadApi.post.success() ->
 * ctx.fnSaveError() -> ctx.loadApi.post() -> ctx.loadApi.post.success() ->
 * ctx.fnLoadSuccess() -> userTextEditCallback() -> .save() ->
 * ctx.saveApi.post() -> ctx.loadApi.post.success() -> ctx.fnSaveSuccess()`
 *
 * - Append to a page (similar for prepend and newSection):
 * `.append() -> ctx.loadApi.post() -> ctx.loadApi.post.success() ->
 * ctx.fnLoadSuccess() -> ctx.fnAutoSave() -> .save() -> ctx.saveApi.post() ->
 * ctx.loadApi.post.success() -> ctx.fnSaveSuccess()`
 *
 * Notes:
 * 1. All functions following Morebits.wiki.api.post() are invoked asynchronously from the jQuery AJAX library.
 * 2. The sequence for append/prepend/newSection could be slightly shortened,
 * but it would require significant duplication of code for little benefit.
 *
 * @memberof Morebits.wiki
 * @class
 * @param {string} pageName - The name of the page, prefixed by the namespace (if any).
 * For the current page, use `mw.config.get('wgPageName')`.
 * @param {string|Morebits.status} [status] - A string describing the action about to be undertaken,
 * or a Morebits.status object
 */

interface WikiNamespace {
	page: typeof WikiPage;
}
// 索引访问别名（不得引用其他片段内部类名；StatusElement 已由 wiki-api 片段定义）
type WikiApiInstance = InstanceType<WikiNamespace['api']>;
// 原 2658 行的闭包常量，提升为模块级（无状态、跨实例共享，语义不变）
const emptyFunction = (): void => {};

interface WikiPageProtection {
	level: string;
	expiry: string;
}

interface WikiPageLoadQuery {
	action: string;
	prop: string;
	inprop: string;
	intestactions: string;
	curtimestamp: string;
	meta: string;
	type: string;
	titles: string;
	format: string;
	rvprop?: string;
	rvlimit?: number;
	rvstartid?: number | string | null;
	redirects?: string;
	rvsection?: number;
	[key: string]: unknown;
}

interface WikiPageSaveQuery {
	action: string;
	title: string;
	summary: string;
	token: string | null;
	watchlist: string;
	format: string;
	tags?: string | string[];
	watchlistexpiry?: string | number | null;
	section?: string | number;
	minor?: boolean;
	notminor?: boolean;
	bot?: boolean;
	appendtext?: string;
	prependtext?: string;
	text?: string | null;
	sectiontitle?: string;
	undo?: number | string | null;
	undoafter?: string | null;
	basetimestamp?: string | null;
	starttimestamp?: string | null;
	redirect?: boolean;
	recreate?: string;
	createonly?: string;
	nocreate?: string;
	[key: string]: unknown;
}

interface WikiPageLookupCreationQuery {
	action: string;
	prop: string;
	titles: string;
	rvlimit: number;
	rvprop: string;
	rvdir: string;
	format: string;
	rvsection?: number;
	redirects?: string;
	[key: string]: unknown;
}

// 依据原 2567-2657 的 ctx 初始化字面量写出的精确接口
interface WikiPageCtx {
	// backing fields for public properties
	pageName: string;
	pageExists: boolean;
	editSummary: string | null;
	changeTags: string | string[] | null;
	testActions: string[] | null;
	// array if any valid actions
	callbackParameters: unknown;
	statusElement: StatusElement;
	// - edit
	pageText: string | null;
	editMode: 'all' | 'append' | 'prepend' | 'new' | 'revert';
	// save() replaces entire contents of the page by default
	appendText: string | null;
	// can't reuse pageText for this because pageText is needed to follow a redirect
	prependText: string | null;
	// can't reuse pageText for this because pageText is needed to follow a redirect
	newSectionText: string | null;
	newSectionTitle: string | null;
	createOption: 'recreate' | 'createonly' | 'nocreate' | null;
	minorEdit: boolean;
	botEdit: boolean;
	pageSection: number | null;
	maxConflictRetries: number;
	maxRetries: number;
	followRedirect: boolean;
	followCrossNsRedirect: boolean;
	watchlistOption: 'nochange' | 'unwatch' | 'preferences' | 'watch';
	watchlistExpiry: string | number | null;
	creator: string | null;
	timestamp: string | null;
	// - revert
	revertOldID: string | null;
	// - move
	moveDestination: string | null;
	moveTalkPage: boolean;
	moveSubpages: boolean;
	moveSuppressRedirect: boolean;
	// - protect
	protectEdit: WikiPageProtection | null;
	protectMove: WikiPageProtection | null;
	protectCreate: WikiPageProtection | null;
	protectCascade: boolean | null;
	// - creation lookup
	lookupNonRedirectCreator: boolean;
	// internal status
	pageLoaded: boolean;
	csrfToken: string | null;
	loadTime: string | null;
	lastEditTime: string | null;
	pageID: number | null;
	contentModel: string | null;
	revertCurID: number | null;
	revertUser: string | null;
	watched: boolean | string;
	fullyProtected: boolean | string;
	suppressProtectWarning: boolean;
	conflictRetries: number;
	retries: number;
	// callbacks
	onLoadSuccess: ((page: WikiPage) => void) | null;
	onLoadFailure: ((page: WikiPage) => void) | null;
	onSaveSuccess: ((page: WikiPage) => void) | null;
	onSaveFailure: ((page: WikiPage) => void) | null;
	onLookupCreationSuccess: ((page: WikiPage) => void) | null;
	onLookupCreationFailure: ((page: WikiPage) => void) | null;
	onMoveSuccess: ((page: WikiPage) => void) | null;
	onMoveFailure: ((page: WikiPage) => void) | null;
	onDeleteSuccess: ((page: WikiPage) => void) | null;
	onDeleteFailure: ((page: WikiPage) => void) | null;
	onUndeleteSuccess: ((page: WikiPage) => void) | null;
	onUndeleteFailure: ((page: WikiPage) => void) | null;
	onProtectSuccess: ((page: WikiPage) => void) | null;
	onProtectFailure: ((page: WikiPage) => void) | null;
	// internal objects
	loadQuery: WikiPageLoadQuery | null;
	loadApi: WikiApiInstance | null;
	saveApi: WikiApiInstance | null;
	lookupCreationApi: WikiApiInstance | null;
	moveApi: WikiApiInstance | null;
	moveProcessApi: WikiApiInstance | null;
	patrolApi: WikiApiInstance | null;
	patrolProcessApi: WikiApiInstance | null;
	deleteApi: WikiApiInstance | null;
	deleteProcessApi: WikiApiInstance | null;
	undeleteApi: WikiApiInstance | null;
	undeleteProcessApi: WikiApiInstance | null;
	protectApi: WikiApiInstance | null;
	protectProcessApi: WikiApiInstance | null;
	// set dynamically in patrol()
	rcid?: string | null;
}

class WikiPage {
	ctx: WikiPageCtx;
	constructor(pageName: string, status?: string | StatusElement) {
		status ||= uls('打开页面“', '打開頁面「') + pageName + uls('”', '」');
		/**
		 * Private context variables.
		 *
		 * This context is not visible to the outside, thus all the data here
		 * must be accessed via getter and setter functions.
		 *
		 * @private
		 */
		this.ctx = {
			// backing fields for public properties
			pageName,
			pageExists: false,
			editSummary: null,
			changeTags: null,
			testActions: null,
			// array if any valid actions
			callbackParameters: null,
			statusElement: status instanceof Morebits.status ? status : new Morebits.status(status),
			// - edit
			pageText: null,
			editMode: 'all',
			// save() replaces entire contents of the page by default
			appendText: null,
			// can't reuse pageText for this because pageText is needed to follow a redirect
			prependText: null,
			// can't reuse pageText for this because pageText is needed to follow a redirect
			newSectionText: null,
			newSectionTitle: null,
			createOption: null,
			minorEdit: false,
			botEdit: false,
			pageSection: null,
			maxConflictRetries: 2,
			maxRetries: 2,
			followRedirect: false,
			followCrossNsRedirect: true,
			watchlistOption: 'nochange',
			watchlistExpiry: null,
			creator: null,
			timestamp: null,
			// - revert
			revertOldID: null,
			// - move
			moveDestination: null,
			moveTalkPage: false,
			moveSubpages: false,
			moveSuppressRedirect: false,
			// - protect
			protectEdit: null,
			protectMove: null,
			protectCreate: null,
			protectCascade: null,
			// - creation lookup
			lookupNonRedirectCreator: false,
			// internal status
			pageLoaded: false,
			csrfToken: null,
			loadTime: null,
			lastEditTime: null,
			pageID: null,
			contentModel: null,
			revertCurID: null,
			revertUser: null,
			watched: false,
			fullyProtected: false,
			suppressProtectWarning: false,
			conflictRetries: 0,
			retries: 0,
			// callbacks
			onLoadSuccess: null,
			onLoadFailure: null,
			onSaveSuccess: null,
			onSaveFailure: null,
			onLookupCreationSuccess: null,
			onLookupCreationFailure: null,
			onMoveSuccess: null,
			onMoveFailure: null,
			onDeleteSuccess: null,
			onDeleteFailure: null,
			onUndeleteSuccess: null,
			onUndeleteFailure: null,
			onProtectSuccess: null,
			onProtectFailure: null,
			// internal objects
			loadQuery: null,
			loadApi: null,
			saveApi: null,
			lookupCreationApi: null,
			moveApi: null,
			moveProcessApi: null,
			patrolApi: null,
			patrolProcessApi: null,
			deleteApi: null,
			deleteProcessApi: null,
			undeleteApi: null,
			undeleteProcessApi: null,
			protectApi: null,
			protectProcessApi: null,
		};
	}
	/**
	 * Loads the text for the page.
	 *
	 * @param {Function} onSuccess - Callback function which is called when the load has succeeded.
	 * @param {Function} [onFailure] - Callback function which is called when the load fails.
	 */
	load(onSuccess?: ((page: WikiPage) => void) | null, onFailure?: ((page: WikiPage) => void) | null): void {
		this.ctx.onLoadSuccess = onSuccess ?? null;
		this.ctx.onLoadFailure = onFailure || emptyFunction;
		// Need to be able to do something after the page loads
		if (!onSuccess) {
			this.ctx.statusElement.error('Internal error: no onSuccess callback provided to load()!');
			this.ctx.onLoadFailure!(this);
			return;
		}
		this.ctx.loadQuery = {
			action: 'query',
			prop: 'info|revisions',
			inprop: 'watched',
			intestactions: 'edit',
			// can be expanded
			curtimestamp: '',
			meta: 'tokens',
			type: 'csrf',
			titles: this.ctx.pageName,
			format: 'json',
			// don't need rvlimit=1 because we don't need rvstartid here and only one actual rev is returned by default
		};

		if (this.ctx.editMode === 'all') {
			this.ctx.loadQuery.rvprop = 'content|timestamp'; // get the page content at the same time, if needed
		} else if (this.ctx.editMode === 'revert') {
			this.ctx.loadQuery.rvprop = 'timestamp';
			this.ctx.loadQuery.rvlimit = 1;
			this.ctx.loadQuery.rvstartid = this.ctx.revertOldID;
		}
		if (this.ctx.followRedirect) {
			this.ctx.loadQuery.redirects = ''; // follow all redirects
		}

		if (typeof this.ctx.pageSection === 'number') {
			this.ctx.loadQuery.rvsection = this.ctx.pageSection;
		}
		if (Morebits.userIsSysop) {
			this.ctx.loadQuery.inprop += '|protection';
		}
		this.ctx.loadApi = new Morebits.wiki.api(
			uls('抓取页面……', '抓取頁面……'),
			this.ctx.loadQuery,
			this.fnLoadSuccess,
			this.ctx.statusElement,
			this.ctx.onLoadFailure as unknown as ((apiobj: WikiApi) => void) | null
		);
		this.ctx.loadApi.setParent(this);
		this.ctx.loadApi.post();
	}
	/**
	 * Saves the text for the page to Wikipedia.
	 * Must be preceded by successfully calling `load()`.
	 *
	 * Warning: Calling `save()` can result in additional calls to the
	 * previous `load()` callbacks to recover from edit conflicts! In this
	 * case, callers must make the same edit to the new pageText and
	 * re-invoke `save()`.  This behavior can be disabled with
	 * `setMaxConflictRetries(0)`.
	 *
	 * @param {Function} [onSuccess] - Callback function which is called when the save has succeeded.
	 * @param {Function} [onFailure] - Callback function which is called when the save fails.
	 */
	save(onSuccess?: ((page: WikiPage) => void) | null, onFailure?: ((page: WikiPage) => void) | null): void {
		this.ctx.onSaveSuccess = onSuccess ?? null;
		this.ctx.onSaveFailure = onFailure || emptyFunction;
		// are we getting our editing token from mw.user.tokens?
		const canUseMwUserToken = this.fnCanUseMwUserToken('edit');
		if (!this.ctx.pageLoaded && !canUseMwUserToken) {
			this.ctx.statusElement.error('Internal error: attempt to save a page that has not been loaded!');
			this.ctx.onSaveFailure!(this);
			return;
		}
		if (!this.ctx.editSummary) {
			// new section mode allows (nay, encourages) using the
			// title as the edit summary, but the query needs
			// editSummary to be undefined or '', not null
			if (this.ctx.editMode === 'new' && this.ctx.newSectionTitle) {
				this.ctx.editSummary = '';
			} else {
				this.ctx.statusElement.error('Internal error: edit summary not set before save!');
				this.ctx.onSaveFailure!(this);
				return;
			}
		}
		// shouldn't happen if canUseMwUserToken === true
		if (
			this.ctx.fullyProtected &&
			!this.ctx.suppressProtectWarning &&
			!confirm(
				this.ctx.fullyProtected === 'infinity'
					? uls('您即将编辑全保护页面“', '您即將編輯全保護頁面「') +
							this.ctx.pageName +
							uls(
								'”（无限期）。\n\n单击确定以确定，或单击取消以取消操作。',
								'」（無限期）。\n\n點擊確定以確定，或點擊取消以取消操作。'
							)
					: `${
							uls('您即将编辑全保护页面“', '您即將編輯全保護頁面「') +
							this.ctx.pageName +
							uls('”（到期：', '」（到期：') +
							new Morebits.date(this.ctx.fullyProtected as string).calendar('utc')
						} (UTC)）。\n\n${uls(
							'单击确定以确定，或单击取消以取消操作。',
							'點擊確定以確定，或點擊取消以取消操作。'
						)}`
			)
		) {
			this.ctx.statusElement.error(uls('已取消对全保护页面的编辑。', '已取消對全保護頁面的編輯。'));
			this.ctx.onSaveFailure!(this);
			return;
		}
		this.ctx.retries = 0;
		const query: WikiPageSaveQuery = {
			action: 'edit',
			title: this.ctx.pageName,
			summary: this.ctx.editSummary,
			token: canUseMwUserToken ? mw.user.tokens.get('csrfToken') : this.ctx.csrfToken,
			watchlist: this.ctx.watchlistOption,
			format: 'json',
		};
		if (this.ctx.changeTags) {
			query.tags = this.ctx.changeTags;
		}
		if (this.fnApplyWatchlistExpiry()) {
			query.watchlistexpiry = this.ctx.watchlistExpiry;
		}
		if (typeof this.ctx.pageSection === 'number') {
			query.section = this.ctx.pageSection;
		}
		// Set minor edit attribute. If these parameters are present with any value, it is interpreted as true
		if (this.ctx.minorEdit) {
			query.minor = true;
		} else {
			query.notminor = true; // force Twinkle config to override user preference setting for "all edits are minor"
		}
		// Set bot edit attribute. If this parameter is present with any value, it is interpreted as true
		if (this.ctx.botEdit) {
			query.bot = true;
		}
		switch (this.ctx.editMode) {
			case 'append':
				if (this.ctx.appendText === null) {
					this.ctx.statusElement.error('Internal error: append text not set before save!');
					this.ctx.onSaveFailure!(this);
					return;
				}
				query.appendtext = this.ctx.appendText; // use mode to append to current page contents
				break;
			case 'prepend':
				if (this.ctx.prependText === null) {
					this.ctx.statusElement.error('Internal error: prepend text not set before save!');
					this.ctx.onSaveFailure!(this);
					return;
				}
				query.prependtext = this.ctx.prependText; // use mode to prepend to current page contents
				break;
			case 'new':
				if (!this.ctx.newSectionText) {
					// API doesn't allow empty new section text
					this.ctx.statusElement.error('Internal error: new section text not set before save!');
					this.ctx.onSaveFailure!(this);
					return;
				}
				query.section = 'new';
				query.text = this.ctx.newSectionText; // add a new section to current page
				query.sectiontitle = this.ctx.newSectionTitle || this.ctx.editSummary; // done by the API, but non-'' values would get treated as text
				break;
			case 'revert':
				query.undo = this.ctx.revertCurID;
				query.undoafter = this.ctx.revertOldID;
				if (this.ctx.lastEditTime) {
					query.basetimestamp = this.ctx.lastEditTime; // check that page hasn't been edited since it was loaded
				}

				query.starttimestamp = this.ctx.loadTime; // check that page hasn't been deleted since it was loaded (don't recreate bad stuff)
				break;
			default:
				// 'all'
				query.text = this.ctx.pageText; // replace entire contents of the page
				if (this.ctx.lastEditTime) {
					query.basetimestamp = this.ctx.lastEditTime; // check that page hasn't been edited since it was loaded
				}

				query.starttimestamp = this.ctx.loadTime; // check that page hasn't been deleted since it was loaded (don't recreate bad stuff)
				break;
		}
		if (this.ctx.createOption !== null && ['recreate', 'createonly', 'nocreate'].includes(this.ctx.createOption)) {
			query[this.ctx.createOption] = '';
		}
		if (canUseMwUserToken && this.ctx.followRedirect) {
			query.redirect = true;
		}
		this.ctx.saveApi = new Morebits.wiki.api(
			uls('保存页面……', '儲存頁面……'),
			query,
			this.fnSaveSuccess,
			this.ctx.statusElement,
			this.fnSaveError
		);
		this.ctx.saveApi.setParent(this);
		this.ctx.saveApi.post();
	}
	/**
	 * Adds the text provided via `setAppendText()` to the end of the
	 * page.  Does not require calling `load()` first, unless a watchlist
	 * expiry is used.
	 *
	 * @param {Function} [onSuccess] - Callback function which is called when the method has succeeded.
	 * @param {Function} [onFailure] - Callback function which is called when the method fails.
	 */
	append(onSuccess?: ((page: WikiPage) => void) | null, onFailure?: ((page: WikiPage) => void) | null): void {
		this.ctx.editMode = 'append';
		if (this.fnCanUseMwUserToken('edit')) {
			this.save(onSuccess, onFailure);
		} else {
			this.ctx.onSaveSuccess = onSuccess ?? null;
			this.ctx.onSaveFailure = onFailure || emptyFunction;
			this.load(this.fnAutoSave, this.ctx.onSaveFailure);
		}
	}
	/**
	 * Adds the text provided via `setPrependText()` to the start of the
	 * page.  Does not require calling `load()` first, unless a watchlist
	 * expiry is used.
	 *
	 * @param {Function}  [onSuccess] - Callback function which is called when the method has succeeded.
	 * @param {Function}  [onFailure] - Callback function which is called when the method fails.
	 */
	prepend(onSuccess?: ((page: WikiPage) => void) | null, onFailure?: ((page: WikiPage) => void) | null): void {
		this.ctx.editMode = 'prepend';
		if (this.fnCanUseMwUserToken('edit')) {
			this.save(onSuccess, onFailure);
		} else {
			this.ctx.onSaveSuccess = onSuccess ?? null;
			this.ctx.onSaveFailure = onFailure || emptyFunction;
			this.load(this.fnAutoSave, this.ctx.onSaveFailure);
		}
	}
	/**
	 * Creates a new section with the text provided by `setNewSectionText()`
	 * and section title from `setNewSectionTitle()`.
	 * If `editSummary` is provided, that will be used instead of the
	 * autogenerated "->Title (new section" edit summary.
	 * Does not require calling `load()` first, unless a watchlist expiry
	 * is used.
	 *
	 * @param {Function}  [onSuccess] - Callback function which is called when the method has succeeded.
	 * @param {Function}  [onFailure] - Callback function which is called when the method fails.
	 */
	newSection(onSuccess?: ((page: WikiPage) => void) | null, onFailure?: ((page: WikiPage) => void) | null): void {
		this.ctx.editMode = 'new';
		if (this.fnCanUseMwUserToken('edit')) {
			this.save(onSuccess, onFailure);
		} else {
			this.ctx.onSaveSuccess = onSuccess ?? null;
			this.ctx.onSaveFailure = onFailure || emptyFunction;
			this.load(this.fnAutoSave, this.ctx.onSaveFailure);
		}
	}
	/** @returns {string} The name of the loaded page, including the namespace */
	getPageName(): string {
		return this.ctx.pageName;
	}
	/** @returns {string} The text of the page after a successful load() */
	getPageText(): string | null {
		return this.ctx.pageText;
	}
	/** @param {string} pageText - Updated page text that will be saved when `save()` is called */
	setPageText(pageText: string): void {
		this.ctx.editMode = 'all';
		this.ctx.pageText = pageText;
	}
	/** @param {string} appendText - Text that will be appended to the page when `append()` is called */
	setAppendText(appendText: string): void {
		this.ctx.editMode = 'append';
		this.ctx.appendText = appendText;
	}
	/** @param {string} prependText - Text that will be prepended to the page when `prepend()` is called */
	setPrependText(prependText: string): void {
		this.ctx.editMode = 'prepend';
		this.ctx.prependText = prependText;
	}
	/** @param {string} newSectionText - Text that will be added in a new section on the page when `newSection()` is called */
	setNewSectionText(newSectionText: string): void {
		this.ctx.editMode = 'new';
		this.ctx.newSectionText = newSectionText;
	}
	/**
	 * @param {string} newSectionTitle - Title for the new section created when `newSection()` is called
	 * If missing, `ctx.editSummary` will be used. Issues may occur if a substituted template is used.
	 */
	setNewSectionTitle(newSectionTitle: string): void {
		this.ctx.editMode = 'new';
		this.ctx.newSectionTitle = newSectionTitle;
	}
	// Edit-related setter methods:
	/**
	 * Set the edit summary that will be used when `save()` is called.
	 * Unnecessary if editMode is 'new' and newSectionTitle is provided.
	 *
	 * @param {string} summary
	 */
	setEditSummary(summary: string): void {
		this.ctx.editSummary = summary;
	}
	/**
	 * Set any custom tag(s) to be applied to the API action.
	 * A number of actions don't support it, most notably watch.
	 *
	 * @param {string|string[]} tags - String or array of tag(s).
	 */
	setChangeTags(tags: string | string[]): void {
		this.ctx.changeTags = tags;
	}
	/**
	 * @param {string} [createOption=null] - Can take the following four values:
	 * - recreate: create the page if it does not exist, or edit it if it exists.
	 * - createonly: create the page if it does not exist, but return an
	 * error if it already exists.
	 * - nocreate: don't create the page, only edit it if it already exists.
	 * - `null`: create the page if it does not exist, unless it was deleted
	 * in the moment between loading the page and saving the edit (default).
	 */
	setCreateOption(createOption?: 'recreate' | 'createonly' | 'nocreate' | null): void {
		this.ctx.createOption = createOption ?? null;
	}
	/** @param {boolean} minorEdit - Set true to mark the edit as a minor edit. */
	setMinorEdit(minorEdit: boolean): void {
		this.ctx.minorEdit = minorEdit;
	}
	/** @param {boolean} botEdit - Set true to mark the edit as a bot edit */
	setBotEdit(botEdit: boolean): void {
		this.ctx.botEdit = botEdit;
	}
	/**
	 * @param {number} pageSection - Integer specifying the section number to load or save.
	 * If specified as `null`, the entire page will be retrieved.
	 */
	setPageSection(pageSection: number | null): void {
		this.ctx.pageSection = pageSection;
	}
	/**
	 * @param {number} maxConflictRetries - Number of retries for save errors involving an edit conflict or
	 * loss of token. Default: 2.
	 */
	setMaxConflictRetries(maxConflictRetries: number): void {
		this.ctx.maxConflictRetries = maxConflictRetries;
	}
	/**
	 * @param {number} maxRetries - Number of retries for save errors not involving an edit conflict or
	 * loss of token. Default: 2.
	 */
	setMaxRetries(maxRetries: number): void {
		this.ctx.maxRetries = maxRetries;
	}
	/**
	 * Set whether and how to watch the page, including setting an expiry.
	 *
	 * @param {boolean|string|Morebits.date|Date} [watchlistOption=false] -
	 * Basically a mix of MW API and Twinkley options available pre-expiry:
	 * - `true`|`'yes'`|`'watch'`: page will be added to the user's
	 * watchlist when the action is called. Defaults to an indefinite
	 * watch unless `watchlistExpiry` is provided.
	 * - `false`|`'no'`|`'nochange'`: watchlist status of the page (including expiry) will not be changed.
	 * - `'default'`|`'preferences'`: watchlist status of the page will be
	 * set based on the user's preference settings when the action is
	 * called. Defaults to an indefinite watch unless `watchlistExpiry` is
	 * provided.
	 * - `'unwatch'`: explicitly unwatch the page.
	 * - Any other `string` or `number`, or a `Morebits.date` or `Date`
	 * object: watch page until the specified time, deferring to
	 * `watchlistExpiry` if provided.
	 * @param {string|number|Morebits.date|Date} [watchlistExpiry=infinity] -
	 * A date-like string or number, or a date object.  If a string or number,
	 * can be relative (2 weeks) or other similarly date-like (i.e. NOT "potato"):
	 * ISO 8601: 2038-01-09T03:14:07Z
	 * MediaWiki: 20380109031407
	 * UNIX: 2147483647
	 * SQL: 2038-01-09 03:14:07
	 * Can also be `infinity` or infinity-like (`infinite`, `indefinite`, and `never`).
	 * See {@link https://phabricator.wikimedia.org/source/mediawiki-libs-Timestamp/browse/master/src/ConvertibleTimestamp.php;4e53b859a9580c55958078f46dd4f3a44d0fcaa0$57-109?as=source&blame=off}
	 */
	setWatchlist(
		watchlistOption?: boolean | string | number | InstanceType<MorebitsNamespace['date']> | Date,
		watchlistExpiry?: string | number | InstanceType<MorebitsNamespace['date']> | Date
	): void {
		if (watchlistOption instanceof Morebits.date || watchlistOption instanceof Date) {
			watchlistOption = watchlistOption.toISOString();
		}
		if (watchlistExpiry === undefined) {
			watchlistExpiry = 'infinity';
		} else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
			watchlistExpiry = watchlistExpiry.toISOString();
		}
		switch (watchlistOption) {
			case 'nochange':
			case 'no':
			case false:
			case undefined:
				this.ctx.watchlistOption = 'nochange';
				// The MW API allows for changing expiry with nochange (as "nochange" refers to the binary status),
				// but by keeping this null it will default to any existing expiry, ensure there is actually "no change."
				this.ctx.watchlistExpiry = null;
				break;
			case 'unwatch':
				// expiry unimportant
				this.ctx.watchlistOption = 'unwatch';
				break;
			case 'preferences':
			case 'default':
				this.ctx.watchlistOption = 'preferences';
				// The API allows an expiry here, but there is as of yet (T265716)
				// no expiry preference option, so it's a bit devoid of context.
				this.ctx.watchlistExpiry = watchlistExpiry;
				break;
			case 'watch':
			case 'yes':
			case true:
				this.ctx.watchlistOption = 'watch';
				this.ctx.watchlistExpiry = watchlistExpiry;
				break;
			default:
				// Not really a "default" per se but catches "any other string"
				this.ctx.watchlistOption = 'watch';
				this.ctx.watchlistExpiry = watchlistOption;
				break;
		}
	}
	/**
	 * Set a watchlist expiry. setWatchlist can mostly handle this by
	 * itself, so this is here largely for completeness and compatibility
	 * with the full suite of options.
	 *
	 * @param {string|number|Morebits.date|Date} [watchlistExpiry=infinity] -
	 * A date-like string or number, or a date object.  If a string or number,
	 * can be relative (2 weeks) or other similarly date-like (i.e. NOT "potato"):
	 * ISO 8601: 2038-01-09T03:14:07Z
	 * MediaWiki: 20380109031407
	 * UNIX: 2147483647
	 * SQL: 2038-01-09 03:14:07
	 * Can also be `infinity` or infinity-like (`infinite`, `indefinite`, and `never`).
	 * See {@link https://phabricator.wikimedia.org/source/mediawiki-libs-Timestamp/browse/master/src/ConvertibleTimestamp.php;4e53b859a9580c55958078f46dd4f3a44d0fcaa0$57-109?as=source&blame=off}
	 */
	setWatchlistExpiry(watchlistExpiry?: string | number | InstanceType<MorebitsNamespace['date']> | Date): void {
		if (watchlistExpiry === undefined) {
			watchlistExpiry = 'infinity';
		} else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
			watchlistExpiry = watchlistExpiry.toISOString();
		}
		this.ctx.watchlistExpiry = watchlistExpiry;
	}
	/**
	 * @deprecated As of December 2020, use setWatchlist.
	 * @param {boolean} [watchlistOption=false] -
	 * - `True`: page watchlist status will be set based on the user's
	 * preference settings when `save()` is called.
	 * - `False`: watchlist status of the page will not be changed.
	 *
	 * Watchlist notes:
	 * 1. The MediaWiki API value of 'unwatch', which explicitly removes
	 * the page from the user's watchlist, is not used.
	 * 2. If both `setWatchlist()` and `setWatchlistFromPreferences()` are
	 * called, the last call takes priority.
	 * 3. Twinkle modules should use the appropriate preference to set the watchlist options.
	 * 4. Most Twinkle modules use `setWatchlist()`. `setWatchlistFromPreferences()`
	 * is only needed for the few Twinkle watchlist preferences that
	 * accept a string value of `default`.
	 */
	setWatchlistFromPreferences(watchlistOption?: boolean): void {
		console.warn(
			'[Morebits] NOTE: Morebits.wiki.page.setWatchlistFromPreferences was deprecated December 2020, please use setWatchlist'
		);
		if (watchlistOption) {
			this.ctx.watchlistOption = 'preferences';
		} else {
			this.ctx.watchlistOption = 'nochange';
		}
	}
	/**
	 * @param {boolean} [followRedirect=false] -
	 * - `true`: a maximum of one redirect will be followed. In the event
	 * of a redirect, a message is displayed to the user and the redirect
	 * target can be retrieved with getPageName().
	 * - `false`: (default) the requested pageName will be used without regard to any redirect.
	 * @param {boolean} [followCrossNsRedirect=true] - Not applicable if `followRedirect` is not set true.
	 * - `true`: (default) follow redirect even if it is a cross-namespace redirect
	 * - `false`: don't follow redirect if it is cross-namespace, edit the redirect itself.
	 */
	setFollowRedirect(followRedirect?: boolean, followCrossNsRedirect?: boolean): void {
		if (this.ctx.pageLoaded) {
			this.ctx.statusElement.error(
				'Internal error: cannot change redirect setting after the page has been loaded!'
			);
			return;
		}
		this.ctx.followRedirect = followRedirect ?? false;
		this.ctx.followCrossNsRedirect =
			followCrossNsRedirect === undefined ? this.ctx.followCrossNsRedirect : followCrossNsRedirect;
	}
	// lookup-creation setter function
	/**
	 * @param {boolean} flag - If set true, the author and timestamp of
	 * the first non-redirect version of the page is retrieved.
	 *
	 * Warning:
	 * 1. If there are no revisions among the first 50 that are
	 * non-redirects, or if there are less 50 revisions and all are
	 * redirects, the original creation is retrieved.
	 * 2. Revisions that the user is not privileged to access
	 * (revdeled/suppressed) will be treated as non-redirects.
	 * 3. Must not be used when the page has a non-wikitext contentmodel
	 * such as Modulespace Lua or user JavaScript/CSS.
	 */
	setLookupNonRedirectCreator(flag: boolean): void {
		this.ctx.lookupNonRedirectCreator = flag;
	}
	// Move-related setter functions
	/** @param {string} destination */
	setMoveDestination(destination: string): void {
		this.ctx.moveDestination = destination;
	}
	/** @param {boolean} flag */
	setMoveTalkPage(flag: boolean): void {
		this.ctx.moveTalkPage = !!flag;
	}
	/** @param {boolean} flag */
	setMoveSubpages(flag: boolean): void {
		this.ctx.moveSubpages = !!flag;
	}
	/** @param {boolean} flag */
	setMoveSuppressRedirect(flag: boolean): void {
		this.ctx.moveSuppressRedirect = !!flag;
	}
	// Protect-related setter functions
	/**
	 * @param {string} level - The right required for the specific action
	 * e.g. sysop, templateeditor, autoconfirmed
	 * @param {string} [expiry=infinity]
	 */
	setEditProtection(level: string, expiry?: string): void {
		this.ctx.protectEdit = {
			level,
			expiry: expiry || 'infinity',
		};
	}
	setMoveProtection(level: string, expiry?: string): void {
		this.ctx.protectMove = {
			level,
			expiry: expiry || 'infinity',
		};
	}
	setCreateProtection(level: string, expiry?: string): void {
		this.ctx.protectCreate = {
			level,
			expiry: expiry || 'infinity',
		};
	}
	setCascadingProtection(flag: boolean): void {
		this.ctx.protectCascade = !!flag;
	}
	suppressProtectWarning(): void {
		this.ctx.suppressProtectWarning = true;
	}
	// Revert-related getters/setters:
	setOldID(oldID: string): void {
		this.ctx.revertOldID = oldID;
	}
	/** @returns {string} The current revision ID of the page */
	getCurrentID(): number | null {
		return this.ctx.revertCurID;
	}
	/** @returns {string} Last editor of the page */
	getRevisionUser(): string | null {
		return this.ctx.revertUser;
	}
	/** @returns {string} ISO 8601 timestamp at which the page was last edited. */
	getLastEditTime(): string | null {
		return this.ctx.lastEditTime;
	}
	// Miscellaneous getters/setters:
	/**
	 * Define an object for use in a callback function.
	 *
	 * `callbackParameters` is for use by the caller only. The parameters
	 * allow a caller to pass the proper context into its callback
	 * function.  Callers must ensure that any changes to the
	 * callbackParameters object within a `load()` callback still permit a
	 * proper re-entry into the `load()` callback if an edit conflict is
	 * detected upon calling `save()`.
	 *
	 * @param {Object} callbackParameters
	 */
	setCallbackParameters(callbackParameters: unknown): void {
		this.ctx.callbackParameters = callbackParameters;
	}
	/**
	 * @returns {Object} - The object previously set by `setCallbackParameters()`.
	 */
	getCallbackParameters(): unknown {
		return this.ctx.callbackParameters;
	}
	/**
	 * @param {Morebits.status} statusElement
	 */
	setStatusElement(statusElement: StatusElement): void {
		this.ctx.statusElement = statusElement;
	}
	/**
	 * @returns {Morebits.status} Status element created by the constructor.
	 */
	getStatusElement(): StatusElement {
		return this.ctx.statusElement;
	}
	/**
	 * @returns {boolean} True if the page existed on the wiki when it was last loaded.
	 */
	exists(): boolean {
		return this.ctx.pageExists;
	}
	/**
	 * @returns {string} Page ID of the page loaded. 0 if the page doesn't
	 * exist.
	 */
	getPageID(): number | null {
		return this.ctx.pageID;
	}
	/**
	 * @returns {string} - Content model of the page.  Possible values
	 * include (but may not be limited to): `wikitext`, `javascript`,
	 * `css`, `json`, `Scribunto`, `sanitized-css`, `MassMessageListContent`.
	 * Also gettable via `mw.config.get('wgPageContentModel')`.
	 */
	getContentModel(): string | null {
		return this.ctx.contentModel;
	}
	/**
	 * @returns {boolean|string} - Watched status of the page. Boolean
	 * unless it's being watched temporarily, in which case returns the
	 * expiry string.
	 */
	getWatched(): boolean | string {
		return this.ctx.watched;
	}
	/**
	 * @returns {string} ISO 8601 timestamp at which the page was last loaded.
	 */
	getLoadTime(): string | null {
		return this.ctx.loadTime;
	}
	/**
	 * @returns {string} The user who created the page following `lookupCreation()`.
	 */
	getCreator(): string | null {
		return this.ctx.creator;
	}
	/**
	 * @returns {string} The ISOString timestamp of page creation following `lookupCreation()`.
	 */
	getCreationTimestamp(): string | null {
		return this.ctx.timestamp;
	}
	/** @returns {boolean} whether or not you can edit the page */
	canEdit(): boolean {
		return !!this.ctx.testActions && this.ctx.testActions.includes('edit');
	}
	/**
	 * Retrieves the username of the user who created the page as well as
	 * the timestamp of creation.  The username can be retrieved using the
	 * `getCreator()` function; the timestamp can be retrieved using the
	 * `getCreationTimestamp()` function.
	 * Prior to June 2019 known as `lookupCreator()`.
	 *
	 * @param {Function} onSuccess - Callback function to be called when
	 * the username and timestamp are found within the callback.
	 * @param {Function} [onFailure] - Callback function to be called when
	 * the lookup fails
	 */
	lookupCreation(onSuccess?: ((page: WikiPage) => void) | null, onFailure?: ((page: WikiPage) => void) | null): void {
		this.ctx.onLookupCreationSuccess = onSuccess ?? null;
		this.ctx.onLookupCreationFailure = onFailure || emptyFunction;
		if (!onSuccess) {
			this.ctx.statusElement.error('Internal error: no onSuccess callback provided to lookupCreation()!');
			this.ctx.onLookupCreationFailure!(this);
			return;
		}
		const query: WikiPageLookupCreationQuery = {
			action: 'query',
			prop: 'revisions',
			titles: this.ctx.pageName,
			rvlimit: 1,
			rvprop: 'user|timestamp',
			rvdir: 'newer',
			format: 'json',
		};
		// Only the wikitext content model can reliably handle
		// rvsection, others return an error when paired with the
		// content rvprop. Relatedly, non-wikitext models don't
		// understand the #REDIRECT concept, so we shouldn't attempt
		// the redirect resolution in fnLookupCreationSuccess
		if (this.ctx.lookupNonRedirectCreator) {
			query.rvsection = 0;
			query.rvprop += '|content';
		}
		if (this.ctx.followRedirect) {
			query.redirects = ''; // follow all redirects
		}

		this.ctx.lookupCreationApi = new Morebits.wiki.api(
			uls('抓取页面创建者信息', '抓取頁面建立者資訊'),
			query,
			this.fnLookupCreationSuccess,
			this.ctx.statusElement,
			this.ctx.onLookupCreationFailure as unknown as ((apiobj: WikiApi) => void) | null
		);
		this.ctx.lookupCreationApi.setParent(this);
		this.ctx.lookupCreationApi.post();
	}
	/**
	 * Reverts a page to `revertOldID` set by `setOldID`.
	 *
	 * @param {Function} [onSuccess] - Callback function to run on success.
	 * @param {Function} [onFailure] - Callback function to run on failure.
	 */
	revert(onSuccess?: ((page: WikiPage) => void) | null, onFailure?: ((page: WikiPage) => void) | null): void {
		this.ctx.onSaveSuccess = onSuccess ?? null;
		this.ctx.onSaveFailure = onFailure || emptyFunction;
		if (!this.ctx.revertOldID) {
			this.ctx.statusElement.error('Internal error: revision ID to revert to was not set before revert!');
			this.ctx.onSaveFailure!(this);
			return;
		}
		this.ctx.editMode = 'revert';
		this.load(this.fnAutoSave, this.ctx.onSaveFailure);
	}
	/**
	 * Moves a page to another title.
	 *
	 * @param {Function} [onSuccess] - Callback function to run on success.
	 * @param {Function} [onFailure] - Callback function to run on failure.
	 */
	move(onSuccess?: ((page: WikiPage) => void) | null, onFailure?: ((page: WikiPage) => void) | null): void {
		this.ctx.onMoveSuccess = onSuccess ?? null;
		this.ctx.onMoveFailure = onFailure || emptyFunction;
		if (!this.fnPreflightChecks('move', this.ctx.onMoveFailure)) {
			return; // abort
		}

		if (!this.ctx.moveDestination) {
			this.ctx.statusElement.error('Internal error: destination page name was not set before move!');
			this.ctx.onMoveFailure!(this);
			return;
		}
		if (this.fnCanUseMwUserToken('move')) {
			this.fnProcessMove();
		} else {
			const query = this.fnNeedTokenInfoQuery('move');
			this.ctx.moveApi = new Morebits.wiki.api(
				uls('获取令牌……', '取得權杖……'),
				query,
				this.fnProcessMove,
				this.ctx.statusElement,
				this.ctx.onMoveFailure as unknown as ((apiobj: WikiApi) => void) | null
			);
			this.ctx.moveApi.setParent(this);
			this.ctx.moveApi.post();
		}
	}
	/**
	 * Marks the page as patrolled, using `rcid` (if available) or `revid`.
	 *
	 * Patrolling as such doesn't need to rely on loading the page in
	 * question; simply passing a revid to the API is sufficient, so in
	 * those cases just using {@link Morebits.wiki.api} is probably preferable.
	 *
	 * No error handling since we don't actually care about the errors.
	 */
	patrol(): void {
		if (!Morebits.userIsSysop && !Morebits.userIsInGroup('patroller')) {
			return;
		}
		const $body = $('body');
		// If a link is present, don't need to check if it's patrolled
		if ($body.find('.patrollink').length) {
			const patrolhref = $body.find('.patrollink a').attr('href');
			this.ctx.rcid = mw.util.getParamValue('rcid', patrolhref);
			this.fnProcessPatrol();
		} else {
			const patrolQuery = {
				action: 'query',
				prop: 'info',
				meta: 'tokens',
				type: 'patrol',
				// as long as we're querying, might as well get a token
				list: 'recentchanges',
				// check if the page is unpatrolled
				titles: this.ctx.pageName,
				rcprop: 'patrolled',
				rctitle: this.ctx.pageName,
				rclimit: 1,
				format: 'json',
			};
			this.ctx.patrolApi = new Morebits.wiki.api(
				uls('获取令牌……', '取得權杖……'),
				patrolQuery,
				this.fnProcessPatrol
			);
			this.ctx.patrolApi.setParent(this);
			this.ctx.patrolApi.post();
		}
	}
	// |delete| is a reserved word in some flavours of JS
	/**
	 * Deletes a page (for admins only).
	 *
	 * @param {Function} [onSuccess] - Callback function to run on success.
	 * @param {Function} [onFailure] - Callback function to run on failure.
	 */
	deletePage(onSuccess?: ((page: WikiPage) => void) | null, onFailure?: ((page: WikiPage) => void) | null): void {
		this.ctx.onDeleteSuccess = onSuccess ?? null;
		this.ctx.onDeleteFailure = onFailure || emptyFunction;
		if (!this.fnPreflightChecks('delete', this.ctx.onDeleteFailure)) {
			return; // abort
		}

		if (this.fnCanUseMwUserToken('delete')) {
			this.fnProcessDelete();
		} else {
			const query = this.fnNeedTokenInfoQuery('delete');
			this.ctx.deleteApi = new Morebits.wiki.api(
				uls('获取令牌……', '取得權杖……'),
				query,
				this.fnProcessDelete,
				this.ctx.statusElement,
				this.ctx.onDeleteFailure as unknown as ((apiobj: WikiApi) => void) | null
			);
			this.ctx.deleteApi.setParent(this);
			this.ctx.deleteApi.post();
		}
	}
	/**
	 * Undeletes a page (for admins only).
	 *
	 * @param {Function} [onSuccess] - Callback function to run on success.
	 * @param {Function} [onFailure] - Callback function to run on failure.
	 */
	undeletePage(onSuccess?: ((page: WikiPage) => void) | null, onFailure?: ((page: WikiPage) => void) | null): void {
		this.ctx.onUndeleteSuccess = onSuccess ?? null;
		this.ctx.onUndeleteFailure = onFailure || emptyFunction;
		if (!this.fnPreflightChecks('undelete', this.ctx.onUndeleteFailure)) {
			return; // abort
		}

		if (this.fnCanUseMwUserToken('undelete')) {
			this.fnProcessUndelete();
		} else {
			const query = this.fnNeedTokenInfoQuery('undelete');
			this.ctx.undeleteApi = new Morebits.wiki.api(
				uls('获取令牌……', '取得權杖……'),
				query,
				this.fnProcessUndelete,
				this.ctx.statusElement,
				this.ctx.onUndeleteFailure as unknown as ((apiobj: WikiApi) => void) | null
			);
			this.ctx.undeleteApi.setParent(this);
			this.ctx.undeleteApi.post();
		}
	}
	/**
	 * Protects a page (for admins only).
	 *
	 * @param {Function} [onSuccess] - Callback function to run on success.
	 * @param {Function} [onFailure] - Callback function to run on failure.
	 */
	protect(onSuccess?: ((page: WikiPage) => void) | null, onFailure?: ((page: WikiPage) => void) | null): void {
		this.ctx.onProtectSuccess = onSuccess ?? null;
		this.ctx.onProtectFailure = onFailure || emptyFunction;
		if (!this.fnPreflightChecks('protect', this.ctx.onProtectFailure)) {
			return; // abort
		}

		if (!this.ctx.protectEdit && !this.ctx.protectMove && !this.ctx.protectCreate) {
			this.ctx.statusElement.error(
				'Internal error: you must set edit and/or move and/or create protection before calling protect()!'
			);
			this.ctx.onProtectFailure!(this);
			return;
		}
		// because of the way MW API interprets protection levels
		// (absolute, not differential), we always need to request
		// protection levels from the server
		const query = this.fnNeedTokenInfoQuery('protect');
		this.ctx.protectApi = new Morebits.wiki.api(
			uls('获取令牌……', '取得權杖……'),
			query,
			this.fnProcessProtect,
			this.ctx.statusElement,
			this.ctx.onProtectFailure as unknown as ((apiobj: WikiApi) => void) | null
		);
		this.ctx.protectApi.setParent(this);
		this.ctx.protectApi.post();
	}

	/*
	 * Private member functions
	 * These are not exposed outside
	 */
	/**
	 * Determines whether we can save an API call by using the csrf token
	 * sent with the page HTML, or whether we need to ask the server for
	 * more info (e.g. protection or watchlist expiry).
	 *
	 * Currently used for `append`, `prepend`, `newSection`, `move`,
	 * `deletePage`, and `undeletePage`. Not used for `protect`
	 * since it always needs to request protection status.
	 *
	 * @param {string} [action=edit] - The action being undertaken, e.g.
	 * "edit" or "delete". In practice, only "edit" or "notedit" matters.
	 * @returns {boolean}
	 */
	private fnCanUseMwUserToken = (action?: string): boolean => {
		action ||= 'edit';
		// If a watchlist expiry is set, we must always load the page
		// to avoid overwriting indefinite protection.  Of course, not
		// needed if setting indefinite watching!
		if (this.ctx.watchlistExpiry && !Morebits.string.isInfinity(String(this.ctx.watchlistExpiry))) {
			return false;
		}
		// API-based redirect resolution only works for action=query and
		// action=edit in append/prepend/new modes
		if (this.ctx.followRedirect) {
			if (!this.ctx.followCrossNsRedirect) {
				return false; // must load the page to check for cross namespace redirects
			}

			if (action !== 'edit' || this.ctx.editMode === 'all' || this.ctx.editMode === 'revert') {
				return false;
			}
		}
		// do we need to fetch the edit protection expiry?
		if (Morebits.userIsSysop && !this.ctx.suppressProtectWarning) {
			if (
				new mw.Title(Morebits.pageNameNorm).getPrefixedText() !==
				new mw.Title(this.ctx.pageName).getPrefixedText()
			) {
				return false;
			}
			// wgRestrictionEdit is null on non-existent pages,
			// so this neatly handles nonexistent pages
			const editRestriction = mw.config.get('wgRestrictionEdit');
			if (!editRestriction || editRestriction.includes('sysop')) {
				return false;
			}
		}
		return !!mw.user.tokens.get('csrfToken');
	};
	/**
	 * When functions can't use
	 * {@link Morebits.wiki.page~fnCanUseMwUserToken|fnCanUseMwUserToken}
	 * or require checking protection or watched status, maintain the query
	 * in one place. Used for {@link Morebits.wiki.page#deletePage|delete},
	 * {@link Morebits.wiki.page#undeletePage|undelete},
	 * {@link* Morebits.wiki.page#protect|protect},
	 * and {@link Morebits.wiki.page#move|move}
	 * (basically, just not {@link Morebits.wiki.page#load|load}).
	 *
	 * @param {string} action - The action being undertaken, e.g. "edit" or
	 * "delete".
	 * @returns {Object} Appropriate query.
	 */
	private fnNeedTokenInfoQuery = (action: string): WikiPagePrivateQuery => {
		const query: WikiPagePrivateQuery = {
			action: 'query',
			meta: 'tokens',
			type: 'csrf',
			titles: this.ctx.pageName,
			prop: 'info',
			inprop: 'watched',
			format: 'json',
		};
		// Protection not checked for non-sysop moves
		if (action !== 'move' || Morebits.userIsSysop) {
			query.inprop += '|protection';
		}
		if (this.ctx.followRedirect && action !== 'undelete') {
			query.redirects = ''; // follow all redirects
		}

		return query;
	};
	// callback from loadSuccess() for append(), prepend(), and newSection() threads
	private fnAutoSave = (pageobj: WikiPage): void => {
		pageobj.save(this.ctx.onSaveSuccess!, this.ctx.onSaveFailure!);
	};
	// callback from loadApi.post()
	private fnLoadSuccess = (): void => {
		const response = (this.ctx.loadApi!.getResponse() as WikiPageApiResponse).query;
		if (!this.fnCheckPageName(response, this.ctx.onLoadFailure!)) {
			return; // abort
		}

		const [page] = response.pages;
		let rev: WikiPageApiRevision | undefined;
		this.ctx.pageExists = !page.missing;
		if (this.ctx.pageExists) {
			[rev] = page.revisions;
			this.ctx.lastEditTime = rev.timestamp;
			this.ctx.pageText = rev.content;
			this.ctx.pageID = page.pageid;
		} else {
			this.ctx.pageText = ''; // allow for concatenation, etc.
			this.ctx.pageID = 0; // nonexistent in response, matches wgArticleId
		}

		this.ctx.csrfToken = response.tokens.csrftoken;
		if (!this.ctx.csrfToken) {
			this.ctx.statusElement.error(uls('未能获取编辑令牌。', '未能取得編輯權杖。'));
			this.ctx.onLoadFailure!(this);
			return;
		}
		this.ctx.loadTime = (this.ctx.loadApi!.getResponse() as WikiPageApiResponse).curtimestamp;
		if (!this.ctx.loadTime) {
			this.ctx.statusElement.error(uls('未能获取当前时间戳。', '未能取得當前時間戳。'));
			this.ctx.onLoadFailure!(this);
			return;
		}
		this.ctx.contentModel = page.contentmodel;
		this.ctx.watched = page.watchlistexpiry || page.watched || false;
		// extract protection info, to alert admins when they are about to edit a protected page
		// Includes cascading protection
		if (Morebits.userIsSysop) {
			const editProt = page.protection.findLast((pr) => {
				return pr.type === 'edit' && pr.level === 'sysop';
			});
			if (editProt) {
				this.ctx.fullyProtected = editProt.expiry;
			} else {
				this.ctx.fullyProtected = false;
			}
		}
		this.ctx.revertCurID = page.lastrevid ?? null;
		const testactions = page.actions;
		this.ctx.testActions = []; // was null
		for (const action of Object.keys(testactions ?? {})) {
			if (testactions?.[action]) {
				this.ctx.testActions[this.ctx.testActions.length] = action;
			}
		}
		if (this.ctx.editMode === 'revert') {
			this.ctx.revertCurID = (rev && rev.revid) || null;
			if (!this.ctx.revertCurID) {
				this.ctx.statusElement.error(uls('未能获取当前修订版本ID。', '未能取得目前修訂版本ID。'));
				this.ctx.onLoadFailure!(this);
				return;
			}
			this.ctx.revertUser = (rev && rev.user) || null;
			if (!this.ctx.revertUser) {
				if (rev && rev.userhidden) {
					// username was RevDel'd or oversighted
					this.ctx.revertUser = uls('<用户名已隐藏>', '<使用者名稱已隱藏>');
				} else {
					this.ctx.statusElement.error(uls('未能获取此修订版本的编辑者。', '未能取得此修訂版本的編輯者。'));
					this.ctx.onLoadFailure!(this);
					return;
				}
			}
			// set revert edit summary
			this.ctx.editSummary = `[[QW:UNDO|撤销]]由 ${this.ctx.revertUser} 所做出的${uls('修订 ', '修訂 ')}${
				this.ctx.revertOldID
			}：${this.ctx.editSummary}`;
		}
		this.ctx.pageLoaded = true;
		// mw.notify("Generate edit conflict now", {type: 'warn', tag: 'morebits'});  // for testing edit conflict recovery logic
		this.ctx.onLoadSuccess!(this); // invoke callback
	};
	// helper function to parse the page name returned from the API
	private fnCheckPageName = (response: WikiPageApiQuery, onFailure: (page: WikiPage) => void): boolean => {
		const page = response.pages && response.pages[0];
		if (page) {
			// check for invalid titles
			if (page.invalid) {
				this.ctx.statusElement.error(uls('标题不合法：', `標題不合法：${this.ctx.pageName}`));
				onFailure(this);
				return false; // abort
			}
			// retrieve actual title of the page after normalization and redirects
			const resolvedName = page.title;
			if (response.redirects) {
				// check for cross-namespace redirect:
				const origNs = new mw.Title(this.ctx.pageName).getNamespaceId();
				const newNs = new mw.Title(resolvedName).getNamespaceId();
				if (origNs !== newNs && !this.ctx.followCrossNsRedirect) {
					this.ctx.statusElement.error(
						this.ctx.pageName +
							uls('是跨命名空间重定向到', '是跨命名空間重新導向到') +
							resolvedName +
							uls('，略过', '，略過')
					);
					onFailure(this);
					return false;
				}
				// only notify user for redirects, not normalization
				new Morebits.status(
					uls('信息', '資訊'),
					uls('从 ', '從 ') + this.ctx.pageName + uls(' 重定向到 ', ' 重新導向到 ') + resolvedName
				);
			}
			this.ctx.pageName = resolvedName; // update to redirect target or normalized name
		} else {
			// could be a circular redirect or other problem
			this.ctx.statusElement.error(uls('不能解析页面的重定向：', '不能解析頁面的重新導向：') + this.ctx.pageName);
			onFailure(this);
			// force error to stay on the screen
			++Morebits.wiki.numberOfActionsLeft;
			return false; // abort
		}

		return true; // all OK
	};
	/**
	 * Determine whether we should provide a watchlist expiry.  Will not
	 * do so if the page is currently permanently watched, or the current
	 * expiry is *after* the new, provided expiry.  Only handles strings
	 * recognized by {@link Morebits.date} or relative timeframes with
	 * unit it can process.  Relies on the fact that fnCanUseMwUserToken
	 * requires page loading if a watchlistexpiry is provided, so we are
	 * ensured of knowing the watch status by the use of this.
	 *
	 * @returns {boolean}
	 */
	private fnApplyWatchlistExpiry = (): boolean => {
		if (this.ctx.watchlistExpiry) {
			if (!this.ctx.watched || Morebits.string.isInfinity(String(this.ctx.watchlistExpiry))) {
				return true;
			} else if (typeof this.ctx.watched === 'string') {
				let newExpiry: MorebitsDate;
				// Attempt to determine if the new expiry is a
				// relative (e.g. `1 month`) or absolute datetime
				const rel = String(this.ctx.watchlistExpiry).split(' ');
				try {
					newExpiry = new Morebits.date().add(rel[0] ?? '', rel[1] ?? '');
				} catch {
					newExpiry = new Morebits.date(this.ctx.watchlistExpiry);
				}
				// If the date is valid, only use it if it extends the current expiry
				if (newExpiry.isValid()) {
					if (newExpiry.isAfter(new Morebits.date(this.ctx.watched))) {
						return true;
					}
				} else {
					// If it's still not valid, hope it's a valid MW expiry format that
					// Morebits.date doesn't recognize, so just default to using it.
					// This will also include minor typos.
					return true;
				}
			}
		}
		return false;
	};
	// callback from saveApi.post()
	private fnSaveSuccess = (): void => {
		this.ctx.editMode = 'all'; // cancel append/prepend/newSection/revert modes
		const response = this.ctx.saveApi!.getResponse() as unknown as {edit: {result: string; captcha?: unknown}};
		// see if the API thinks we were successful
		if (response.edit.result === 'Success') {
			// real success
			// default on success action - display link for edited page
			const link = document.createElement('a');
			link.setAttribute('href', mw.util.getUrl(this.ctx.pageName));
			link.appendChild(document.createTextNode(this.ctx.pageName));
			this.ctx.statusElement.info(['完成（', link, '）']);
			if (this.ctx.onSaveSuccess) {
				this.ctx.onSaveSuccess!(this); // invoke callback
			}

			return;
		}
		// errors here are only generated by extensions which hook APIEditBeforeSave within MediaWiki,
		// which as of 1.34.0-wmf.23 (Sept 2019) should only encompass captcha messages
		if (response.edit.captcha) {
			this.ctx.statusElement.error(
				uls('不能保存页面，因服务器要求您输入验证码。', '不能儲存頁面，因伺服器要求您輸入驗證碼。')
			);
		} else {
			this.ctx.statusElement.error(uls('保存页面时由API得到未知错误', '儲存頁面時由API得到未知錯誤'));
		}
		// force error to stay on the screen
		++Morebits.wiki.numberOfActionsLeft;
		this.ctx.onSaveFailure!(this);
	};
	// callback from saveApi.post()
	private fnSaveError = (): void => {
		const errorCode = this.ctx.saveApi!.getErrorCode();
		// check for edit conflict
		if (errorCode === 'editconflict' && this.ctx.conflictRetries++ < this.ctx.maxConflictRetries) {
			// edit conflicts can occur when the page needs to be purged from the server cache
			const purgeQuery = {
				action: 'purge',
				titles: this.ctx.pageName, // redirects are already resolved
			};

			const purgeApi = new Morebits.wiki.api(
				uls('检测到编辑冲突，正在更新服务器缓存', '檢測到編輯衝突，正在更新伺服器快取'),
				purgeQuery,
				() => {
					--Morebits.wiki.numberOfActionsLeft; // allow for normal completion if retry succeeds
					this.ctx.statusElement.info(uls('检测到编辑冲突，重试修改', '檢測到編輯衝突，重試修改'));
					if (this.fnCanUseMwUserToken('edit')) {
						this.ctx.saveApi!.post(); // necessarily append, prepend, or newSection, so this should work as desired
					} else {
						this.ctx.loadApi!.post(); // reload the page and reapply the edit
					}
				},
				this.ctx.statusElement
			);
			purgeApi.post();
			// check for network or server error
		} else if ((errorCode === null || errorCode === undefined) && this.ctx.retries++ < this.ctx.maxRetries) {
			// the error might be transient, so try again
			this.ctx.statusElement.info(uls('保存失败，在2秒后重试……', '儲存失敗，在2秒後重試……'));
			--Morebits.wiki.numberOfActionsLeft; // allow for normal completion if retry succeeds
			// wait for sometime for client to regain connectivity
			this.sleep(2000).then(() => {
				this.ctx.saveApi!.post(); // give it another go!
			});
			// hard error, give up
		} else {
			const response = this.ctx.saveApi!.getResponse() as unknown as {
				error?: WikiPageApiErrorData | null;
				errors: {data: WikiPageApiErrorData}[];
			};
			const errorData =
				response.error ||
				// bc error format
				response.errors[0]!.data; // html/wikitext/plaintext error format
			switch (errorCode) {
				case 'protectedpage':
					// non-admin attempting to edit a protected page - this gives a friendlier message than the default
					this.ctx.statusElement.error(uls('不能保存修改：页面被保护', '不能儲存修改：頁面被保護'));
					break;
				case 'abusefilter-disallowed':
					this.ctx.statusElement.error(
						uls('编辑被防滥用过滤器规则“', '編輯被防濫用過濾器規則「') +
							errorData.abusefilter.description +
							uls(
								'”阻止。若您认为您的该次编辑是有意义的，请至 Qiuwen_talk:管理员告示板 提报。',
								'」阻止。若您認為您的該次編輯是有意義的，請至 Qiuwen_talk:管理員告示板 提報。'
							)
					);
					break;
				case 'abusefilter-warning':
					this.ctx.statusElement.error([
						uls('编辑被防滥用过滤器规则“', '編輯被防濫用過濾器規則「'),
						errorData.abusefilter.description,
						uls(
							'”警告，若您仍希望做出该编辑，请尝试重新提交，根据过滤器的设置您可能可以作出此编辑。',
							'」警告，若您仍希望做出該編輯，請嘗試重新提交，根據過濾器的設定您可能可以作出此編輯。'
						),
					]);
					// We should provide the user with a way to automatically retry the action if they so choose -
					// I can't see how to do this without creating a UI dependency on Morebits.wiki.page though -- TTO
					break;
				case 'spamblacklist': {
					// If multiple items are blacklisted, we only return the first
					const [spam] = errorData.spamblacklist.matches;
					this.ctx.statusElement.error(
						uls('不能保存页面，因URL ', '不能儲存頁面，因URL ') +
							spam +
							uls(' 在垃圾链接黑名单中。', ' 在垃圾連結黑名單中。')
					);
					break;
				}
				default:
					this.ctx.statusElement.error(
						uls('不能保存修改：', '不能儲存修改：') + this.ctx.saveApi!.getErrorText()
					);
			}
			this.ctx.editMode = 'all'; // cancel append/prepend/newSection/revert modes
			if (this.ctx.onSaveFailure) {
				this.ctx.onSaveFailure!(this); // invoke callback
			}
		}
	};

	private isTextRedirect = (text: string): boolean => {
		if (!text) {
			// no text - content empty or inaccessible (revdelled or suppressed)
			return false;
		}
		return Morebits.l10n.redirectTagAliases.some((tag) => {
			return new RegExp(`^\\s*${tag}\\W`, 'i').test(text);
		});
	};
	private fnLookupCreationSuccess = (): void => {
		const response = (this.ctx.lookupCreationApi!.getResponse() as WikiPageApiResponse).query;
		if (!this.fnCheckPageName(response, this.ctx.onLookupCreationFailure!)) {
			return; // abort
		}

		const rev = response.pages[0].revisions && response.pages[0].revisions[0];
		if (!rev) {
			this.ctx.statusElement.error(
				uls('无法找到', '無法找到') + this.ctx.pageName + uls('的任何修订版本', '的任何修訂版本')
			);
			this.ctx.onLookupCreationFailure!(this);
			return;
		}
		if (!this.ctx.lookupNonRedirectCreator || !this.isTextRedirect(rev.content)) {
			this.ctx.creator = rev.user;
			if (!this.ctx.creator) {
				this.ctx.statusElement.error(uls('无法获取页面创建者的名字', '無法取得頁面建立者的名字'));
				this.ctx.onLookupCreationFailure!(this);
				return;
			}
			this.ctx.timestamp = rev.timestamp;
			if (!this.ctx.timestamp) {
				this.ctx.statusElement.error(uls('无法获取页面创建时间', '無法取得頁面建立時間'));
				this.ctx.onLookupCreationFailure!(this);
				return;
			}
			this.ctx.statusElement.info(uls('已获取页面创建信息', '已取得頁面建立資訊'));
			this.ctx.onLookupCreationSuccess!(this);
		} else {
			this.ctx.lookupCreationApi!.query['rvlimit'] = 50; // modify previous query to fetch more revisions
			this.ctx.lookupCreationApi!.query['titles'] = this.ctx.pageName; // update pageName if redirect resolution took place in earlier query
			this.ctx.lookupCreationApi = new Morebits.wiki.api(
				uls('获取页面创建信息', '取得頁面建立資訊'),
				this.ctx.lookupCreationApi!.query,
				this.fnLookupNonRedirectCreator,
				this.ctx.statusElement,
				this.ctx.onLookupCreationFailure as unknown as ((apiobj: WikiApi) => void) | null
			);
			this.ctx.lookupCreationApi.setParent(this);
			this.ctx.lookupCreationApi.post();
		}
	};
	private fnLookupNonRedirectCreator = (): void => {
		const response = (this.ctx.lookupCreationApi!.getResponse() as WikiPageApiResponse).query;
		const revs = response.pages[0].revisions;
		for (const rev of revs) {
			if (!this.isTextRedirect(rev.content)) {
				this.ctx.creator = rev.user;
				this.ctx.timestamp = rev.timestamp;
				break;
			}
		}
		if (!this.ctx.creator) {
			// fallback to give first revision author if no non-redirect version in the first 50
			this.ctx.creator = revs[0].user;
			this.ctx.timestamp = revs[0].timestamp;
			if (!this.ctx.creator) {
				this.ctx.statusElement.error(uls('无法获取页面创建者的名字', '無法取得頁面建立者的名字'));
				this.ctx.onLookupCreationFailure!(this);
				return;
			}
		}
		if (!this.ctx.timestamp) {
			this.ctx.statusElement.error(uls('无法获取页面创建时间', '無法取得頁面建立時間'));
			this.ctx.onLookupCreationFailure!(this);
			return;
		}
		this.ctx.statusElement.info(uls('已获取页面创建信息', '已取得頁面建立資訊'));
		this.ctx.onLookupCreationSuccess!(this);
	};
	/**
	 * Common checks for action methods. Used for move, undelete, delete,
	 * protect.
	 *
	 * @param {string} action - The action being checked.
	 * @param {string} onFailure - Failure callback.
	 * @returns {boolean}
	 */
	private fnPreflightChecks = (action: string, onFailure: (page: WikiPage) => void): boolean => {
		// if a non-admin tries to do this, don't bother
		if (!Morebits.userIsSysop && action !== 'move') {
			this.ctx.statusElement.error(
				uls('无法对页面进行“', '無法對頁面進行「') +
					action +
					uls('”操作：只有管理员可以进行此操作', '」操作：只有管理員可以進行此操作')
			);
			onFailure(this);
			return false;
		}
		if (!this.ctx.editSummary) {
			this.ctx.statusElement.error(`Internal error: ${action} reason not set (use setEditSummary function)!`);
			onFailure(this);
			return false;
		}
		return true; // all OK
	};
	/**
	 * Common checks for fnProcess functions (`fnProcessDelete`, `fnProcessMove`, etc.
	 * Used for move, undelete, delete, protect.
	 *
	 * @param {string} action - The action being checked.
	 * @param {string} onFailure - Failure callback.
	 * @param {string} response - The response document from the API call.
	 * @returns {boolean}
	 */
	private fnProcessChecks = (
		action: string,
		onFailure: (page: WikiPage) => void,
		response: WikiPageApiQuery
	): boolean => {
		const [{missing}] = response.pages;
		// No undelete as an existing page could have deleted revisions
		const actionMissing = missing && ['delete', 'move'].includes(action);
		const protectMissing = action === 'protect' && missing && (this.ctx.protectEdit || this.ctx.protectMove);
		const saltMissing = action === 'protect' && !missing && this.ctx.protectCreate;
		if (actionMissing || protectMissing || saltMissing) {
			this.ctx.statusElement.error(
				`${
					uls('无法对页面进行“', '無法對頁面進行「') +
					action +
					uls('”操作，因为页面', '」操作，因為頁面') +
					(missing ? '已不' : uls('已经', '已經'))
				}存在`
			);
			onFailure(this);
			return false;
		}
		// Delete, undelete, move
		// extract protection info
		let editprot: WikiPageApiProtection | undefined;
		if (action === 'undelete') {
			editprot = response.pages[0].protection.findLast((pr) => {
				return pr.type === 'create' && pr.level === 'sysop';
			});
		} else if (action === 'delete' || action === 'move') {
			editprot = response.pages[0].protection.findLast((pr) => {
				return pr.type === 'edit' && pr.level === 'sysop';
			});
		}
		if (
			editprot &&
			!this.ctx.suppressProtectWarning &&
			!confirm(
				uls('您即将对全保护页面“', '您即將對全保護頁面「') +
					this.ctx.pageName +
					(editprot.expiry === 'infinity'
						? uls('”（永久）', '」（永久）')
						: `${
								uls('”（到期：', '」（到期：') + new Morebits.date(editprot.expiry).calendar('utc')
							} (UTC)）`) +
					uls('”进行“', '」進行「') +
					action +
					uls('”操作', '」操作') +
					uls(
						'。\n\n单击确定以继续操作，或单击取消以取消操作。',
						'。\n\n點擊確定以繼續操作，或點擊取消以取消操作。'
					)
			)
		) {
			this.ctx.statusElement.error(uls('已取消对全保护页面的操作。', '已取消對全保護頁面的操作。'));
			onFailure(this);
			return false;
		}
		if (!response.tokens.csrftoken) {
			this.ctx.statusElement.error(uls('无法获取令牌。', '無法取得權杖。'));
			onFailure(this);
			return false;
		}
		return true; // all OK
	};

	private fnProcessMove = (): void => {
		let pageTitle: string;
		let token: string;
		if (this.fnCanUseMwUserToken('move')) {
			token = mw.user.tokens.get('csrfToken');
			pageTitle = this.ctx.pageName;
		} else {
			const response = (this.ctx.moveApi!.getResponse() as WikiPageApiResponse).query;
			if (!this.fnProcessChecks('move', this.ctx.onMoveFailure!, response)) {
				return; // abort
			}

			token = response.tokens.csrftoken;
			const [page] = response.pages;
			pageTitle = page.title;
			this.ctx.watched = page.watchlistexpiry || page.watched || false;
		}
		const query: WikiPagePrivateQuery = {
			action: 'move',
			from: pageTitle,
			to: this.ctx.moveDestination!,
			token,
			reason: this.ctx.editSummary,
			watchlist: this.ctx.watchlistOption,
			format: 'json',
		};
		if (this.ctx.changeTags) {
			query.tags = this.ctx.changeTags;
		}
		if (this.fnApplyWatchlistExpiry()) {
			query.watchlistexpiry = this.ctx.watchlistExpiry!;
		}
		if (this.ctx.moveTalkPage) {
			query.movetalk = 'true';
		}
		if (this.ctx.moveSubpages) {
			query.movesubpages = 'true';
		}
		if (this.ctx.moveSuppressRedirect) {
			query.noredirect = 'true';
		}
		this.ctx.moveProcessApi = new Morebits.wiki.api(
			uls('移动页面……', '移動頁面……'),
			query,
			this.ctx.onMoveSuccess as unknown as ((apiobj: WikiApi) => void) | null,
			this.ctx.statusElement,
			this.ctx.onMoveFailure as unknown as ((apiobj: WikiApi) => void) | null
		);
		this.ctx.moveProcessApi.setParent(this);
		this.ctx.moveProcessApi.post();
	};
	private fnProcessPatrol = (): void => {
		const query: WikiPagePrivateQuery = {
			action: 'patrol',
			format: 'json',
		};
		// Didn't need to load the page
		if (this.ctx.rcid) {
			query.rcid = this.ctx.rcid;
			query.token = mw.user.tokens.get('patrolToken');
		} else {
			const response = (this.ctx.patrolApi!.getResponse() as WikiPageApiResponse).query;
			// Don't patrol if not unpatrolled
			if (!response.recentchanges[0].unpatrolled) {
				return;
			}
			const [{lastrevid}] = response.pages;
			if (!lastrevid) {
				return;
			}
			query.revid = lastrevid;
			const token = response.tokens.csrftoken;
			if (!token) {
				return;
			}
			query.token = token;
		}
		if (this.ctx.changeTags) {
			query.tags = this.ctx.changeTags;
		}
		const patrolStat = new Morebits.status(uls('标记页面为已巡查', '標記頁面為已巡查'));
		this.ctx.patrolProcessApi = new Morebits.wiki.api(uls('巡查页面……', '巡查頁面……'), query, null, patrolStat);
		this.ctx.patrolProcessApi.setParent(this);
		this.ctx.patrolProcessApi.post();
	};
	private fnProcessDelete = (): void => {
		let pageTitle: string;
		let token: string;
		if (this.fnCanUseMwUserToken('delete')) {
			token = mw.user.tokens.get('csrfToken');
			pageTitle = this.ctx.pageName;
		} else {
			const response = (this.ctx.deleteApi!.getResponse() as WikiPageApiResponse).query;
			if (!this.fnProcessChecks('delete', this.ctx.onDeleteFailure!, response)) {
				return; // abort
			}

			token = response.tokens.csrftoken;
			const [page] = response.pages;
			pageTitle = page.title;
			this.ctx.watched = page.watchlistexpiry || page.watched || false;
		}
		const query: WikiPagePrivateQuery = {
			action: 'delete',
			title: pageTitle,
			token,
			reason: this.ctx.editSummary,
			watchlist: this.ctx.watchlistOption,
			format: 'json',
		};
		if (this.ctx.changeTags) {
			query.tags = this.ctx.changeTags;
		}
		if (this.fnApplyWatchlistExpiry()) {
			query.watchlistexpiry = this.ctx.watchlistExpiry!;
		}
		this.ctx.deleteProcessApi = new Morebits.wiki.api(
			uls('删除页面……', '刪除頁面……'),
			query,
			this.ctx.onDeleteSuccess as unknown as ((apiobj: WikiApi) => void) | null,
			this.ctx.statusElement,
			this.fnProcessDeleteError
		);
		this.ctx.deleteProcessApi.setParent(this);
		this.ctx.deleteProcessApi.post();
	};
	// callback from deleteProcessApi.post()
	private fnProcessDeleteError = (): void => {
		const errorCode = this.ctx.deleteProcessApi!.getErrorCode();
		// check for "Database query error"
		if (errorCode === 'internal_api_error_DBQueryError' && this.ctx.retries++ < this.ctx.maxRetries) {
			this.ctx.statusElement.info(uls('数据库查询错误，重试', '資料庫查詢錯誤，重試'));
			--Morebits.wiki.numberOfActionsLeft; // allow for normal completion if retry succeeds
			this.ctx.deleteProcessApi!.post(); // give it another go!
		} else if (errorCode === 'missingtitle') {
			this.ctx.statusElement.error(uls('不能删除页面，因其已不存在', '不能刪除頁面，因其已不存在'));
			if (this.ctx.onDeleteFailure) {
				this.ctx.onDeleteFailure.call(this, this.ctx.deleteProcessApi! as unknown as WikiPage); // invoke callback
			}
			// hard error, give up
		} else {
			this.ctx.statusElement.error(
				uls('无法删除页面：', '無法刪除頁面：') + this.ctx.deleteProcessApi!.getErrorText()
			);
			if (this.ctx.onDeleteFailure) {
				this.ctx.onDeleteFailure.call(this, this.ctx.deleteProcessApi! as unknown as WikiPage); // invoke callback
			}
		}
	};

	private fnProcessUndelete = (): void => {
		let pageTitle: string;
		let token: string;
		if (this.fnCanUseMwUserToken('undelete')) {
			token = mw.user.tokens.get('csrfToken');
			pageTitle = this.ctx.pageName;
		} else {
			const response = (this.ctx.undeleteApi!.getResponse() as WikiPageApiResponse).query;
			if (!this.fnProcessChecks('undelete', this.ctx.onUndeleteFailure!, response)) {
				return; // abort
			}

			token = response.tokens.csrftoken;
			const [page] = response.pages;
			pageTitle = page.title;
			this.ctx.watched = page.watchlistexpiry || page.watched || false;
		}
		const query: WikiPagePrivateQuery = {
			action: 'undelete',
			title: pageTitle,
			token,
			reason: this.ctx.editSummary,
			watchlist: this.ctx.watchlistOption,
			format: 'json',
		};
		if (this.ctx.changeTags) {
			query.tags = this.ctx.changeTags;
		}
		if (this.fnApplyWatchlistExpiry()) {
			query.watchlistexpiry = this.ctx.watchlistExpiry!;
		}
		this.ctx.undeleteProcessApi = new Morebits.wiki.api(
			uls('还原页面……', '還原頁面……'),
			query,
			this.ctx.onUndeleteSuccess as unknown as ((apiobj: WikiApi) => void) | null,
			this.ctx.statusElement,
			this.fnProcessUndeleteError
		);
		this.ctx.undeleteProcessApi.setParent(this);
		this.ctx.undeleteProcessApi.post();
	};
	// callback from undeleteProcessApi.post()
	private fnProcessUndeleteError = (): void => {
		const errorCode = this.ctx.undeleteProcessApi!.getErrorCode();
		// check for "Database query error"
		if (errorCode === 'internal_api_error_DBQueryError') {
			if (this.ctx.retries++ < this.ctx.maxRetries) {
				this.ctx.statusElement.info(uls('数据库查询错误，重试', '資料庫查詢錯誤，重試'));
				--Morebits.wiki.numberOfActionsLeft; // allow for normal completion if retry succeeds
				this.ctx.undeleteProcessApi!.post(); // give it another go!
			} else {
				this.ctx.statusElement.error(
					uls('持续的数据库查询错误，重新加载页面并重试', '持續的資料庫查詢錯誤，重新載入頁面並重試')
				);
				if (this.ctx.onUndeleteFailure) {
					this.ctx.onUndeleteFailure.call(this, this.ctx.undeleteProcessApi! as unknown as WikiPage); // invoke callback
				}
			}
		} else if (errorCode === 'cantundelete') {
			this.ctx.statusElement.error(
				uls('无法还原删除页面，因没有版本供还原或已被还原', '無法還原刪除頁面，因沒有版本供還原或已被還原')
			);
			if (this.ctx.onUndeleteFailure) {
				this.ctx.onUndeleteFailure.call(this, this.ctx.undeleteProcessApi! as unknown as WikiPage); // invoke callback
			}
			// hard error, give up
		} else {
			this.ctx.statusElement.error(
				uls('无法还原页面：', '無法還原頁面：') + this.ctx.undeleteProcessApi!.getErrorText()
			);
			if (this.ctx.onUndeleteFailure) {
				this.ctx.onUndeleteFailure.call(this, this.ctx.undeleteProcessApi! as unknown as WikiPage); // invoke callback
			}
		}
	};

	private fnProcessProtect = (): void => {
		const response = (this.ctx.protectApi!.getResponse() as WikiPageApiResponse).query;
		if (!this.fnProcessChecks('protect', this.ctx.onProtectFailure!, response)) {
			return; // abort
		}

		const token = response.tokens.csrftoken;
		const [page] = response.pages;
		const pageTitle = page.title;
		this.ctx.watched = page.watchlistexpiry || page.watched || false;
		// Fetch existing protection levels
		const prs = response.pages[0].protection;
		let editprot: WikiPageApiProtection | undefined;
		let moveprot: WikiPageApiProtection | undefined;
		let createprot: WikiPageApiProtection | undefined;
		for (const pr of prs) {
			// Filter out protection from cascading
			if (pr.type === 'edit' && !pr.source) {
				editprot = pr;
			} else if (pr.type === 'move') {
				moveprot = pr;
			} else if (pr.type === 'create') {
				createprot = pr;
			}
		}
		// Fall back to current levels if not explicitly set
		if (!this.ctx.protectEdit && editprot) {
			this.ctx.protectEdit = {
				level: editprot.level,
				expiry: editprot.expiry,
			};
		}
		if (!this.ctx.protectMove && moveprot) {
			this.ctx.protectMove = {
				level: moveprot.level,
				expiry: moveprot.expiry,
			};
		}
		if (!this.ctx.protectCreate && createprot) {
			this.ctx.protectCreate = {
				level: createprot.level,
				expiry: createprot.expiry,
			};
		}
		// Default to pre-existing cascading protection if unchanged (similar to above)
		if (this.ctx.protectCascade === null) {
			this.ctx.protectCascade = !!prs.filter((pr) => {
				return pr.cascade;
			}).length;
		}
		// Warn if cascading protection being applied with an invalid protection level,
		// which for edit protection will cause cascading to be silently stripped
		if (this.ctx.protectCascade) {
			// On move protection, this is technically stricter than the MW API,
			// but seems reasonable to avoid dumb values and misleading log entries (T265626)
			if (
				(!this.ctx.protectEdit ||
					this.ctx.protectEdit.level !== 'sysop' ||
					!this.ctx.protectMove ||
					this.ctx.protectMove.level !== 'sysop') &&
				!confirm(
					uls('您已对“', '您已對「') +
						this.ctx.pageName +
						uls('”启用了连锁保护', '」啟用了連鎖保護') +
						uls('，但没有设置仅管理员的保护级别。\n\n', '，但沒有設定僅管理員的保護級別。\n\n') +
						uls(
							'单击确认以自动调整并继续连锁全保护，单击取消以跳过此操作',
							'點擊確認以自動調整並繼續連鎖全保護，點擊取消以跳過此操作'
						)
				)
			) {
				this.ctx.statusElement.error(uls('连锁保护已取消。', '連鎖保護已取消。'));
				this.ctx.onProtectFailure!(this);
				return;
			}
			this.ctx.protectEdit!.level = 'sysop';
			this.ctx.protectMove!.level = 'sysop';
		}
		// Build protection levels and expirys (expiries?) for query
		const protections = [];
		const expirys = [];
		if (this.ctx.protectEdit) {
			protections[protections.length] = `edit=${this.ctx.protectEdit.level}`;
			expirys[expirys.length] = this.ctx.protectEdit.expiry;
		}
		if (this.ctx.protectMove) {
			protections[protections.length] = `move=${this.ctx.protectMove.level}`;
			expirys[expirys.length] = this.ctx.protectMove.expiry;
		}
		if (this.ctx.protectCreate) {
			protections[protections.length] = `create=${this.ctx.protectCreate.level}`;
			expirys[expirys.length] = this.ctx.protectCreate.expiry;
		}
		const query: WikiPagePrivateQuery = {
			action: 'protect',
			title: pageTitle,
			token,
			protections: protections.join('|'),
			expiry: expirys.join('|'),
			reason: this.ctx.editSummary,
			watchlist: this.ctx.watchlistOption,
			format: 'json',
		};
		// Only shows up in logs, not page history
		if (this.ctx.changeTags) {
			query.tags = this.ctx.changeTags;
		}
		if (this.fnApplyWatchlistExpiry()) {
			query.watchlistexpiry = this.ctx.watchlistExpiry!;
		}
		if (this.ctx.protectCascade) {
			query.cascade = 'true';
		}
		this.ctx.protectProcessApi = new Morebits.wiki.api(
			uls('保护页面……', '保護頁面……'),
			query,
			this.ctx.onProtectSuccess as unknown as ((apiobj: WikiApi) => void) | null,
			this.ctx.statusElement,
			this.ctx.onProtectFailure as unknown as ((apiobj: WikiApi) => void) | null
		);
		this.ctx.protectProcessApi.setParent(this);
		this.ctx.protectProcessApi.post();
	};
	private sleep = (milliseconds: number): JQuery.Deferred<unknown> => {
		const deferred: JQuery.Deferred<unknown> = $.Deferred();
		setTimeout(deferred.resolve, milliseconds);
		return deferred;
	};
} // end Morebits.wiki.page
Morebits.wiki.page = WikiPage;

/* Private helper types for Morebits.wiki.page API responses */
type WikiPageApiProtection = {
	type: string;
	level: string;
	expiry: string;
	cascade?: boolean;
	source?: string;
};
type WikiPageApiRevision = {
	revid: number;
	user: string;
	userhidden?: boolean;
	timestamp: string;
	content: string;
};
type WikiPageApiPage = {
	title: string;
	pageid: number;
	invalid?: boolean;
	missing?: boolean;
	lastrevid?: number;
	contentmodel: string;
	watchlistexpiry?: string | null;
	watched?: boolean;
	protection: WikiPageApiProtection[];
	revisions: [WikiPageApiRevision, ...WikiPageApiRevision[]];
	actions?: Record<string, boolean>;
};
type WikiPageApiQuery = {
	pages: [WikiPageApiPage, ...WikiPageApiPage[]];
	tokens: {csrftoken: string};
	recentchanges: [{unpatrolled?: boolean}, ...{unpatrolled?: boolean}[]];
	redirects?: unknown[];
};
type WikiPageApiResponse = {
	query: WikiPageApiQuery;
	curtimestamp: string;
};
type WikiPageApiErrorData = {
	abusefilter: {description: string};
	spamblacklist: {matches: [string, ...string[]]};
};
type WikiPagePrivateQuery = {
	action: string;
	format: string;
	meta?: string;
	type?: string;
	titles?: string;
	title?: string;
	prop?: string;
	inprop?: string;
	redirects?: string;
	rvlimit?: number;
	from?: string;
	to?: string;
	token?: string;
	reason?: string | null;
	watchlist?: string;
	watchlistexpiry?: string | number | null;
	tags?: string | string[];
	movetalk?: string;
	movesubpages?: string;
	noredirect?: string;
	rcid?: string;
	revid?: number;
	protections?: string;
	expiry?: string;
	cascade?: string;
};

/* ctx fields used here but not initialized in the constructor literal */
interface WikiPageCtx {
	rcid?: string | null;
}

interface WikiNamespace {
	preview: typeof WikiPreview;
}
interface MorebitsNamespace {
	wikitext: typeof wikitext;
	userspaceLogger: typeof UserspaceLogger;
}

/** The `action=parse` query built by {@link Morebits.wiki.preview} to render a fragment of wikitext. */
type PreviewApiQuery = {
	action: string;
	prop: string[];
	pst: boolean;
	preview: boolean;
	text: string;
	title: string;
	disablelimitreport: boolean;
	disableeditsection: boolean;
	uselang: string;
	format: string;
	section?: string;
	sectiontitle?: string;
};

/** The portion of the `action=parse` API response consumed by the preview success callback. */
type PreviewApiResponse = {
	parse: {
		text: string;
		modules: string[];
		modulestyles: string[];
	};
};

/* **************** Morebits.wiki.preview **************** */
/**
 * Use the API to parse a fragment of wikitext and render it as HTML.
 *
 * The suggested implementation pattern (in {@link Morebits.simpleWindow} and
 * {@link Morebits.quickForm} situations) is to construct a
 * `Morebits.wiki.preview` object after rendering a `Morebits.quickForm`, and
 * bind the object to an arbitrary property of the form (e.g. |previewer|).
 * For an example, see twinklewarn.js.
 *
 * @memberof Morebits.wiki
 * @class
 * @param {HTMLElement} previewbox - The element that will contain the rendered HTML,
 * usually a <div> element.
 */
class WikiPreview {
	previewbox: HTMLElement;
	/**
	 * Displays the preview box, and begins an asynchronous attempt
	 * to render the specified wikitext.
	 *
	 * @param {string} wikitext - Wikitext to render; most things should work, including `subst:` and `~~~~`.
	 * @param {string} [pageTitle] - Optional parameter for the page this should be rendered as being on, if omitted it is taken as the current page.
	 * @param {string} [sectionTitle] - If provided, render the text as a new section using this as the title.
	 * @returns {jQuery.promise}
	 */
	beginRender: (wikitext: string, pageTitle?: string, sectionTitle?: string) => void;
	/** Hides the preview box and clears it. */
	closePreview: () => void;

	constructor(previewbox: HTMLElement) {
		this.previewbox = previewbox;
		$(previewbox).addClass('morebits-previewbox').hide();
		this.beginRender = (wikitext, pageTitle, sectionTitle) => {
			$(previewbox).show();
			const statusspan = document.createElement('span');
			previewbox.appendChild(statusspan);
			Morebits.status.init(statusspan);
			// 若页面不是wikitext（例如JS、CSS等），那么找一个wikitext页面来预览。
			let pageName = mw.config.get('wgPageName');
			if (mw.config.get('wgPageContentModel') !== 'wikitext') {
				pageName = `Draft:${pageName}`;
			}
			const query: PreviewApiQuery = {
				action: 'parse',
				prop: ['text', 'modules'],
				pst: true,
				// PST = pre-save transform; this makes substitution work properly
				preview: true,
				text: wikitext,
				title: pageTitle || pageName,
				disablelimitreport: true,
				disableeditsection: true,
				uselang: mw.config.get('wgUserLanguage'),
				// Use wgUserLanguage for preview
				format: 'json',
			};
			if (sectionTitle) {
				query.section = 'new';
				query.sectiontitle = sectionTitle;
			}
			const renderApi = new Morebits.wiki.api(
				uls('加载中……', '載入中……'),
				query,
				fnRenderSuccess,
				new Morebits.status(uls('预览', '預覽'))
			);
			renderApi.post();
		};
		const fnRenderSuccess = (apiobj: InstanceType<WikiNamespace['api']>) => {
			const response = apiobj.getResponse() as PreviewApiResponse;
			const html = response.parse.text;
			if (!html) {
				apiobj.statelem.error(uls('加载预览失败，或模板为空', '載入預覽失敗，或模板為空'));
				return;
			}
			previewbox.innerHTML = html;
			mw.loader.load(response.parse.modulestyles);
			mw.loader.load(response.parse.modules);
			// this makes links open in new tab
			$(previewbox).find('a').attr('target', '_blank').attr('rel', 'noopener noreferrer');
		};
		this.closePreview = () => {
			$(previewbox).empty().hide();
		};
	}
}

Morebits.wiki.preview = WikiPreview;

/* **************** Morebits.wikitext **************** */
/**
 * Get the value of every parameter found in the wikitext of a given template.
 *
 * @memberof Morebits.wikitext
 * @param {string} text - Wikitext containing a template.
 * @param {number} [start=0] - Index noting where in the text the template begins.
 * @returns {Object} `{name: templateName, parameters: {key: value}}`.
 */
const parseTemplate = (text: string, start?: number): {name: string; parameters: Record<string, string>} => {
	start ||= 0;
	const level: (number | string)[] = []; // Track of how deep we are ({{, {{{, or [[)
	let count = -1; // Number of parameters found
	let unnamed = 0; // Keep track of what number an unnamed parameter should receive
	let equals = -1; // After finding "=" before a parameter, the index; otherwise, -1
	let current = '';
	const result: {name: string; parameters: Record<string, string>} = {
		name: '',
		parameters: {},
	};
	let key: string;
	let value: string;
	/**
	 * Function to handle finding parameter values.
	 *
	 * @param {boolean} [final=false] - Whether this is the final
	 * parameter and we need to remove the trailing `}}`.
	 */
	const findParam = (final?: boolean) => {
		// Nothing found yet, this must be the template name
		if (count === -1) {
			result.name = current.slice(2).trim();
			++count;
		} else if (equals === -1) {
			// In a parameter
			// No equals, so it must be unnamed; no trim since whitespace allowed
			const param = final ? current.slice(equals + 1, -2) : current;
			if (param) {
				result.parameters[++unnamed] = param;
				++count;
			}
		} else {
			// We found an equals, so save the parameter as key: value
			key = current.slice(0, Math.max(0, equals)).trim();
			value = final ? current.slice(equals + 1, -2).trim() : current.slice(Math.max(0, equals + 1)).trim();
			result.parameters[key] = value;
			equals = -1;
		}
	};
	for (let i = start; i < text.length; ++i) {
		const test3 = text.slice(i, i + 3);
		if (test3 === '{{{' || (test3 === '}}}' && level.at(-1) === 3)) {
			current += test3;
			i += 2;
			if (test3 === '{{{') {
				level[level.length] = 3;
			} else {
				level.pop();
			}
			continue;
		}
		const test2 = text.slice(i, i + 2);
		// Entering a template (or link)
		if (test2 === '{{' || test2 === '[[') {
			current += test2;
			++i;
			if (test2 === '{{') {
				level[level.length] = 2;
			} else {
				level[level.length] = 'wl';
			}
			continue;
		}
		// Either leaving a link or template/parser function
		if ((test2 === '}}' && level.at(-1) === 2) || (test2 === ']]' && level.at(-1) === 'wl')) {
			current += test2;
			++i;
			level.pop();
			// Find the final parameter if this really is the end
			if (test2 === '}}' && level.length === 0) {
				findParam(true);
				break;
			}
			continue;
		}
		if (text.charAt(i) === '|' && level.length === 1) {
			// Another pipe found, toplevel, so parameter coming up!
			findParam();
			current = '';
		} else if (equals === -1 && text.charAt(i) === '=' && level.length === 1) {
			// Equals found, toplevel
			equals = current.length;
			current += text.charAt(i);
		} else {
			// Just advance the position
			current += text.charAt(i);
		}
	}
	return result;
};

/**
 * Adjust and manipulate the wikitext of a page.
 *
 * @class
 * @memberof Morebits.wikitext
 * @param {string} text - Wikitext to be manipulated.
 */
class WikiTextPage {
	text: string;

	constructor(text: string) {
		this.text = text;
	}

	/**
	 * Removes links to `link_target` from the page text.
	 *
	 * @param {string} linkTarget
	 * @returns {Morebits.wikitext.page}
	 */
	removeLink(linkTarget: string): this {
		const mwTitle = mw.Title.newFromText(linkTarget)!;
		const namespaceID = mwTitle.getNamespaceId();
		const title = mwTitle.getMainText();
		let linkRegexString = '';
		if (namespaceID !== 0) {
			linkRegexString = `${Morebits.namespaceRegex(namespaceID)}:`;
		}
		linkRegexString += Morebits.pageNameRegex(title);
		// For most namespaces, unlink both [[User:Test]] and [[:User:Test]]
		// For files and categories, only unlink [[:Category:Test]]. Do not unlink [[Category:Test]]
		const isFileOrCategory = [6, 14].includes(namespaceID);
		const colon = isFileOrCategory ? ':' : ':?';
		const simpleLinkRegex = new RegExp(`\\[\\[${colon}(${linkRegexString})\\]\\]`, 'g');
		const pipedLinkRegex = new RegExp(`\\[\\[${colon}${linkRegexString}\\|(.+?)\\]\\]`, 'g');
		this.text = this.text.replace(simpleLinkRegex, '$1').replace(pipedLinkRegex, '$1');
		return this;
	}

	/**
	 * Comments out images from page text; if used in a gallery, deletes the whole line.
	 * If used as a template argument (not necessarily with `File:` prefix), the template parameter is commented out.
	 *
	 * @param {string} image - Image name without `File:` prefix.
	 * @param {string} [reason] - Reason to be included in comment, alongside the commented-out image.
	 * @returns {Morebits.wikitext.page}
	 */
	commentOutImage(image: string, reason?: string): this {
		this.text = this.text.replace(/--!>/g, '-->');
		const unbinder = new Morebits.unbinder(this.text);
		unbinder.unbind('<!--', '-->');
		reason = reason ? `${reason}: ` : '';
		const imageRegexString = Morebits.pageNameRegex(image);
		// Check for normal image links, i.e. [[File:Foobar.png|...]]
		// Will eat the whole link
		const linksRegex = new RegExp(`\\[\\[${Morebits.namespaceRegex(6)}:\\s*${imageRegexString}\\s*[\\|(?:\\]\\])]`);
		const allLinks = Morebits.string.splitWeightedByKeys(unbinder.content, '[[', ']]');
		for (const allLink of allLinks) {
			if (linksRegex.test(allLink)) {
				const replacement = `<!-- ${reason}${allLink} -->`;
				unbinder.content = unbinder.content.replace(allLink, replacement);
				// unbind the newly created comments
				unbinder.unbind('<!--', '-->');
			}
		}
		// Check for gallery images, i.e. instances that must start on a new line,
		// eventually preceded with some space, and must include File: prefix
		// Will eat the whole line.
		const galleryImageRegex = new RegExp(
			`(^\\s*${Morebits.namespaceRegex(6)}:\\s*${imageRegexString}\\s*(?:\\|.*?$|$))`,
			'mg'
		);
		unbinder.content = unbinder.content.replace(galleryImageRegex, `<!-- ${reason}$1 -->`);
		// unbind the newly created comments
		unbinder.unbind('<!--', '-->');
		// Check free image usages, for example as template arguments, might have the File: prefix excluded, but must be preceded by an |
		// Will only eat the image name and the preceding bar and an eventual named parameter
		const freeImageRegex = new RegExp(
			`(\\|\\s*(?:[\\w\\s]+\\=)?\\s*(?:${Morebits.namespaceRegex(6)}:\\s*)?${imageRegexString})`,
			'mg'
		);
		unbinder.content = unbinder.content.replace(freeImageRegex, `<!-- ${reason}$1 -->`);
		// Rebind the content now, we are done!
		this.text = unbinder.rebind();
		return this;
	}

	/**
	 * Converts uses of [[File:`image`]] to [[File:`image`|`data`]].
	 *
	 * @param {string} image - Image name without File: prefix.
	 * @param {string} data - The display options.
	 * @returns {Morebits.wikitext.page}
	 */
	addToImageComment(image: string, data: string): this {
		const imageRegexString = Morebits.pageNameRegex(image);
		const linksRegex = new RegExp(`\\[\\[${Morebits.namespaceRegex(6)}:\\s*${imageRegexString}\\s*[\\|(?:\\]\\])]`);
		const allLinks = Morebits.string.splitWeightedByKeys(this.text, '[[', ']]');
		for (let replacement of allLinks) {
			if (linksRegex.test(replacement)) {
				// just put it at the end?
				replacement = replacement.replace(/\]\]$/, `|${data}]]`);
				this.text = this.text.replace(replacement, replacement);
			}
		}
		const galleryRegex = new RegExp(`^(\\s*${imageRegexString}.*?)\\|?(.*?)$`, 'mg');
		const newtext = `$1|$2 ${data}`;
		this.text = this.text.replace(galleryRegex, newtext);
		return this;
	}

	/**
	 * Remove all transclusions of a template from page text.
	 *
	 * @param {string} template - Page name whose transclusions are to be removed,
	 * include namespace prefix only if not in template namespace.
	 * @returns {Morebits.wikitext.page}
	 */
	removeTemplate(template: string): this {
		const templateRegexString = Morebits.pageNameRegex(template);
		const linksRegex = new RegExp(
			`\\{\\{(?:${Morebits.namespaceRegex(10)}:)?\\s*${templateRegexString}\\s*[\\|(?:\\}\\})]`
		);
		const allTemplates = Morebits.string.splitWeightedByKeys(this.text, '{{', '}}', ['{{{', '}}}']);
		for (const allTemplate of allTemplates) {
			if (linksRegex.test(allTemplate)) {
				this.text = this.text.replace(allTemplate, '');
			}
		}
		return this;
	}

	/**
	 * Smartly insert a tag atop page text but after specified templates,
	 * such as hatnotes, short description, or deletion and protection templates.
	 * Notably, does *not* insert a newline after the tag.
	 *
	 * @param {string} tag - The tag to be inserted.
	 * @param {string|string[]} regex - Templates after which to insert tag,
	 * given as either as a (regex-valid) string or an array to be joined by pipes.
	 * @param {string} [flags=i] - Regex flags to apply.  `''` to provide no flags;
	 * other falsey values will default to `i`.
	 * @param {string|string[]} [preRegex] - Optional regex string or array to match
	 * before any template matches (i.e. before `{{`), such as html comments.
	 * @returns {Morebits.wikitext.page}
	 */
	insertAfterTemplates(tag?: string, regex?: string | string[], flags?: string, preRegex?: string | string[]): this {
		if (tag === undefined) {
			throw new TypeError('No tag provided');
		}
		// .length is only a property of strings and arrays so we
		// shouldn't need to check type
		if (regex === undefined || !regex.length) {
			throw new Error('No regex provided');
		} else if (Array.isArray(regex)) {
			regex = regex.join('|');
		}
		if (typeof flags !== 'string') {
			flags = 'i';
		}
		if (!preRegex || !preRegex.length) {
			preRegex = '';
		} else if (Array.isArray(preRegex)) {
			preRegex = preRegex.join('|');
		}
		// Regex is extra complicated to allow for templates with
		// parameters and to handle whitespace properly
		this.text = this.text.replace(
			new RegExp(
				// leading whitespace
				// capture template(s)
				// Pre-template regex, such as leading html comments
				// begin template format
				// Template regex
				// end main template name, optionally with a number
				// Probably remove the (?:) though
				// template parameters
				// end template format
				// end capture
				// trailing whitespace
				`^\\s*(?:((?:\\s*${
					// Pre-template regex, such as leading html comments
					preRegex
				}|\\{\\{\\s*(?:${
					// Template regex
					regex
				})\\d*\\s*(\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?\\}\\})+(?:\\s*\\n)?)\\s*)?`,
				flags
			),
			`$1${tag}`
		);
		return this;
	}

	/**
	 * Get the manipulated wikitext.
	 *
	 * @returns {string}
	 */
	getText(): string {
		return this.text;
	}
}

/**
 * Wikitext manipulation.
 *
 * @namespace Morebits.wikitext
 * @memberof Morebits
 */
const wikitext = {
	parseTemplate,
	page: WikiTextPage,
};

Morebits.wikitext = wikitext;

/* *********** Morebits.userspaceLogger ************ */
/**
 * Handles logging actions to a userspace log.
 * Used in CSD, PROD, and XFD.
 *
 * @memberof Morebits
 * @class
 * @param {string} logPageName - Title of the subpage of the current user's log.
 */
class UserspaceLogger {
	/**
	 * The text to prefix the log with upon creation, defaults to empty.
	 *
	 * @type {string}
	 */
	initialText: string;
	/**
	 * The header level to use for months, defaults to 3 (`===`).
	 *
	 * @type {number}
	 */
	headerLevel: number;
	changeTags: string | string[];
	/**
	 * Log the entry.
	 *
	 * @param {string} logText - Doesn't include leading `#` or `*`.
	 * @param {string} summaryText - Edit summary.
	 * @returns {JQuery.Promise}
	 */
	log: (logText: string, summaryText: string) => JQuery.Deferred<unknown, unknown, unknown>;

	constructor(logPageName: string) {
		if (!logPageName) {
			throw new Error('no log page name specified');
		}
		this.initialText = '';
		this.headerLevel = 3;
		this.changeTags = '';
		this.log = (logText, summaryText) => {
			const def = $.Deferred();
			if (!logText) {
				return def.reject();
			}
			const page = new Morebits.wiki.page(
				`User:${mw.config.get('wgUserName')}/${logPageName}`,
				uls('将项目加入到用户空间日志', '將項目加入到使用者空間日誌')
			); // make this '... to ' + logPageName ?
			page.load((pageobj) => {
				// add blurb if log page doesn't exist or is blank
				let text = pageobj.getPageText() || this.initialText;
				// create monthly header if it doesn't exist already
				const date = new Morebits.date(pageobj.getLoadTime() ?? '');
				if (!date.monthHeaderRegex().exec(text)) {
					text += `\n\n${date.monthHeader(this.headerLevel)}`;
				}
				pageobj.setPageText(`${text}\n${logText}`);
				pageobj.setEditSummary(summaryText);
				pageobj.setChangeTags(this.changeTags);
				pageobj.setCreateOption('recreate');
				pageobj.save(def.resolve, def.reject);
			});
			return def;
		};
	}
}

Morebits.userspaceLogger = UserspaceLogger;

/* **************** Morebits.status **************** */
/**
 * Create and show status messages of varying urgency.
 * {@link Morebits.status.init|Morebits.status.init()} must be called before
 * any status object is created, otherwise those statuses won't be visible.
 *
 * @memberof Morebits
 * @class
 * @param {string} text - Text before the the colon `:`.
 * @param {string} stat - Text after the colon `:`.
 * @param {string} [type=status] - Determine the font color of the status
 * line, allowable values are: `status` (blue), `info` (green), `warn` (red),
 * or `error` (bold red).
 */

interface MorebitsNamespace {
	status: typeof Status;
	htmlNode: (type: string, content: string, color?: string) => HTMLElement;
	checkboxShiftClickSupport: (
		jQuerySelector: string | HTMLElement[],
		jQueryContext?: string | HTMLElement | JQuery<HTMLElement>
	) => void;
	batchOperation: typeof BatchOperation;
}

type WikiPageInstance = InstanceType<WikiNamespace['page']>;
type BatchOperationWorker = (page: string, batchOperation: BatchOperation) => void;

/* **************** Morebits.status **************** */
/**
 * Create and show status messages of varying urgency.
 * {@link Morebits.status.init|Morebits.status.init()} must be called before
 * any status object is created, otherwise those statuses won't be visible.
 *
 * @memberof Morebits
 * @class
 * @param {string} text - Text before the the colon `:`.
 * @param {string} stat - Text after the colon `:`.
 * @param {string} [type=status] - Determine the font color of the status
 * line, allowable values are: `status` (blue), `info` (green), `warn` (red),
 * or `error` (bold red).
 */
class Status {
	stat: Node | null = null;
	statRaw: MorebitsHtmlInput | null = null;
	text!: Node;
	textRaw!: string;
	type!: string;
	target!: HTMLSpanElement;
	node!: HTMLDivElement;
	linked: boolean = false;

	constructor(text: string, stat?: MorebitsHtmlInput, type?: string) {
		this.textRaw = text;
		this.text = Morebits.createHtml(text);
		this.type = type || 'status';
		this.generate();
		if (stat) {
			this.update(stat, type);
		}
	}

	/**
	 * Specify an area for status message elements to be added to.
	 *
	 * @memberof Morebits.status
	 * @param {HTMLElement} root - Usually a div element.
	 * @throws {TypeError} If `root` is not an `HTMLElement`.
	 */
	static init(root: HTMLElement | null): void {
		if (!(root instanceof Element)) {
			throw new TypeError('object not an instance of Element');
		}
		while (root.hasChildNodes()) {
			root.removeChild(root.firstChild!);
		}
		Morebits.status.root = root;
		Morebits.status.errorEvent = null;
	}

	static root: HTMLElement | null = null;

	/**
	 * @memberof Morebits.status
	 * @param {Function} handler - Function to execute on error.
	 * @throws {TypeError} When `handler` is not a function.
	 */
	static onError(handler: () => void): void {
		if (typeof handler === 'function') {
			Morebits.status.errorEvent = handler;
		} else {
			throw new TypeError('Morebits.status.onError: handler is not a function');
		}
	}

	static errorEvent: (() => void) | null = null;

	/** Add the status element node to the DOM. */
	link(): void {
		if (!this.linked && Morebits.status.root) {
			Morebits.status.root.appendChild(this.node);
			this.linked = true;
		}
	}

	/** Remove the status element node from the DOM. */
	unlink(): void {
		if (this.linked) {
			Morebits.status.root!.removeChild(this.node);
			this.linked = false;
		}
	}

	/**
	 * Update the status.
	 *
	 * @param {string} status - Part of status message after colon.
	 * @param {string} type - 'status' (blue), 'info' (green), 'warn'
	 * (red), or 'error' (bold red).
	 */
	update(status: MorebitsHtmlInput, type?: string): void {
		this.statRaw = status;
		this.stat = Morebits.createHtml(status);
		if (type) {
			this.type = type;
			if (type === 'error') {
				// hack to force the page not to reload when an error is output - see also Morebits.status() above
				Morebits.wiki.numberOfActionsLeft = 1000;
				// call error callback
				if (Morebits.status.errorEvent) {
					Morebits.status.errorEvent();
				}
				// also log error messages in the browser console
				console.error(`[Morebits] ${this.textRaw}: ${this.statRaw}`);
			}
		}
		this.render();
	}

	/** Produce the html for first part of the status message. */
	generate(): void {
		this.node = document.createElement('div');
		this.node.appendChild(document.createElement('span')).appendChild(this.text);
		this.node.appendChild(document.createElement('span')).appendChild(document.createTextNode(': '));
		this.target = this.node.appendChild(document.createElement('span'));
		this.target.appendChild(document.createTextNode('')); // dummy node
	}

	/** Complete the html, for the second part of the status message. */
	render(): void {
		this.node.className = `morebits_status_${this.type}`;
		while (this.target.hasChildNodes()) {
			this.target.removeChild(this.target.firstChild!);
		}
		this.target.appendChild(this.stat!);
		this.link();
	}

	status(status: MorebitsHtmlInput): void {
		this.update(status, 'status');
	}

	info(status: MorebitsHtmlInput): void {
		this.update(status, 'info');
	}

	warn(status: MorebitsHtmlInput): void {
		this.update(status, 'warn');
	}

	error(status: MorebitsHtmlInput): void {
		this.update(status, 'error');
	}

	/**
	 * @memberof Morebits.status
	 * @param {string} text - Before colon
	 * @param {string} status - After colon
	 * @returns {Morebits.status} - `status`-type (blue)
	 */
	static status(text: string, status?: string): Status {
		return new Status(text, status);
	}

	/**
	 * @memberof Morebits.status
	 * @param {string} text - Before colon
	 * @param {string} status - After colon
	 * @returns {Morebits.status} - `info`-type (green)
	 */
	static info(text: string, status?: string): Status {
		return new Status(text, status, 'info');
	}

	/**
	 * @memberof Morebits.status
	 * @param {string} text - Before colon
	 * @param {string} status - After colon
	 * @returns {Morebits.status} - `warn`-type (red)
	 */
	static warn(text: string, status?: string): Status {
		return new Status(text, status, 'warn');
	}

	/**
	 * @memberof Morebits.status
	 * @param {string} text - Before colon
	 * @param {string} status - After colon
	 * @returns {Morebits.status} - `error`-type (bold red)
	 */
	static error(text: string, status?: string): Status {
		return new Status(text, status, 'error');
	}

	/**
	 * For the action complete message at the end, create a status line without
	 * a colon separator.
	 *
	 * @memberof Morebits.status
	 * @param {string} text
	 */
	static actionCompleted(text: string): void {
		const node = document.createElement('div');
		node.appendChild(document.createElement('b')).appendChild(document.createTextNode(text));
		node.className = 'morebits_status_info morebits_action_complete';
		if (Morebits.status.root) {
			Morebits.status.root.appendChild(node);
		}
	}

	/**
	 * Display the user's rationale, comments, etc. Back to them after a failure,
	 * so that they may re-use it.
	 *
	 * @memberof Morebits.status
	 * @param {string} comments
	 * @param {string} message
	 */
	static printUserText(comments: string, message: string): void {
		const p = document.createElement('p');
		p.innerHTML = message;
		const div = document.createElement('div');
		div.className = 'morebits-usertext';
		div.style.marginTop = '0';
		div.style.whiteSpace = 'pre-wrap';
		div.textContent = comments;
		p.appendChild(div);
		Morebits.status.root!.appendChild(p);
	}
}

Morebits.status = Status;

/**
 * Simple helper function to create a simple node.
 *
 * @param {string} type - Type of HTML element.
 * @param {string} content - Text content.
 * @param {string} [color] - Font color.
 * @returns {HTMLElement}
 */
Morebits.htmlNode = (type: string, content: string, color?: string): HTMLElement => {
	const node = document.createElement(type);
	if (color) {
		node.style.color = color;
	}
	node.appendChild(document.createTextNode(content));
	return node;
};
/**
 * Add shift-click support for checkboxes. The wikibits version
 * (`window.addCheckboxClickHandlers`) has some restrictions, and doesn't work
 * with checkboxes inside a sortable table, so let's build our own.
 *
 * @param jQuerySelector
 * @param jQueryContext
 */
Morebits.checkboxShiftClickSupport = (
	jQuerySelector: string | HTMLElement[],
	jQueryContext?: string | HTMLElement | JQuery<HTMLElement>
): void => {
	let lastCheckbox: HTMLInputElement | null = null;
	const clickHandler = function clickHandler(
		this: HTMLInputElement,
		event: JQuery.TriggeredEvent<HTMLInputElement>
	): boolean {
		const thisCb = this;
		if (event.shiftKey && lastCheckbox !== null) {
			// can't cache them, obviously, if we want to support resorting
			const cbs = $<HTMLInputElement>(jQuerySelector as string, jQueryContext).toArray();
			let index = -1;
			let lastIndex = -1;
			let i: number;
			for (i = 0; i < cbs.length; i++) {
				if (cbs[i] === thisCb) {
					index = i;
					if (lastIndex > -1) {
						break;
					}
				}
				if (cbs[i] === lastCheckbox) {
					lastIndex = i;
					if (index > -1) {
						break;
					}
				}
			}
			if (index > -1 && lastIndex > -1) {
				// inspired by wikibits
				const endState = thisCb.checked;
				let start: number;
				let finish: number;
				if (index < lastIndex) {
					start = index + 1;
					finish = lastIndex;
				} else {
					start = lastIndex;
					finish = index - 1;
				}
				for (i = start; i <= finish; i++) {
					if (cbs[i]!.checked !== endState) {
						cbs[i]!.click();
					}
				}
			}
		}
		lastCheckbox = thisCb;
		return true;
	};
	$<HTMLInputElement>(jQuerySelector as string, jQueryContext).on('click', clickHandler);
};
/* **************** Morebits.batchOperation **************** */
/**
 * Iterates over a group of pages (or arbitrary objects) and executes a worker function
 * for each.
 *
 * `setPageList(pageList)`: Sets the list of pages to work on. It should be an
 * array of page names strings.
 *
 * `setOption(optionName, optionValue)`: Sets a known option:
 * - `chunkSize` (integer): The size of chunks to break the array into (default
 * 50). Setting this to a small value (<5) can cause problems.
 * - `preserveIndividualStatusLines` (boolean): Keep each page's status element
 * visible when worker is complete? See note below.
 *
 * `run(worker, postFinish)`: Runs the callback `worker` for each page in the
 * list.  The callback must call `workerSuccess` when succeeding, or
 * `workerFailure` when failing.  If using {@link Morebits.wiki.api} or
 * {@link Morebits.wiki.page}, this is easily done by passing these two
 * functions as parameters to the methods on those objects: for instance,
 * `page.save(batchOp.workerSuccess, batchOp.workerFailure)`.  Make sure the
 * methods are called directly if special success/failure cases arise.  If you
 * omit to call these methods, the batch operation will stall after the first
 * chunk!  Also ensure that either workerSuccess or workerFailure is called no
 * more than once.  The second callback `postFinish` is executed when the
 * entire batch has been processed.
 *
 * If using `preserveIndividualStatusLines`, you should try to ensure that the
 * `workerSuccess` callback has access to the page title.  This is no problem for
 * {@link Morebits.wiki.page} objects.  But when using the API, please set the
 * |pageName| property on the {@link Morebits.wiki.api} object.
 *
 * There are sample batchOperation implementations using Morebits.wiki.page in
 * twinklebatchdelete.js, twinklebatchundelete.js, and twinklebatchprotect.js.
 *
 * @memberof Morebits
 * @class
 * @param {string} [currentAction]
 */
class BatchOperation {
	private ctx: {
		pageList: string[] | null;
		options: {chunkSize: number; preserveIndividualStatusLines: boolean};
		statusElement: Status;
		worker: BatchOperationWorker | null;
		postFinish: (() => void) | null | undefined;
		countStarted: number;
		countFinished: number;
		countFinishedSuccess: number;
		currentChunkIndex: number;
		pageChunks: string[][];
		running: boolean;
	};

	constructor(currentAction?: string) {
		this.ctx = {
			// backing fields for public properties
			pageList: null,
			options: {
				chunkSize: 50,
				preserveIndividualStatusLines: false,
			},
			// internal counters, etc.
			statusElement: new Morebits.status(currentAction || uls('执行批量操作', '執行批次操作')),
			worker: null,
			// function that executes for each item in pageList
			postFinish: null,
			// function that executes when the whole batch has been processed
			countStarted: 0,
			countFinished: 0,
			countFinishedSuccess: 0,
			currentChunkIndex: -1,
			pageChunks: [],
			running: false,
		};
	}

	// shouldn't be needed by external users, but provided anyway for maximum flexibility
	getStatusElement = (): Status => {
		return this.ctx.statusElement;
	};

	/**
	 * Sets the list of pages to work on.
	 *
	 * @param {Array} pageList - Array of objects over which you wish to execute the worker function
	 * This is usually the list of page names (strings).
	 */
	setPageList = (pageList: string[]): void => {
		this.ctx.pageList = pageList;
	};

	/**
	 * Sets a known option.
	 *
	 * @param {string} optionName - Name of the option:
	 * - chunkSize (integer): The size of chunks to break the array into
	 * (default 50). Setting this to a small value (<5) can cause problems.
	 * - preserveIndividualStatusLines (boolean): Keep each page's status
	 * element visible when worker is complete?
	 * @param {number|boolean} optionValue - Value to which the option is
	 * to be set. Should be an integer for chunkSize and a boolean for
	 * preserveIndividualStatusLines.
	 */
	setOption = (optionName: 'chunkSize' | 'preserveIndividualStatusLines', optionValue: number | boolean): void => {
		const options = this.ctx.options as Record<'chunkSize' | 'preserveIndividualStatusLines', number | boolean>;
		options[optionName] = optionValue;
	};

	/**
	 * Runs the first callback for each page in the list.
	 * The callback must call workerSuccess when succeeding, or workerFailure when failing.
	 * Runs the optional second callback when the whole batch has been processed.
	 *
	 * @param {Function} worker
	 * @param {Function} [postFinish]
	 */
	run = (worker: BatchOperationWorker, postFinish?: () => void): void => {
		if (this.ctx.running) {
			this.ctx.statusElement.error(uls('批量操作已在运行', '批次操作已在執行'));
			return;
		}
		this.ctx.running = true;
		this.ctx.worker = worker;
		this.ctx.postFinish = postFinish;
		this.ctx.countStarted = 0;
		this.ctx.countFinished = 0;
		this.ctx.countFinishedSuccess = 0;
		this.ctx.currentChunkIndex = -1;
		this.ctx.pageChunks = [];
		const total = this.ctx.pageList!.length;
		if (!total) {
			this.ctx.statusElement.info(uls('没有指定页面', '沒有指定頁面'));
			this.ctx.running = false;
			if (this.ctx.postFinish) {
				this.ctx.postFinish();
			}
			return;
		}
		// chunk page list into more manageable units
		this.ctx.pageChunks = Morebits.array.chunk(this.ctx.pageList!, this.ctx.options.chunkSize);
		// start the process
		Morebits.wiki.addCheckpoint();
		this.ctx.statusElement.status('0%');
		this.fnStartNewChunk();
	};

	/**
	 * To be called by worker before it terminates successfully.
	 *
	 * @param {(Morebits.wiki.page|Morebits.wiki.api|string)} arg -
	 * This should be the `Morebits.wiki.page` or `Morebits.wiki.api` object used by worker
	 * (for the adjustment of status lines emitted by them).
	 * If no Morebits.wiki.* object is used (e.g. you're using `mw.Api()` or something else), and
	 * `preserveIndividualStatusLines` option is on, give the page name (string) as argument.
	 */
	workerSuccess = (arg: string | WikiApiInstance | WikiPageInstance): void => {
		if (arg instanceof Morebits.wiki.api || arg instanceof Morebits.wiki.page) {
			// update or remove status line
			const statelem = arg.getStatusElement()!;
			if (this.ctx.options.preserveIndividualStatusLines) {
				const argWithPageInfo = arg as unknown as {
					getPageName?: () => string;
					pageName?: string;
					query?: {title?: string};
				};
				if (
					argWithPageInfo.getPageName ||
					argWithPageInfo.pageName ||
					(argWithPageInfo.query && argWithPageInfo.query.title)
				) {
					// we know the page title - display a relevant message
					const pageName = argWithPageInfo.getPageName
						? argWithPageInfo.getPageName()
						: argWithPageInfo.pageName || argWithPageInfo.query!.title;
					statelem.info(`完成（[[${pageName}]]）`);
				} else {
					// we don't know the page title - just display a generic message
					statelem.info('完成');
				}
			} else {
				// remove the status line automatically produced by Morebits.wiki.*
				statelem.unlink();
			}
		} else if (typeof arg === 'string' && this.ctx.options.preserveIndividualStatusLines) {
			new Morebits.status(arg, `完成（[[${arg}]]）`);
		}
		this.ctx.countFinishedSuccess++;
		this.fnDoneOne();
	};

	workerFailure = (): void => {
		this.fnDoneOne();
	};

	// private functions
	private fnStartNewChunk = (): void => {
		const chunk = this.ctx.pageChunks[++this.ctx.currentChunkIndex];
		if (!chunk) {
			return; // done! yay
		}
		// start workers for the current chunk
		this.ctx.countStarted += chunk.length;
		for (const page of chunk) {
			this.ctx.worker!(page, this);
		}
	};

	private fnDoneOne = (): void => {
		this.ctx.countFinished++;
		// update overall status line
		const total = this.ctx.pageList!.length;
		if (this.ctx.countFinished < total) {
			const progress = Math.round((100 * this.ctx.countFinished) / total);
			this.ctx.statusElement.status(`${progress}%`);
			// start a new chunk if we're close enough to the end of the previous chunk, and
			// we haven't already started the next one
			if (
				this.ctx.countFinished >= this.ctx.countStarted - Math.max(this.ctx.options.chunkSize / 10, 2) &&
				Math.floor(this.ctx.countFinished / this.ctx.options.chunkSize) > this.ctx.currentChunkIndex
			) {
				this.fnStartNewChunk();
			}
		} else if (this.ctx.countFinished === total) {
			const statusString = `完成（${this.ctx.countFinishedSuccess}/${this.ctx.countFinished}操作成功完成）`;
			if (this.ctx.countFinishedSuccess < this.ctx.countFinished) {
				this.ctx.statusElement.warn(statusString);
			} else {
				this.ctx.statusElement.info(statusString);
			}
			if (this.ctx.postFinish) {
				this.ctx.postFinish();
			}
			Morebits.wiki.removeCheckpoint();
			this.ctx.running = false;
		} else {
			// ctx.countFinished > total
			// just for giggles! (well, serious debugging, actually)
			this.ctx.statusElement.warn(
				`${uls('完成（多执行了', '完成（多執行了') + (this.ctx.countFinished - total)}次）`
			);
			Morebits.wiki.removeCheckpoint();
			this.ctx.running = false;
		}
	};
}

Morebits.batchOperation = BatchOperation;

/**
 * A simple draggable window, now implemented in plain jQuery (formerly jQuery UI's dialog feature).
 * The dialog consists of a fixed-position frame with a titlebar (draggable),
 * a content area (the element accessible as {@link Morebits.simpleWindow#content}),
 * and a button pane at the bottom.
 *
 * @memberof Morebits
 * @class
 * @param {number} width
 * @param {number} height - The maximum allowable height for the content area.
 */
interface MorebitsNamespace {
	simpleWindow: typeof SimpleWindow;
}

class SimpleWindow {
	content: HTMLElement;
	buttons: HTMLElement[] = [];
	height: number;
	hasFooterLinks = false;
	scriptName: string | null = null;
	private frame: HTMLElement;
	private overlay: HTMLElement | null = null;
	private modal = false;
	private static zIndexCounter = 200;
	static setButtonsEnabled = (enabled: boolean): void => {
		const $body = $('body');
		$body.find('.morebits-dialog-buttons button').prop('disabled', !enabled);
	};

	constructor(width: number, height?: number) {
		const content = document.createElement('div');
		this.content = content;
		content.className = 'morebits-dialog-content';
		content.id = `morebits-dialog-content-${Math.round(Math.random() * 1e15)}`;
		this.height = height ?? 600;
		// give the dialog the given width value (clamped to the viewport), so it can position appropriately
		const widthNum = Math.min(window.innerWidth, Number.parseInt(String(width || 800), 10));
		this.frame = this.buildFrame();
		this.frame.style.width = `${widthNum}px`;
		document.body.append(this.frame);
	}

	/** Build the dialog frame: titlebar (draggable), content and button pane. */
	private buildFrame(): HTMLElement {
		const frame = document.createElement('div');
		frame.className = 'morebits-dialog';
		frame.tabIndex = -1; // focusable, so the ESC keydown listener receives events
		frame.style.display = 'none';
		const titlebar = document.createElement('div');
		titlebar.className = 'morebits-dialog-titlebar';
		const title = document.createElement('span');
		title.className = 'morebits-dialog-title';
		const closeButton = document.createElement('button');
		closeButton.type = 'button';
		closeButton.className = 'morebits-dialog-close';
		closeButton.setAttribute('aria-label', uls('关闭', '關閉'));
		closeButton.textContent = '\u00D7';
		closeButton.addEventListener('click', (event) => {
			event.preventDefault();
			this.close();
		});
		titlebar.append(title, closeButton);
		// drag the dialog by its titlebar
		titlebar.addEventListener('mousedown', (event: MouseEvent) => {
			if (event.button !== 0) {
				return;
			}
			const target = event.target;
			if (target instanceof Element && target.closest('.morebits-dialog-close')) {
				return;
			}
			event.preventDefault();
			const rect = this.frame.getBoundingClientRect();
			const offsetX = event.clientX - rect.left;
			const offsetY = event.clientY - rect.top;
			const onMove = (moveEvent: MouseEvent): void => {
				this.frame.style.left = `${moveEvent.clientX - offsetX}px`;
				this.frame.style.top = `${moveEvent.clientY - offsetY}px`;
			};
			const onUp = (): void => {
				document.removeEventListener('mousemove', onMove);
				document.removeEventListener('mouseup', onUp);
			};
			document.addEventListener('mousemove', onMove);
			document.addEventListener('mouseup', onUp);
		});
		const buttonpane = document.createElement('div');
		buttonpane.className = 'morebits-dialog-buttonpane';
		const buttonspan = document.createElement('span');
		buttonspan.className = 'morebits-dialog-buttons';
		const linksspan = document.createElement('span');
		linksspan.className = 'morebits-dialog-footerlinks';
		buttonpane.append(buttonspan, linksspan);
		frame.append(titlebar, this.content, buttonpane);
		// ESC closes the dialog (formerly jQuery UI's closeOnEscape default)
		frame.addEventListener('keydown', (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				this.close();
			}
		});
		return frame;
	}

	/**
	 * Focuses the dialog. This might work, or on the contrary, it might not.
	 *
	 * @returns {Morebits.simpleWindow}
	 */
	focus(): SimpleWindow {
		SimpleWindow.zIndexCounter += 1;
		this.frame.style.zIndex = String(SimpleWindow.zIndexCounter);
		if (this.overlay) {
			this.overlay.style.zIndex = String(SimpleWindow.zIndexCounter - 1);
		}
		return this;
	}

	/**
	 * Closes the dialog. If this is set as an event handler, it will stop the event
	 * from doing anything more.
	 *
	 * @param {event} [event]
	 * @returns {Morebits.simpleWindow}
	 */
	close(event?: Event): SimpleWindow {
		if (event) {
			event.preventDefault();
		}
		if (this.overlay) {
			this.overlay.remove();
			this.overlay = null;
		}
		this.frame.remove();
		return this;
	}

	/**
	 * Shows the dialog. Calling display() on a dialog that has previously been closed
	 * might work, but it is not guaranteed.
	 *
	 * @returns {Morebits.simpleWindow}
	 */
	display(): SimpleWindow {
		// the frame is removed from the DOM on close(); rebuild it if needed
		if (!this.frame.isConnected) {
			this.frame = this.buildFrame();
			const buttonspan = $(this.frame).find('.morebits-dialog-buttons').get(0);
			if (buttonspan) {
				if (this.buttons.length > 0) {
					$(buttonspan).empty().append(this.buttons);
					buttonspan.removeAttribute('data-empty');
				} else {
					buttonspan.setAttribute('data-empty', 'data-empty');
				}
			}
			document.body.append(this.frame);
		}
		if (this.scriptName) {
			const titleSpan = $(this.frame).find('.morebits-dialog-title').get(0);
			$(this.frame).find('.morebits-dialog-scriptname').remove();
			const scriptnamespan = document.createElement('span');
			scriptnamespan.className = 'morebits-dialog-scriptname';
			scriptnamespan.textContent = `${this.scriptName} \u00B7 `; // U+00B7 MIDDLE DOT = &middot;
			if (titleSpan) {
				$(titleSpan).prepend(scriptnamespan);
			}
		}
		if (this.modal && !this.overlay) {
			this.overlay = document.createElement('div');
			this.overlay.className = 'morebits-dialog-overlay';
			document.body.append(this.overlay);
		}
		this.focus();
		this.frame.focus(); // focus the dialog, so keyboard events (ESC) reach it
		if (window.setupTooltips && window.pg && window.pg.re && window.pg.re.diff) {
			// tie in with NAVPOP
			this.frame.ranSetupTooltipsAlready = false;
			window.setupTooltips(this.frame);
		}
		// center the dialog before the height algorithm may reposition it
		this.center();
		this.setHeight(this.height); // init height algorithm
		return this;
	}

	/** Center the dialog (horizontally and vertically, or at the top when requested). */
	private center(positionTop = false): void {
		const rect = this.frame.getBoundingClientRect();
		const left = Math.max(0, (window.innerWidth - rect.width) / 2);
		const top = positionTop ? 0 : Math.max(0, (window.innerHeight - rect.height) / 2);
		this.frame.style.left = `${left}px`;
		this.frame.style.top = `${top}px`;
	}

	/**
	 * Sets the dialog title.
	 *
	 * @param {string} title
	 * @returns {Morebits.simpleWindow}
	 */
	setTitle(title: string): SimpleWindow {
		const titleSpan = $(this.frame).find('.morebits-dialog-title').get(0);
		if (titleSpan) {
			titleSpan.textContent = title;
		}
		return this;
	}

	/**
	 * Sets the script name, appearing as a prefix to the title to help users determine which
	 * user script is producing which dialog. For instance, Twinkle modules set this to "Twinkle".
	 *
	 * @param {string} name
	 * @returns {Morebits.simpleWindow}
	 */
	setScriptName(name: string): SimpleWindow {
		this.scriptName = name;
		return this;
	}

	/**
	 * Sets the dialog width.
	 *
	 * @param {number} width
	 * @returns {Morebits.simpleWindow}
	 */
	setWidth(width: number): SimpleWindow {
		this.frame.style.width = `${width}px`;
		return this;
	}

	/**
	 * Sets the dialog's maximum height. The dialog will auto-size to fit its contents,
	 * but the content area will grow no larger than the height given here.
	 *
	 * @param {number} height
	 * @returns {Morebits.simpleWindow}
	 */
	setHeight(height: number): SimpleWindow {
		this.height = height;
		// from display time onwards, let the browser determine the optimum height,
		// and instead limit the height at the given value
		// note that the given height will exclude the approx. 20px that the jQuery UI
		// chrome has in height in addition to the height of an equivalent "classic"
		// Morebits.simpleWindow
		if (this.frame.getBoundingClientRect().height > window.innerHeight) {
			this.frame.style.height = `${window.innerHeight - 2}px`;
			this.center(true);
		} else {
			this.frame.style.height = 'auto';
		}
		this.content.style.maxHeight = `${Number.parseInt(String(this.height - 30), 10)}px`;
		return this;
	}

	/**
	 * Sets the content of the dialog to the given element node, usually from rendering
	 * a {@link Morebits.quickForm}.
	 * Re-enumerates the footer buttons, but leaves the footer links as they are.
	 * Be sure to call this at least once before the dialog is displayed...
	 *
	 * @param {HTMLElement} content
	 * @returns {Morebits.simpleWindow}
	 */
	setContent(content: HTMLElement): SimpleWindow {
		this.purgeContent();
		this.addContent(content);
		return this;
	}

	/**
	 * Adds the given element node to the dialog content.
	 *
	 * @param {HTMLElement} content
	 * @returns {Morebits.simpleWindow}
	 */
	addContent(content: HTMLElement): SimpleWindow {
		this.content.appendChild(content);
		// look for submit buttons in the content, hide them, and add a proxy button to the button pane
		const self = this;
		$(this.content)
			.find('input[type="submit"], button[type="submit"]')
			.each((_key, value) => {
				value.style.display = 'none';
				const button = document.createElement('button');
				if (value.hasAttribute('value')) {
					button.textContent = value.getAttribute('value') ?? '';
				} else if (value.textContent) {
					button.textContent = value.textContent;
				} else {
					button.textContent = '提交';
				}
				button.className = value.className || 'submitButtonProxy';
				// here is an instance of cheap coding, probably a memory-usage hit in using a closure here
				button.addEventListener(
					'click',
					() => {
						value.click();
					},
					false
				);
				self.buttons[self.buttons.length] = button;
			});
		// remove all buttons from the button pane and re-add them
		const buttonspan = $(this.frame).find('.morebits-dialog-buttons').get(0);
		if (buttonspan) {
			if (this.buttons.length > 0) {
				$(buttonspan).empty().append(this.buttons);
				buttonspan.removeAttribute('data-empty');
			} else {
				buttonspan.setAttribute('data-empty', 'data-empty'); // used by CSS
			}
		}

		return this;
	}

	/**
	 * Removes all contents from the dialog, barring any footer links.
	 *
	 * @returns {Morebits.simpleWindow}
	 */
	purgeContent(): SimpleWindow {
		this.buttons = [];
		// delete all buttons in the buttonpane
		$(this.frame).find('.morebits-dialog-buttons').empty();
		while (this.content.hasChildNodes()) {
			const [firstChild] = this.content.childNodes;
			if (!firstChild) {
				break;
			}
			this.content.removeChild(firstChild);
		}
		return this;
	}

	/**
	 * Adds a link in the bottom-right corner of the dialog.
	 * This can be used to provide help or policy links.
	 * For example, Twinkle's CSD module adds a link to the CSD policy page,
	 * as well as a link to Twinkle's documentation.
	 *
	 * @param {string} text - Display text.
	 * @param {string} wikiPage - Link target.
	 * @param {boolean} [prep=false] - Set true to prepend rather than append.
	 * @returns {Morebits.simpleWindow}
	 */
	addFooterLink(text: string, wikiPage: string, prep?: boolean): SimpleWindow {
		const footerlinks = $(this.frame).find('.morebits-dialog-footerlinks');
		if (this.hasFooterLinks) {
			const bullet = document.createElement('span');
			bullet.textContent = ' \u2022 '; // U+2022 BULLET
			if (prep) {
				footerlinks.prepend(bullet);
			} else {
				footerlinks.append(bullet);
			}
		}
		const link = document.createElement('a');
		link.setAttribute('href', mw.util.getUrl(wikiPage));
		link.setAttribute('title', wikiPage);
		link.setAttribute('target', '_blank');
		link.setAttribute('rel', 'noopener noreferrer');
		link.textContent = text;
		if (prep) {
			footerlinks.prepend(link);
		} else {
			footerlinks.append(link);
		}
		this.hasFooterLinks = true;
		return this;
	}

	/**
	 * Sets whether the window should be modal or not. Modal dialogs create
	 * an overlay below the dialog but above other page elements. This
	 * must be used (if necessary) before calling display().
	 *
	 * @param {boolean} [modal=false] - If set to true, other items on the
	 * page will be disabled, i.e., cannot be interacted with.
	 * @returns {Morebits.simpleWindow}
	 */
	setModality(modal: boolean): SimpleWindow {
		this.modal = modal;
		return this;
	}
}

Morebits.simpleWindow = SimpleWindow;

declare global {
	interface Window {
		/** Provided by the NAVPOP gadget, if present (used for tooltips). */
		setupTooltips?: (content: HTMLElement, complex?: boolean) => unknown;
		/** Provided by the NAVPOP gadget, if present. */
		pg?: {
			re?: {
				diff?: unknown;
			};
		};
	}
	interface HTMLElement {
		/** Set by NAVPOP to avoid double-processing of a node. */
		ranSetupTooltipsAlready?: boolean;
	}
}
