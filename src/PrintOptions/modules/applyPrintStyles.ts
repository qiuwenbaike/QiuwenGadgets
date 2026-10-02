import type {PrintOptions} from './types';

const applyPrintStyles = ({enhanced, noimages, norefs, notoc, nobackground, blacktext}: PrintOptions): void => {
	if (!enhanced) {
		for (const stylesheet of document.styleSheets) {
			const {media} = stylesheet;
			if (!media) {
				continue;
			}

			if (media.mediaText && media.mediaText.includes('print')) {
				if (!media.mediaText.includes('screen')) {
					stylesheet.disabled = true;
				}
			} else if (media.mediaText && media.mediaText.includes('screen') && !media.mediaText.includes('print')) {
				try {
					media.appendMedium('print');
				} catch {
					media.mediaText += ',print';
				}
			}

			let rules: CSSRuleList | null;
			try {
				rules = stylesheet.cssRules;
			} catch {
				mw.log.warn('Not possible to correct stylesheet due to cross origin restrictions.');
				continue;
			}

			if (!rules) {
				continue;
			}

			for (let index = 0; index < rules.length; index++) {
				const rule = rules[index];
				if (!rule || rule.type !== CSSRule.MEDIA_RULE) {
					continue;
				}

				const mediaRule = rule as CSSMediaRule;
				const hasPrint = Array.from(mediaRule.media).includes('print');
				const hasScreen = Array.from(mediaRule.media).includes('screen');
				if (hasPrint && !hasScreen) {
					stylesheet.deleteRule(index);
					index--;
				} else if (hasScreen && !hasPrint) {
					try {
						mediaRule.media.appendMedium('print');
					} catch {
						mediaRule.media.mediaText += ',print';
					}
				}
			}
		}
	}

	let printStyle = '';
	if (noimages) {
		printStyle += 'img,.thumb{display:none}';
	}
	if (norefs) {
		printStyle += '.mw-headline[id="References"],ol.references,.reference{display:none}';
	}
	if (notoc) {
		printStyle += '#toc,.toc{display:none}';
	}
	if (nobackground) {
		printStyle += '*{background:none !important}';
	}
	if (blacktext) {
		printStyle += '*{color:#000 !important}';
	}

	if (printStyle) {
		document.querySelector('#printStyle')?.remove();
		const styleTag = document.createElement('style');
		styleTag.id = 'printStyle';
		styleTag.media = 'print';
		styleTag.append(document.createTextNode(printStyle));
		document.head.append(styleTag);
	}
};

export {applyPrintStyles};
