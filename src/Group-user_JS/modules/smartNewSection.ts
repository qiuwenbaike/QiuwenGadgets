export const smartNewSection = (): void => {
	/* 智能讨论页编辑（新建） */
	if (!mw.user.options.get('discussiontools-newtopictool') || !mw.user.options.get('discussiontools-betaenable')) {
		const catalk = $('#ca-talk');
		if (catalk.hasClass('new') && mw.config.get('wgNamespaceNumber') !== 2) {
			const $a = $('a:first', catalk);
			$a.attr('href', `${$a.attr('href')}&section=new`);
		}
	}
};
