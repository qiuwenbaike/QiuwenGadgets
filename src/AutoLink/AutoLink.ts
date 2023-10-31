import {IS_WG_SPECIAL_PAGE, WG_CANONICAL_NAMESPACE} from './modules/constant';
import {TargetElements, getTargetElements} from './modules/util/getTargetElements';
import {processElement} from './modules/processElement';

$(function autoLink(): void {
	// Special crono pages where this script is enabled
	if (WG_CANONICAL_NAMESPACE === 'Special' && !IS_WG_SPECIAL_PAGE) {
		return; // Disabled in the other special pages
	}

	const targetElements: TargetElements = getTargetElements();
	processElement(targetElements);
});
