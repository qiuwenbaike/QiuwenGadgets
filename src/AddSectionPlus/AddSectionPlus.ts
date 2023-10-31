import {WG_SKIN} from '../constant';
import {processElement} from './modules/processElement';

$(function addSectionPlus(): void {
	const $wrapper: JQuery = $('#ca-addsection');
	if (!$wrapper.length) {
		return;
	}

	const $target: JQuery = ['citizen', 'write'].includes(WG_SKIN) ? $wrapper.find('a') : $wrapper.find('span');
	if (!$target.length) {
		return;
	}

	processElement($target);
});
