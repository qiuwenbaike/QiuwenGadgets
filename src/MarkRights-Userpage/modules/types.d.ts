import type {UserRights} from '~/MarkRights/modules/types';

/**
 * The visual prominence of an indicator badge, which roughly follows the
 * hierarchy of the user rights listed in `UserRights`.
 */
type IndicatorTone = 'steward' | 'sysop' | 'patroller' | 'editor' | 'confirmed';

interface Indicator {
	/** The user group this indicator stands for. */
	group: UserRights;
	/** The localized name of the user group. */
	text: string;
}

/**
 * An icon accepted by the `icon` prop of the Codex `CdxIcon` component.
 *
 * Either raw SVG markup (which may contain more than one tag) or an object
 * holding an SVG path plus the flipping strategy used for right-to-left
 * languages.
 */
type IndicatorIcon = string | {path: string; shouldFlip?: boolean | undefined};

export type {Indicator, IndicatorIcon, IndicatorTone};
