import {addHook} from './addHook';

const addVisualEditorPlugin = async (): Promise<void> => {
	await mw.loader.using('ext.visualEditor.desktopArticleTarget.init');

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	/* @ts-ignore */
	mw.libs.ve.addPlugin((): void => {
		addHook();
	});
};
export {addVisualEditorPlugin};
