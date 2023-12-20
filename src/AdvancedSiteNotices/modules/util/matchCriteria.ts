/* eslint-disable camelcase */
import {WG_USER_GROUPS, WG_USER_LANGUAGE} from '../constant';

const matchCriteria = ($notice: JQuery): boolean => {
	const cache: boolean | undefined = $notice.data('asn-cache');
	if (cache !== undefined) {
		return cache;
	}

	const in_group = (group: string): boolean => {
		const wgUserGroups: string[] | null = WG_USER_GROUPS;
		return wgUserGroups?.includes(group) ?? false;
	};

	const only_for = (userLanguage: string): boolean => {
		return userLanguage === WG_USER_LANGUAGE;
	};

	const testCriteria = (criteria: string): boolean => {
		// FIXME: This shouldn't be using eval on data entered in wikitext.
		// If that data is malformed it will throw an exception e.g. criteria = "(false))"
		try {
			// eslint-disable-next-line no-eval
			return window.eval(criteria);
		} catch {
			return false;
		}
	};

	const criteriaData: string | undefined = $notice.attr('data-asn-criteria');
	let result: boolean;

	if (criteriaData) {
		let criteria: string | undefined = mw.Uri.decode(criteriaData);
		criteria = criteria.trim() || 'true';
		result = testCriteria(criteria);
	} else {
		let criteria: string | boolean | undefined = !$notice.attr('class');
		if ($notice.hasClass('only_sysop')) {
			criteria ||= in_group('sysop');
		}
		if ($notice.hasClass('only_logged')) {
			criteria ||= in_group('user');
		}
		if ($notice.hasClass('only_anon')) {
			criteria ||= !in_group('user');
		}
		if ($notice.hasClass('only_zh_cn')) {
			criteria ||= only_for('zh-cn');
		}
		if ($notice.hasClass('only_zh_sg')) {
			criteria ||= only_for('zh-sg');
		}
		if ($notice.hasClass('only_zh_my')) {
			criteria ||= only_for('zh-my');
		}
		if ($notice.hasClass('only_zh_hk')) {
			criteria ||= only_for('zh-hk');
		}
		if ($notice.hasClass('only_zh_mo')) {
			criteria ||= only_for('zh-mo');
		}
		if ($notice.hasClass('only_zh_tw')) {
			criteria ||= only_for('zh-tw');
		}
		result = criteria;
	}

	$notice.data('asn-cache', result);

	return result;
};

export {matchCriteria};
