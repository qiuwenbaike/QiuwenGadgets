import {messages} from './messages';

export const rollbackSummary = (): void => {
	messages();
	const updateLinks = (): void => {
		const $body = $('body');
		$body.find('.mw-rollback-link a').off('click');
		$body
			.find('.mw-rollback-link a')
			.on('click', function (event: JQuery.ClickEvent): void {
				event.preventDefault();
				let {href} = this as HTMLAnchorElement;
				let summary: string | null = prompt(
					window.wgULS(
						'请输入自定义回退摘要（留空则使用系统默认摘要）',
						'請輸入自定義回退摘要（留空則使用系統預設摘要）'
					)
				);
				if (summary === null) {
					/* empty */
				} else if (summary === '') {
					location.assign(href);
				} else {
					const username: string | null = mw.util.getParamValue('from', href);
					username
						? (summary = mw.message('rollback-summary-custom', username).plain() + summary)
						: (summary = mw.message('rollback-summary-nouser').plain() + summary);
					href += `&summary=${encodeURIComponent(summary)}`;
					location.assign(href);
				}
			})
			.css('color', '#099');
	};
	mw.hook('wikipage.content').add((): void => {
		updateLinks();
	});
};
