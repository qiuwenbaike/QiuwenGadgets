export const messages = (): void => {
	mw.messages.set({
		'rollback-summary-custom': window.wgULS(
			'回退[[Special:Contribs/$1|$1]]（[[User talk:$1|对话]]）的编辑：',
			'回退[[Special:Contribs/$1|$1]]（[[User talk:$1|對話]]）的編輯：'
		),
		'rollback-summary-nouser': window.wgULS(
			undefined,
			undefined,
			'回退已隐藏用户的编辑：',
			'回退已隱藏使用者的編輯：',
			'回退已隱藏用戶的編輯：'
		),
	});
};
