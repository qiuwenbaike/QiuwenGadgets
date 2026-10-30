import type {ActiveIcon} from './types';

/**
 * SVG markup inlined from `@wikimedia/codex-icons` v2.7.0.
 *
 * MediaWiki does not ship a ResourceLoader module that bundles
 * `@wikimedia/codex-icons` (see https://www.mediawiki.org/wiki/Codex),
 * so the icons are copied here verbatim and rendered as inline SVG
 * to keep the gadget self-contained while still sourcing the icons
 * from `@wikimedia/codex-icons`.
 *
 * @see {@link https://doc.wikimedia.org/codex/latest/icons/}
 */

/**
 * SVG for `cdxIconUserContributions`.
 *
 * This icon is composed of more than one tag, hence it is stored as raw SVG
 * markup instead of a bare path.
 */
const USER_CONTRIBUTIONS_ICON: ActiveIcon =
	'<path d="M1 3h18v2H1zm0 6h10v2H1zm0 6h8v2H1zm10 2v-1a3 3 0 013-3h2a3 3 0 013 3v1z"/><circle cx="15" cy="10" r="2"/>';

export {USER_CONTRIBUTIONS_ICON};
