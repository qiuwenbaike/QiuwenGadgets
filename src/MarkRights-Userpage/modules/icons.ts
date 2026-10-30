import type {IndicatorIcon} from './types';
import type {UserRights} from '~/MarkRights/modules/types';

/**
 * SVG path data inlined from `@wikimedia/codex-icons` v2.7.0.
 *
 * MediaWiki does not ship a ResourceLoader module that bundles
 * `@wikimedia/codex-icons` (see https://www.mediawiki.org/wiki/Codex),
 * so the icons are copied here verbatim and rendered as inline SVG
 * to keep the gadget self-contained while still sourcing the icons
 * from `@wikimedia/codex-icons`.
 *
 * @see {@link https://doc.wikimedia.org/codex/latest/icons/}
 */

/** Path for `cdxIconCheck`. */
const cdxIconCheck: IndicatorIcon = {
	path: 'M18.154 3.837 8 16.8H6.65l-4.8-3.6 1.2-1.6 4.02 3.015 9.517-12.02z',
};

/** Path for `cdxIconCheckAll`. */
const cdxIconCheckAll: IndicatorIcon = {
	path: 'M14 17h-4v-2h4zm2.404-13.163L6.22 16.8H4.9L.1 13.2l1.2-1.6 4.02 3.015 9.517-12.02zM17 13h-4v-2h4zm3-4h-4V7h4z',
};

/** Path for `cdxIconDownload`. */
const cdxIconDownload: IndicatorIcon = {
	path: 'M19 19H1v-2h18zm-8-7.104 3.5-3.5 1.414 1.414-5.207 5.208H9.293L4.086 9.81 5.5 8.396l3.5 3.5V1h2z',
};

/** Path for `cdxIconEdit`. */
const cdxIconEdit: IndicatorIcon = {
	path: 'm15.4.4 4.2 4.2-3.2 3.2-4.2-4.2zM10.8 5 15 9.2l-8.6 8.6-4.5 1.5-1.2-1.2 1.5-4.5z',
};

/** Path for `cdxIconEyeClosed`. */
const cdxIconEyeClosed: IndicatorIcon = {
	path: 'm19.254 17.84-1.414 1.414-3.64-3.64a7 7 0 01-9.15-.65L.793 10.707V9.292l3.542-3.543L.871 2.285 2.285.871zM2.914 9.999l3.55 3.55a5 5 0 006.302.63l-1.855-1.854a2.5 2.5 0 01-3.238-3.238L5.749 7.163zm4.724-6.604a7 7 0 017.311 1.64l4.258 4.257v1.415l-2.13 2.128-1.414-1.414 1.423-1.422-3.55-3.55A5 5 0 009.28 5.037z',
};

/** Path for `cdxIconGlobe`. */
const cdxIconGlobe: IndicatorIcon = {
	path: 'M10 1a9 9 0 110 18 9 9 0 010-18M8.028 11c.1 1.846.473 3.431.97 4.552.295.661.594 1.073.824 1.292.081.077.14.117.178.138a1 1 0 00.178-.138c.23-.22.529-.63.823-1.292.498-1.12.87-2.706.97-4.552zm-4.956 0a7 7 0 004.122 5.413C6.557 15.001 6.13 13.11 6.025 11zm10.903 0c-.104 2.11-.533 4-1.17 5.413A7 7 0 0016.928 11zm-6.78-7.414A7 7 0 003.071 9h2.953c.104-2.11.531-4.001 1.17-5.414ZM10 3.016a1 1 0 00-.178.14c-.23.22-.53.63-.823 1.292-.498 1.12-.87 2.706-.97 4.552h3.943c-.101-1.846-.473-3.431-.971-4.552-.294-.661-.593-1.073-.823-1.292a1 1 0 00-.178-.14m2.805.57c.638 1.413 1.066 3.303 1.17 5.414h2.953a7 7 0 00-4.123-5.414',
};

/** Path for `cdxIconHome`. */
const cdxIconHome: IndicatorIcon = {
	path: 'm19.707 10.293-1.414 1.414L17 10.414V20H3v-9.586l-1.293 1.293-1.414-1.414L10 .586zM5 8.414V18h3v-5h4v5h3V8.414l-5-5z',
};

/** Path for `cdxIconLayout`. */
const cdxIconLayout: IndicatorIcon = {
	path: 'M9 18H2V2h7zm-5-2h3V4H4zm14 2h-7v-7h7zm-5-2h3v-3h-3zm5-7h-7V2h7zm-5-2h3V4h-3z',
	shouldFlip: true,
};

/** Path for `cdxIconMessage`. */
const cdxIconMessage: IndicatorIcon = {
	path: 'M20 17H0V3h20zm-10-4.212-8-6.5V15h16V6.288zm0-2.577L16.414 5H3.586z',
};

/** Path for `cdxIconRecentChanges`. */
const cdxIconRecentChanges: IndicatorIcon = {
	path: 'm16.594 12.402-5.376 5.376-.096.04-1.768.706-.65-.65.707-1.768.04-.095 5.375-5.376zM7 17.01 1 17v-2l6 .01zM12 11H1V9h11zm7.422-1.426-1.414 1.414-1.768-1.767 1.414-1.414zM19 5H1V3h18z',
};

/** Path for `cdxIconSearch`. */
const cdxIconSearch: IndicatorIcon = {
	path: 'M8 1a7 7 0 015.605 11.191l5.102 5.102-1.414 1.414-5.102-5.102A7 7 0 118 1m0 2a5 5 0 100 10A5 5 0 008 3',
};

/** Path for `cdxIconSettings`. */
const cdxIconSettings: IndicatorIcon = {
	path: 'M11.835 3.505a6.7 6.7 0 011.46.603l2.362-1.18 1.414 1.415-1.18 2.361a6.7 6.7 0 01.603 1.46L19 9v2l-2.506.835a6.7 6.7 0 01-.603 1.46l1.18 2.362-1.414 1.414-2.362-1.18a6.7 6.7 0 01-1.46.603L11 19H9l-.836-2.506a6.7 6.7 0 01-1.46-.603l-2.361 1.18-1.414-1.414 1.18-2.362a6.7 6.7 0 01-.604-1.46L1 11V9l2.505-.836a6.7 6.7 0 01.603-1.46l-1.18-2.361 1.415-1.414 2.361 1.18a6.7 6.7 0 011.46-.604L9 1h2zM10 7a3 3 0 100 6 3 3 0 000-6',
};

/** Path for `cdxIconStar`. */
const cdxIconStar: IndicatorIcon = {
	path: 'M12.9 7H19v1.588l-4.593 3.589L16.5 19h-2L10 15.5 5.5 19h-2l2.092-6.823L1 8.587V7h6.1l1.945-5.995h1.91zM8.6 9H4.5l3.415 2.435-1.289 4.17L10 13l3.373 2.605-1.288-4.17L15.5 9h-4.05L10 4.687z',
};

/** Path for `cdxIconSuccess`. */
const cdxIconSuccess: IndicatorIcon = {
	path: 'M10 1a9 9 0 110 18 9 9 0 010-18M8.823 11.118 6.8 9.6l-1.2 1.6 2.8 2.1h1.1l4.905-5.956-1.561-1.25z',
};

/** Path for `cdxIconTemplateAdd`. */
const cdxIconTemplateAdd: IndicatorIcon = {
	path: 'M9 6H2v9h13v-3h2v5H0V4h9zm8-2h3v2h-3v3h-2V6h-3V4h3V1h2z',
	shouldFlip: true,
};

/** Path for `cdxIconUnFlag`. */
const cdxIconUnFlag: IndicatorIcon = {
	path: 'm19.254 17.84-1.414 1.414L10.586 12H5v8H3V4.414L.871 2.285 2.285.871zM5 10h3.586L5 6.414zm12 2h-.758l-2-2H15V4H8.242l-2-2H17z',
};

/** Path for `cdxIconUpdate`. */
const cdxIconUpdate: IndicatorIcon = {
	path: 'm12.009 13.695.002 1.388-4.694 4.88-1.441-1.385 3.065-3.188H0v-2h8.933l-3.057-3.164 1.438-1.39zm2.115-12.219L11.067 4.64H20v2h-8.941l3.065 3.188-1.441 1.386-4.694-4.881.002-1.388 4.694-4.86 1.439 1.39Z',
	shouldFlip: true,
};

/**
 * SVG for `cdxIconRobot`.
 *
 * This icon is composed of more than one tag, hence it is stored as raw SVG
 * markup instead of a bare path.
 */
const cdxIconRobot: IndicatorIcon =
	'<path d="M9 3h2v2h5.5A2.5 2.5 0 0119 7.5V15h-7v2h4a1 1 0 011 1v2H3v-2a1 1 0 011-1h4v-2H1V7.5A2.5 2.5 0 013.5 5H9M5.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3m9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3"/><circle cx="10" cy="2" r="2"/>';

/**
 * SVG for `cdxIconKey`, used for user groups without a dedicated icon.
 *
 * This icon is composed of more than one tag, hence it is stored as raw SVG
 * markup instead of a bare path.
 */
const cdxIconKey: IndicatorIcon =
	'<path d="M13.706 1.5C17.128 1.5 20 4.133 20 7.5s-2.872 6-6.294 6c-.65 0-1.28-.095-1.873-.27q-.007-.004-.016-.006L9.855 15H9v2H7v1.5H1l-1-1v-2.435L7.446 8.13a6 6 0 01-.034-.631c0-3.367 2.872-6 6.294-6Zm0 2c-2.426 0-4.294 1.844-4.294 4q0 .407.083.79l.12.555L2 15.935v.565h3V15h2v-2h2.086l2.3-2.081.584.24a4.5 4.5 0 001.736.341c2.426 0 4.294-1.844 4.294-4s-1.868-4-4.294-4"/><circle cx="13.75" cy="7.5" r="1.5"/>';

/**
 * SVG for `cdxIconUnLock`.
 *
 * This icon is composed of more than one tag, hence it is stored as raw SVG
 * markup instead of a bare path.
 */
const cdxIconUnLock: IndicatorIcon =
	'<path d="M11 15H9v-3h2z"/><path d="M10 1a4 4 0 014 4v3h3v11H3V8h9V5a2 2 0 10-4 0v.5H6V5a4 4 0 014-4M5 17h10v-7H5z"/>';

const GROUP_ICONS: Partial<Record<UserRights, IndicatorIcon>> = {
	autoconfirmed: cdxIconCheckAll,
	autoreviewer: cdxIconUnFlag,
	bot: cdxIconRobot,
	checkuser: cdxIconSearch,
	confirmed: cdxIconCheck,
	eventsponsor: cdxIconStar,
	flood: cdxIconUpdate,
	'interface-admin': cdxIconLayout,
	'ipblock-exempt': cdxIconUnLock,
	'massmessage-sender': cdxIconMessage,
	patroller: cdxIconRecentChanges,
	qiuwen: cdxIconHome,
	'rnrsverify-exempt': cdxIconSuccess,
	senioreditor: cdxIconEdit,
	steward: cdxIconGlobe,
	suppress: cdxIconEyeClosed,
	sysop: cdxIconSettings,
	templateeditor: cdxIconTemplateAdd,
	transwiki: cdxIconDownload,
};

/** Icon for user groups that have no dedicated icon. */
const UNKNOWN_GROUP_ICON: IndicatorIcon = cdxIconKey;

export {GROUP_ICONS, UNKNOWN_GROUP_ICON};
