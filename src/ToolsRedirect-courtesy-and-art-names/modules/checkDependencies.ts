import {api} from './api';

const checkDependencies = async () => {
	if (!mw.user.options.get('gadget-ToolsRedirect')) {
		void api.postWithEditToken({
			action: 'options',
			change: 'gadget-ToolsRedirect=1',
			format: 'json',
		} as const satisfies ApiOptionsParams);
		await mw.loader.using('ext.gadget.ToolsRedirect');
	}
};

export {checkDependencies};
