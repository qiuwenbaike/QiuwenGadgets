import type {TimeSpan, TimeSpanTone} from './types';

const CLASS_NAME: string = 'gadget-whoisactive';

/**
 * Maps the period since the last activity to the color of its indicator.
 *
 * Members are ordered from the most recent to the least recent, and every member
 * is colored from green to red following how inactive the user has become.
 */
const TONE_MAP: Record<TimeSpan, TimeSpanTone> = {
	OverAYear: 'error',
	ThisMonth: 'info',
	ThisSeason: 'purple',
	ThisSemiyear: 'orange',
	ThisWeek: 'success',
	ThisYear: 'warning',
};

export {SYSTEM_SCRIPT_LIST} from '~/GeoLocation/modules/constant';
export {CLASS_NAME, TONE_MAP};
