/*! Twinkle - shared dialog footer links helper */

import {uls} from './useUls';

/** A footer link of a Twinkle dialog. */
export type DialogLink = {text: string; href: string};

/**
 * Standard dialog footer links: any extra links first, then the module's
 * preferences and documentation links (plus the feedback link when wanted).
 */
export const footerLinks = (
	module: string,
	settingsText: string,
	extra: DialogLink[] = [],
	feedback = false
): DialogLink[] => [
	...extra,
	{text: settingsText, href: mw.util.getUrl(`H:TW/PREF#${module}`)},
	{text: uls('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl(`H:TW/DOC#${module}`)},
	...(feedback ? [{text: uls('反馈意见', '回報意見'), href: mw.util.getUrl('HT:TW')}] : []),
];
