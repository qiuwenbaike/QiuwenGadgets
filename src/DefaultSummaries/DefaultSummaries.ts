import {getBody} from 'ext.gadget.Util';
import {processVisualEditor} from './modules/processVisualEditor';
import {processWikiEditor} from './modules/processWikiEditor';

void getBody().then(function defaultSummaries($body: JQuery<HTMLBodyElement>): void {
	mw.hook('wikipage.editform').add((): void => {
		processWikiEditor($body);
	});

	mw.hook('ve.saveDialog.stateChanged').add((): void => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
		mw.libs['ve'].addPlugin((): void => {
			mw.hook('ve.saveDialog.stateChanged').add(() => {
				processVisualEditor();
			});
		});
	});
});
