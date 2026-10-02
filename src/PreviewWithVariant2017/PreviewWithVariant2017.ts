import {getBody} from 'ext.gadget.Util';
import {processVisualEditor} from './modules/processVisualEditor';

void getBody().then((): void => {
	mw.hook('ve.saveDialog.stateChanged').add((): void => {
		processVisualEditor();
	});
});
