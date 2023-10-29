import {ding} from '../util';
import {getMessage} from './i18n';

export const wgNamespaceNumber: number = mw.config.get('wgNamespaceNumber');

const $element = mw.util.addPortletLink(
	document.getElementById('p-cactions') ? 'p-cactions' : 'p-tb',
	'#',
	getMessage('Ban'),
	't-banpage'
);

const banPageMain = (): void => {
	let targetPage = 'Qiuwen:首页';
	let redirectTemplate = '';
	let summary: string = getMessage('Ban the $1');
	switch (wgNamespaceNumber) {
		case 6:
			targetPage = 'File:Banned Images.svg';
			redirectTemplate = '{{文件重定向}}';
			summary = summary.replace('$1', getMessage('Image'));
			break;
		case 10:
			targetPage = 'Template:Void';
			redirectTemplate = '{{模板重定向}}';
			summary = summary.replace('$1', getMessage('Template'));
			break;
		default:
			summary = summary.replace('$1', getMessage('Page'));
			break;
	}
	const api: mw.Api = new mw.Api({
		ajax: {
			headers: {
				'Api-User-Agent': `Qiuwen/1.1 (BanPage/3.0; ${mw.config.get('wgWikiID')})`,
			},
		},
	});
	const refreshPage = (): void => {
		ding(getMessage('Refreshing'), false, 'success');
		location.replace(`${mw.config.get('wgScript')}?title=${mw.util.rawurlencode(targetPage)}`);
	};
	const pageName: string = mw.config.get('wgPageName');
	const text = `#REDIRECT [[${targetPage}]]\n${redirectTemplate}`;
	api.edit(
		pageName,
		(): {
			minor: boolean;
			text: string;
			summary: string;
		} => {
			return {
				minor: true,
				text: `#REDIRECT [[${targetPage}]]\n${redirectTemplate}`,
				summary,
			};
		}
	)
		.then(refreshPage)
		.catch((): void => {
			api.create(pageName, {summary}, text)
				.then(refreshPage)
				.catch((error: never): void => {
					console.error('[BanPage] Ajax error:', error);
					ding(getMessage('Network error'), false, 'warning');
				});
		});
};

export const banPage = (): void => {
	$element?.querySelector('a')?.addEventListener('click', (event: MouseEvent): void => {
		event.preventDefault();
		OO.ui
			.confirm(
				$('<div>')
					.addClass('oo-ui-window-foot')
					.css({
						border: '.1rem solid #0645ad',
						display: 'flex',
						'justify-content': 'space-evenly',
					})
					.append(
						$('<span>')
							.css({
								'font-size': '1.2rem',
								'font-weight': '500',
								'line-height': '1.8',
								padding: '.4em 0',
							})
							.text(getMessage('Confirm'))
					)
			)
			.then((confirmed: boolean): void => {
				if (!confirmed) {
					return;
				}
				banPageMain();
			});
	});
};
