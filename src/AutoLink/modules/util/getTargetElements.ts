import {IS_DIFF_ACTION, IS_TARGET_SPECIAL_PAGE, IS_WG_EDIT_OR_SUBMIT_ACTION, IS_WG_HISTORY_ACTION} from '../constant';
interface TargetElements {
	color: string;
	$targetElementArray: JQuery[];
}

const getTargetElements = (): TargetElements => {
	const $body = $('body');

	const $targetElementArray: JQuery[] = [];
	let color = ''; // links color (coloured links)

	if (IS_DIFF_ACTION) {
		// in diff pages
		color = 'inherit'; // not coloured links
		$targetElementArray.push($body.find('.diff'), $body.find('.firstrevisionheader'));
	} else if (IS_WG_EDIT_OR_SUBMIT_ACTION || IS_WG_HISTORY_ACTION || IS_TARGET_SPECIAL_PAGE) {
		// in comments
		$targetElementArray.push($body.find('.comment'));
	} else {
		// in code sections
		$targetElementArray.push(
			$body.find('source'),
			$body.find('.css'),
			$body.find('.source-css'),
			$body.find('.javascript'),
			$body.find('.source-javascript')
		);
	}

	return {
		color,
		$targetElementArray,
	};
};

export {type TargetElements, getTargetElements};
