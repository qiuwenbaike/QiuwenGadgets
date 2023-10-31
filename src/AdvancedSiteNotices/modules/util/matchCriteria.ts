/* eslint-disable camelcase, no-eval, @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
import {WG_USER_GROUPS, WG_USER_LANGUAGE} from '../../../constant';

const testCriteria = (criteria: string): boolean => {
	// @ts-ignore
	const in_group = (group: string): boolean => {
		const wgUserGroups: string[] | null = WG_USER_GROUPS;
		return wgUserGroups?.includes(group) ?? false;
	};
	// @ts-ignore
	const only_for = (userLanguage: string): boolean => {
		return userLanguage === WG_USER_LANGUAGE;
	};

	// FIXME: This shouldn't be using eval on data entered in wikitext.
	// If that data is malformed it will throw an exception e.g. criteria = "(false))"
	try {
		return window.eval(criteria);
	} catch {
		return false;
	}
};

const matchCriteria = ($notice: JQuery): boolean => {
	const cache: boolean | undefined = $notice.data('asn-cache');
	if (cache !== undefined) {
		return cache;
	}

	let criteria: string | undefined = $notice.attr('data-asn-criteria');
	if (criteria === undefined) {
		criteria = $notice.attr('class') ? 'false' : 'true';
		if ($notice.hasClass('only_sysop')) {
			criteria += '||in_group("sysop")';
		}
		if ($notice.hasClass('only_logged')) {
			criteria += '||in_group("user")';
		}
		if ($notice.hasClass('only_anon')) {
			criteria += '||!in_group("user")';
		}
		if ($notice.hasClass('only_zh_cn')) {
			criteria += '||only_for("zh-cn")';
		}
		if ($notice.hasClass('only_zh_sg')) {
			criteria += '||only_for("zh-sg")';
		}
		if ($notice.hasClass('only_zh_my')) {
			criteria += '||only_for("zh-my")';
		}
		if ($notice.hasClass('only_zh_hk')) {
			criteria += '||only_for("zh-hk")';
		}
		if ($notice.hasClass('only_zh_mo')) {
			criteria += '||only_for("zh-mo")';
		}
		if ($notice.hasClass('only_zh_tw')) {
			criteria += '||only_for("zh-tw")';
		}
	} else {
		criteria = decodeURIComponent(criteria.replace(/\+/g, '%20'));
		criteria = criteria.trim() || 'true';
	}

	const result: boolean = testCriteria(criteria);
	$notice.data('asn-cache', result);

	return result;
};

export {matchCriteria};
