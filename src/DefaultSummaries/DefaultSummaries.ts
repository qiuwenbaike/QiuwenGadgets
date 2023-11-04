import {defaultSummariesLoad} from './modules/core';

if (['edit', 'submit'].includes(mw.config.get('wgAction'))) {
	$(defaultSummariesLoad);
} else {
	mw.loader.using(['ext.visualEditor.desktopArticleTarget.init'], (): void => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		/* @ts-ignore */
		mw.libs.ve.addPlugin((): void => {
			$(defaultSummariesLoad);
		});
	});
}
