import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Cancel: localize({
			en: 'Remind me later',
			'zh-hans': '暂不认证',
			'zh-hant': '暫不認證',
		}),
		Edit: localize({
			en: 'Edit',
			'zh-hans': '编辑',
			'zh-hant': '編輯',
		}),
		Help: localize({
			en: 'Get help',
			'zh-hans': '了解详情',
			'zh-hant': '了解詳情',
		}),
		Verify: localize({
			en: 'Verify your mobile phone number',
			'zh-hans': '认证手机号码',
			'zh-hant': '認證行動電話號碼',
		}),
		DialogTitle: localize({
			en: 'Verify your mobile phone number',
			'zh-hans': '完成手机号码认证',
			'zh-hant': '完成行動電話號碼認證',
		}),
		DialogMessage: localize({
			en: 'You have logged in, but your mobile phone number has not been verified yet. In order to prevent vandalism, you must complete phone number verification before starting editing.',
			'zh-hans':
				'您已登录求闻百科，但您暂未完成手机号码认证。基于减少破坏的目的，在开始编辑前，您必须完成手机号码认证。',
			'zh-hant':
				'您已登錄求聞百科，但您暫未完成行動電話號碼認證。基於減少破壞的目的，在開始編輯前，您必須完成行動電話號碼認證。',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
