const messages: {[key: string]: string} = {
	'no-reminder': '不再提醒',
	more: window.wgULS('更多信息', '更多資訊'),
	ok: window.wgULS('确定', '確認'),
	load: window.wgULS('载入', '載入'),
	ignore: window.wgULS('忽略', '忽略'),
	'bracket-left': '（',
	'bracket-right': '）',
	'notice-init': window.wgULS('自动保存已启用。', '自動存檔已啟用。'),
	'notice-more': window.wgULS('配置', '設定'),
	'notice-load': window.wgULS('载入上次存档', '載入上次存檔'),
	'notice-autosave-success': window.wgULS('自动保存成功。', '自動存檔成功。'),
	'notice-autosave-failed': window.wgULS(
		'自动保存失败，可能是由于已超出浏览器所允许空间上限。',
		'自動存檔失敗，可能是由於已超過瀏覽器所許可空間上限。'
	),
	'notice-autosave-failed-clear': window.wgULS('清理', '清理'),
	'notice-load-available': window.wgULS('发现自动保存结果，是否载入？', '發現自動存檔，是否載入？'),
	'notice-load-available-confirm': window.wgULS('载入', '載入'),
	'notice-load-available-ignore': window.wgULS('忽略', '忽略'),
	'settings-title': window.wgULS('WikiCache配置', 'WikiCache設定'),
	'settings-autosave-interval': window.wgULS('自动保存间隔：', '自動保存間隔：'),
	'settings-autosave-interval-suffix': window.wgULS('秒', '秒'),
	'settings-autosave-interval-too-small': window.wgULS(
		'错误：“自动保存间隔”所设间隔过小（<10秒），请重新设置',
		'錯誤：「自動保存間隔」所設間隔過小（<10秒），請重新設定'
	),
	'settings-autosave-interval-invalid': window.wgULS(
		'错误：请在“自动保存间隔”输入框中输入数字',
		'錯誤：請在「自動保存間隔」輸入框輸入數字'
	),
};

export {messages};
