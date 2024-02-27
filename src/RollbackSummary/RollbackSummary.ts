import {updateLinks} from './modules/updateLinks';

mw.hook('wikipage.content').add(($content): void => {
	updateLinks($content);
});
