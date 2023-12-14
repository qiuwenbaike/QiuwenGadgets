import {WG_SKIN} from './modules/constant';
import {getBody} from '~/util';
import {processElement} from './modules/processElement';

(async function addSectionPlus(): Promise<void> {
	if (WG_SKIN === 'citizen') {
		return; //! style is already added by [[MediaWiki:Gadget-AddSectionPlus-pagestyles.css]]
	}

	const $body: JQuery<HTMLBodyElement> = await getBody();

	const $wrapper: JQuery = $body.find('#ca-addsection');
	if (!$wrapper.length) {
		return;
	}

	const $target: JQuery = $wrapper.find('span');
	if (!$target.length) {
		return;
	}

	processElement($target);
})();
