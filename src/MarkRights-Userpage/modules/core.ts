import {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST} from './constant';
import {getMessage} from './i18n';
import {initMwApi} from '../../util';

export const wgRelevantUserName: string | null = mw.config.get('wgRelevantUserName');

const appendIcon = (indicatorText: string, spanClass: string): void => {
	if (spanClass === 'unknown') {
		return;
	}
	const elementName =
		mw.config.get('skin') === 'citizen'
			? 'section'
			: ['vector', 'vector-2022', 'gongbi', 'write'].includes(mw.config.get('skin'))
			  ? 'li'
			  : 'div';
	// The following classes are used here:
	// * gadget-markrights_userpage__qiuwen
	// * gadget-markrights_userpage__steward
	// * gadget-markrights_userpage__checkuser
	// * gadget-markrights_userpage__suppress
	// * gadget-markrights_userpage__sysop
	// * gadget-markrights_userpage__interface-admin
	// * gadget-markrights_userpage__templateeditor
	// * gadget-markrights_userpage__transwiki
	// * gadget-markrights_userpage__patroller
	// * gadget-markrights_userpage__autoreviewer
	// * gadget-markrights_userpage__senioreditor
	// * gadget-markrights_userpage__eventsponsor
	// * gadget-markrights_userpage__massmessage-sender
	// * gadget-markrights_userpage__confirmed
	// * gadget-markrights_userpage__autoconfirmed
	// * gadget-markrights_userpage__bot
	// * gadget-markrights_userpage__flood
	// * gadget-markrights_userpage__ipblock-exempt
	// * gadget-markrights_userpage__rnrsverify-exempt
	const $indicator: JQuery = $(`<${elementName}>`)
		.addClass(`gadget-markrights_userpage gadget-markrights_userpage__${spanClass}`)
		.append(
			$('<span>')
				.addClass(`gadget-markrights_userpage__icon gadget-markrights_userpage__icon__${spanClass}`)
				.attr({
					alt: indicatorText,
					title: indicatorText,
				})
		)
		.append(
			$('<span>')
				.addClass('gadget-markrights_userpage__text')
				.text(indicatorText ?? '')
		);
	const $body = $('body');
	$indicator.prependTo($body.find('#footer-info, .page-info'));
};

export const getPermissions = () => {
	if (!wgRelevantUserName) {
		return;
	}
	const api: mw.Api = initMwApi(`Qiuwen/1.1 (MarkRights-Userpage/1.0; ${mw.config.get('wgWikiID')})`);
	const listUsersParams: ApiQueryUsersParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'users',
		ususers: wgRelevantUserName,
		usprop: 'groups',
	};
	api.get(listUsersParams).then((response): void => {
		const [{groups}]: [{groups: string[]}] = response['query'].users;
		if (WEBMASTER_LIST.includes(wgRelevantUserName) || groups.includes('qiuwen')) {
			/* appendIcon(message('Webmaster'), 'qiuwen'); */
			return; // Already shown in GeoLocationViewer
		}
		if (groups.includes('steward')) {
			appendIcon(getMessage('Steward'), 'steward');
		}
		if (groups.includes('checkuser')) {
			appendIcon(getMessage('CheckUser'), 'checkuser');
		}
		if (groups.includes('suppress')) {
			appendIcon(getMessage('Suppress'), 'suppress');
		}
		if (groups.includes('sysop')) {
			appendIcon(getMessage('SysOp'), 'sysop');
		}
		if (groups.includes('interface-admin')) {
			appendIcon(getMessage('InterfaceAdmin'), 'interface-admin');
		}
		if (groups.includes('templateeditor')) {
			appendIcon(getMessage('TemplateEditor'), 'templateeditor');
		}
		if (groups.includes('transwiki')) {
			appendIcon(getMessage('Transwiki'), 'transwiki');
		}
		if (groups.includes('patroller')) {
			appendIcon(getMessage('Patroller'), 'patroller');
		}
		if (groups.includes('autoreviewer')) {
			appendIcon(getMessage('AutoReviewer'), 'autoreviewer');
		}
		if (groups.includes('senioreditor')) {
			appendIcon(getMessage('SeniorEditor'), 'senioreditor');
		}
		if (groups.includes('massmessage-sender')) {
			appendIcon(getMessage('MassMessageSender'), 'massmessage-sender');
		}
		if (groups.includes('autoconfirmed')) {
			/* empty */
			/* appendIcon(message('AutoConfirmed'), 'autoconfirmed'); */
		} else if (groups.includes('confirmed')) {
			appendIcon(getMessage('Confirmed'), 'confirmed');
		}
		if (groups.includes('rnrsverify-exempt')) {
			appendIcon(getMessage('RNRSVerifyExempt'), 'rnrsverify-exempt');
		}
		if (
			groups.includes('bot') &&
			!SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName) // Already shown in GeoLocationViewer
		) {
			/* appendIcon(message('Bot'), 'bot'); */
			// Already shown in GeoLocationViewer
		}
		if (groups.includes('flood')) {
			appendIcon(getMessage('Flood'), 'flood');
		}
		// if (groups.includes('ipblock-exempt')) {
		//     appendIcon(message('IPBlockExempt'), 'ipblock-exempt');
		// }
	});
};
