import {type TargetElements, getTargetElements} from './modules/util/getTargetElements';
import {getBody} from 'ext.gadget.Util';
import {isInTargetSpecialPage} from './modules/util/isInTargetSpecialPage';
import {processElement} from './modules/processElement';

void getBody().then(function autoLink(): void {
	if (!isInTargetSpecialPage()) {
		return; // Disabled in the other special pages
	}

	mw.hook('wikipage.content').add(function ($content): void {
		const targetElements: TargetElements = getTargetElements($content);
		processElement(targetElements);
	});
});
