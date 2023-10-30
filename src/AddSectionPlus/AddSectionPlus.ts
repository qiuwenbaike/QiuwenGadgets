import {processElement} from './modules/processElement';

$(function addSectionPlus(): void {
	const $wrapper: JQuery = $('#ca-addsection');
	if (!$wrapper.length) {
		return;
	}

	const skin: string = mw.config.get('skin');

	const $target: JQuery = ['citizen', 'write'].includes(skin) ? $wrapper.find('a') : $wrapper.find('span');
	if (!$target.length) {
		return;
	}

	processElement(skin, $target);
});
