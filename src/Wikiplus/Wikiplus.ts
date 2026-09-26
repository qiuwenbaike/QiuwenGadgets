import './Wikiplus.less';
import {getBody} from 'ext.gadget.Util';
import {resizeWikiplus} from './resize';

void getBody().then(async function Wikiplus($body: JQuery<HTMLBodyElement>): Promise<void> {
	const {wgAction, wgIsArticle} = mw.config.get();
	if (wgAction !== 'view' || !wgIsArticle) {
		return;
	}

	const {'visualeditor-enable': isVeEnable} = mw.user.options.get() as Record<string, unknown>;

	/* see <https://github.com/Wikiplus/Wikiplus/issues/65> */
	if (isVeEnable) {
		await mw.loader.using('ext.visualEditor.core');
	}

	// import main function
	await import('./modules/index');

	// resize Wikiplus window
	resizeWikiplus($body);
});
