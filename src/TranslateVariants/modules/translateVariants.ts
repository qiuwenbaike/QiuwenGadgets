import {getLangQueue} from './getLangQueue';
import {getWrapper} from './components/getWrapper';
import {loadPageContent} from './loadPageContent';

const translateVariants = (wgPageName: string): void => {
	const wrapper = getWrapper();
	const langQueue = getLangQueue();

	void loadPageContent({wgPageName, wrapper, langQueue});
};

export {translateVariants};
