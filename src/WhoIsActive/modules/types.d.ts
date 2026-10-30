type Usercontribs = {
	usercontribs: {
		timestamp: string;
	}[];
};

type Logevents = {
	logevents: {
		timestamp: string;
	}[];
};

/**
 * The period since the user's last activity.
 *
 * Members are ordered from the most recent to the least recent.
 */
type TimeSpan = 'ThisWeek' | 'ThisMonth' | 'ThisSeason' | 'ThisSemiyear' | 'ThisYear' | 'OverAYear';

/**
 * The color used to highlight an indicator, which roughly follows how long the
 * user has been inactive.
 *
 * Members are ordered from the most active to the least active.
 */
type TimeSpanTone = 'success' | 'info' | 'purple' | 'orange' | 'warning' | 'error';

/**
 * An icon accepted by the `icon` prop of the Codex `CdxIcon` component.
 *
 * Either raw SVG markup (which may contain more than one tag) or an object
 * holding an SVG path plus the flipping strategy used for right-to-left
 * languages.
 */
type ActiveIcon = string | {path: string; shouldFlip?: boolean | undefined};

export type {ActiveIcon, Logevents, TimeSpan, TimeSpanTone, Usercontribs};
