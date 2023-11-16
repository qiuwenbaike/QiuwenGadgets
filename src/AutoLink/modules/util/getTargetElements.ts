import {IS_DIFF_ACTION, IS_TARGET_SPECIAL_PAGE, IS_WG_EDIT_OR_SUBMIT_ACTION, IS_WG_HISTORY_ACTION} from '../constant';

interface TargetElements {
	color: string;
	$targetElementArray: JQuery[];
}

const getTargetElements = (): TargetElements => {
	const $targetElementArray: JQuery[] = [];
	let color = ''; // links color (coloured links)

	if (IS_DIFF_ACTION) {
		// in diff pages
		color = 'inherit'; // not coloured links
		$targetElementArray.push($('.diff'), $('.firstrevisionheader'));
	} else if (IS_WG_EDIT_OR_SUBMIT_ACTION || IS_WG_HISTORY_ACTION || IS_TARGET_SPECIAL_PAGE) {
		// in comments
		$targetElementArray.push($('.comment'));
	} else {
		// in code sections
		$targetElementArray.push($('source'), $('.css'), $('.source-css'), $('.javascript'), $('.source-javascript'));
	}

	return {
		color,
		$targetElementArray,
	};
};

export {type TargetElements, getTargetElements};
