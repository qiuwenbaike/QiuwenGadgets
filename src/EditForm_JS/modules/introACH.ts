import {IS_WG_EDIT_OR_SUBMIT_ACTION, WG_USER_GROUPS, WG_WIKI_ID} from './constant';

const introACH = (): void => {
	// Disabled for wikis other than zhqiuwenbaike
	if (WG_WIKI_ID !== 'zhqiuwenbaike') {
		return;
	}

	// Disabled for confirmed users
	if (WG_USER_GROUPS.includes('confirmed') || WG_USER_GROUPS.includes('autoconfirmed')) {
		return;
	}

	// Disabled for official users and experienced users
	if (
		WG_USER_GROUPS.includes('qiuwen') ||
		WG_USER_GROUPS.includes('steward') ||
		WG_USER_GROUPS.includes('senioreditor') ||
		WG_USER_GROUPS.includes('bot') ||
		WG_USER_GROUPS.includes('confirmed')
	) {
		return;
	}

	/**
	 * Remove "Edit" buttons
	 */
	for (const element of document.querySelectorAll('#ca-ve-edit, #ca-edit')) {
		element.remove();
	}

	/**
	 * If talk page does not exist, remove "Talk page" button
	 */
	if (
		document.querySelector('#ca-talk') &&
		document.querySelectorAll('#ca-talk a')[0] &&
		(document.querySelectorAll('#ca-talk a')[0] as HTMLAnchorElement).href.includes('redlink=1')
	) {
		document.querySelector('#ca-talk')?.remove();
	}

	/**
	 * If permission error `titleblacklist-temporary` exists,
	 * remove unnecessary elements
	 */
	if (document.querySelector('#titleblacklist-temporary')) {
		for (const element of document.querySelectorAll('.permissionserrorstext-withaction, #firstHeading')) {
			element.remove();
		}
	}

	if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
		if (mw.config.get('wgNamespaceNumber') === 6) {
			/**
			 * If editing pages under `File:` namespace,
			 * redirect to Special:UploadWizard
			 */
			location.href = '/wiki/Special:UploadWizard';
		} else {
			/**
			 * If editing pages under other namespaces,
			 * redirect to [[QW:ACH]]
			 */
			location.href = '/wiki/QW:ACH';
		}
	}
};

export {introACH};
