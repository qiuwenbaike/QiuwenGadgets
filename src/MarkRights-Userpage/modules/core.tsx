import {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST, WG_SKIN} from './constant';
import {getMessage} from './i18n';
import {initMwApi} from 'ext.gadget.Util';
import {jsx} from 'ext.gadget.React';

export const wgRelevantUserName: string | null = mw.config.get('wgRelevantUserName');

const appendIcon = (indicatorText: string, spanClass: string): void => {
	if (spanClass === 'unknown') {
		return;
	}
	const tagName: 'div' | 'li' | 'section' =
		WG_SKIN === 'citizen' ? 'section' : ['vector', 'vector-2022', 'gongbi'].includes(WG_SKIN) ? 'li' : 'div';
	const indicator = jsx(
		`<${tagName} class={[gadget-markrights_userpage gadget-markrights_userpage__${spanClass}]}>
			<span class={[gadget-markrights_userpage__icon, gadget-markrights_userpage__icon__${spanClass}]}
			alt=${indicatorText} title=${indicatorText} />
			<span class=gadget-markrights_userpage__text>${indicatorText ?? ''}</span>
		</${tagName}>`
	);
	const $body: JQuery<HTMLBodyElement> = $('body');
	$(indicator).prependTo($body.find('#footer-info, .page-info'));
};

export const getPermissions = async (): Promise<void> => {
	if (!wgRelevantUserName) {
		return;
	}
	const api: mw.Api = initMwApi(`Qiuwen/1.1 (MarkRights-Userpage/1.0; ${mw.config.get('wgWikiID')})`);
	try {
		const listUsersParams: ApiQueryUsersParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			list: 'users',
			ususers: wgRelevantUserName,
			usprop: 'groups',
		};
		const {query} = await api.get(listUsersParams);
		const [{groups}]: [{groups: string[]}] = query.users;
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
	} catch {}
};
