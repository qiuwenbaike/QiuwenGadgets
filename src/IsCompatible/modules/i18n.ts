export const getMessage = (): string => {
	const {localize} = i18n;
	return localize({
		en: 'Your browser is too old. Some features may not work properly. Upgrade your browser today! (<a href="/wiki/Help:BROWSER" title="Browser compatibility">FAQ</a>)',
		'zh-hans':
			'您的浏览器过于古老，可能无法正常使用求闻百科的全部功能，请升级您的浏览器（<a href="/wiki/Help:BROWSER" title="浏览器兼容性">了解详情</a>）。',
		'zh-hant':
			'您的瀏覽器過於古老，可能無法正常使用求聞百科的全部功能，請升級您的浏覽器（<a href="/wiki/Help:BROWSER" title="瀏覽器相容性">了解詳情</a>）。',
	});
};
