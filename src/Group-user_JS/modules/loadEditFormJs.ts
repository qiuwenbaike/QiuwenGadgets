const usingEditFormJS = (): void => {
	mw.loader.using(['ext.gadget.EditForm', 'ext.gadget.EditForm_JS']);
};

export const loadEditFormJS = (): void => {
	/* 加载编辑界面脚本 */
	if (['edit', 'submit'].includes(mw.config.get('wgAction'))) {
		usingEditFormJS();
	} else {
		mw.loader.using('ext.visualEditor.desktopArticleTarget.init').then((): void => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			/* @ts-ignore */
			mw.libs.ve.addPlugin((): void => {
				usingEditFormJS();
			});
		});
	}
};
