import {getMessage} from './i18n';

const copy = (pre: Node): void => {
	const range: Range = document.createRange();
	range.selectNodeContents(pre);
	const selection: Selection | null = getSelection();
	selection?.removeAllRanges();
	selection?.addRange(range);
	let copied = false;
	try {
		copied = document.execCommand('copy');
	} catch {
		/* empty */
	}
	if (copied) {
		mw.notify(getMessage('Copied'), {tag: 'CopyCodeBlock', type: 'success'});
	} else {
		mw.notify(getMessage('Failed'), {tag: 'CopyCodeBlock', type: 'error'});
	}
};

const addButton = ($pre: JQuery<HTMLPreElement>): void => {
	$pre.addClass('copycodeblock-block').append(function (): JQuery {
		return new OO.ui.ButtonWidget({
			classes: ['copycodeblock'],
			framed: false,
			icon: 'copy',
			title: getMessage('Copy'),
		}).on('click', copy, [this]).$element;
	});
};

export const copyCodeBlockLoad = (): void => {
	mw.hook('wikipage.content').add(($content: JQuery): void => {
		const $pre: JQuery<HTMLPreElement> = $content.find('pre');
		if (!$pre.length) {
			return;
		}
		addButton($pre);
	});
};
