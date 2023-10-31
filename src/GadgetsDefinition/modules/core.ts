/**
 * @description Adds links to gadget definitions in [[MediaWiki:Gadgets-definition]] and
 * prettifies them by adding whitespace.
 * Adds anchors to gadget definitions as well as CSS to highlight them when we
 * click a link to them.
 */
// Technique gleaned from [[enwiki:fr:Utilisateur:Od1n/AddLinksGadgetsDefinition.js]].
// This anchor element is used to generate links and is not attached to the document.
const link = document.createElement('a');

const makeLink = (href: string, text: string | null) => {
	link.href = href;
	link.textContent = text;
	return link.outerHTML;
};

const makeWikilink = (page: string, text?: string) => {
	return makeLink(mw.util.getUrl(page), text || page);
};

const linkGadgetSource = (sourcePage: string) => {
	return makeWikilink(`MediaWiki:Gadget-${sourcePage}`, sourcePage);
};

const gadgetNameRegex = /^(\s*)([\w_-]+)\s*/;

export const getGadgetName = (innerHTML: string) => {
	const match = gadgetNameRegex.exec(innerHTML);
	return match ? match[2] : null;
};

export const makeGadgetId = (gadgetName: string) => {
	return `Gadget-${gadgetName}`;
};

const linkGadgetAnchor = (gadgetName: string, text?: string) => {
	return makeLink(`#${makeGadgetId(gadgetName)}`, text || gadgetName);
};

export const processGadgetDefinition = (innerHTML: string) => {
	return (
		innerHTML
			// link gadget name to system message page and add space after it
			.replace(gadgetNameRegex, (_wholeMatch: string, whitespace: string, gadgetName: string) => {
				return `${whitespace + linkGadgetSource(gadgetName)} `;
			})
			.replace(/([\w_\-.]+\.(?:css|js(?:on)?))/g, linkGadgetSource) // link script names
			.replace(/\s*\|\s*/g, ' | ') // spaces around pipes

			/**
			 * process options
			 *
			 * Link dependencies: ext.gadget.name to entry on this page, others to
			 * [[mw:ResourceLoader/Core modules]] (even though not all have an entry
			 * there).
			 *
			 * Link peers to entry on this page.
			 *
			 * Link rights to [[mw:Manual:User_rights#List_of_permissions]]. There
			 * are unfortunately no anchors for individual rights.
			 */
			.replace(/([a-z]+)\s*=\s*(.+?)(?=\s*[|\]])/g, (_wholeMatch: string, key: string, value: string) => {
				let splitValue = value.split(/\s*,\s*/g);
				switch (key) {
					case 'dependencies':
						splitValue = splitValue.map((dependency: string) => {
							const gadgetName = /^ext\.gadget\.(.+)$/.exec(dependency);
							if (gadgetName) {
								const _gadgetName = gadgetName[1] ?? '';
								return linkGadgetAnchor(_gadgetName, dependency);
							}
							return makeWikilink(
								`Special:GoToInterwiki/mw:ResourceLoader/Core modules#${dependency}`,
								dependency
							);
						});
						break;
					case 'rights':
						key = makeWikilink('Special:GoToInterwiki/mw:Manual:User_rights#List_of_permissions', key);
						break;
					case 'peers':
						splitValue = splitValue.map((gadgetName) => {
							return linkGadgetAnchor(gadgetName);
						});
				}
				return `${key} = ${splitValue.join(', ')}`;
			})
	);
};
