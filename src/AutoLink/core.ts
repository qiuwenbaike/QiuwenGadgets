/**
 * @description Autolink [[wikilinks]], [external links] and {{templates}}
 */
export const isSpecialPage: boolean = [
	'Contributions',
	'Log',
	'Newpages',
	'Recentchanges',
	'Recentchangeslinked',
	'Watchlist',
].includes(mw.config.get('wgCanonicalSpecialPageName').toString());

export const autoLink = (): void => {
	/* Variables */
	let isActivateHTML = false;
	const wgAction: MediaWikiConfigMap_WgAction = mw.config.get('wgAction');
	const isDiffAction: boolean = location.href.includes('diff=');
	// It says if I'm in a diff page
	const isHistoryAction: boolean = wgAction === 'history';
	// It says if I'm in a history page
	const isEditOrSubmitAction: boolean = ['edit', 'submit'].includes(wgAction);
	// It says if I'm in an edit or submit page
	let color = ''; // links color (coloured links)
	const $targetDivList: JQuery[] = [];
	if (isDiffAction) {
		// in diff pages
		$targetDivList.push($('.diff'), $('.firstrevisionheader'));
		color = 'inherit'; // not coloured links
	} else if (isEditOrSubmitAction || isHistoryAction || isSpecialPage) {
		// in comments
		$targetDivList.push($('.comment'));
	} else {
		// in code sections
		$targetDivList.push($('source'), $('.javascript'), $('.source-javascript'), $('.css'), $('.source-css'));
	}

	/* Regex */
	let regexURLinWikicodeWithoutLabel: RegExp;
	let regexSubstinWikicodeWithoutLabel: string;
	let regexURLinWikicodeWithLabel: RegExp;
	let regexSubstinWikicodeWithLabel: string;
	let regexOtherPages: RegExp;
	let regexSubstinOtherPages: string;
	let regexTemplate: RegExp;
	let regexSubstinTemplate: string;
	let regexWikilink1: RegExp;
	let regexSubstinWikilink1: string;
	let regexWikilink2: RegExp;
	let regexSubstinWikilink2: string;
	const regexInternalURL = /([^=])([\s"'])((?:\/?w\/index\.php\?|\/?wiki\/)[\w!#%&()+./:=?@\\~-]+)\2/g;
	// External links (no wikicode)
	const regexImportScript =
		/([Ii]mport[Ss]cript(?:<span class="br0">)?\((?:<\/span><span class="st0">)?)('|")([^\n<>[\]{|}]+?)(\2(?:<\/span><span class="br0">)?\)(?:<\/span>)?)/g;
	// ImportScript
	const regexTl = /([^{]{{2}\s*[Tt]l\|)([^\n:<>[\]{|}]+)/g;
	// For {{tl}}
	const regexURL =
		/((?:[^"[]|[^=]")(?:<span class="diffchange">)?)((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+?)(?=(?:<\/span>)?[\s"')\]|}])/g;
	// External links (no wikicode)
	// Regex for diffs
	regexURLinWikicodeWithoutLabel =
		/((?:[^[]|^)\[\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*)((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)((?:<\/span>)?(?:<span class="diffchange">)?)([\w!#%&()+./:=?@\\~-]*)((?:<\/span>)?(?:<span class="diffchange">)?)([\w!#%&()+./:=?@\\~-]*)([^\n\]]*])/gm;
	regexSubstinWikicodeWithoutLabel = `$1<a class="external autolink" style="color:${color}" href="$2$4$6">$2</a>$3<a class="external autolink" style="color:${color}" href="$2$4$6">$4</a>$5<a class="external autolink" style="color:${color}" href="$2$4$6">$6</a>$7`;
	// External links in diff pages, wikicode without label
	regexURLinWikicodeWithLabel = regexURLinWikicodeWithoutLabel;
	regexSubstinWikicodeWithLabel = regexSubstinWikicodeWithoutLabel;
	// External links in diff pages, wikicode with label
	regexOtherPages =
		/((?:[^{]|^){{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*)((?:[Ss]peciale?|[Qq](?:iuwen|[Ww])|[Ww][Pp]|[Tt]emplate|[Uu]ser)?\s*(?: ?[Tt]alk)?\s*:[^\n:<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)(\||}{2})/gm;
	regexSubstinOtherPages = `$1<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$2</a>$3<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$4</a>$5<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$6</a>$7`;
	// Other pages included in diff pages
	regexTemplate =
		/((?:[^{]|^){{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?)([^\n:<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)(\||}{2}|:)/gm;
	regexSubstinTemplate = `$1<a class="autolink" style="color:${color}" href="/wiki/Template:$2$4$6">$2</a>$3<a class="autolink" style="color:${color}" href="/wiki/Template:$2$4$6">$4</a>$5<a class="autolink" style="color:${color}" href="/wiki/Template:$2$4$6">$6</a>$7`;
	// Templates in diff pages
	regexWikilink1 =
		/(\[{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*)([^\n<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n<>[\]{|}]*)((?:[^\n\]]|][^\]])*]{2})/g;
	regexSubstinWikilink1 = `$1<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$2</a>$3<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$4</a>$5<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$6</a>$7`;
	// Wikilinks in diff pages
	regexWikilink2 = regexWikilink1;
	regexSubstinWikilink2 = regexSubstinWikilink1;
	// Regex for comments or code sections
	if (!isDiffAction) {
		regexURLinWikicodeWithoutLabel = /([^[]|^)\[\s*((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)\s*]/gm;
		regexSubstinWikicodeWithoutLabel = `$1<a class="external autolink" style="color:${color}" href="$2">$2</a>`;
		// External links in comments or code sections, wikicode without label
		regexURLinWikicodeWithLabel = /([^[]|^)\[\s*((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)\s+([^\n]+?)\s*]/gm;
		regexSubstinWikicodeWithLabel = `$1<a class="external autolink" style="color:${color}" href="$2">$3</a>`;
		// External links in comments or code sections, wikicode with label (the URL will not be visible)
		regexOtherPages =
			/((?:[^{]|^){{2}\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*)((?:[Ss]pecial|[Qq](?:iuwen|Q)|[Ww][Pp]|[Tt]emplate|[Uu]ser)?\s*(?: ?[Tt]alk)?\s*:[^\n:<>[\]{|}]+)(\||}{2})/gm;
		regexSubstinOtherPages = `$1<a class="autolink" style="color:${color}" href="/wiki/$2">$2</a>$3`;
		// Other pages included in comments or code sections
		regexTemplate =
			/((?:[^{]|^){{2}\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*)([^\n:<>[\]{|}]+)(\||}{2}|:)/gm;
		regexSubstinTemplate = `$1<a class="autolink" style="color:${color}" href="/wiki/Template:$2">$2</a>$3`;
		// Templates in comments or code sections
		regexWikilink1 = /\[{2}\s*([^\n<>[\]{|}]+?)\s*\|\s*(.+?)\s*]{2}/g;
		regexSubstinWikilink1 = `<a class="autolink" style="color:${color}" href="/wiki/$1">$2</a>`;
		// Wikilinks in code sections, with label
		regexWikilink2 = /\[{2}\s*([^\n<>[\]{|}]+?)\s*\|?\s*]{2}/g;
		regexSubstinWikilink2 = `<a class="autolink" style="color:${color}" href="/wiki/$1">$1</a>`;
		// Wikilinks in code sections, without label
		isActivateHTML = true;
		// Activate some HTML (inline) and wikicode for bold and italic
	}
	for (const $element of $targetDivList) {
		for (const element of $element) {
			let {innerHTML} = element;
			const originInnerHTML: string = innerHTML;
			innerHTML = innerHTML.replace(/&lt;/g, '&shy;<&shy;');
			innerHTML = innerHTML.replace(/&gt;/g, '&shy;>&shy;');
			// &amp;lt; to &amp;shy;<&amp;shy; and &amp;gt; to &amp;shy;>&amp;shy; (&amp;shy; is a marker)
			innerHTML = innerHTML.replace(/&amp;/g, '&');
			// &amp;amp; to &
			/* --- */
			innerHTML = innerHTML.replace(
				regexTl,
				`$1<a class="autolink" style="color:${color}" href="/wiki/Template:$2">$2</a>`
			);
			// For {{tl}}: make his argument into link
			innerHTML = innerHTML.replace(
				regexURL,
				`$1<a class="external autolink" style="color:${color}" href="$2">$2</a>`
			);
			// Parse inactive external links (no wikicode)
			innerHTML = innerHTML.replace(regexURLinWikicodeWithoutLabel, regexSubstinWikicodeWithoutLabel);
			// Make external links in wikicode without label into links
			innerHTML = innerHTML.replace(regexURLinWikicodeWithLabel, regexSubstinWikicodeWithLabel);
			// Make external links in wikicode with label into links
			innerHTML = innerHTML.replace(regexOtherPages, regexSubstinOtherPages);
			// Make other pages included code into links
			innerHTML = innerHTML.replace(regexTemplate, regexSubstinTemplate);
			innerHTML = innerHTML.replace(/href="\/wiki\/Template:#/g, 'href="/wiki/Help:');
			// Make template code into links
			innerHTML = innerHTML.replace(regexWikilink1, regexSubstinWikilink1);
			innerHTML = innerHTML.replace(regexWikilink2, regexSubstinWikilink2);
			// Make wikilink code into links
			innerHTML = innerHTML.replace(
				regexInternalURL,
				`$1$2<a class="external autolink" style="color:${color}" href="$3">$3</a>$2`
			);
			// Parse inactive external links (no wikicode)
			innerHTML = innerHTML.replace(
				regexImportScript,
				`$1$2<a class="autolink" style="color:${color}" href="/wiki/$3">$3</a>$4`
			);
			// Parse ImportScript
			innerHTML = innerHTML.replace(/&shy;<&shy;/g, '&lt;');
			innerHTML = innerHTML.replace(/&shy;>&shy;/g, '&gt;');
			// &amp;shy;<&amp;shy; to &amp;lt; and &amp;shy;>&amp;shy; to &amp;gt; (revert)
			if (isActivateHTML) {
				innerHTML = innerHTML.replace(
					/&lt;(span|b|i|strong|small|tt|del|s|u|sub|sup)&gt;(.*?)&lt;\/(\1)&gt;/g,
					'<$1>$2</$3>'
				);
				innerHTML = innerHTML.replace(/([^']|^)'{3}(.+?)'{3}([^']|$)/gm, '$1<b>$2</b>$3');
				innerHTML = innerHTML.replace(/([^']|^)'{2}(.+?)'{2}([^']|$)/gm, '$1<i>$2</i>$3');
				if (isEditOrSubmitAction || isHistoryAction || isSpecialPage) {
					innerHTML = innerHTML.replace(
						/<i>(.*?)<\/i>/g,
						'<span title="italic" style="border:1px solid #c0c0c0;padding:2px">$1</span>'
					);
				}
				// I'm in a comment field (italic)
			}
			if (isDiffAction) {
				innerHTML = innerHTML.replace(/<a [^>]+><\/a>/g, ''); // Clean
				innerHTML = innerHTML.replace(
					/([^[]|^)\[\s*(<a [^>]+>)(?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+(<\/a>)\s+([^\n\]]+)]/gm,
					'$1$2$4$3'
				);
				innerHTML = innerHTML.replace(
					/([^[]|^)\[\s*(<a [^>]+>)((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)(<\/a>)\s*]/gm,
					'$1$2$3$4'
				);
			}
			if (innerHTML !== originInnerHTML) {
				requestAnimationFrame((): void => {
					element.innerHTML = innerHTML; // Write it back
				});
			}
		}
	}
};
