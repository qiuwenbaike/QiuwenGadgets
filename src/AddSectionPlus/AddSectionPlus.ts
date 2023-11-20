import {WG_SKIN} from './modules/constant';
import {processElement} from './modules/processElement';

$(function addSectionPlus(): void {
	if (WG_SKIN === 'citizen') {
		return; // style is already added by [[MediaWiki:Gadget-AddSectionPlus-pagestyles.css]]
	}

	const $body = $('body');
	const $wrapper: JQuery = $body.find('#ca-addsection');
	if (!$wrapper.length) {
		return;
	}

	const $target: JQuery = WG_SKIN === 'write' ? $wrapper.find('a') : $wrapper.find('span');
	if (!$target.length) {
		return;
	}

	processElement($target);
});
