import {IS_WG_EDIT_OR_SUBMIT_ACTION} from './constant';

const EDIT_GADGETS = ['ext.gadget.EditForm', 'ext.gadget.EditForm_JS', 'ext.gadget.DefaultSummaries'];

const usingEditFormJS = (gadgets: string | string[]): void => {
	void mw.loader.using(gadgets);
};

const loadGadgetEditForm = async (): Promise<void> => {
	if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
		if (mw.user.options.get('gadget-PreviewWithVariant')) {
			EDIT_GADGETS[EDIT_GADGETS.length] = 'ext.gadget.PreviewWithVariant';
		}
		usingEditFormJS(EDIT_GADGETS);
	} else {
		await mw.loader.using('ext.visualEditor.desktopArticleTarget.init');
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		mw.libs['ve'].addPlugin((): void => {
			if (
				mw.user.options.get('gadget-PreviewWithVariant') ||
				mw.user.options.get('gadget-PreviewWithVariant2017')
			) {
				EDIT_GADGETS[EDIT_GADGETS.length] = 'ext.gadget.PreviewWithVariant2017';
			}
			usingEditFormJS(EDIT_GADGETS);
		});
	}
};

export {loadGadgetEditForm};
