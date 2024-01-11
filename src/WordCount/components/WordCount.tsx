import {getCJKCountByTextLength, getCountByTextLength, getUTF8CountByTextLength} from '../modules/getCount';
import {CLASS_NAME} from '../modules/constant';
import React from 'ext.gadget.React';

interface Props {
	text: string;
}

const WordCount = (props: Props) => {
	const {text} = props;

	return (
		<div className={[CLASS_NAME, 'noprint', 'ui-state-highlight', 'ui-corner-all']}>
			{getCountByTextLength(text)}
			{getCJKCountByTextLength(text)}
			<br />
			{getUTF8CountByTextLength(text)}
		</div>
	);
};

export default WordCount;
