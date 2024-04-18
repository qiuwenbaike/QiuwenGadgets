import {api} from './api';

const checkDependencies = async () => {
	if (!mw.user.options.get('gadget-ToolsRedirect')) {
		void api.postWithEditToken({
			action: 'options',
			change: 'gadget-ToolsRedirect=1',
		} as ApiOptionsParams);
		await mw.loader.using('ext.gadget.ToolsRedirect');
	}
};

export {checkDependencies};
