import type {IndicatorTone} from './types';
import type {UserRights} from '~/MarkRights/modules/types';

const CLASS_NAME: string = 'gadget-markrights_userpage';

/**
 * Groups that are either implicitly granted to every registered user or already
 * marked by another gadget, hence there is no need to display them here.
 */
const IMPLICIT_GROUPS: string[] = ['*', 'user', 'autoconfirmed', 'rnrsverify-confirmed', 'bot'];

/**
 * Maps a user group to the visual tone of its indicator badge.
 *
 * User groups that are missing here fall back to the neutral gray tone.
 */
const TONE_MAP: Partial<Record<UserRights, IndicatorTone>> = {
	autoreviewer: 'confirmed',
	bot: 'editor',
	checkuser: 'sysop',
	confirmed: 'confirmed',
	eventsponsor: 'patroller',
	flood: 'confirmed',
	'interface-admin': 'sysop',
	'ipblock-exempt': 'confirmed',
	'massmessage-sender': 'editor',
	patroller: 'patroller',
	qiuwen: 'steward',
	'rnrsverify-exempt': 'confirmed',
	senioreditor: 'editor',
	steward: 'steward',
	suppress: 'sysop',
	sysop: 'sysop',
	templateeditor: 'editor',
	transwiki: 'editor',
};

export {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST} from '~/GeoLocation/modules/constant';
export {CLASS_NAME, IMPLICIT_GROUPS, TONE_MAP};
