import type {TimeSpan} from '../types';

/** The number of milliseconds in a day. */
const MILLISECONDS_PER_DAY: number = 24 * 60 * 60 * 1000;

/**
 * Convert the timestamp of the last activity into a coarse time span.
 *
 * @param timestamp The ISO 8601 timestamp of the last activity.
 * @returns The period since the last activity.
 */
const getTimeSpan = (timestamp: string): TimeSpan => {
	const date: number = Date.parse(timestamp);
	const diff: number = Math.floor((Date.now() - date) / MILLISECONDS_PER_DAY);

	if (diff > 365) {
		return 'OverAYear';
	} else if (diff > 183) {
		return 'ThisYear';
	} else if (diff > 92) {
		return 'ThisSemiyear';
	} else if (diff > 31) {
		return 'ThisSeason';
	} else if (diff > 7) {
		return 'ThisMonth';
	}

	return 'ThisWeek';
};

export {getTimeSpan};
