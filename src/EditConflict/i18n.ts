const getI18nMessages: GetI18nMessages = () => {
	const {localize} = i18n;
	return {
		Notice: localize({
			en: '<div>This page has been changed by someone else after you started editing. Copy your changes, refresh and start over to avoid edit conflicts.</div><div style="margin-top:.4em"><button>OK</button>&nbsp;<button onclick="location.reload()">Refresh</button></div>',
			ja: '<div>このページは他の人によって変更されています。編集衝突を避けるため、編集内容をコピーしてページを再読み込みし、編集を続けてください。</div><div style="margin-top:.4em"><button>了解</button>&nbsp;<button onclick="location.reload()">再読み込み</button></div>',
			'zh-hans':
				'<div>此页面已被他人更改。请复制您的编辑，然后刷新页面，重新开始编辑，以避免编辑冲突。</div><div style="margin-top:.4em"><button>了解</button>&nbsp;<button onclick="location.reload()">刷新</button></div>',
			'zh-hant':
				'<div>本頁已被他人更改。請將您的編輯複製，並重新載入頁面，然後繼續編輯，來避免編輯衝突。</div><div style="margin-top:.4em"><button>了解</button>&nbsp;<button onclick="location.reload()">重新載入</button></div>',
		}),
	};
};

const i18nMessages = getI18nMessages();

export const getMessage = (key: string): string => {
	return i18nMessages[key] || key;
};
