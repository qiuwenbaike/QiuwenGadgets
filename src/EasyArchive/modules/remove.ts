import {checkIfSectionExist} from './checkIfSectionExist';
import {deleteSection} from './deleteSection';
import {getSectionContent} from './getSectionContent';

const remove = async (index: string, anchor: string) => {
	const {wgPageName} = mw.config.get();
	const ifSectionExist = await checkIfSectionExist(index, anchor);

	if (ifSectionExist !== true) {
		return;
	}

	const content = await getSectionContent(wgPageName, index);

	if (content === null) {
		return;
	}

	await deleteSection(wgPageName, index);
};

export {remove};
