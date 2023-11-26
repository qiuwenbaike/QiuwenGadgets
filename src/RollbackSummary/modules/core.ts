import {getMessage} from './i18n';
import {messages} from './messages';

const updateLinks = (): void => {
	messages();
	const $body: JQuery<HTMLBodyElement> = $('body');
	const $mwRollbackLinkA: JQuery<HTMLAnchorElement> = $body.find<HTMLAnchorElement>('.mw-rollback-link a');
	$mwRollbackLinkA.off('click');
	$mwRollbackLinkA.on('click', function (event: JQuery.ClickEvent): void {
		event.preventDefault();
		let {href} = this as HTMLAnchorElement;
		let summary: string | null = prompt(getMessage('Prompt'));
		if (summary === null) {
			/* empty */
		} else if (summary === '') {
			location.assign(href);
		} else {
			const username: string | null = mw.util.getParamValue('from', href);
			if (username) {
				summary = mw.message('rollback-summary-custom', username).plain() + summary;
			} else {
				summary = mw.message('rollback-summary-nouser').plain() + summary;
			}
			href += `&summary=${encodeURIComponent(summary)}`;
			location.assign(href);
		}
	});
	$mwRollbackLinkA.css('color', '#099');
};

export const rollbackSummary = (): void => {
	mw.hook('wikipage.content').add((): void => {
		updateLinks();
	});
};
