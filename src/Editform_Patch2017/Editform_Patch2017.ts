import {getBody} from 'ext.gadget.Util';
import {getMessage} from './modules/i18n';
import {processVisualEditor} from './modules/processVisualEditor';

/**
 * @description 修正2017版源代码编辑器界面错误
 */
void getBody().then(function editForm($body: JQuery<HTMLBodyElement>): void {
	mw.messages.set({minoredit: getMessage('minoredit'), watchthis: getMessage('watchthis')});

	mw.hook('ve.saveDialog.stateChanged').add((): void => {
		processVisualEditor({
			$body,
		});
	});
});
