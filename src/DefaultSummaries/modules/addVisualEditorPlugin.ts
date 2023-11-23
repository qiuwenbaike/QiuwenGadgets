import {addHook} from './addHook';

const addVisualEditorPlugin = (): void => {
	mw.loader.using('ext.visualEditor.desktopArticleTarget.init').then((): void => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		/* @ts-ignore */
		mw.libs.ve.addPlugin((): void => {
			addHook();
		});
	});
};
export {addVisualEditorPlugin};
