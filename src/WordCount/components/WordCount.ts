import {getCJKCountByTextLength, getCountByTextLength, getUTF8CountByTextLength} from '../modules/getCount';
import {tip} from './WordCount.module.less';

const $wordCount = (text: string) => {
	return $('<div>')
		.addClass([tip, 'noprint'])
		.attr('id', 'gadget-word_count-tip')
		.append(getCountByTextLength(text), getCJKCountByTextLength(text), $('<br>'), getUTF8CountByTextLength(text));
};

export {$wordCount};
