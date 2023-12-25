const getI18nMessages = () => {
	const {localize} = i18n;

	return {
		Cancel: localize({
			en: 'Cancel',
			ja: 'キャンセル',
			'zh-hans': '暂不登录账号',
			'zh-hant': '暫不登入賬號',
		}),
		Edit: localize({
			en: 'Edit',
			ja: '編集',
			'zh-hans': '编辑',
			'zh-hant': '編輯',
		}),
		Login: localize({
			en: 'Login',
			ja: 'ログイン',
			'zh-hans': '登录已有账号',
			'zh-hant': '登入已有賬號',
		}),
		Register: localize({
			en: 'Register',
			ja: 'アカウントを作成',
			'zh-hans': '注册新的账号',
			'zh-hant': '註冊新的賬號',
		}),
		DialogTitle: localize({
			en: 'Welcome to Qiuwen Baike!',
			ja: '求聞百科へようこそ！',
			'zh-hans': '欢迎来到求闻百科！',
			'zh-hant': '歡迎來到求聞百科！',
		}),
		DialogMessage: localize({
			en: 'You have not yet logged in. Register and log in to your account to contribute.',
			ja: 'あなたはまだ求聞百科にログインしていません。アカウントを作成し、ログインして求聞百科を改善することができます。',
			'zh-hans': '您尚未登录求闻百科。您可以注册并登录账号，帮助完善求闻百科。',
			'zh-hant': '您尚未登錄求聞百科。您可以注冊並登錄賬號，幫助完善求聞百科。',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
