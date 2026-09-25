import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Agree: localize({
			en: 'I agree',
			ja: 'すべて許可する',
			zh: '同意',
		}),
		CookieNotice: localize({
			en: 'To provide better experience, we utilize cookies and other technologies to provide services.',
			ja: 'より良いサービスを提供するために、クッキーやその他の技術を利用しています。',
			'zh-hans': '为了提供最佳体验，我们利用Cookie及其他技术提供服务。',
			'zh-hant': '為了提供最佳體驗，我们利用Cookie及其他技術提供服務；',
		}),
		PIPPNotice0: localize({
			en: `You can refer to our `,
			ja: `個人情報の取り扱い方法については、`,
			'zh-hans': `您可以查阅我们的`,
			'zh-hant': `您可以查閱我們的`,
		}),
		PIPPNotice1: localize({
			en: `Personal Information Protection Policy`,
			ja: `個人情報保護方針`,
			'zh-hans': `个人信息保护方针`,
			'zh-hant': `個人信息保護方針`,
		}),
		PIPPNotice2: localize({
			en: ` to learn how we handle your personal information.`,
			ja: `をご参照ください。`,
			'zh-hans': `，了解我们如何处理您的个人信息。`,
			'zh-hant': `，了解我們如何處理您的個人資訊`,
		}),
	};
};
const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
