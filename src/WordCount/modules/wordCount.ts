import {$wordCount} from '../components/WordCount';
import {tip} from '../components/WordCount.module.less';

const wordCount = ($body: JQuery<HTMLBodyElement>): void => {
	$body.find(`.${tip}`).remove();

	const text: string | undefined = window.getSelection()?.toString();
	if (!text) {
		return;
	}

	const $element = $wordCount(text);

	$element.appendTo($body);

	setTimeout((): void => {
		$element.fadeOut('slow', (): void => {
			$element.remove();
		});
	}, 5 * 1000);
};

export {wordCount};
