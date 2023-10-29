import {GADGET_NAME} from './constant';
import {ding} from '../util';

export const notifyConversion = (): void => {
	const messageHans =
		'您现在使用的中文变体可能会影响一些词语繁简转换的效果。建议您根据您的偏好切换到下列变体之一：$1。（<a id="nc-conversion-donotshow" class="nc-conversion-link" href="#">下次不再提示</a> | <a id="nc-conversion-showmore" class="nc-conversion-link" rel="noopener" target="_blank" href="/wiki/Help:字词转换的模式选择说明">了解更多</a>）';
	const messageHant =
		'您現在使用的中文變體可能會影響一些詞語繁簡轉換的效果。建議您根據您的偏好切換到下列變體之一：$1。（<a id="nc-conversion-donotshow" class="nc-conversion-link" href="#">下次不再提示</a> | <a id="nc-conversion-showmore" class="nc-conversion-link" rel="noopener" target="_blank" href="/wiki/Help:字词转换的模式选择说明">了解更多</a>）';
	const variantLinks = '中国大陆简体、中國香港繁體、中國澳門繁體、马来西亚简体、新加坡简体、中國臺灣繁體';
	// 注意这里若 wgUserVariant 是 zh-hans（zh/zh-hant 同理），有多种可能：
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
		return variantLinks
			.replace(
				'中国大陆简体',
				`<a class="nc-conversion-link" href="${url.replace(urlRegex, '$1zh-cn$3')}">中国大陆简体</a>`
			)
			.replace(
				'中國香港繁體',
				`<a class="nc-conversion-link" href="${url.replace(urlRegex, '$1zh-hk$3')}">中國香港繁體</a>`
			)
			.replace(
				'中國澳門繁體',
				`<a class="nc-conversion-link" href="${url.replace(urlRegex, '$1zh-mo$3')}">中國澳門繁體</a>`
			)
			.replace(
				'马来西亚简体',
				`<a class="nc-conversion-link" href="${url.replace(urlRegex, '$1zh-my$3')}">马来西亚简体</a>`
			)
			.replace(
				'新加坡简体',
				`<a class="nc-conversion-link" href="${url.replace(urlRegex, '$1zh-sg$3')}">新加坡简体</a>`
			)
			.replace(
				'中國臺灣繁體',
				`<a class="nc-conversion-link" href="${url.replace(urlRegex, '$1zh-tw$3')}">中國臺灣繁體</a>`
			);
	};
	// 根据简繁体显示不同提示文字
	const userlang: string | null = mw.config.get('wgUserVariant');
	if (url.includes('/zh/') || url.includes('/zh-hans/') || userlang === 'zh' || userlang === 'zh-hans') {
		ding(`<span class="nc-conversion">${messageHans}</span>`.replace('$1', makeLinks()), false);
	} else if (url.includes('/zh-hant/') || userlang === 'zh-hant') {
		ding(`<span class="nc-conversion">${messageHant}</span>`.replace('$1', makeLinks()), false);
	}
	// 点击“不再提示”，在LocalStorage添加条目
	$('#nc-conversion-donotshow').on('click', (event: JQuery.ClickEvent): void => {
		event.preventDefault();
		if (mw.config.get('wgUserGroups')?.includes('user')) {
			// 登录用户直接停用小工具
			const api: mw.Api = new mw.Api({
				ajax: {
					headers: {
						'Api-User-Agent': `Qiuwen/1.1 (NotifyConversion/1.1; ${mw.config.get('wgWikiID')})`,
					},
				},
			});
			api.saveOption('gadget-NotifyConversion', '0').fail((): void => {
				mw.storage.set(GADGET_NAME, 'hide');
			});
		} else {
			mw.storage.set(GADGET_NAME, 'hide');
		}
		$('.nc-conversion').parent().hide();
	});
	$('#nc-conversion-showmore').on('click', (event: JQuery.ClickEvent): void => {
		// 不触发上层 onclick 事件（即点击该链接不会关闭横幅）
		// 预期用户点击“了解更多”后会返回来继续切换变体
		event.stopPropagation();
	});
};
