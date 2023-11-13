import {GADGET_NAME} from './constant';
import {ding} from '../../util';

export const notifyConversion = (): void => {
	const messageHansBefore =
		'您现在使用的中文变体可能会影响一些词语繁简转换的效果。建议您根据您的偏好切换到下列变体之一：<ul class="hlist hlist-comma">';
	const messageHansAfter =
		'</ul><span id="gadget-notify_conversion__info">（<a id="gadget-notify_conversion__donotshow" class="gadget-notify_conversion__link" href="#">下次不再提示</a> | <a id="gadget-notify_conversion__showmore" class="gadget-notify_conversion__link" rel="noopener" target="_blank" href="/wiki/Help:字词转换的模式选择说明">了解更多</a>）</span>';
	const messageHantBefore =
		'您現在使用的中文變體可能會影響一些詞語繁簡轉換的效果。建議您根據您的偏好切換到下列變體之一：<ul class="hlist hlist-comma">';
	const messageHantAfter =
		'</ul><span id="gadget-notify_conversion__info">（<a id="gadget-notify_conversion__donotshow" class="gadget-notify_conversion__link" href="#">下次不再提示</a> | <a id="gadget-notify_conversion__showmore" class="gadget-notify_conversion__link" rel="noopener" target="_blank" href="/wiki/Help:字词转换的模式选择说明">了解更多</a>）</span>';
	const variants = {
		'zh-cn': '中国大陆简体',
		'zh-hk': '中國香港繁體',
		'zh-mo': '中國澳門繁體',
		'zh-my': '马来西亚简体',
		'zh-sg': '新加坡简体',
		'zh-tw': '中國臺灣繁體',
	};
	// 注意：这里若 wgUserVariant 是 zh-hans（zh/zh-hant 同理），有多种可能：
	// (1) 登录用户在参数设定里把内容语言变种设成了 zh-hans；
	// (2) 用户自己在 URL 后面添加了 ?variant=zh-hans 或者 ?uselang=zh-hans 的参数；
	// (3) URL 是 /zh-hans/example 而不是 /wiki/example。
	// 我们这里只针对 (1) 和 (3) 的情况通知用户。
	// 对于 (2)，我们认为这样做的用户不是新手（例如在技术测试），不进行提示。
	// 所以，我们使用正则截取 URL //www.qiuwenbaike.cn/zh-hans/ 中的 zh-hans 部分，
	// 这样做是为了最大程度地保留 URL 中原有的参数（例如查看日志时或其他小工具），只替换变体部分。
	// 若这个部分是 / 的话，说明目前 URL 是 /index.php?title=x 的形式，也不进行提示。
	const url: string = location.href;
	const urlRegex = /(\/\/[^/]+\/)([^/]+)(\/)/;
	if (mw.util.getParamValue('variant') || mw.util.getParamValue('uselang')) {
		return;
	}
	if (!url.includes('/zh/') && !url.includes('/zh-hans/') && !url.includes('/zh-hant/')) {
		return;
	}
	const makeLinks = (): string => {
		let links = '';
		for (const [variant, name] of Object.entries(variants)) {
			links += `<li><a class="gadget-notify_conversion__link" href="${url.replace(
				urlRegex,
				`$1${variant}$3`
			)}">${name}</a></li>`;
		}
		return links;
	};
	// 根据简繁体显示不同提示文字
	const wgUserVariant: string | null = mw.config.get('wgUserVariant');
	if (url.includes('/zh/') || url.includes('/zh-hans/') || wgUserVariant === 'zh' || wgUserVariant === 'zh-hans') {
		ding(
			`<span id="gadget-notify_conversion__area" class="gadget-notify_conversion">${messageHansBefore}${makeLinks()}${messageHansAfter}</span>`,
			false
		);
	} else if (url.includes('/zh-hant/') || wgUserVariant === 'zh-hant') {
		ding(
			`<span id="gadget-notify_conversion__area" class="gadget-notify_conversion">${messageHantBefore}${makeLinks()}${messageHantAfter}</span>`,
			false
		);
	}
	// 点击“不再提示”，在LocalStorage添加条目
	$('#gadget-notify_conversion__donotshow').on('click', (event: JQuery.ClickEvent): void => {
		event.preventDefault();
		mw.storage.set(GADGET_NAME, 'hide');
		$('.gadget-notify_conversion').parent().hide();
	});
	$('#gadget-notify_conversion__showmore').on('click', (event: JQuery.ClickEvent): void => {
		// 不触发上层 onclick 事件（即点击该链接不会关闭横幅）
		// 预期用户点击“了解更多”后会返回来继续切换变体
		event.stopPropagation();
	});
};
