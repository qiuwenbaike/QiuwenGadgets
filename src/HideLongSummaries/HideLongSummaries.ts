(function hideLongSummaries() {
	const getI18nMessages: GetI18nMessages = () => {
		const {localize} = i18n;
		return {
			Collapse: localize({
				en: 'collapse',
				ja: '折り畳み',
				'zh-hans': '折叠',
				'zh-hant': '折疊',
			}),
			Expand: localize({
				en: 'expand',
				ja: '展開',
				'zh-hans': '展开',
				'zh-hant': '展開',
			}),
			'[': '[',
			']': ']',
		};
	};
	const i18nMessages = getI18nMessages();
	const getMessage = (key: string): string => {
		return i18nMessages[key] || key;
	};

	const limit = 250;
	$('.comment').each((_index: number, element: HTMLElement): void => {
		if (element.textContent && element.textContent.length > limit && element.parentElement !== null) {
			$(element).addClass('commentlong');
			$('<a>').addClass('hidecomment').text(getMessage('Expand')).insertAfter(element);
			const $short: JQuery = $('<span>').addClass('comment comment--without-parentheses commentshort');
			$short.text(`${element.textContent.slice(0, Math.max(0, limit + 1))}...${element.textContent.slice(-1)}`);
			$short.insertAfter(element);
			$(element.parentElement).find('>.commentlong').hide();
		}
	});
	$('.hidecomment').on('click', (event: JQuery.ClickEvent): void => {
		const {parentElement} = event.target;
		if (parentElement !== null) {
			const $parentElement: JQuery = $(parentElement);
			if ($parentElement.find('>.commentlong').is(':visible')) {
				$parentElement.find('>.commentlong').hide();
				$parentElement.find('>.commentshort').show();
				$parentElement.find('>.hidecomment').text(getMessage('[') + getMessage('Expand') + getMessage(']'));
			} else {
				$parentElement.find('>.commentlong').show();
				$parentElement.find('>.commentshort').hide();
				$parentElement.find('>.hidecomment').text(getMessage('[') + getMessage('Hide') + getMessage(']'));
			}
		}
	});
})();
