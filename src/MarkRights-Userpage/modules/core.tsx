import {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST, WG_SKIN} from './constant';
import React from 'ext.gadget.React';
import {getMessage} from './i18n';
import {initMwApi} from 'ext.gadget.Util';

export const wgRelevantUserName: string | null = mw.config.get('wgRelevantUserName');

const appendIcon = (indicatorText: string, spanClass: string): void => {
	if (spanClass === 'unknown') {
		return;
	}
	const tag =
		WG_SKIN === 'citizen' ? (
			<section className={['gadget-markrights_userpage', `gadget-markrights_userpage__${spanClass}`]} />
		) : ['vector', 'vector-2022', 'gongbi'].includes(WG_SKIN) ? (
			<li className={['gadget-markrights_userpage', `gadget-markrights_userpage__${spanClass}`]} />
		) : (
			<div className={['gadget-markrights_userpage', `gadget-markrights_userpage__${spanClass}`]} />
		);
	const indicator = (
		<>
			<span
				className={['gadget-markrights_userpage__icon', `gadget-markrights_userpage__icon__${spanClass}`]}
				title={indicatorText}
			/>
			<span className="gadget-markrights_userpage__text">{indicatorText ?? ''}</span>
		</>
	);
	const $body: JQuery<HTMLBodyElement> = $('body');
	$(tag).append(indicator).prependTo($body.find('#footer-info, .page-info'));
};

export const getPermissions = async (): Promise<void> => {
	if (!wgRelevantUserName) {
		return;
	}
	const api: mw.Api = initMwApi('MarkRights-Userpage/1.0');
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
			appendIcon(getMessage('Webmaster'), 'qiuwen');
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
			appendIcon(getMessage('AutoConfirmed'), 'autoconfirmed');
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
			appendIcon(getMessage('Bot'), 'bot');
		}
		if (groups.includes('flood')) {
			appendIcon(getMessage('Flood'), 'flood');
		}
		if (groups.includes('ipblock-exempt')) {
			appendIcon(getMessage('IPBlockExempt'), 'ipblock-exempt');
		}
	} catch {}
};
