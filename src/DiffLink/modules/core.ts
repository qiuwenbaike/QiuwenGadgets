import {ding} from '../../util';
import {getMessage} from './i18n';

/**
 * 若想自定义复制结果中的文本可通过向自己的common.js中加入以下内容：
 *   window.DiffLink = ['版本差异', '固定版本'];
 * 若想使用默认值1，但自定值2，请将值1留空，如下例：
 *   window.DiffLink = ['', '固定版本'];
 */

export const isRevisionPage =
	$('#contentSub').find('#mw-revision-nav').length || $('main#content>.pre-content #mw-revision-nav').length;

const defaultTextArray: [string, string] = [getMessage('DiffVersion'), getMessage('PermanentVersion')];
if (window.DiffLink !== undefined && Object.prototype.toString.call(window.DiffLink) === '[object Array]') {
	if (window.DiffLink[0] !== '' && Object.prototype.toString.call(window.DiffLink[0]) === '[object String]') {
		[defaultTextArray[0]] = window.DiffLink as [string];
	}
	if (window.DiffLink[1] !== '' && Object.prototype.toString.call(window.DiffLink[1]) === '[object String]') {
		[defaultTextArray[1]] = window.DiffLink as [string, string];
	}
}

const ins = ({
	text,
	tooltip,
	link,
	defaultTextArrayIndex,
	isPermaLink,
}: {
	text: string;
	tooltip: string;
	link: string;
	defaultTextArrayIndex: number;
	isPermaLink?: boolean;
}): void => {
	let element: HTMLLIElement | null = document.querySelector('#t-difflink');
	if (!element) {
		element = mw.util.addPortletLink(
			document.getElementById('p-cactions') ? 'p-cactions' : 'p-tb',
			'#',
			text,
			't-difflink',
			tooltip
		);
	}
	if (!element) {
		return;
	}
	((element.firstElementChild ?? element) as HTMLElement).onclick = (event: MouseEvent): void => {
		event.preventDefault();
		const $element: JQuery = $('<div>');
		const hash: string = isPermaLink ? decodeURIComponent(location.hash) : '';
		for (const value of [
			link,
			`[[${link}${hash}]]`,
			`[[${link}${hash}|${defaultTextArray[defaultTextArrayIndex]}]]`,
		]) {
			$element.append(
				new mw.widgets.CopyTextLayout({
					align: 'top',
					copyText: value,
				}).$element
			);
		}
		OO.ui.alert($element, {
			size: 'medium',
		});
	};
};

const init = ({diffId, oldId, revisionId}: {diffId: number; oldId: number; revisionId: number}): void => {
	if (diffId) {
		const buildLink = (_oldId: number, link = 'Special:Diff/'): void => {
			if (_oldId) {
				link += `${_oldId}/`;
			}
			link += diffId;
			ins({
				text: getMessage('Diff'),
				tooltip: getMessage('CopyDiff'),
				link,
				defaultTextArrayIndex: 0,
			});
		};
		buildLink(oldId);
		if (oldId) {
			try {
				const api: mw.Api = new mw.Api({
					ajax: {
						headers: {
							'Api-User-Agent': `Qiuwen/1.1 (DiffLink/1.1; ${mw.config.get('wgWikiID')})`,
						},
					},
				});
				const params: ApiComparePagesParams = {
					action: 'compare',
					format: 'json',
					formatversion: '2',
					prop: 'ids',
					fromrev: diffId,
					torelative: 'prev',
				};
				api.get(params).done((response) => {
					if (
						diffId === mw.config.get('wgDiffNewId') &&
						response['compare']?.fromrevid === mw.config.get('wgDiffOldId')
					) {
						buildLink(0);
					}
				});
			} catch {
				ding(getMessage('Network error'), false, 'warning');
			}
		}
	} else if (revisionId && isRevisionPage) {
		ins({
			text: getMessage('Permanent'),
			tooltip: getMessage('CopyPermanent'),
			link: `Special:PermaLink/${revisionId}`,
			defaultTextArrayIndex: 1,
			isPermaLink: true,
		});
	}
};

export const diffLinkLoad = (): void => {
	mw.hook('wikipage.content').add(($content): void => {
		if (!(isRevisionPage || $('table').hasClass('diff'))) {
			return;
		}

		if ($content.attr('id') !== 'mw-content-text') {
			return;
		}

		init({
			diffId: mw.config.get('wgDiffNewId'),
			oldId: mw.config.get('wgDiffOldId'),
			revisionId: mw.config.get('wgRevisionId'),
		});
	});
};
