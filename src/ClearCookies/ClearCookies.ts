import {WG_USER_NAME} from './modules/constant';
import psl from 'ext.gadget.psl';

$(function loginToEdit(): void {
	if (WG_USER_NAME || !!$.cookie('cookieCleared')) {
		return;
	}

	const hostName: string = document.location.host;

	const hostNameSuffix: string = psl.get(hostName) ?? '';

	for (const cookie of Object.keys($.cookie())) {
		$.removeCookie(cookie);
		$.removeCookie(cookie, {domain: hostNameSuffix});
		$.removeCookie(cookie, {domain: `.${hostNameSuffix}`});
		$.removeCookie(cookie, {path: '/'});
		$.removeCookie(cookie, {domain: hostNameSuffix, path: '/'});
		$.removeCookie(cookie, {domain: `.${hostNameSuffix}`, path: '/'});
		$.cookie('cookieCleared', 1, {domain: hostName, path: '/', expires: 184});
	}
});
