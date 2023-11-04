import {type TargetElements, getTargetElements} from './modules/util/getTargetElements';
import {IS_IN_TARGET_SPECIAL_PAGE} from './modules/constant';
import {processElement} from './modules/processElement';

$(function autoLink(): void {
	if (!IS_IN_TARGET_SPECIAL_PAGE) {
		return; // Disabled in the other special pages
	}

	const targetElements: TargetElements = getTargetElements();
	processElement(targetElements);
});
