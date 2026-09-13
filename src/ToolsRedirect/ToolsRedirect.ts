import './ToolsRedirect.less';
import {ToolsRedirect} from './modules/core';
import {getBody} from 'ext.gadget.Util';
import {mountToolsRedirect} from './modules/ui';
import {setMessages} from './modules/messages';

setMessages();

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	mountToolsRedirect(ToolsRedirect, () => undefined);
	ToolsRedirect.init($body, () => {
		const trigger = document.querySelector<HTMLButtonElement>('.tools-redirect-trigger');
		trigger?.click();
	});
});

export {findRedirectCallback, findRedirectBySelector, setRedirectTextSuffix} from './modules/core';
