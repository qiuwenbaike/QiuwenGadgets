/**
 * SVG paths inlined from `@wikimedia/codex-icons` v2.7.0.
 *
 * MediaWiki does not ship a ResourceLoader module that bundles
 * `@wikimedia/codex-icons` (see https://www.mediawiki.org/wiki/Codex),
 * so the path data is copied here verbatim and rendered as inline SVG
 * to keep the gadget self-contained while still sourcing the icons
 * from `@wikimedia/codex-icons`.
 *
 * @see {@link https://doc.wikimedia.org/codex/latest/icons/}
 */

/** Path for `cdxIconClose`. */
const cdxIconClose =
	'M16.707 4.707 11.414 10l5.293 5.293-1.414 1.414L10 11.414l-5.293 5.293-1.414-1.414L8.586 10 3.293 4.707l1.414-1.414L10 8.586l5.293-5.293z';

/** Path for `cdxIconReference`. */
const cdxIconReference = 'M18 20H2V0h16zM4 18h12V2h-2v10h-.914L12 11l-1.086 1H10V2H4z';

/** Path for `cdxIconDownTriangle`. */
const cdxIconDownTriangle = 'M5 8h10v1l-5 5-5-5z';

/**
 * Render an `@wikimedia/codex-icons` path as an inline `<svg>` string.
 *
 * The SVG is sized to 100% of its parent so consumers control the
 * dimensions via CSS, and `currentColor` is used so the icon inherits
 * its color from the surrounding text.
 *
 * @param path The path data from `@wikimedia/codex-icons`.
 * @returns The inline SVG markup.
 */
const toInlineSvg = (path: string): string => {
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path d="${path}"/></svg>`;
};

export {cdxIconClose, cdxIconReference, cdxIconDownTriangle, toInlineSvg};
