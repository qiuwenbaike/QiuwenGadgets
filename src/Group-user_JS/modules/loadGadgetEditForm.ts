import {IS_WG_EDIT_OR_SUBMIT_ACTION} from './constant';

const EDIT_GADGETS = ['ext.gadget.EditForm', 'ext.gadget.EditForm_JS'];

const usingEditFormJS = (gadgets: string | string[]): void => {
	void mw.loader.using(gadgets);
};

const loadGadgetEditForm = (): void => {
	if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
		usingEditFormJS(EDIT_GADGETS);
	}
};

export {loadGadgetEditForm};
